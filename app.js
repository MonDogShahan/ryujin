// 確保讀取到全域資料庫
const AC_DATABASE = window.AC_DATABASE || [];

// 除錯：在 Console 顯示目前載入的品牌與數量，方便確認資料庫是否完整
const debugDatabase = () => {
    const brands = {};
    AC_DATABASE.forEach(i => { brands[i.brandCN] = (brands[i.brandCN] || 0) + 1; });
    console.log("目前系統載入機型統計:", brands);
};
setTimeout(debugDatabase, 1000);

// ================= 4. 主程式 (App) V13.30 =================
const App = () => {
    const [activeTab, setActiveTab] = useState('search');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // 搜尋功能狀態
    const [searchState, setSearchState] = useState({ 
        brand: '不拘', series: '不拘', func: '不拘', type: '不拘', 
        keyword: '', results: [], history: [] 
    });
    const [showHistory, setShowHistory] = useState(false);
    const [selectedSpecGroup, setSelectedSpecGroup] = useState(null);

    // 計算機狀態 (維持不變)
    const [rooms, setRooms] = useState([{ id: Date.now(), name: '客廳', w: '', d: '', ping: '', conditions: {}, kw: 0 }]);
    const [capacityResult, setCapacityResult] = useState(null);
    const [ductedPlans, setDuctedPlans] = useState([{ id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', outlets: 1, result: null }]);
    const [coolingState, setCoolingState] = useState({ ping: '', height: 3.0, currentTemp: 32, targetTemp: 26, acKw: '', result: null });

    useEffect(() => { const saved = localStorage.getItem('searchHistory'); if (saved) setSearchState(p => ({ ...p, history: JSON.parse(saved) })); }, []);

    const availableSeries = useMemo(() => {
        if (searchState.brand === '不拘') return ['不拘'];
        return ['不拘', ...new Set(AC_DATABASE.filter(i => i.brandCN === searchState.brand).map(i => i.series))];
    }, [searchState.brand]);

    const typeOptions = ['不拘', '壁掛式', '吊隱式', '四方吹', '窗型', '室外機(家用)', '室外機(商用)'];

    // ★★★ V13.30 終極修正：品牌關鍵字剝離搜尋法 ★★★
    const getFilteredResults = (kw) => {
        // 1. 預處理關鍵字
        let k = kw ? kw.trim() : '';
        
        // 如果沒有任何搜尋條件，預設顯示全部 (或視需求回傳空陣列)
        if (!k && searchState.brand === '不拘' && searchState.series === '不拘' && searchState.func === '不拘' && searchState.type === '不拘') {
            return []; // 剛進來時不顯示任何東西，比較乾淨
        } else if (!k) {
            // 沒打字但有選選單，則依選單過濾
            return AC_DATABASE.filter(i => {
                if (searchState.brand !== '不拘' && i.brandCN !== searchState.brand) return false;
                if (searchState.series !== '不拘' && i.series !== searchState.series) return false;
                if (searchState.func !== '不拘' && i.func !== searchState.func) return false;
                if (searchState.type !== '不拘' && i.type !== searchState.type) return false;
                return true;
            });
        }

        const kLower = k.toLowerCase();
        
        // 2. 偵測使用者是否輸入了品牌名稱 (這是解決您問題的關鍵)
        const knownBrands = ['大金', '日立', '三菱', '國際', '富士通', '華菱'];
        const detectedBrand = knownBrands.find(b => kLower.includes(b)); 

        // 3. 剝離品牌關鍵字：
        // 如果輸入 "大金"，剝離後剩 "" -> 顯示大金全部
        // 如果輸入 "大金 28"，剝離後剩 "28" -> 顯示大金的 2.8kW
        let realKeyword = kLower;
        if (detectedBrand) {
            realKeyword = kLower.replace(detectedBrand, '').trim();
        }

        return AC_DATABASE.filter(i => {
            // --- A. 品牌過濾層 ---
            if (detectedBrand) {
                // 如果使用者打 "大金"，我們強制只看大金 (無視下拉選單)
                if (i.brandCN !== detectedBrand) return false;
            } else {
                // 如果沒打品牌，就乖乖聽下拉選單的
                if (searchState.brand !== '不拘' && i.brandCN !== searchState.brand) return false;
            }

            // --- B. 其他選單過濾 (系列/型式...) ---
            // 讓這些選單依然有效
            if (searchState.series !== '不拘' && i.series !== searchState.series) return false;
            if (searchState.func !== '不拘' && i.func !== searchState.func) return false;
            if (searchState.type !== '不拘' && i.type !== searchState.type) return false;

            // --- C. 關鍵字比對 (針對 "剩下的字") ---
            
            // 情況 1: 如果剝離後沒字了 (例如原本打 "大金"，剝離後剩 "")
            // 代表使用者只想找該品牌，直接回傳 true (顯示該品牌全部)
            if (detectedBrand && !realKeyword) {
                return true; 
            }

            // 情況 2: 如果還有剩下的字 (例如 "28" 或 "ZSXT")，才去比對規格
            if (realKeyword) {
                // C-1. 數值比對 (KW / 型號數字)
                const numStr = realKeyword.replace(/[^0-9.]/g, '');
                let isCapacityMatch = false;
                
                if (numStr && !isNaN(numStr)) {
                    const searchNum = parseFloat(numStr);
                    const machineCap = parseFloat(i.maxKw);
                    
                    // 2.8 找 2.8 (容許 0.2 誤差)
                    if (Math.abs(machineCap - searchNum) <= 0.2) isCapacityMatch = true;
                    // 28 找 2.8 (自動除以10)
                    else if (searchNum >= 20 && Math.abs(machineCap - (searchNum / 10)) <= 0.2) isCapacityMatch = true;
                }

                // C-2. 文字比對 (只比對特定欄位，絕不比對尺寸)
                // 這裡我們不比對 brandCN 了，因為上面已經處理過品牌
                const targetText = `${i.series} ${i.modelIdu} ${i.modelOdu}`.toLowerCase();
                const isTextMatch = targetText.includes(realKeyword);

                return isTextMatch || isCapacityMatch;
            }

            return true;
        });
    };

    const executeSearch = () => {
        const filtered = getFilteredResults(searchState.keyword);
        const grouped = [];
        filtered.forEach(item => {
            const key = `${item.brandCN}-${item.series}-${item.maxKw}`;
            let group = grouped.find(g => `${g.brandCN}-${g.series}-${g.maxKw}` === key);
            if (!group) { group = { ...item, variants: [] }; grouped.push(group); }
            group.variants.push(item);
        });
        setSearchState(p => {
            const newHistory = p.keyword && !p.history.includes(p.keyword) ? [p.keyword, ...p.history].slice(0, 5) : p.history;
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
            return { ...p, results: grouped.sort((a,b) => a.maxKw - b.maxKw), history: newHistory };
        });
        setShowHistory(false);
    };
    
    const suggestions = useMemo(() => {
        if (!searchState.keyword) return searchState.history;
        const matches = AC_DATABASE.filter(i => (i.modelIdu).toLowerCase().includes(searchState.keyword.toLowerCase())).map(i => i.modelIdu).slice(0, 5);
        return [...new Set(matches)];
    }, [searchState.keyword, searchState.history]);

    const clearHistory = () => { localStorage.removeItem('searchHistory'); setSearchState(p => ({ ...p, history: [] })); };
    const SidebarBtnWrapper = ({ id, icon, label }) => ( <button onClick={() => { setActiveTab(id); setIsSidebarOpen(false); }} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${activeTab === id ? 'bg-industrial-800 border border-industrial-700 text-industrial-accent font-bold' : 'text-gray-400 hover:text-white'}`}> <Icon name={icon} className="w-5 h-5" /><span className="text-sm tracking-widest">{label}</span> </button> );

    return (
        <div className="min-h-screen flex flex-col font-sans select-none relative bg-industrial-950 pb-20">
            <header className="dragon-header sticky top-0 z-40 px-4 py-3 flex items-center justify-between overflow-hidden">
                <div className="z-20"><button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white active:scale-95 transition-transform"><Icon name="menu" className="w-6 h-6" /></button></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none"><div className="flex items-center gap-2 mb-0.5"><div className="w-8 h-8 rounded-full dragon-logo-box flex items-center justify-center text-yellow-400"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg></div><h1 className="text-xl font-black italic dragon-title tracking-tight pr-3 whitespace-nowrap">龍神空調幫手</h1></div><span className="text-[9px] font-bold dragon-subtitle">PROFESSIONAL V13.30</span></div>
                <div className="z-20"><div className="text-[10px] bg-slate-800 px-2 py-1 rounded border border-slate-700 text-slate-400 font-mono">PRO</div></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-500/10 blur-xl pointer-events-none"></div>
            </header>

            <div className={`fixed inset-0 z-[200] ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}><div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)}></div><div className={`absolute top-0 left-0 w-64 h-full bg-industrial-900 border-r border-industrial-700 transform transition-transform duration-300 flex flex-col shadow-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}><div className="p-5 border-b border-industrial-700 bg-industrial-950 flex justify-between items-center"><span className="text-lg font-bold text-white tracking-widest">選單</span><button onClick={() => setIsSidebarOpen(false)} className="text-gray-500"><Icon name="x" className="w-5 h-5" /></button></div><div className="flex-1 overflow-y-auto py-4 space-y-1.5 px-3"><SidebarBtnWrapper id="search" icon="search" label="機型與規格查詢" /><SidebarBtnWrapper id="capacity" icon="ruler" label="負載與機型配置" /><SidebarBtnWrapper id="cooling" icon="thermometer" label="物理降溫模擬" /><SidebarBtnWrapper id="ducted" icon="box" label="吊隱式風管規劃" /></div></div></div>

            <main className="flex-1 max-w-md mx-auto w-full p-4">
                {activeTab === 'search' && (
                    <div className="animate-fade-in h-full flex flex-col">
                        <div className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-inner mb-4 space-y-4 shrink-0">
                            <div className="grid grid-cols-2 gap-4"><FilterSelect label="品牌" value={searchState.brand} options={['不拘', '日立', '大金', '三菱重工', '國際牌', '富士通', '華菱']} onChange={v => setSearchState(p => ({...p, brand: v, series: '不拘'}))} /><FilterSelect label="系列" value={searchState.series} options={availableSeries} onChange={v => setSearchState(p => ({...p, series: v}))} /></div>
                            <div className="grid grid-cols-2 gap-4"><FilterSelect label="功能" value={searchState.func} options={['不拘', '冷暖', '冷專']} onChange={v => setSearchState(p => ({...p, func: v}))} /><FilterSelect label="型式" value={searchState.type} options={typeOptions} onChange={v => setSearchState(p => ({...p, type: v}))} /></div>
                            <div className="relative pt-2">
                                <span className="absolute top-0 left-2 bg-industrial-800 px-1 text-[10px] text-industrial-accent font-bold tracking-widest z-10">型號或 KW</span>
                                <div className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-center pointer-events-none text-gray-500"><Icon name="search" className="w-4 h-4" /></div>
                                <input type="text" className="w-full pl-9 pr-8 py-3 bg-industrial-900 border border-industrial-700 rounded-lg text-sm text-white focus:border-industrial-accent transition-all" placeholder="輸入 28, 大金, ZSXT..." value={searchState.keyword} onChange={e => { setSearchState(p => ({...p, keyword: e.target.value})); setShowHistory(true); }} onFocus={() => setShowHistory(true)} onKeyDown={e => e.key === 'Enter' && executeSearch()} />
                                {searchState.keyword && <button onClick={() => { setSearchState(p => ({...p, keyword: ''})); setShowHistory(false); }} className="absolute right-2 top-5 text-gray-500 hover:text-white"><Icon name="x" className="w-4 h-4"/></button>}
                            </div>
                            {showHistory && suggestions.length > 0 && (<div className="bg-industrial-900 border border-industrial-700 rounded-lg overflow-hidden animate-slide-up mb-2"><div className="max-h-40 overflow-y-auto">{suggestions.map((h, i) => (<button key={i} onClick={() => { setSearchState(p => ({...p, keyword: h})); executeSearch(); setShowHistory(false); }} className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-industrial-800 border-b border-gray-800 last:border-0 flex items-center justify-between group"><span>{h}</span><Icon name="chevron" className="w-3 h-3 text-gray-600 group-hover:text-white" /></button>))}</div><div className="bg-industrial-950 p-2 text-right"><button onClick={clearHistory} className="text-xs text-red-400 hover:text-red-300 flex items-center justify-end gap-1 w-full"><Icon name="trash" className="w-3 h-3"/> 清除紀錄</button></div></div>)}
                            <button onClick={executeSearch} className="w-full py-3 bg-industrial-accent hover:bg-yellow-500 text-white font-bold rounded-lg shadow-lg active:scale-95 text-sm flex justify-center items-center gap-2"><Icon name="search" className="w-4 h-4" /> 執行搜尋</button>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scroll space-y-3 pr-1" style={{maxHeight: 'calc(100vh - 400px)'}}>
                            {searchState.results.map((g, i) => <ResultCard key={i} group={g} onClick={(group, currentFunc) => setSelectedSpecGroup({ ...group, initialFunc: currentFunc })} />)}
                            {searchState.results.length === 0 && <div className="text-center text-gray-500 py-10">請選擇條件並執行搜尋</div>}
                        </div>
                    </div>
                )}
                {activeTab === 'capacity' && <MultiRoomCapacityCalculator rooms={rooms} setRooms={setRooms} result={capacityResult} setResult={setCapacityResult} db={AC_DATABASE} />}
                {activeTab === 'cooling' && <CoolingTimeCalculator state={coolingState} setState={setCoolingState} />}
                {activeTab === 'ducted' && <DuctedCalculator plans={ductedPlans} setPlans={setDuctedPlans} db={AC_DATABASE} />}
            </main>
            {selectedSpecGroup && <SpecModal group={selectedSpecGroup} initialFunc={selectedSpecGroup.initialFunc} onClose={() => setSelectedSpecGroup(null)} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

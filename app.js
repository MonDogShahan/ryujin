// ================= app.js (V13.85 穩定修復版) =================

var { useState, useEffect, useRef, useMemo } = React;
var AC_DATABASE = window.AC_DATABASE || [];

const App = () => {
    const [activeTab, setActiveTab] = useState('search');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // Search State
    const [searchState, setSearchState] = useState({ brand: '不拘', series: '不拘', func: '不拘', type: '不拘', keyword: '', results: [], history: [] });
    const [isSearchExpanded, setIsSearchExpanded] = useState(true);
    const [showHistory, setShowHistory] = useState(false);
    const [selectedSpecGroup, setSelectedSpecGroup] = useState(null);

    const resultsRef = useRef(null);

    // Calculator States
    const [rooms, setRooms] = useState([{ id: Date.now(), name: '客廳', w: '', d: '', h: '3.0', ping: '', conditions: {}, kw: 0 }]);
    const [capacityResult, setCapacityResult] = useState(null);
    const [ductedPlans, setDuctedPlans] = useState([{ id: Date.now(), name: '機台', cmh: '', boxW: '', boxH: '', outlets: 1, outletW: '', outletH: '', result: null }]);
    const [coolingState, setCoolingState] = useState({ ping: '', height: 3.0, currentTemp: 32, targetTemp: 26, acKw: '', result: null });

    useEffect(() => { const saved = localStorage.getItem('searchHistory'); if (saved) setSearchState(p => ({ ...p, history: JSON.parse(saved) })); }, []);
    useEffect(() => { if (resultsRef.current) resultsRef.current.scrollTop = 0; }, [searchState.results]);

    const availableSeries = useMemo(() => {
        if (searchState.brand === '不拘') return ['不拘'];
        return ['不拘', ...new Set(AC_DATABASE.filter(i => i.brandCN === searchState.brand).map(i => i.series))];
    }, [searchState.brand]);

    const typeOptions = ['不拘', '壁掛式', '吊隱式', '四方吹', '窗型', '室外機(家用)', '室外機(商用)'];

    const getFilteredResults = (kw) => {
        const k = kw ? kw.trim().toLowerCase() : '';
        return AC_DATABASE.filter(i => {
            if (searchState.brand !== '不拘' && i.brandCN !== searchState.brand) return false;
            if (searchState.series !== '不拘' && i.series !== searchState.series) return false;
            if (searchState.func !== '不拘' && i.func !== searchState.func) return false;
            if (searchState.type !== '不拘' && i.type !== searchState.type) return false;
            if (k) {
                const numStr = k.replace(/[^0-9.]/g, ''); 
                let isCapacityMatch = false;
                if (numStr && !isNaN(numStr)) {
                    const searchNum = parseFloat(numStr);
                    const machineCap = parseFloat(i.maxKw);
                    if (Math.abs(machineCap - searchNum) <= 0.2) isCapacityMatch = true;
                    else if (searchNum >= 20 && Math.abs(machineCap - (searchNum / 10)) <= 0.2) isCapacityMatch = true;
                }
                const targetText = `${i.brandCN} ${i.series} ${i.modelIdu} ${i.modelOdu}`.toLowerCase();
                return targetText.includes(k) || isCapacityMatch;
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
        setIsSearchExpanded(false);
    };

    const suggestions = useMemo(() => {
        if (!searchState.keyword) return searchState.history;
        const matches = AC_DATABASE.filter(i => (i.modelIdu || '').toLowerCase().includes(searchState.keyword.toLowerCase())).map(i => i.modelIdu).slice(0, 5);
        return [...new Set(matches)];
    }, [searchState.keyword, searchState.history]);

    const clearHistory = () => { localStorage.removeItem('searchHistory'); setSearchState(p => ({ ...p, history: [] })); };

    const SidebarBtnWrapper = ({ id, icon, label }) => (
        <button onClick={() => { setActiveTab(id); setIsSidebarOpen(false); }} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${activeTab === id ? 'bg-white/10 text-yellow-400 font-bold border border-white/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <window.Icon name={icon} className="w-5 h-5" />
            <span className="text-sm tracking-widest">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen flex flex-col font-sans select-none relative pb-20">
            <header className="dragon-header sticky top-0 z-40 px-4 py-3 flex items-center justify-between overflow-hidden glass-panel border-b-0 border-white/5 rounded-b-2xl mx-2 mt-2">
                <div className="z-20"><button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-lg bg-white/10 text-white active:scale-95 transition-transform"><window.Icon name="menu" className="w-6 h-6" /></button></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none"><div className="flex items-center gap-2 mb-0.5"><div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg></div><h1 className="text-xl font-black italic tracking-tight pr-3 whitespace-nowrap text-white">龍神空調幫手</h1></div><span className="text-[9px] font-bold text-gray-400 tracking-widest">PROFESSIONAL V13.85</span></div>
                <div className="z-20"><div className="text-[10px] bg-yellow-500 text-black px-2 py-1 rounded font-bold">PRO</div></div>
            </header>

            <div className={`fixed inset-0 z-[200] ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)}></div>
                <div className={`absolute top-0 left-0 w-64 h-full glass-panel border-l-0 border-y-0 transform transition-transform duration-300 flex flex-col shadow-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{background:'rgba(15, 23, 42, 0.95)'}}>
                    <div className="p-5 border-b border-white/10 flex justify-between items-center"><span className="text-lg font-bold text-white tracking-widest">選單</span><button onClick={() => setIsSidebarOpen(false)} className="text-gray-500"><window.Icon name="x" className="w-5 h-5" /></button></div>
                    <div className="flex-1 overflow-y-auto py-4 space-y-1.5 px-3"><SidebarBtnWrapper id="search" icon="search" label="機型與規格查詢" /><SidebarBtnWrapper id="capacity" icon="ruler" label="負載與機型配置" /><SidebarBtnWrapper id="cooling" icon="thermometer" label="物理降溫模擬" /><SidebarBtnWrapper id="ducted" icon="box" label="吊隱式風管規劃" /></div>
                </div>
            </div>

            <main className="flex-1 max-w-md mx-auto w-full p-4 flex flex-col h-full overflow-hidden">
                {activeTab === 'search' && (
                    <div className="animate-fade-in flex flex-col h-full">
                        <div className={`glass-panel rounded-xl mb-4 transition-all duration-300 shrink-0 overflow-hidden`}>
                            <div onClick={() => setIsSearchExpanded(!isSearchExpanded)} className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-2"><window.Icon name="search" className="w-4 h-4 text-yellow-500" /><span className="text-sm font-bold text-white tracking-wide">{isSearchExpanded ? '搜尋條件設定' : `${searchState.brand} / ${searchState.series}`}</span>{!isSearchExpanded && searchState.keyword && (<span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full border border-white/10">{searchState.keyword}</span>)}</div>
                                <div className={`text-gray-500 transition-transform duration-300 ${isSearchExpanded ? 'rotate-180' : ''}`}><window.Icon name="chevron" className="w-4 h-4" /></div>
                            </div>
                            <div className={`px-4 transition-all duration-300 ease-in-out ${isSearchExpanded ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}`}>
                                <div className="grid grid-cols-2 gap-4 mt-2"><window.FilterSelect label="品牌" value={searchState.brand} options={['不拘', '日立', '大金', '三菱重工', '國際牌', '富士通', '華菱']} onChange={v => setSearchState(p => ({...p, brand: v, series: '不拘'}))} /><window.FilterSelect label="系列" value={searchState.series} options={availableSeries} onChange={v => setSearchState(p => ({...p, series: v}))} /></div>
                                <div className="grid grid-cols-2 gap-4 mt-4"><window.FilterSelect label="功能" value={searchState.func} options={['不拘', '冷暖', '冷專']} onChange={v => setSearchState(p => ({...p, func: v}))} /><window.FilterSelect label="型式" value={searchState.type} options={typeOptions} onChange={v => setSearchState(p => ({...p, type: v}))} /></div>
                                <div className="relative pt-4">
                                    <span className="absolute top-2 left-2 bg-black/60 px-1 text-[10px] text-yellow-500 font-bold tracking-widest z-10 rounded">型號或 KW</span>
                                    <div className="absolute inset-y-0 left-0 pl-3 pt-4 flex items-center pointer-events-none text-gray-500"><window.Icon name="search" className="w-4 h-4" /></div>
                                    <input type="text" className="w-full pl-9 pr-8 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:border-yellow-500 transition-all placeholder-gray-600" placeholder="輸入 28, 大金, ZSXT..." value={searchState.keyword} onChange={e => { setSearchState(p => ({...p, keyword: e.target.value})); setShowHistory(true); }} onFocus={() => setShowHistory(true)} onKeyDown={e => e.key === 'Enter' && executeSearch()} />
                                    {searchState.keyword && <button onClick={() => { setSearchState(p => ({...p, keyword: ''})); setShowHistory(false); }} className="absolute right-2 top-7 text-gray-500 hover:text-white"><window.Icon name="x" className="w-4 h-4"/></button>}
                                </div>
                                {showHistory && suggestions.length > 0 && (<div className="bg-gray-900 border border-white/10 rounded-lg overflow-hidden animate-slide-up mb-2 mt-2"><div className="max-h-40 overflow-y-auto">{suggestions.map((h, i) => (<button key={i} onClick={() => { setSearchState(p => ({...p, keyword: h})); executeSearch(); setShowHistory(false); }} className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-white/5 border-b border-white/5 last:border-0 flex items-center justify-between group"><span>{h}</span><window.Icon name="chevron" className="w-3 h-3 text-gray-600 group-hover:text-white" /></button>))}</div><div className="bg-black/50 p-2 text-right"><button onClick={clearHistory} className="text-xs text-red-400 hover:text-red-300 flex items-center justify-end gap-1 w-full"><window.Icon name="trash" className="w-3 h-3"/> 清除紀錄</button></div></div>)}
                                <button onClick={executeSearch} className="w-full mt-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg shadow-lg active:scale-95 text-sm flex justify-center items-center gap-2"><window.Icon name="search" className="w-4 h-4" /> 執行搜尋</button>
                            </div>
                        </div>
                        <div ref={resultsRef} className="flex-1 overflow-y-auto custom-scroll space-y-3 pr-1 pb-20">
                            {searchState.results.map((g, i) => <window.ResultCard key={i} group={g} onClick={(group, currentFunc) => setSelectedSpecGroup({ ...group, initialFunc: currentFunc })} />)}
                            {searchState.results.length === 0 && <div className="text-center text-gray-500 py-10 glass-panel rounded-xl">請選擇條件並執行搜尋</div>}
                        </div>
                    </div>
                )}
                {activeTab === 'capacity' && window.MultiRoomCapacityCalculator && <window.MultiRoomCapacityCalculator rooms={rooms} setRooms={setRooms} result={capacityResult} setResult={setCapacityResult} db={AC_DATABASE} />}
                {activeTab === 'cooling' && window.CoolingTimeCalculator && <window.CoolingTimeCalculator state={coolingState} setState={setCoolingState} />}
                {activeTab === 'ducted' && window.DuctedCalculator && <window.DuctedCalculator plans={ductedPlans} setPlans={setDuctedPlans} />}
            </main>
            {selectedSpecGroup && <window.SpecModal group={selectedSpecGroup} initialFunc={selectedSpecGroup.initialFunc} onClose={() => setSelectedSpecGroup(null)} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

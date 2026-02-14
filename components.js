// ================= 2. 共用 UI 元件 (components.js) V13.11 =================
// ... (Icon, FilterSelect 等元件保持不變) ...

// SpecModal 修正：確保線材規格欄位 (odu.powerWire, odu.signalWire) 能正確讀取顯示
const SpecModal = ({ group, initialFunc, onClose }) => {
    // ... (狀態初始化保持不變) ...
    if (!group || !group.variants) return null;
    const [displayMode, setDisplayMode] = useState(initialFunc === '冷專' ? 'cool' : 'heat');
    const heatVariant = group.variants.find(v => v.func === '冷暖');
    const coolVariant = group.variants.find(v => v.func === '冷專');
    const currentVariant = displayMode === 'heat' ? (heatVariant || coolVariant) : (coolVariant || heatVariant);
    
    useEffect(() => {
        if (displayMode === 'heat' && !heatVariant) setDisplayMode('cool');
        if (displayMode === 'cool' && !coolVariant) setDisplayMode('heat');
    }, [displayMode, heatVariant, coolVariant]);

    const [activeTab, setActiveTab] = useState('basic');
    if (!currentVariant) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
            <div className="bg-industrial-950 w-full max-w-3xl h-[85vh] rounded-2xl border border-gray-700 shadow-2xl flex flex-col relative z-10 overflow-hidden animate-zoom-in">
                {/* Header (保持不變) */}
                <div className="glass-header p-5 flex justify-between items-start shrink-0 z-20">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">{currentVariant.brandCN}</span>
                            <h3 className="text-xl font-bold text-white tracking-wide">{currentVariant.series}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="flex bg-industrial-900 rounded-lg p-1 border border-gray-700 mr-2">
                                {heatVariant && <button onClick={() => setDisplayMode('heat')} className={`px-3 py-1 text-xs rounded-md transition-all ${displayMode === 'heat' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}>冷暖</button>}
                                {coolVariant && <button onClick={() => setDisplayMode('cool')} className={`px-3 py-1 text-xs rounded-md transition-all ${displayMode === 'cool' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}>冷專</button>}
                            </div>
                            <span className="text-sm font-mono text-yellow-400 font-bold">{currentVariant.maxKw} kW</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-industrial-800 hover:bg-red-900/50 rounded-full text-gray-400 hover:text-red-400 transition-colors"><Icon name="x" className="w-5 h-5" /></button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-800 bg-industrial-900/50 backdrop-blur-sm sticky top-0 z-10">
                    {['basic:⚡ 效能概覽', 'detail:📦 內外機細節', 'install:🔧 安裝參數'].map(tab => {
                        const [key, label] = tab.split(':');
                        return <button key={key} onClick={() => setActiveTab(key)} className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase transition-all relative ${activeTab === key ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>{label}{activeTab === key && <span className={`absolute bottom-0 left-0 w-full h-0.5 shadow-[0_0_10px] ${key === 'basic' ? 'bg-blue-500 shadow-blue-500/50' : key === 'detail' ? 'bg-green-500 shadow-green-500/50' : 'bg-orange-500 shadow-orange-500/50'}`}></span>}</button>;
                    })}
                </div>

                <div className="flex-1 overflow-y-auto custom-scroll p-5 bg-gradient-to-b from-industrial-950 to-industrial-900">
                    {/* Basic Tab (保持不變) */}
                    {activeTab === 'basic' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-panel p-4 rounded-xl text-center"><div className="text-[10px] text-gray-500 font-bold mb-1 uppercase">室內機型號</div><div className="text-lg font-mono font-bold text-white">{currentVariant.modelIdu}</div></div>
                                <div className="glass-panel p-4 rounded-xl text-center"><div className="text-[10px] text-gray-500 font-bold mb-1 uppercase">室外機型號</div><div className="text-lg font-mono font-bold text-white">{currentVariant.modelOdu}</div></div>
                            </div>
                            <div className="glass-panel rounded-xl overflow-hidden">
                                <div className="bg-industrial-800/80 px-4 py-2 text-xs font-bold text-gray-300 border-b border-gray-700 flex items-center gap-2"><Icon name="zap" className="w-3 h-3 text-yellow-500"/> 性能與電力規格</div>
                                <div className="p-4 grid grid-cols-2 gap-4 text-sm">
                                    <div><span className="text-gray-500 text-xs block mb-1">冷氣能力</span><div className="text-blue-400 font-bold text-lg font-mono">{currentVariant.coolCap || currentVariant.maxKw} <span className="text-xs text-gray-500">kW</span></div></div>
                                    <div><span className="text-gray-500 text-xs block mb-1">暖氣能力</span><div className="text-orange-400 font-bold text-lg font-mono">{currentVariant.heatCap || '-'} <span className="text-xs text-gray-500">kW</span></div></div>
                                    <div className="bg-industrial-900/50 p-2 rounded border border-gray-800"><span className="text-gray-500 text-xs block">運轉電流</span><div className="text-white font-mono font-bold">{currentVariant.current || '-'} <span className="text-xs text-gray-500">A</span></div></div>
                                    <div className="bg-industrial-900/50 p-2 rounded border border-gray-800"><span className="text-gray-500 text-xs block">消耗電功率</span><div className="text-white font-mono font-bold">{currentVariant.power || '-'} <span className="text-xs text-gray-500">W</span></div></div>
                                    <div className="col-span-2 border-t border-gray-700 pt-2 mt-1 flex justify-between items-center"><span className="text-gray-500 text-xs">CSPF 能效</span><span className="text-green-400 font-bold text-xl font-mono">{currentVariant.cspf} <span className="text-xs">kWh/kWh</span></span></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Detail Tab (保持不變) */}
                    {activeTab === 'detail' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-blue-500">
                                <div className="bg-industrial-800/50 px-4 py-3 border-b border-industrial-700"><h4 className="text-sm font-bold text-blue-400 flex items-center gap-2"><Icon name="wind" className="w-4 h-4"/> 室內機 (Indoor)</h4></div>
                                <div className="p-4 space-y-3">
                                    <div className="spec-row"><span className="spec-label">外觀尺寸</span><span className="spec-val">{currentVariant.idu?.dims} mm</span></div>
                                    <div className="spec-row"><span className="spec-label">機器重量</span><span className="spec-val">{currentVariant.idu?.weight} kg</span></div>
                                    {(currentVariant.type === '吊隱式' || currentVariant.idu?.flangeDims) && (<div className="spec-row bg-blue-900/20 -mx-4 px-4 py-2 mt-2 border-t border-blue-800/30"><span className="spec-label text-blue-300 font-bold">吹出口法蘭</span><span className="spec-val text-yellow-400 text-lg">{currentVariant.idu?.flangeDims} <span className="text-xs text-gray-500">mm</span></span></div>)}
                                </div>
                            </div>
                            <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-green-500">
                                <div className="bg-industrial-800/50 px-4 py-3 border-b border-industrial-700"><h4 className="text-sm font-bold text-green-400 flex items-center gap-2"><Icon name="box" className="w-4 h-4"/> 室外機 (Outdoor)</h4></div>
                                <div className="p-4 space-y-3">
                                    <div className="spec-row"><span className="spec-label">外觀尺寸</span><span className="spec-val">{currentVariant.odu?.dims} mm</span></div>
                                    <div className="spec-row"><span className="spec-label">機器重量</span><span className="spec-val">{currentVariant.odu?.weight} kg</span></div>
                                    <div className="spec-row bg-green-900/20 -mx-4 px-4 py-2 mt-2 border-t border-green-800/30"><span className="spec-label text-green-300 font-bold">安裝腳座孔距</span><span className="spec-val text-yellow-400 text-lg">{currentVariant.odu?.footSpacing} <span className="text-xs text-gray-500">mm</span></span></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Install Tab (★ 修復重點：線材規格) */}
                    {activeTab === 'install' && (
                        <div className="space-y-5 animate-fade-in">
                            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 flex items-center gap-4">
                                <div className="p-3 bg-orange-500/20 rounded-full text-orange-400"><Icon name="wrench" className="w-6 h-6"/></div>
                                <div><div className="text-[10px] text-orange-300 font-bold uppercase tracking-widest mb-1">配管尺寸 (液/氣)</div><div className="text-xl font-mono font-bold text-white">{currentVariant.pipes}</div></div>
                            </div>
                            <div className="glass-panel rounded-xl p-4">
                                <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest border-b border-industrial-700 pb-2">線材規格</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {/* 這裡確保讀取 data.js 中的 powerWire 與 signalWire */}
                                    <div><span className="text-[10px] text-gray-500 block mb-1">電源配線</span><div className="text-sm font-mono text-blue-300">{currentVariant.odu?.powerWire || '請參閱說明書'}</div></div>
                                    <div><span className="text-[10px] text-gray-500 block mb-1">內外機訊號線</span><div className="text-sm font-mono text-green-300">{currentVariant.odu?.signalWire || '請參閱說明書'}</div></div>
                                    <div><span className="text-[10px] text-gray-500 block mb-1">最大電流 (無熔絲開關)</span><div className="text-sm font-mono text-red-400">{currentVariant.odu?.currentMax || '-'}</div></div>
                                </div>
                            </div>
                            <div className="text-center text-[10px] text-gray-600 mt-4">* 實際施工請務必參閱原廠隨機附贈之安裝說明書</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ... (ResultCard, FilterSelect, SidebarBtn 等保持不變) ...
// 為節省篇幅，請保留原有的 UI 邏輯代碼 ...
const ResultCard = ({ group, onClick }) => {
    const heatVariant = group.variants.find(v => v.func === '冷暖');
    const coolVariant = group.variants.find(v => v.func === '冷專');
    const [mode, setMode] = useState(heatVariant ? 'heat' : 'cool');
    const currentItem = mode === 'heat' ? (heatVariant || coolVariant) : (coolVariant || heatVariant);
    const handleToggle = (e, newMode) => { e.stopPropagation(); setMode(newMode); };

    return (
        <div onClick={() => onClick(group, currentItem.func)} className="bg-industrial-800 rounded-xl p-4 border border-industrial-700 shadow-lg mb-3 relative overflow-hidden cursor-pointer hover:border-industrial-500 hover:bg-industrial-700 transition-all group">
            <div className={`absolute top-0 left-0 w-1.5 h-full transition-colors duration-300 ${mode === 'heat' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
            <div className="pl-3 flex justify-between items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-industrial-accent bg-industrial-950 px-2 py-0.5 rounded">{currentItem.brandCN}</span>
                        <span className="text-[10px] text-gray-400 border border-industrial-600 px-1.5 py-0.5 rounded">{currentItem.series}</span>
                        {heatVariant && coolVariant && (<div className="flex bg-industrial-900 rounded p-0.5 ml-2 border border-industrial-600"><button onClick={(e) => handleToggle(e, 'heat')} className={`px-1.5 py-0.5 text-[9px] rounded transition-all ${mode === 'heat' ? 'bg-orange-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}>冷暖</button><button onClick={(e) => handleToggle(e, 'cool')} className={`px-1.5 py-0.5 text-[9px] rounded transition-all ${mode === 'cool' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}>冷專</button></div>)}
                        {(!heatVariant || !coolVariant) && (<span className={`text-[9px] px-1.5 py-0.5 rounded ${currentItem.func === '冷暖' ? 'bg-orange-900/50 text-orange-300' : 'bg-blue-900/50 text-blue-300'}`}>{currentItem.func}</span>)}
                    </div>
                    <div className="text-lg font-bold text-white tracking-wide group-hover:text-industrial-accent transition-colors flex items-center gap-2">{currentItem.modelIdu}</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono flex gap-3"><span className={mode === 'heat' ? 'text-orange-400' : 'text-blue-400'}>{mode === 'heat' ? '暖氣' : '冷氣'}: {mode === 'heat' ? currentItem.heatCap : currentItem.coolCap || currentItem.maxKw} kW</span><span className="text-gray-600">|</span><span>{currentItem.pipes}</span></div>
                </div>
                <button className="bg-industrial-900 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-900/50 rounded-lg px-3 py-1.5 text-xs font-bold flex items-center gap-1 transition-all"><Icon name="search" className="w-3 h-3" /> 詳情</button>
            </div>
        </div>
    );
};

const SidebarBtn = ({ id, icon, label, onClick, active }) => ( <button onClick={onClick} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${active ? 'bg-industrial-800 border border-industrial-700 text-industrial-accent font-bold' : 'text-gray-400 hover:text-white'}`}> <Icon name={icon} className="w-5 h-5" /><span className="text-sm tracking-widest">{label}</span> </button> );

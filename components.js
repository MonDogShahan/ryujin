// ================= 2. 共用 UI 元件 (components.js) V13.22 =================
const { useState, useEffect, useMemo, useRef } = React;

const Icon = ({ name, className }) => {
    const icons = {
        menu: <path d="M4 6h16M4 12h16M4 18h16" />,
        search: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        ruler: <path d="M19 3v18M5 3v18M2 12h20" />,
        thermometer: <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />,
        box: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />,
        x: <path d="M6 18L18 6M6 6l12 12" />,
        chevron: <path d="M9 5l7 7-7 7" />,
        zap: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
        wind: <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />,
        wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
        save: <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />,
        refresh: <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
        trash: <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    };
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>;
};

const conditionLabels = { westSun: '西曬', allDaySun: '全日曬', topFloor: '頂樓', highCeiling: '挑高', ironSheet: '鐵皮', blackIron: '黑鐵皮' };

const calculateElectric = (maxAmp, powerWatts) => {
    let current = parseFloat(maxAmp);
    if (isNaN(current) && powerWatts) current = parseFloat(powerWatts) / 220;
    if (isNaN(current)) return { wire: '詳見說明書', nfb: '-' };
    const safeCurrent = current * 1.25;
    let wire = '2.0mm²'; let nfb = '15A';
    if (safeCurrent <= 15) { wire = '2.0mm²'; nfb = '15A (或20A)'; }
    else if (safeCurrent <= 20) { wire = '3.5mm² (或5.5mm²)'; nfb = '20A'; }
    else if (safeCurrent <= 30) { wire = '5.5mm²'; nfb = '30A'; }
    else if (safeCurrent <= 40) { wire = '8mm²'; nfb = '40A'; }
    else { wire = '14mm²'; nfb = '50A+'; }
    return { wire, nfb, calc: true };
};

const SpecModal = ({ group, initialFunc, onClose }) => {
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
    const elecSpec = calculateElectric(currentVariant.odu?.currentMax, currentVariant.power);

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
            <div className="bg-industrial-950 w-full max-w-3xl h-[85vh] rounded-2xl border border-gray-700 shadow-2xl flex flex-col relative z-10 overflow-hidden animate-zoom-in">
                <div className="glass-header p-5 flex justify-between items-start shrink-0 z-20">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">{currentVariant.brandCN}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${currentVariant.type === '吊隱式' ? 'text-purple-300 border-purple-500 bg-purple-900/50' : currentVariant.type === '四方吹' ? 'text-pink-300 border-pink-500 bg-pink-900/50' : currentVariant.type === '窗型' ? 'text-green-300 border-green-500 bg-green-900/50' : 'text-cyan-300 border-cyan-500 bg-cyan-900/50'}`}>{currentVariant.type}</span>
                            <h3 className="text-xl font-bold text-white tracking-wide">{currentVariant.series}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center"><div className="flex bg-industrial-900 rounded-lg p-1 border border-gray-700 mr-2">{heatVariant && <button onClick={() => setDisplayMode('heat')} className={`px-3 py-1 text-xs rounded-md transition-all ${displayMode === 'heat' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}>冷暖</button>}{coolVariant && <button onClick={() => setDisplayMode('cool')} className={`px-3 py-1 text-xs rounded-md transition-all ${displayMode === 'cool' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}>冷專</button>}</div><span className="text-sm font-mono text-yellow-400 font-bold">{currentVariant.maxKw} kW</span></div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-industrial-800 hover:bg-red-900/50 rounded-full text-gray-400 hover:text-red-400 transition-colors"><Icon name="x" className="w-5 h-5" /></button>
                </div>
                <div className="flex border-b border-gray-800 bg-industrial-900/50 backdrop-blur-sm sticky top-0 z-10">{['basic:⚡ 效能概覽', 'detail:📦 內外機細節', 'install:🔧 安裝參數'].map(tab => { const [key, label] = tab.split(':'); return <button key={key} onClick={() => setActiveTab(key)} className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase transition-all relative ${activeTab === key ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>{label}{activeTab === key && <span className={`absolute bottom-0 left-0 w-full h-0.5 shadow-[0_0_10px] ${key === 'basic' ? 'bg-blue-500 shadow-blue-500/50' : key === 'detail' ? 'bg-green-500 shadow-green-500/50' : 'bg-orange-500 shadow-orange-500/50'}`}></span>}</button>; })}</div>
                <div className="flex-1 overflow-y-auto custom-scroll p-5 bg-gradient-to-b from-industrial-950 to-industrial-900">
                    {activeTab === 'basic' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-2 gap-4"><div className="glass-panel p-4 rounded-xl text-center"><div className="text-[10px] text-gray-500 font-bold mb-1 uppercase">室內機型號</div><div className="text-lg font-mono font-bold text-white">{currentVariant.modelIdu}</div></div><div className="glass-panel p-4 rounded-xl text-center"><div className="text-[10px] text-gray-500 font-bold mb-1 uppercase">室外機型號</div><div className="text-lg font-mono font-bold text-white">{currentVariant.modelOdu}</div></div></div>
                            <div className="glass-panel rounded-xl overflow-hidden"><div className="bg-industrial-800/80 px-4 py-2 text-xs font-bold text-gray-300 border-b border-gray-700 flex items-center gap-2"><Icon name="zap" className="w-3 h-3 text-yellow-500"/> 性能與電力規格</div><div className="p-4 grid grid-cols-2 gap-4 text-sm"><div><span className="text-gray-500 text-xs block mb-1">冷氣能力</span><div className="text-blue-400 font-bold text-lg font-mono">{currentVariant.coolCap || currentVariant.maxKw} <span className="text-xs text-gray-500">kW</span></div></div><div><span className="text-gray-500 text-xs block mb-1">暖氣能力</span><div className="text-orange-400 font-bold text-lg font-mono">{currentVariant.heatCap || '-'} <span className="text-xs text-gray-500">kW</span></div></div><div className="bg-industrial-900/50 p-2 rounded border border-gray-800"><span className="text-gray-500 text-xs block">運轉電流</span><div className="text-white font-mono font-bold">{currentVariant.current || '-'} <span className="text-xs text-gray-500">A</span></div></div><div className="bg-industrial-900/50 p-2 rounded border border-gray-800"><span className="text-gray-500 text-xs block">消耗電功率</span><div className="text-white font-mono font-bold">{currentVariant.power || '-'} <span className="text-xs text-gray-500">W</span></div></div><div className="col-span-2 border-t border-gray-700 pt-2 mt-1 flex justify-between items-center"><span className="text-gray-500 text-xs">CSPF 能效</span><span className="text-green-400 font-bold text-xl font-mono">{currentVariant.cspf} <span className="text-xs">kWh/kWh</span></span></div></div></div>
                        </div>
                    )}
                    {activeTab === 'detail' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-blue-500"><div className="bg-industrial-800/50 px-4 py-3 border-b border-industrial-700"><h4 className="text-sm font-bold text-blue-400 flex items-center gap-2"><Icon name="wind" className="w-4 h-4"/> 室內機 (Indoor)</h4></div><div className="p-4 space-y-3"><div className="spec-row"><span className="spec-label">外觀尺寸</span><span className="spec-val">{currentVariant.idu?.dims} mm</span></div><div className="spec-row"><span className="spec-label">機器重量</span><span className="spec-val">{currentVariant.idu?.weight} kg</span></div>{(currentVariant.type === '吊隱式' || currentVariant.idu?.flangeDims) && (<div className="spec-row bg-blue-900/20 -mx-4 px-4 py-2 mt-2 border-t border-blue-800/30"><span className="spec-label text-blue-300 font-bold">吹出口法蘭</span><span className="spec-val text-yellow-400 text-lg">{currentVariant.idu?.flangeDims || '詳見手冊'} <span className="text-xs text-gray-500">mm</span></span></div>)}</div></div>
                            <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-green-500"><div className="bg-industrial-800/50 px-4 py-3 border-b border-industrial-700"><h4 className="text-sm font-bold text-green-400 flex items-center gap-2"><Icon name="box" className="w-4 h-4"/> 室外機 (Outdoor)</h4></div><div className="p-4 space-y-3"><div className="spec-row"><span className="spec-label">外觀尺寸</span><span className="spec-val">{currentVariant.odu?.dims} mm</span></div><div className="spec-row"><span className="spec-label">機器重量</span><span className="spec-val">{currentVariant.odu?.weight} kg</span></div><div className="spec-row bg-green-900/20 -mx-4 px-4 py-2 mt-2 border-t border-green-800/30"><span className="spec-label text-green-300 font-bold">安裝腳座孔距</span><span className="spec-val text-yellow-400 text-lg">{currentVariant.odu?.footSpacing} <span className="text-xs text-gray-500">mm</span></span></div></div></div>
                        </div>
                    )}
                    {activeTab === 'install' && (
                        <div className="space-y-5 animate-fade-in">
                            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 flex items-center gap-4"><div className="p-3 bg-orange-500/20 rounded-full text-orange-400"><Icon name="wrench" className="w-6 h-6"/></div><div><div className="text-[10px] text-orange-300 font-bold uppercase tracking-widest mb-1">配管尺寸 (液/氣)</div><div className="text-xl font-mono font-bold text-white">{currentVariant.pipes}</div></div></div>
                            <div className="glass-panel rounded-xl p-4"><h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest border-b border-industrial-700 pb-2">線材規格 (法規推算)</h4><div className="grid grid-cols-1 gap-4"><div><span className="text-[10px] text-gray-500 block mb-1">建議電源線徑</span><div className="text-sm font-mono text-blue-300">{currentVariant.odu?.powerWire || `${elecSpec.wire} ${elecSpec.calc ? '(依電流推算)' : ''}`}</div></div><div><span className="text-[10px] text-gray-500 block mb-1">內外機訊號線</span><div className="text-sm font-mono text-green-300">{currentVariant.odu?.signalWire || '1.25mm² x 4C (建議)'}</div></div><div><span className="text-[10px] text-gray-500 block mb-1">建議 NFB (無熔絲開關)</span><div className="text-sm font-mono text-red-400 font-bold">{currentVariant.odu?.currentMax ? `${currentVariant.odu.currentMax}A (Max)` : elecSpec.nfb}</div></div></div></div>
                            <div className="text-center text-[10px] text-gray-600 mt-4">* 以上數據僅供參考，實際施工請務必參閱原廠安裝說明書與電工法規</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const FilterSelect = ({ label, value, options, onChange }) => (
    <div className="relative"><span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[10px] text-industrial-accent font-bold tracking-widest z-10">{label}</span><div className="relative"><select value={value} onChange={e => onChange(e.target.value)} className="w-full appearance-none bg-industrial-900 border border-industrial-700 rounded-lg pl-3 pr-8 py-3 text-sm text-white focus:border-industrial-accent outline-none transition-all cursor-pointer">{options.map(opt => <option key={opt} value={opt}>{opt}</option>)}</select><div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500"><Icon name="chevron" className="w-4 h-4"/></div></div></div>
);

// ★ 關鍵修正：卡片左側飾條 & 簡介文字
const ResultCard = ({ group, onClick }) => {
    const heatVariant = group.variants.find(v => v.func === '冷暖');
    const coolVariant = group.variants.find(v => v.func === '冷專');
    const [mode, setMode] = useState(heatVariant ? 'heat' : 'cool');
    const currentItem = mode === 'heat' ? (heatVariant || coolVariant) : (coolVariant || heatVariant);
    if (!currentItem) return null;
    const handleToggle = (e, newMode) => { e.stopPropagation(); setMode(newMode); };

    // 判斷是否為冷專
    const isColdOnly = currentItem.func === '冷專';

    return (
        <div onClick={() => onClick(group, currentItem.func)} className="bg-industrial-800 rounded-xl p-4 border border-industrial-700 shadow-lg mb-3 relative overflow-hidden cursor-pointer hover:border-industrial-500 hover:bg-industrial-700 transition-all group">
            {/* ★ 左側飾條：冷專=藍色，冷暖=漸層(暖->冷) */}
            <div className={`absolute top-0 left-0 w-1.5 h-full transition-all duration-300 ${
                isColdOnly 
                ? 'bg-blue-500' 
                : 'bg-gradient-to-b from-orange-500 to-blue-500'
            }`}></div>
            
            <div className="pl-3 flex justify-between items-center">
                <div className="flex-1">
                    {/* Header Row: 品牌、型式、系列、(KW標籤移到這裡) */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-industrial-accent bg-industrial-950 px-2 py-0.5 rounded">{currentItem.brandCN}</span>
                        
                        {/* ★ 修正型式標籤：加入 室外機(家用) 樣式 */}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                            currentItem.type === '吊隱式' ? 'text-purple-300 border-purple-800 bg-purple-900/20' :
                            currentItem.type === '四方吹' ? 'text-pink-300 border-pink-800 bg-pink-900/20' :
                            currentItem.type === '窗型' ? 'text-green-300 border-green-800 bg-green-900/20' :
                            currentItem.type.includes('室外機') ? 'text-gray-300 border-gray-600 bg-gray-800/50' :
                            'text-cyan-300 border-cyan-800 bg-cyan-900/20'
                        }`}>{currentItem.type}</span>
                        
                        <span className="text-[10px] text-gray-400 border border-industrial-600 px-1.5 py-0.5 rounded">{currentItem.series}</span>
                        {/* ★ 新增：KW 能力標籤 (補償下方移除的資訊) */}
                        <span className="text-[10px] font-mono font-bold text-yellow-400 bg-industrial-950 px-1.5 py-0.5 rounded border border-yellow-600/50">
                            {currentItem.maxKw} kW
                        </span>
                        
                        {heatVariant && coolVariant && (<div className="flex bg-industrial-900 rounded p-0.5 ml-2 border border-industrial-600"><button onClick={(e) => handleToggle(e, 'heat')} className={`px-1.5 py-0.5 text-[9px] rounded transition-all ${mode === 'heat' ? 'bg-orange-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}>冷暖</button><button onClick={(e) => handleToggle(e, 'cool')} className={`px-1.5 py-0.5 text-[9px] rounded transition-all ${mode === 'cool' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}>冷專</button></div>)}
                    </div>
                    
                    {/* Model Name */}
                    <div className="text-lg font-bold text-white tracking-wide group-hover:text-industrial-accent transition-colors flex items-center gap-2">{currentItem.modelIdu !== '-' ? currentItem.modelIdu : currentItem.modelOdu}</div>
                    
                    {/* ★ 簡介列：只顯示 冷暖/冷專 | 銅管 */}
                    <div className="text-xs text-gray-400 mt-1 font-mono flex gap-3">
                        <span className={isColdOnly ? 'text-blue-400' : 'text-orange-400'}>
                            {currentItem.func}
                        </span>
                        <span className="text-gray-600">|</span>
                        <span>{currentItem.pipes}</span>
                    </div>
                </div>
                <button className="bg-industrial-900 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-900/50 rounded-lg px-3 py-1.5 text-xs font-bold flex items-center gap-1 transition-all"><Icon name="search" className="w-3 h-3" /> 詳情</button>
            </div>
        </div>
    );
};

const SidebarBtn = ({ id, icon, label, onClick, active }) => ( <button onClick={onClick} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${active ? 'bg-industrial-800 border border-industrial-700 text-industrial-accent font-bold' : 'text-gray-400 hover:text-white'}`}> <Icon name={icon} className="w-5 h-5" /><span className="text-sm tracking-widest">{label}</span> </button> );

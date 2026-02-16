// ================= components.js (V13.85 還原介面版) =================
// 確保 React 變數可用
var { useState, useEffect } = React;

// 1. 圖示庫
window.Icon = ({ name, className = "w-6 h-6" }) => {
    const icons = {
        menu: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />,
        x: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
        search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        chevron: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />,
        trash: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />,
        ruler: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
        thermometer: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
        box: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
        bolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
        check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />,
        tool: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
        pdf: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    };
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[name] || null}</svg>;
};

// 2. 下拉選單
window.FilterSelect = ({ label, value, options, onChange }) => (
    <div className="flex flex-col gap-1.5 relative">
        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">{label}</label>
        <div className="relative">
            <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none bg-black/40 border border-white/10 text-gray-200 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm font-medium shadow-sm backdrop-blur-sm">
                {options.map(opt => <option key={opt} value={opt} className="bg-gray-900">{opt}</option>)}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500"><window.Icon name="chevron" className="w-4 h-4" /></div>
        </div>
    </div>
);

// 3. 標籤
window.Badge = ({ text, type }) => {
    let styleClass = "bg-gray-700/50 text-gray-300 border-gray-600/50";
    if (text === '冷暖') styleClass = "bg-orange-500/20 text-orange-400 border-orange-500/30";
    else if (text === '冷專') styleClass = "bg-blue-500/20 text-blue-400 border-blue-500/30";
    else if (type === 'type') styleClass = "bg-teal-500/20 text-teal-400 border-teal-500/30";
    return <span className={`text-[10px] px-2 py-0.5 rounded border ${styleClass} font-bold tracking-wider whitespace-nowrap backdrop-blur-md`}>{text}</span>;
};

// 4. 結果卡片
window.ResultCard = ({ group, onClick }) => {
    if (!group || !group.variants || group.variants.length === 0) return null;
    const main = group.variants[0];
    const isMulti = main.type.includes('室外機');
    const displayCurrent = main.currCool ? `${main.currCool} A` : (main.current ? `${main.current} A` : '-');

    return (
        <div onClick={() => onClick(group, main.func)} className="glass-panel p-4 rounded-xl shadow-lg hover:border-yellow-500/50 hover:bg-slate-800/60 transition-all cursor-pointer group active:scale-[0.98] backdrop-blur-md">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-black shadow-inner ${main.func === '冷專' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'}`}>
                        {main.maxKw}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">{main.brandCN}</span>
                            <span className="text-sm font-bold text-white tracking-wide">{main.series}</span>
                        </div>
                        <div className="flex gap-1 mb-1">
                            <window.Badge text={main.func} />
                            <window.Badge text={main.type} type="type" />
                        </div>
                        <div className="text-xs text-gray-400 font-mono">{isMulti ? main.modelOdu : main.modelIdu}</div>
                    </div>
                </div>
                <div className="text-gray-500 group-hover:text-yellow-400 transition-colors"><window.Icon name="chevron" className="w-5 h-5 -rotate-90" /></div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between"><span className="text-gray-500">冷房能力</span><span className="text-white font-mono">{main.coolCap} kW</span></div>
                <div className="flex justify-between"><span className="text-gray-500">運轉電流</span><span className="text-yellow-400 font-mono">{displayCurrent}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">配管</span><span className="text-white font-mono">{main.pipes}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">CSPF</span><span className="text-white font-mono">{main.cspf || '-'}</span></div>
            </div>
        </div>
    );
};

// 5. 詳細規格視窗
window.SpecModal = ({ group, initialFunc, onClose }) => {
    const [currentFunc, setCurrentFunc] = React.useState(initialFunc);
    const activeData = group.variants.find(v => v.func === currentFunc) || group.variants[0];
    const isMulti = activeData.type.includes('室外機');
    const isDucted = activeData.type.includes('吊隱');
    const val = (v) => v || '-';

    const SpecRow = ({ label, value, highlight }) => (
        <div className={`flex justify-between py-2 px-3 rounded ${highlight ? 'bg-yellow-500/10 border border-yellow-500/20' : 'hover:bg-white/5'}`}>
            <span className="text-xs text-gray-400">{label}</span>
            <span className={`text-xs font-mono font-bold ${highlight ? 'text-yellow-400' : 'text-gray-200'}`}>{value}</span>
        </div>
    );

    const MiniSpecBox = ({ label, value }) => (
        <div className="bg-black/20 border border-white/10 rounded p-2 flex flex-col items-center">
            <span className="text-[9px] text-gray-500 mb-0.5">{label}</span>
            <span className="text-xs font-mono text-gray-300">{value}</span>
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose}></div>
            <div className="glass-panel w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90vh] relative z-10 animate-zoom-in bg-gray-900/90">
                <div className="p-5 border-b border-white/10 flex justify-between items-start bg-black/20">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs font-bold bg-yellow-500 text-black px-2 py-0.5 rounded">{activeData.brandCN}</span>
                            <span className="text-lg font-bold text-white tracking-wide">{activeData.series}</span>
                            <window.Badge text={activeData.func} />
                            <window.Badge text={activeData.type} type="type" />
                        </div>
                        <div className="text-sm text-gray-400 font-mono">{isMulti ? activeData.modelOdu : activeData.modelIdu}</div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"><window.Icon name="x" /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-5 custom-scroll">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-black/30 p-3 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                            <span className="text-[10px] text-gray-400 mb-1">冷房能力</span>
                            <span className="text-xl font-black text-white">{activeData.coolCap} <span className="text-xs font-normal text-gray-400">kW</span></span>
                        </div>
                        <div className="bg-black/30 p-3 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                            <span className="text-[10px] text-gray-400 mb-1">暖房能力</span>
                            <span className={`text-xl font-black ${activeData.heatCap === '-' ? 'text-gray-600' : 'text-red-400'}`}>{activeData.heatCap === '-' ? 'N/A' : activeData.heatCap} <span className="text-xs font-normal text-gray-400">{activeData.heatCap === '-' ? '' : 'kW'}</span></span>
                        </div>
                    </div>
                    <div className="space-y-0.5 mb-6">
                        <div className="text-[10px] text-yellow-500 font-bold mb-2 pl-1 tracking-wider uppercase">基本規格</div>
                        <SpecRow label="室內機型號" value={isMulti ? '-' : val(activeData.modelIdu)} />
                        <SpecRow label="室外機型號" value={val(activeData.modelOdu)} />
                        <SpecRow label="CSPF 能效" value={val(activeData.cspf)} />
                        <SpecRow label="銅管管徑" value={val(activeData.pipes)} />
                        <SpecRow label="消耗功率" value={activeData.powerCool ? `${activeData.powerCool}W (冷)` : `${val(activeData.power)}W`} />
                    </div>
                    <div className="space-y-0.5 mb-6 bg-white/5 p-3 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/10"><window.Icon name="bolt" className="w-4 h-4 text-yellow-400" /><span className="text-[10px] text-yellow-400 font-bold tracking-wider">機電配置</span></div>
                        <SpecRow label="電源" value={val(activeData.volts)} highlight />
                        <SpecRow label="供電位置" value={val(activeData.powerConn)} highlight />
                        <SpecRow label="無熔絲開關" value={val(activeData.breaker)} />
                        <SpecRow label="電源線徑" value={val(activeData.powerWire)} />
                        <SpecRow label="訊號線" value={val(activeData.signalWire)} />
                        <div className="h-2"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <MiniSpecBox label="運轉電流(冷)" value={activeData.currCool ? `${activeData.currCool} A` : (activeData.current ? `${activeData.current} A` : '-')} />
                            <MiniSpecBox label="運轉電流(暖)" value={activeData.currHeat ? `${activeData.currHeat} A` : '-'} />
                        </div>
                    </div>
                    {isDucted && (
                        <div className="mb-6 bg-blue-500/10 p-3 rounded-xl border border-blue-500/30 border-dashed">
                             <div className="flex items-center gap-2 mb-2 pb-1 border-b border-blue-500/20"><window.Icon name="tool" className="w-4 h-4 text-blue-400" /><span className="text-[10px] text-blue-400 font-bold tracking-wider">風管施工</span></div>
                            <SpecRow label="室內機尺寸" value={val(activeData.idu?.dims)} />
                            <div className="flex justify-between py-2 px-3 rounded bg-blue-500/20 mt-1"><span className="text-xs text-blue-300">法蘭 (寬x高)</span><span className="text-sm font-mono font-bold text-blue-200">{val(activeData.idu?.flangeDims)}</span></div>
                            <div className="text-[9px] text-gray-500 mt-2 text-right">* 法蘭為內徑尺寸</div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-white/10 text-center bg-black/20"><button onClick={onClose} className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold transition-colors">關閉視窗</button></div>
            </div>
        </div>
    );
};

// ================= components.js (V13.53 - 支援詳細機電規格版) =================
// 包含：Icon圖示, 下拉選單, 結果卡片, 詳細規格視窗(含電氣專區)

// 1. 通用圖示元件
const Icon = ({ name, className = "w-6 h-6" }) => {
    const icons = {
        menu: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />,
        x: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
        search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        chevron: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />,
        trash: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />,
        ruler: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
        thermometer: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
        box: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
        bolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    };
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {icons[name] || null}
        </svg>
    );
};

// 2. 下拉選單元件
const FilterSelect = ({ label, value, options, onChange }) => (
    <div className="flex flex-col gap-1.5 relative">
        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">{label}</label>
        <div className="relative">
            <select 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                className="w-full appearance-none bg-industrial-900 border border-industrial-600 text-gray-100 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:border-industrial-accent focus:ring-1 focus:ring-industrial-accent transition-all text-sm font-medium shadow-sm"
            >
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-industrial-accent">
                <Icon name="chevron" className="w-4 h-4" />
            </div>
        </div>
    </div>
);

// 3. 結果卡片 (ResultCard) - 點擊開啟彈窗
const ResultCard = ({ group, onClick }) => {
    const main = group.variants[0];
    const isMulti = main.type.includes('室外機');

    return (
        <div 
            onClick={() => onClick(group, main.func)}
            className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-sm hover:border-industrial-accent hover:shadow-md transition-all cursor-pointer group active:scale-[0.98]"
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-black shadow-inner ${main.func === '冷專' ? 'bg-cool-900 text-cool-500 border border-cool-500' : 'bg-industrial-900 text-industrial-accent border border-industrial-accent'}`}>
                        {main.maxKw}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">{main.brandCN}</span>
                            <span className="text-sm font-bold text-white tracking-wide">{main.series}</span>
                        </div>
                        <div className="text-xs text-gray-400 font-mono">{isMulti ? main.modelOdu : main.modelIdu}</div>
                    </div>
                </div>
                <div className="text-industrial-600 group-hover:text-industrial-accent transition-colors">
                    <Icon name="chevron" className="w-5 h-5 -rotate-90" />
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-t border-industrial-700 pt-3">
                <div className="flex justify-between"><span className="text-gray-500">冷房能力</span><span className="text-gray-200 font-mono">{main.coolCap} kW</span></div>
                <div className="flex justify-between"><span className="text-gray-500">電源</span><span className="text-industrial-accent font-mono">{main.volts || '220V'}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">配管</span><span className="text-gray-200 font-mono">{main.pipes}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">CSPF</span><span className="text-gray-200 font-mono">{main.cspf || '-'}</span></div>
            </div>
        </div>
    );
};

// 4. 詳細規格彈窗 (SpecModal) - 包含完整機電規格
const SpecModal = ({ group, initialFunc, onClose }) => {
    const [currentFunc, setCurrentFunc] = React.useState(initialFunc);
    const activeData = group.variants.find(v => v.func === currentFunc) || group.variants[0];
    const isMulti = activeData.type.includes('室外機');
    
    const val = (v) => v || '-';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-industrial-900 w-full max-w-md rounded-2xl shadow-2xl border border-industrial-700 flex flex-col max-h-[90vh] relative z-10 animate-zoom-in">
                
                {/* Header */}
                <div className="p-5 border-b border-industrial-700 flex justify-between items-start bg-industrial-950 rounded-t-2xl">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold bg-industrial-accent text-black px-2 py-0.5 rounded">{activeData.brandCN}</span>
                            <span className="text-lg font-bold text-white tracking-wide">{activeData.series}</span>
                        </div>
                        <div className="text-sm text-industrial-400 font-mono">{isMulti ? activeData.modelOdu : activeData.modelIdu}</div>
                    </div>
                    <button onClick={onClose} className="p-1 rounded-full bg-industrial-800 text-gray-400 hover:text-white hover:bg-industrial-700 transition-colors"><Icon name="x" /></button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-5 custom-scroll">
                    
                    {/* 冷暖能力 */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-industrial-800 p-3 rounded-xl border border-industrial-700 flex flex-col items-center justify-center">
                            <span className="text-[10px] text-gray-500 mb-1">冷房能力</span>
                            <span className="text-xl font-black text-white">{activeData.coolCap} <span className="text-xs font-normal text-gray-400">kW</span></span>
                        </div>
                        <div className="bg-industrial-800 p-3 rounded-xl border border-industrial-700 flex flex-col items-center justify-center">
                            <span className="text-[10px] text-gray-500 mb-1">暖房能力</span>
                            <span className={`text-xl font-black ${activeData.heatCap === '-' ? 'text-gray-600' : 'text-heat-500'}`}>{activeData.heatCap === '-' ? 'N/A' : activeData.heatCap} <span className="text-xs font-normal text-gray-400">{activeData.heatCap === '-' ? '' : 'kW'}</span></span>
                        </div>
                    </div>

                    {/* 基本規格 */}
                    <div className="space-y-0.5 mb-6">
                        <div className="text-[10px] text-industrial-accent font-bold mb-2 pl-1 tracking-wider">基本規格</div>
                        <SpecRow label="室內機型號" value={isMulti ? '-' : val(activeData.modelIdu)} />
                        <SpecRow label="室外機型號" value={val(activeData.modelOdu)} />
                        <SpecRow label="CSPF 能效" value={val(activeData.cspf)} />
                        <SpecRow label="銅管管徑" value={val(activeData.pipes)} />
                        <SpecRow label="消耗功率" value={`${val(activeData.power)} W`} />
                    </div>

                    {/* ★★★ 機電配置專區 (新增) ★★★ */}
                    <div className="space-y-0.5 mb-6 bg-industrial-950/50 p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5">
                            <Icon name="bolt" className="w-4 h-4 text-yellow-400" />
                            <span className="text-[10px] text-yellow-400 font-bold tracking-wider">機電配置建議</span>
                        </div>
                        <SpecRow label="電源相位/電壓" value={val(activeData.volts)} highlight />
                        <SpecRow label="電源供應位置" value={val(activeData.powerConn)} highlight />
                        <SpecRow label="無熔絲開關(NFB)" value={val(activeData.breaker)} />
                        <SpecRow label="建議電源線徑" value={val(activeData.powerWire)} />
                        <SpecRow label="內外機訊號線" value={val(activeData.signalWire)} />
                        <div className="h-2"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <MiniSpecBox label="冷氣運轉電流" value={activeData.currCool ? `${activeData.currCool} A` : '-'} />
                            <MiniSpecBox label="暖氣運轉電流" value={activeData.currHeat ? `${activeData.currHeat} A` : '-'} />
                            <MiniSpecBox label="最大運轉電流" value={activeData.currMax ? `${activeData.currMax} A` : '-'} />
                            <MiniSpecBox label="啟動電流" value={activeData.startCurr ? `${activeData.startCurr} A` : '-'} />
                        </div>
                    </div>

                    {/* 尺寸規格 */}
                    <div className="space-y-2">
                        <div className="text-[10px] text-industrial-accent font-bold mb-1 pl-1 tracking-wider">尺寸規格 (寬x高x深 mm)</div>
                        
                        {!isMulti && (
                            <div className="bg-industrial-800/50 rounded-lg p-3 border border-industrial-700/50">
                                <div className="flex justify-between mb-1">
                                    <span className="text-xs text-gray-400">室內機</span>
                                    <span className="text-xs text-white font-mono">{val(activeData.idu?.dims)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xs text-gray-500">重量</span>
                                    <span className="text-xs text-gray-400 font-mono">{val(activeData.idu?.weight)} kg</span>
                                </div>
                                {/* 吊隱式專屬顯示 */}
                                {activeData.type === '吊隱式' && (
                                    <div className="flex justify-between mt-2 pt-2 border-t border-white/5">
                                        <span className="text-xs text-industrial-accent">出風法蘭</span>
                                        <span className="text-xs text-industrial-accent font-mono font-bold">{val(activeData.idu?.flangeDims)}</span>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="bg-industrial-800/50 rounded-lg p-3 border border-industrial-700/50">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-400">室外機</span>
                                <span className="text-xs text-white font-mono">{val(activeData.odu?.dims)}</span>
                            </div>
                            <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-500">重量</span>
                                <span className="text-xs text-gray-400 font-mono">{val(activeData.odu?.weight)} kg</span>
                            </div>
                            <div className="flex justify-between mt-2 pt-2 border-t border-white/5">
                                <span className="text-xs text-industrial-accent">腳座孔距</span>
                                <span className="text-xs text-industrial-accent font-mono font-bold">{val(activeData.odu?.footSpacing)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-industrial-800 text-center">
                    <button onClick={onClose} className="w-full py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-xl text-sm font-bold transition-colors">關閉視窗</button>
                </div>
            </div>
        </div>
    );
};

// 輔助元件：規格列
const SpecRow = ({ label, value, highlight }) => (
    <div className={`flex justify-between py-2 px-3 rounded ${highlight ? 'bg-industrial-800/80' : 'hover:bg-industrial-800/30'}`}>
        <span className="text-xs text-gray-400">{label}</span>
        <span className={`text-xs font-mono font-bold ${highlight ? 'text-industrial-accent' : 'text-gray-200'}`}>{value}</span>
    </div>
);

// 輔助元件：迷你規格方塊 (電流用)
const MiniSpecBox = ({ label, value }) => (
    <div className="bg-industrial-900 border border-white/5 rounded p-2 flex flex-col items-center">
        <span className="text-[9px] text-gray-500 mb-0.5">{label}</span>
        <span className="text-xs font-mono text-gray-300">{value}</span>
    </div>
);

// 匯出
window.Components = { Icon, FilterSelect, ResultCard, SpecModal };

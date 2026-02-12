// 檢查資料庫是否成功載入
if (typeof AC_DATABASE === 'undefined') {
    console.error('Error: database.js not loaded!');
    alert('資料庫載入失敗，請確認 database.js 是否在同一目錄下。');
}

const { useState, useEffect, useCallback, useMemo } = React;

// --- 基礎元件 ---
const Icon = ({ name, className = "w-4 h-4" }) => {
    const icons = {
        menu: <><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></>,
        wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
        search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
        ruler: <path d="M21.3 15.3 16 10l-4.9 4.9-5.3-5.3-1.4 1.4 5.3 5.3L5.4 21l-1.4-1.4 4.6-4.6L2.7 9.7l1.4-1.4 4.6 4.6L12.1 9l1.4 1.4-4.6 4.6 4.6 4.6 5.3-5.3 1.4 1.4-5.3 5.3 1.4 1.4Z" />,
        calculator: <><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></>,
        box: <><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></>,
        history: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></>,
        x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
        check: <path d="M20 6 9 17l-5-5" />,
        zap: <path d="M4 14.5 14 3 12.5 9.5H20L10 21l1.5-6.5H4Z" />,
        trash: <><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></>,
        "circle-dot": <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></>,
        "chevron-right": <path d="m9 18 6-6-6-6" />,
        "wind": <><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" /><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" /></>,
        "git-merge": <><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></>,
        "plus": <><path d="M5 12h14"/><path d="M12 5v14"/></>,
        "thermometer": <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />,
        sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41-1.41" /><path d="m19.07 4.93-1.41 1.41" /></>,
        snowflake: <><line x1="2" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="22" /><path d="m20 16-4-4 4-4" /><path d="m4 8 4 4-4 4" /><path d="m16 4-4 4-4-4" /><path d="m8 20 4-4 4 4" /></>,
        "eye": <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>
    };
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{icons[name] || null}</svg>;
};

const conditionLabels = { westSun: '西曬', allDaySun: '全日曬', topFloor: '頂樓', highCeiling: '挑高', ironSheet: '鐵皮', blackIron: '黑鐵皮' };

// --- 2. 各個功能子元件 ---

const SpecModal = ({ group, onClose }) => {
    if (!group || !group.variants) return null;
    const [selectedVariant, setSelectedVariant] = useState(group.variants[0]);
    
    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-2 animate-fade-in">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
            <div className="bg-industrial-900 w-full max-w-2xl h-[90vh] rounded-xl border border-industrial-700 shadow-2xl flex flex-col relative z-10 overflow-hidden animate-zoom-in">
                <div className="bg-industrial-800 p-4 border-b border-industrial-700 flex justify-between items-center shrink-0">
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-wide">{group.brandCN} {group.series}</h3>
                        <div className="flex gap-2 mt-1 flex-wrap">
                            {group.variants.map((v, idx) => (
                                <button key={idx} onClick={() => setSelectedVariant(v)} className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${selectedVariant === v ? 'bg-industrial-700 text-white border-industrial-500' : 'bg-transparent text-gray-500 border-transparent hover:bg-industrial-800'}`}>{v.func}型 ({v.modelIdu})</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-industrial-700 hover:bg-industrial-600 rounded-full transition-colors text-white"><Icon name="x" className="w-5 h-5" /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 custom-scroll">
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <div className="bg-blue-900/30 border border-blue-800 rounded px-3 py-1 text-xs text-blue-300">冷房能力: {selectedVariant.maxKw} kW</div>
                        <div className="bg-green-900/30 border border-green-800 rounded px-3 py-1 text-xs text-green-300">CSPF: {selectedVariant.cspf || '-'} kWh/kWh</div>
                        <div className="bg-purple-900/30 border border-purple-800 rounded px-3 py-1 text-xs text-purple-300">冷媒: {selectedVariant.refrigerant}</div>
                    </div>
                    <table className="spec-table">
                        <tbody>
                            <tr><th colSpan="2" className="text-center bg-gray-800 text-white">基本規格</th></tr>
                            <tr><th>室內機型號</th><td>{selectedVariant.modelIdu}</td></tr>
                            <tr><th>室外機型號</th><td>{selectedVariant.modelOdu}</td></tr>
                            <tr><th>電源規格</th><td>{selectedVariant.odu?.power || '220V'}</td></tr>
                            <tr><th>控制配線</th><td>{selectedVariant.odu?.signalWire || '-'}</td></tr>
                            <tr><th>電源配線</th><td>{selectedVariant.odu?.powerWire || '-'}</td></tr>
                            <tr><th colSpan="2" className="text-center bg-gray-800 text-white">室內機規格 (IDU)</th></tr>
                            <tr><th>外觀尺寸 (寬x高x深)</th><td>{selectedVariant.idu?.dims} mm</td></tr>
                            <tr><th>機器淨重 (Weight)</th><td className="text-green-400 font-bold">{selectedVariant.idu?.weight || '-'} kg</td></tr>
                            <tr><th>噪音值 (dB)</th><td>{selectedVariant.idu?.noise || '-'}</td></tr>
                            <tr><th>風量特性</th><td>{selectedVariant.idu?.airflow || '-'}</td></tr>
                            <tr><th colSpan="2" className="text-center bg-gray-800 text-white">室外機規格 (ODU)</th></tr>
                            <tr><th>外觀尺寸 (寬x高x深)</th><td>{selectedVariant.odu?.dims} mm</td></tr>
                            <tr><th>機器淨重 (Weight)</th><td className="text-green-400 font-bold">{selectedVariant.odu?.weight || '-'} kg</td></tr>
                            <tr><th>腳座孔距 (寬x深)</th><td className="text-yellow-400">{selectedVariant.odu?.footSpacing || '-'} mm</td></tr>
                            <tr><th>運轉電流 (冷/暖)</th><td>{selectedVariant.odu?.currentCool || '-'}/{selectedVariant.odu?.currentHeat || '-'}</td></tr>
                            <tr><th>最大電流</th><td className="text-red-400 font-bold">{selectedVariant.odu?.currentMax || '-'}</td></tr>
                            <tr><th colSpan="2" className="text-center bg-gray-800 text-white">配管資訊</th></tr>
                            <tr><th>液管 / 氣管</th><td className="text-yellow-400 font-bold">{selectedVariant.pipes}</td></tr>
                            <tr><th>最大配管長度</th><td>20m (參考值)</td></tr>
                            <tr><th>最大高低差</th><td>10m (參考值)</td></tr>
                            <tr><th>補充冷媒量</th><td>20g/m (超過基準後)</td></tr>
                        </tbody>
                    </table>
                    <div className="mt-4 text-[10px] text-gray-500 text-center">* 資料僅供參考，實際安裝請以機器銘板或原廠最新技術手冊為準。</div>
                </div>
            </div>
        </div>
    );
};

const HistoryModal = ({ item, onClose, onOpenSpec }) => {
    if (!item) return null;
    const data = item.data;

    const renderContent = () => {
        switch (item.type) {
            case 'capacity_multi':
                return (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-white mb-4 border-b border-industrial-700 pb-4">
                                <div className="text-center font-mono border-r border-industrial-700">
                                    <div className="text-gray-500 text-[10px] mb-1 font-bold">系統總負載</div>
                                    <div className="text-3xl font-bold text-yellow-400">{data.totalKw} <span className="text-xs text-yellow-600 font-sans">KW</span></div>
                                </div>
                                <div className="text-center font-mono">
                                    <div className="text-gray-500 text-[10px] mb-1 font-bold">規劃空間</div>
                                    <div className="text-3xl font-bold">{data.roomCount} <span className="text-xs text-gray-500 font-sans">間</span></div>
                                </div>
                            </div>
                            {data.pref === 'multi' && data.roomCount > 1 && (
                                <div className="mb-4">
                                    <h3 className="text-[10px] text-purple-400 font-bold mb-2 uppercase tracking-widest flex items-center gap-1"><Icon name="check" className="w-3 h-3"/> 一對多室外機推薦配對</h3>
                                    {data.recommendedODU ? (
                                        <div className="bg-purple-900/20 p-3 rounded-xl border border-purple-900/50 shadow-inner">
                                            <div className="text-white font-bold text-sm mb-1">{data.recommendedODU.brandCN} {data.recommendedODU.modelOdu}</div>
                                            <div className="text-[10px] text-gray-400 flex flex-col gap-1 mt-2">
                                                <span><strong className="text-purple-300">支援形式:</strong> 最大支援 {data.recommendedODU.maxIdus} 內機</span>
                                                <span><strong className="text-purple-300">能力上限:</strong> {data.recommendedODU.maxKw} KW</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-industrial-800 p-3 rounded-xl border border-industrial-700 text-xs text-gray-400">資料庫中尚無適合機型</div>
                                    )}
                                </div>
                            )}
                            <div>
                                <h3 className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-widest border-t border-industrial-700 pt-3">空間明細</h3>
                                <div className="space-y-2">
                                    {data.roomData.map((r, idx) => (
                                        <div key={idx} className="bg-industrial-950 p-3 rounded-lg border border-industrial-800 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-50"></div>
                                            <div className="flex justify-between items-center mb-1 pl-2">
                                                <span className="text-gray-200 font-bold text-sm">{r.name} <span className="text-[10px] text-gray-500 font-normal ml-1">({r.ping}坪)</span></span>
                                                <span className="font-mono font-bold text-yellow-500 text-sm">{r.kw} KW</span>
                                            </div>
                                            <div className="text-[10px] text-gray-400 mb-2 pl-2">選擇型式: <span className="text-green-400 font-bold">{r.iduType}</span></div>
                                            <div className="mt-2 pt-2 border-t border-industrial-800 text-[10px] pl-2">
                                                {data.pref === 'single' ? (
                                                    r.matchedSingle ? <span className="text-blue-300">推薦: {r.matchedSingle.modelIdu}</span> : <span className="text-red-400">無合適機型</span>
                                                ) : (
                                                    r.matchedIdu ? <span className="text-green-300">推薦: {r.matchedIdu.modelIdu}</span> : <span className="text-red-400">無合適機型</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                );
            case 'calc':
                    return (
                        <div className="text-center">
                            <div className="mb-4">
                                <span className="block text-gray-500 text-[10px] mb-1 uppercase font-bold tracking-widest">計算條件</span>
                                <div className="text-xs text-gray-400">基準: {data.baseLen}m | 總長: {data.totalLen}m</div>
                            </div>
                            <span className="block text-gray-500 text-[10px] mb-1 uppercase font-bold tracking-widest">建議補充量</span>
                            <div className="text-4xl font-mono font-bold text-green-400">{data.result} <span className="text-sm">g</span></div>
                        </div>
                    );
            case 'cooling':
                return (
                        <div className="text-center">
                            <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-400">
                                <div className="bg-industrial-950 p-2 rounded">坪數: {data.ping}坪</div>
                                <div className="bg-industrial-950 p-2 rounded">能力: {data.acKw}KW</div>
                                <div className="bg-industrial-950 p-2 rounded">室溫: {data.currentTemp}°C</div>
                                <div className="bg-industrial-950 p-2 rounded">目標: {data.targetTemp}°C</div>
                            </div>
                            <span className="block text-gray-500 text-[10px] mb-1 uppercase font-bold tracking-widest">預計降溫耗時</span>
                            <div className="text-5xl font-mono font-bold text-purple-400 my-2">{data.minutes} <span className="text-sm font-sans text-gray-400 uppercase">min</span></div>
                        </div>
                );
            case 'ducted':
                return (
                        <div className="space-y-4">
                            {data.splitConfig ? (
                                <div className="flex flex-col gap-3">
                                    <div className="bg-industrial-950 p-3 rounded-xl border border-industrial-700 flex justify-between items-center"><div><div className="text-[10px] text-blue-300 font-bold uppercase tracking-wider mb-1">主機端</div></div><div className="text-right"><div className="text-xl font-mono font-bold text-blue-400">{data.mainQty}孔 × {data.mainSize}吋</div></div></div>
                                    <div className="flex justify-center -my-2 z-10 text-gray-500"><Icon name="git-merge" className="w-5 h-5 rotate-180 bg-industrial-900 rounded-full" /></div>
                                    <div className="bg-industrial-950 p-3 rounded-xl border border-green-900/50 flex justify-between items-center"><div><div className="text-[10px] text-green-400 font-bold uppercase tracking-wider mb-1">末端</div></div><div className="text-right"><div className="text-xl font-mono font-bold text-green-400">{data.splitConfig.qty}出風口 × {data.splitConfig.size}吋</div></div></div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4 text-white">
                                    <div className="text-center border-r border-industrial-700 font-mono"><div className="text-gray-500 text-[10px] mb-1 font-bold">主機端出風</div><div className="text-3xl font-bold">{data.mainQty} <span className="text-xs text-blue-500 font-sans">孔</span></div></div>
                                    <div className="text-center font-mono"><div className="text-gray-500 text-[10px] mb-1 font-bold">孔徑</div><div className="text-3xl font-bold">{data.mainSize} <span className="text-xs text-blue-500 font-sans">吋</span></div></div>
                                </div>
                            )}
                            <div className="bg-industrial-950 p-3 rounded-xl text-[11px] leading-relaxed text-gray-300 border border-industrial-700/50 mt-4"><span style={{ whiteSpace: "pre-wrap" }}>{data.airflowNote}</span></div>
                        </div>
                );
            case 'search':
                return (
                    <div className="space-y-2">
                        <div className="text-[10px] text-gray-500 mb-2">點擊卡片查看詳細規格</div>
                        {data.results.map((g, i) => <ResultCard key={i} group={g} onClick={() => onOpenSpec(g)} />)}
                    </div>
                );
            default:
                return <div className="text-gray-500 text-center">無法顯示此類型的紀錄</div>;
        }
    };

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
            <div className="bg-industrial-900 w-full max-w-lg max-h-[85vh] rounded-xl border border-industrial-700 shadow-2xl flex flex-col relative z-10 overflow-hidden animate-zoom-in">
                <div className="bg-industrial-800 p-4 border-b border-industrial-700 flex justify-between items-center shrink-0">
                    <h3 className="text-lg font-bold text-white tracking-wide truncate pr-4">{item.title}</h3>
                    <button onClick={onClose} className="p-2 bg-industrial-700 hover:bg-industrial-600 rounded-full transition-colors text-white"><Icon name="x" className="w-5 h-5" /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-5 custom-scroll">
                    {renderContent()}
                    <div className="mt-6 pt-4 border-t border-industrial-800 text-[10px] text-gray-500 text-center">
                        紀錄時間: {item.date}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FilterSelect = ({ label, value, options, onChange, disabled }) => (
    <div className={`relative ${disabled ? 'opacity-50' : ''}`}>
        <span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[10px] text-industrial-accent font-bold tracking-widest z-10 pointer-events-none">{label}</span>
        <div className="relative">
            <select value={value} onChange={e => onChange(e.target.value)} disabled={disabled} className="w-full appearance-none bg-industrial-900 border border-industrial-700 rounded-lg pl-3 pr-8 py-2.5 text-sm text-white focus:border-industrial-accent outline-none transition-all cursor-pointer disabled:cursor-not-allowed">
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></div>
        </div>
    </div>
);

const ResultCard = ({ group, onClick }) => {
    if (!group || !group.variants) return null; 

    const firstItem = group.variants[0];
    const hasHeat = group.variants.some(v => v.func === '冷暖');
    const hasCoolOnly = group.variants.some(v => v.func === '冷專');
    
    let barColor = 'bg-gray-600';
    if (hasHeat && !hasCoolOnly) barColor = 'bg-heat-500';
    else if (!hasHeat && hasCoolOnly) barColor = 'bg-cool-500';
    else if (hasHeat && hasCoolOnly) barColor = 'bg-gradient-to-b from-heat-500 to-cool-500';

    return (
        <div onClick={onClick} className="bg-industrial-800 rounded-xl p-4 border border-industrial-700 shadow-lg mb-3 relative overflow-hidden cursor-pointer hover:border-industrial-500 hover:bg-industrial-700 transition-all group">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${barColor}`}></div>
            <div className="pl-3 flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-industrial-accent bg-industrial-950 px-2 py-0.5 rounded">{group.brandCN}</span>
                        {group.series && <span className="text-[10px] text-gray-400 border border-industrial-600 px-1.5 py-0.5 rounded">{group.series}</span>}
                    </div>
                    <div className="text-lg font-bold text-white tracking-wide group-hover:text-industrial-accent transition-colors">{firstItem.modelIdu} <span className="text-xs text-gray-500 ml-2 font-normal">({group.variants.length > 1 ? '系列' : firstItem.func})</span></div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">{group.maxKw} kW | {group.pipes} | {group.refrigerant}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-1">
                        {hasHeat && <span className="w-2 h-2 rounded-full bg-heat-500" title="有冷暖"></span>}
                        {hasCoolOnly && <span className="w-2 h-2 rounded-full bg-cool-500" title="有冷專"></span>}
                    </div>
                    <button className="bg-industrial-900 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-900/50 rounded-lg px-3 py-1.5 text-xs font-bold flex items-center gap-1 transition-all"><Icon name="eye" className="w-3 h-3" />規格詳情</button>
                </div>
            </div>
        </div>
    );
};

const SidebarBtn = ({ active, onClick, icon, label }) => (
    <button onClick={onClick} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${active ? 'bg-industrial-800 border border-industrial-700 text-industrial-accent font-bold' : 'text-gray-400 hover:bg-industrial-800 hover:text-white'}`}><Icon name={icon} className="w-5 h-5" /><span className="text-sm tracking-widest">{label}</span></button>
);

const MultiRoomCapacityCalculator = ({ rooms, setRooms, systemPref, setSystemPref, result, setResult, addToHistory, db }) => {
    const [error, setError] = useState('');
    const addRoom = () => { if (rooms.length >= 6) { setError('最多支援同時評估 6 個空間'); return; } setError(''); setRooms([...rooms, { id: Date.now(), name: `空間 ${rooms.length + 1}`, ping: '', conditions: {}, kw: 0, iduType: '壁掛式', matchedSingle: null, matchedIdu: null }]); };
    const removeRoom = (id) => { setRooms(rooms.filter(r => r.id !== id)); };
    const updateRoom = (id, field, value) => { setRooms(rooms.map(r => r.id === id ? { ...r, [field]: value } : r)); };
    const toggleCondition = (id, conditionKey) => { setRooms(rooms.map(r => { if (r.id !== id) return r; const nextConds = { ...r.conditions, [conditionKey]: !r.conditions[conditionKey] }; if (conditionKey === 'blackIron' && nextConds.blackIron) nextConds.ironSheet = false; if (conditionKey === 'ironSheet' && nextConds.ironSheet) nextConds.blackIron = false; return { ...r, conditions: nextConds }; })); };
    const calculateAll = () => {
        let hasError = false; let totalKw = 0;
        const calculatedRooms = rooms.map(r => {
            const p = parseFloat(r.ping); if (!p || p <= 0) { hasError = true; return r; }
            let kcalBase = 450, mult = 1.0;
            if (r.conditions.westSun) mult += 0.2; if (r.conditions.allDaySun) mult += 0.3; if (r.conditions.topFloor) mult += 0.2; if (r.conditions.highCeiling) mult += 0.2;
            if (r.conditions.blackIron) mult += 0.8; else if (r.conditions.ironSheet) mult += 0.5;
            const roomKw = parseFloat(((kcalBase * mult * p) / 860).toFixed(2)); totalKw += roomKw;
            return { ...r, kw: roomKw, matchedSingle: null, matchedIdu: null };
        });
        if (hasError) { setError('請確認所有空間皆已輸入有效坪數'); return; } setError(''); totalKw = parseFloat(totalKw.toFixed(2));
        let recommendedODU = null;
        if (systemPref === 'multi' && calculatedRooms.length > 1) {
            const matches = db.filter(item => item.isMulti === true && item.maxKw >= totalKw && (item.maxIdus || 2) >= calculatedRooms.length);
            if (matches.length > 0) { matches.sort((a, b) => a.maxKw - b.maxKw); recommendedODU = matches[0]; }
        }
        const finalRooms = calculatedRooms.map(r => {
            if (systemPref === 'single') {
                const matches = db.filter(item => item.isMulti === false && item.odu !== null && item.idu !== null && item.type === r.iduType && item.maxKw >= r.kw);
                if (matches.length > 0) { matches.sort((a, b) => a.maxKw - b.maxKw); r.matchedSingle = matches[0]; }
            } else {
                let matches = db.filter(item => item.idu !== null && item.type === r.iduType && item.maxKw >= r.kw);
                if (recommendedODU) { const brandMatches = matches.filter(i => i.brandCN === recommendedODU.brandCN); if (brandMatches.length > 0) matches = brandMatches; }
                if (matches.length > 0) { matches.sort((a, b) => a.maxKw - b.maxKw); r.matchedIdu = matches[0]; }
            }
            return r;
        });
        setRooms(finalRooms); const resData = { pref: systemPref, totalKw, roomCount: finalRooms.length, recommendedODU, roomData: finalRooms };
        setResult(resData); addToHistory(`全屋規劃: ${finalRooms.length}間 / ${totalKw}KW`, 'capacity_multi', resData);
    };
    return (
        <div className="animate-fade-in pb-10">
            <div className="flex justify-between items-center mb-4 text-white"><h2 className="text-yellow-400 font-bold flex items-center gap-2 text-sm"><Icon name="ruler" className="w-5 h-5" /> 多間負載與外機配置</h2><button onClick={addRoom} className="text-[10px] bg-industrial-800 hover:bg-industrial-700 text-white px-3 py-1.5 rounded border border-industrial-600 flex items-center gap-1"><Icon name="plus" className="w-3 h-3"/> 新增空間</button></div>
            {error && <div className="text-red-400 text-xs font-bold mb-3 text-center bg-red-900/20 py-2 rounded-lg">{error}</div>}
            <div className="mb-4 bg-industrial-950 p-1.5 rounded-xl border border-industrial-800"><label className="text-[10px] text-gray-500 mb-2 block font-bold text-center uppercase tracking-widest">系統配置偏好</label><div className="flex text-xs font-bold gap-2"><button onClick={() => {setSystemPref('single'); setResult(null);}} className={`flex-1 py-3 rounded-lg transition-all ${systemPref === 'single' ? 'bg-blue-600 text-white shadow-md' : 'bg-industrial-900 text-gray-500 border border-industrial-700'}`}>一對一獨立配置</button><button onClick={() => {setSystemPref('multi'); setResult(null);}} className={`flex-1 py-3 rounded-lg transition-all ${systemPref === 'multi' ? 'bg-purple-600 text-white shadow-md' : 'bg-industrial-900 text-gray-500 border border-industrial-700'}`}>一對多共用外機</button></div></div>
            <div className="space-y-4 mb-6">{rooms.map((room) => (<div key={room.id} className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-sm relative">{rooms.length > 1 && (<button onClick={() => removeRoom(room.id)} className="absolute top-3 right-3 text-gray-500 hover:text-red-400"><Icon name="x" className="w-4 h-4" /></button>)}<div className="flex gap-2 mb-3 pr-6"><input type="text" value={room.name} onChange={e => updateRoom(room.id, 'name', e.target.value)} className="bg-transparent border-b border-industrial-600 text-industrial-accent font-bold w-1/3 text-sm focus:border-yellow-500" placeholder="空間名稱" /><div className="flex items-center gap-2 w-2/3"><input type="number" value={room.ping} onChange={e => updateRoom(room.id, 'ping', e.target.value)} className="w-full bg-industrial-900 border border-industrial-700 rounded-lg py-1.5 px-3 text-white text-sm" placeholder="輸入坪數" /><span className="text-xs text-gray-500">坪</span></div></div><div className="flex gap-2 mb-3">{['壁掛式', '吊隱式', '直立式'].map(type => (<button key={type} onClick={() => updateRoom(room.id, 'iduType', type)} className={`text-[10px] px-3 py-1.5 rounded-md font-bold transition-all border ${room.iduType === type ? 'bg-green-700/80 text-white border-green-500' : 'bg-industrial-900 text-gray-500 border-industrial-700'}`}>{type}</button>))}</div><div className="flex flex-wrap gap-2">{Object.entries(conditionLabels).map(([k, l]) => (<label key={k} className={`flex items-center space-x-1 bg-industrial-900 px-2 py-1 rounded border border-industrial-700 cursor-pointer text-[10px] ${room.conditions[k] ? 'border-industrial-accent text-industrial-accent' : 'text-gray-400'}`}><input type="checkbox" checked={!!room.conditions[k]} onChange={() => toggleCondition(room.id, k)} className="hidden" /><span>{l}</span></label>))}</div>{room.kw > 0 && <div className="absolute bottom-3 right-3 text-yellow-400 font-mono text-sm font-bold">{room.kw} KW</div>}</div>))}</div>
            <button onClick={calculateAll} className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 text-sm flex items-center justify-center gap-2"><Icon name="zap" className="w-4 h-4"/> 產生完整機型配置</button>
            {result && (
                <div className="mt-6 bg-industrial-900 rounded-2xl p-5 border border-yellow-600/50 animate-slide-up shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-600"></div>
                        <div className="grid grid-cols-2 gap-4 text-white mb-4 border-b border-industrial-700 pb-4"><div className="text-center font-mono border-r border-industrial-700"><div className="text-gray-500 text-[10px] mb-1 font-bold">系統總負載</div><div className="text-3xl font-bold text-yellow-400">{result.totalKw} <span className="text-xs text-yellow-600 font-sans">KW</span></div></div><div className="text-center font-mono"><div className="text-gray-500 text-[10px] mb-1 font-bold">規劃空間</div><div className="text-3xl font-bold">{result.roomCount} <span className="text-xs text-gray-500 font-sans">間</span></div></div></div>
                        {result.pref === 'multi' && result.roomCount > 1 && (<div className="mb-4"><h3 className="text-[10px] text-purple-400 font-bold mb-2 uppercase tracking-widest flex items-center gap-1"><Icon name="check" className="w-3 h-3"/> 一對多室外機推薦配對</h3>{result.recommendedODU ? (<div className="bg-purple-900/20 p-3 rounded-xl border border-purple-900/50 shadow-inner"><div className="text-white font-bold text-sm mb-1">{result.recommendedODU.brandCN} {result.recommendedODU.modelOdu}</div><div className="text-[10px] text-gray-400 flex flex-col gap-1 mt-2"><span><strong className="text-purple-300">支援形式:</strong> 最大支援 {result.recommendedODU.maxIdus} 內機</span><span><strong className="text-purple-300">能力上限:</strong> {result.recommendedODU.maxKw} KW</span>{result.recommendedODU.odu && <span><strong className="text-purple-300">電源線建議:</strong> {result.recommendedODU.odu.powerWire}</span>}</div></div>) : (<div className="bg-industrial-800 p-3 rounded-xl border border-industrial-700 text-xs text-gray-400">* 資料庫中尚無可滿足 {result.totalKw} KW 且支援 {result.roomCount} 對多的機型。<br/>建議分流為兩組系統，或切換至「一對一獨立配置」。</div>)}</div>)}
                        <div><h3 className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-widest border-t border-industrial-700 pt-3">{result.pref === 'single' ? '各空間一對一系統推薦' : '各空間對應內機推薦'}</h3><div className="space-y-2">{result.roomData.map(r => (<div key={`res-${r.id}`} className="bg-industrial-950 p-3 rounded-lg border border-industrial-800 relative overflow-hidden"><div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-50"></div><div className="flex justify-between items-center mb-1 pl-2"><span className="text-gray-200 font-bold text-sm">{r.name} <span className="text-[10px] text-gray-500 font-normal ml-1">({r.ping}坪)</span></span><span className="font-mono font-bold text-yellow-500 text-sm">{r.kw} KW</span></div><div className="text-[10px] text-gray-400 mb-2 pl-2">選擇型式: <span className="text-green-400 font-bold">{r.iduType}</span></div><div className="mt-2 pt-2 border-t border-industrial-800 text-[10px] pl-2">{result.pref === 'single' ? (r.matchedSingle ? (<div className="text-blue-300 font-bold">推薦一對一: <br/>{r.matchedSingle.brandCN} {r.matchedSingle.modelIdu} / {r.matchedSingle.modelOdu} <br/><span className="text-gray-500 font-normal block mt-0.5">能力上限 {r.matchedSingle.maxKw}KW</span></div>) : (<div className="text-red-400">查無對應之 {r.kw}KW 以上 {r.iduType} 機型</div>)) : (r.matchedIdu ? (<div className="text-green-300 font-bold">推薦多聯內機: <br/>{r.matchedIdu.brandCN} {r.matchedIdu.modelIdu} <br/><span className="text-gray-500 font-normal block mt-0.5">能力上限 {r.matchedIdu.maxKw}KW</span></div>) : (<div className="text-red-400">查無對應之 {r.kw}KW 以上多聯 {r.iduType} 內機</div>))}</div></div>))}</div></div>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



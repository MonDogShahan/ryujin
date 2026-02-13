// ================= 3. 計算工具邏輯 (V13.4: 吊隱式新增公式顯示) =================

// --- 負載計算 (V3.1: 保持不變) ---
const MultiRoomCapacityCalculator = ({ rooms, setRooms, result, setResult, db }) => {
    const [error, setError] = useState('');
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const addRoom = () => { if (rooms.length >= 6) { setError('最多 6 間'); return; } setError(''); setRooms([...rooms, { id: Date.now(), name: `空間 ${rooms.length + 1}`, w: '', d: '', ping: '', conditions: {}, kw: 0 }]); };
    const removeRoom = (id) => setRooms(rooms.filter(r => r.id !== id));
    
    const updateRoom = (id, field, value) => {
        setRooms(rooms.map(r => {
            if (r.id !== id) return r;
            const updated = { ...r, [field]: value };
            if (field === 'w' || field === 'd') {
                const w = parseFloat(field === 'w' ? value : r.w);
                const d = parseFloat(field === 'd' ? value : r.d);
                if (w && d) updated.ping = (w * d * 0.3025).toFixed(1);
            }
            return updated;
        }));
    };

    const toggleCondition = (id, key) => {
        setRooms(rooms.map(r => {
            if (r.id !== id) return r;
            const nextConds = { ...r.conditions, [key]: !r.conditions[key] };
            if (key === 'westSun' && nextConds.westSun) nextConds.allDaySun = false;
            if (key === 'allDaySun' && nextConds.allDaySun) nextConds.westSun = false;
            if (key === 'ironSheet' && nextConds.ironSheet) nextConds.blackIron = false;
            if (key === 'blackIron' && nextConds.blackIron) nextConds.ironSheet = false;
            return { ...r, conditions: nextConds };
        }));
    };

    const handleReset = () => { setShowResetConfirm(false); setRooms([{ id: Date.now(), name: '客廳', w: '', d: '', ping: '', conditions: {}, kw: 0 }]); setResult(null); };
    
    const handleSave = () => {
        let report = `龍神空調幫手 - 配置報告\n日期: ${new Date().toLocaleString()}\n--------------------------------\n`;
        rooms.forEach(r => {
            report += `\n[${r.name}]\n`;
            if (r.w && r.d) report += `尺寸: ${r.w}m x ${r.d}m\n`;
            report += `坪數: ${r.ping} 坪\n`;
            report += `環境: ${Object.keys(r.conditions).filter(k=>r.conditions[k]).map(k=>conditionLabels[k]).join(', ') || '標準'}\n`;
            report += `需求: ${r.kw} kW\n`;
            if (r.bestMatch) report += `推薦: ${r.bestMatch.brandCN} ${r.bestMatch.modelIdu} (${r.bestMatch.maxKw}kW)\n`;
        });
        report += `\n--------------------------------\n總負載需求: ${result?.totalKw || 0} kW`;
        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = `龍神配置_${new Date().toISOString().slice(0,10)}.txt`; a.click();
    };

    const calculateAll = () => {
        let totalKw = 0;
        let hasError = false;
        const calculatedRooms = rooms.map(r => {
            const p = parseFloat(r.ping);
            if (!p) { hasError = true; return r; }
            let kcal = 450, mult = 1.0;
            if (r.conditions.westSun) mult += 0.2;
            if (r.conditions.allDaySun) mult += 0.3;
            if (r.conditions.topFloor) mult += 0.2;
            if (r.conditions.highCeiling) mult += 0.2;
            if (r.conditions.ironSheet) mult += 0.5;
            if (r.conditions.blackIron) mult += 0.8;
            const kw = parseFloat(((kcal * mult * p) / 860).toFixed(2));
            totalKw += kw;
            const bestMatch = db.filter(d => d.type === '壁掛式' && d.maxKw >= kw).sort((a,b) => a.maxKw - b.maxKw)[0];
            return { ...r, kw, bestMatch };
        });

        if (hasError) { setError('請確認所有空間皆已輸入有效坪數'); return; }
        setError('');
        setRooms(calculatedRooms);
        const mainRecommend = db.filter(d => d.type.includes('室外機') && d.maxKw >= totalKw).sort((a,b) => a.maxKw - b.maxKw)[0];
        setResult({ totalKw: parseFloat(totalKw.toFixed(2)), roomCount: calculatedRooms.length, mainRecommend });
    };

    return (
        <div className="animate-fade-in pb-10">
            <div className="flex justify-between items-center mb-4 text-white">
                <h2 className="text-yellow-400 font-bold flex items-center gap-2 text-sm"><Icon name="ruler" className="w-5 h-5"/> 負載配置</h2>
                <div className="flex gap-2">
                    <button onClick={handleSave} className="p-2 bg-blue-600 rounded-lg text-white"><Icon name="save" className="w-4 h-4"/></button>
                    <button onClick={() => setShowResetConfirm(true)} className="p-2 bg-red-600 rounded-lg text-white"><Icon name="refresh" className="w-4 h-4"/></button>
                </div>
            </div>
            {showResetConfirm && (
                <div className="bg-red-900/30 border border-red-500/50 p-3 rounded-lg mb-4 text-center">
                    <p className="text-xs text-red-200 mb-2">確定要重置所有配置嗎？</p>
                    <div className="flex gap-2 justify-center">
                        <button onClick={handleReset} className="px-3 py-1 bg-red-600 text-white rounded text-xs">確定</button>
                        <button onClick={() => setShowResetConfirm(false)} className="px-3 py-1 bg-gray-600 text-white rounded text-xs">取消</button>
                    </div>
                </div>
            )}
            <div className="space-y-4 mb-6">
                {rooms.map((room) => (
                    <div key={room.id} className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-sm relative">
                        {rooms.length > 1 && <button onClick={() => removeRoom(room.id)} className="absolute top-3 right-3 text-gray-500 hover:text-red-400"><Icon name="x" className="w-4 h-4" /></button>}
                        <div className="mb-3"><input type="text" value={room.name} onChange={e => updateRoom(room.id, 'name', e.target.value)} className="bg-transparent border-b border-industrial-600 font-bold w-full text-sm focus:border-yellow-500" placeholder="空間名稱" /></div>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                            <input type="number" value={room.w} onChange={e => updateRoom(room.id, 'w', e.target.value)} className="bg-industrial-900 rounded px-2 py-1 text-xs text-white" placeholder="長(m)" />
                            <input type="number" value={room.d} onChange={e => updateRoom(room.id, 'd', e.target.value)} className="bg-industrial-900 rounded px-2 py-1 text-xs text-white" placeholder="寬(m)" />
                            <div className="flex items-center gap-1 bg-industrial-900 rounded px-2"><input type="number" value={room.ping} onChange={e => updateRoom(room.id, 'ping', e.target.value)} className="w-12 bg-transparent text-yellow-500 font-bold text-center" placeholder="坪" /><span className="text-xs text-gray-500">坪</span></div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {Object.entries(conditionLabels).map(([k, l]) => (
                                <label key={k} className={`flex items-center space-x-1 px-2 py-1 rounded border cursor-pointer text-[10px] ${room.conditions[k] ? 'bg-blue-600/30 border-blue-500 text-blue-300' : 'bg-industrial-900 border-industrial-700 text-gray-500'}`}>
                                    <input type="checkbox" checked={!!room.conditions[k]} onChange={() => toggleCondition(room.id, k)} className="hidden" /><span>{l}</span>
                                </label>
                            ))}
                        </div>
                        {room.kw > 0 && (
                            <div className="mt-3 pt-3 border-t border-industrial-700">
                                <div className="flex justify-between items-center text-xs mb-1">
                                    <span className="text-gray-400">需求: <strong className="text-yellow-400">{room.kw} kW</strong></span>
                                </div>
                                {room.bestMatch ? 
                                    <div className="text-xs text-green-400 bg-green-900/20 p-2 rounded border border-green-800">
                                        推薦: {room.bestMatch.brandCN} {room.bestMatch.modelIdu} ({room.bestMatch.maxKw}kW)
                                    </div> : 
                                    <span className="text-xs text-red-400">無合適單機</span>
                                }
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={addRoom} className="w-full py-3 mb-3 border border-dashed border-gray-600 text-gray-400 rounded-xl text-sm hover:text-white hover:border-gray-400">+ 新增空間</button>
            <button onClick={calculateAll} className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-lg active:scale-95 text-sm flex items-center justify-center gap-2"><Icon name="zap" className="w-4 h-4"/> 計算並推薦</button>
            {result && (
                <div className="mt-6 bg-industrial-900 rounded-2xl p-5 border border-yellow-600/50 animate-slide-up shadow-2xl text-center">
                    <div className="text-gray-500 text-xs mb-1">系統總負載需求</div>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">{result.totalKw} <span className="text-sm">kW</span></div>
                    {result.mainRecommend && <div className="text-xs text-green-400 border-t border-gray-700 pt-2">推薦多聯外機: {result.mainRecommend.brandCN} {result.mainRecommend.modelOdu}</div>}
                </div>
            )}
        </div>
    );
};

// --- 吊隱式計算 (V13.4: 舒適優先 + 公式顯示) ---
const DuctedCalculator = ({ state, setState, db }) => {
    const [error, setError] = useState('');
    
    // 從資料庫篩選出「吊隱式」機型
    const ductedModels = useMemo(() => {
        if (!db) return [];
        return db.filter(m => m.type === '吊隱式').sort((a,b) => a.maxKw - b.maxKw);
    }, [db]);

    // 模擬法蘭資料庫
    const FLANGE_MAP = {
        'daikin-sky-71': { w: 750, h: 200 }, 
    };

    const handleModelSelect = (e) => {
        const modelId = e.target.value;
        if (!modelId) return;

        const model = ductedModels.find(m => m.id === modelId);
        if (model) {
            const flange = FLANGE_MAP[model.id] || { w: 700, h: 180 }; 
            const estPing = (model.maxKw * 1.6).toFixed(1);

            setState(p => ({
                ...p,
                selectedModel: modelId,
                kw: model.maxKw,
                flangeW: flange.w,
                flangeH: flange.h,
                ping: estPing,
                result: null 
            }));
        }
    };

    const handlePingChange = (val) => {
        const ping = parseFloat(val);
        if (ping && !state.kw) {
             setState(p => ({ ...p, ping: val, kw: (ping * 0.6).toFixed(1) }));
        } else {
             setState(p => ({ ...p, ping: val }));
        }
    };

    const calculate = () => {
        const fw = parseFloat(state.flangeW);
        const fh = parseFloat(state.flangeH);
        const ping = parseFloat(state.ping);
        const kw = parseFloat(state.kw);
        const outlets = parseInt(state.outletCount);

        if (!fw || !fh || !ping || !outlets || !kw) { setError('請輸入完整資訊 (法蘭、kW、坪數)'); return; }
        setError('');

        // 1. 計算基礎數據
        const flangeArea = Math.round((fw * fh) / 100); // cm2
        const area8 = 314;   // 8 inch
        const area10 = 490;  // 10 inch
        const area12 = 706;  // 12 inch
        const area14 = 962;  // 14 inch
        const tolerance = 120; 

        // 2. 準備公式計算結果 (只顯示結果 >= 1 的選項)
        const calcDetails = [];
        const ductSizes = [
            { size: 8, area: area8 },
            { size: 10, area: area10 },
            { size: 12, area: area12 },
            { size: 14, area: area14 }
        ];

        ductSizes.forEach(d => {
            const ratio = (flangeArea / d.area).toFixed(1); // 算出來是幾孔
            if (parseFloat(ratio) >= 1.0) {
                calcDetails.push({ 
                    size: d.size, 
                    area: d.area, 
                    ratio: ratio,
                    formula: `${flangeArea} ÷ ${d.area} = ${ratio} 孔`
                });
            }
        });

        let advice = "";
        let mainSizeStr = "";
        let statusColor = "text-white"; 
        
        // --- 核心邏輯：加入 kW 判斷 (與 V13.3 相同) ---
        let maxMainDuctPhys = 8;
        if (flangeArea + tolerance >= area14) maxMainDuctPhys = 14;
        else if (flangeArea + tolerance >= area12) maxMainDuctPhys = 12;
        else if (flangeArea + tolerance >= area10) maxMainDuctPhys = 10;

        let suggestedMainSize = maxMainDuctPhys;
        if (kw < 9.0 && suggestedMainSize > 12) {
            suggestedMainSize = 12; 
        }

        const requiredArea = outlets * area8;

        // 邏輯 A: 小噸數 (< 9.0 kW)
        if (kw < 9.0) {
            if (flangeArea >= requiredArea) {
                statusColor = "text-green-400";
                if (outlets === 1) {
                    mainSizeStr = `${suggestedMainSize}" 單孔`;
                    advice = `✅ 標準配置 (${kw}kW)：\n法蘭夠大，直接出單孔 ${suggestedMainSize}" 風管即可。`;
                } else {
                    mainSizeStr = `${outlets} 孔 x 8"`;
                    advice = `✅ 標準配置 (${kw}kW)：\n9.0kW 以下機型建議結構單純化。\n建議集風箱直接出 ${outlets} 孔 8" 風管 (或 10")，不需使用複雜三通。`;
                }
            } else if (flangeArea + tolerance >= requiredArea) {
                statusColor = "text-yellow-400";
                mainSizeStr = `變通: ${outlets} 孔 8"`;
                advice = `⚠️ 空間受限 (${kw}kW)：\n法蘭面積略小。建議集風箱直接擴管至 ${suggestedMainSize}"，然後直接分出 ${outlets} 孔 8"。\n(此噸數不建議使用過長的 12" 主幹接三通，壓損會較大)`;
            } else {
                statusColor = "text-red-400";
                mainSizeStr = "法蘭過小";
                advice = `🔴 法蘭過小：\n${kw}kW 機型法蘭僅 ${flangeArea}cm²，無法負擔 ${outlets} 孔需求。\n建議減少孔數。`;
            }
        } 
        // 邏輯 B: 大噸數 (>= 9.0 kW)
        else {
            if (flangeArea >= requiredArea) {
                statusColor = "text-green-400";
                if (outlets >= 3 && suggestedMainSize >= 12) {
                    mainSizeStr = `${suggestedMainSize}" 主管配置`;
                    advice = `✅ 大風量配置 (${kw}kW)：\n機型噸數大，建議優先採用「集風箱出 ${suggestedMainSize}" 主管」。\n再延伸至適當位置使用分風箱(三通/四通)轉 ${outlets} 孔 8"。\n(這樣可降低機房噪音並均勻送風)`;
                } else {
                    mainSizeStr = `${outlets} 孔 x 10"`;
                    advice = `✅ 強力配置 (${kw}kW)：\n法蘭充足，建議直接出 ${outlets} 孔 10" 風管以確保大風量傳輸。`;
                }
            } else if (flangeArea + tolerance >= requiredArea) {
                statusColor = "text-yellow-400";
                mainSizeStr = `12"~14" 擴管變通`;
                advice = `⚠️ 變通配置 (${kw}kW)：\n法蘭略小。建議集風箱擴管至 12"~14" 單孔主管。\n接一段風管後再使用三通分流，利用主管的靜壓箱效應來穩壓。`;
            } else {
                statusColor = "text-red-400";
                mainSizeStr = "嚴重不足";
                advice = `🔴 嚴重配置錯誤：\n${kw}kW 大噸數機型需要極大回風與出風面積。\n目前法蘭 ${flangeArea}cm² 完全不足以支撐 ${outlets} 孔需求，會導致跳機或結冰。`;
            }
        }

        setState(prev => ({ ...prev, result: { mainSizeStr, flangeArea, advice, statusColor, calcDetails } }));
    };

    const reset = () => { setState({ selectedModel: '', kw: '', flangeW:'', flangeH:'', ping: '', outletCount: 1, result: null }); setError(''); };

    return (
        <div className="animate-fade-in space-y-4 pb-10">
            <div className="bg-industrial-800 p-6 rounded-2xl border border-industrial-700 shadow-xl">
                <div className="flex justify-between items-center mb-6 text-white"><h2 className="text-blue-400 font-bold flex items-center gap-2 text-sm"><Icon name="box" className="w-4 h-4" /> 吊隱式風管規劃 (Pro)</h2><button onClick={reset} className="text-[10px] text-gray-500 hover:text-white px-2 py-1 bg-industrial-900 rounded">重置</button></div>
                {error && <div className="text-red-400 text-xs font-bold mb-3 text-center bg-red-900/20 py-2 rounded-lg">{error}</div>}
                <div className="space-y-4">
                    {/* 機型、kW、坪數、法蘭等輸入框保持不變... */}
                    <div className="relative">
                        <span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[10px] text-industrial-accent font-bold tracking-widest z-10">選擇吊隱式機型 (自動帶入)</span>
                        <div className="relative">
                            <select value={state.selectedModel || ''} onChange={handleModelSelect} className="w-full appearance-none bg-industrial-900 border border-industrial-700 rounded-lg pl-3 pr-8 py-3 text-sm text-white focus:border-industrial-accent outline-none transition-all cursor-pointer">
                                <option value="">-- 自訂 / 請選擇 --</option>
                                {ductedModels.map(m => <option key={m.id} value={m.id}>{m.brandCN} {m.modelIdu} ({m.maxKw}kW)</option>)}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500"><Icon name="chevron" className="w-4 h-4"/></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-blue-400">冷氣能力 (kW)</span><input type="number" value={state.kw || ''} onChange={e=>setState(p=>({...p, kw: e.target.value}))} className="w-full bg-industrial-900 border border-blue-900/50 rounded-xl pt-4 pb-2 text-center text-white text-sm" placeholder="輸入 kW"/></div>
                        <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-yellow-500">空間坪數</span><input type="number" value={state.ping || ''} onChange={e=>handlePingChange(e.target.value)} className="w-full bg-industrial-900 border border-yellow-600/30 rounded-xl pt-4 pb-2 text-center text-white text-sm" placeholder="輸入坪數"/></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-gray-500">法蘭寬(mm)</span><input type="number" value={state.flangeW} onChange={e=>setState(p=>({...p,flangeW:e.target.value}))} className="w-full bg-industrial-900 border border-industrial-700 rounded-xl pt-4 pb-2 text-center text-white text-sm"/></div>
                        <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-gray-500">法蘭高(mm)</span><input type="number" value={state.flangeH} onChange={e=>setState(p=>({...p,flangeH:e.target.value}))} className="w-full bg-industrial-900 border border-industrial-700 rounded-xl pt-4 pb-2 text-center text-white text-sm"/></div>
                    </div>
                    
                    <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-green-400">出風口數量</span><input type="number" value={state.outletCount} onChange={e=>setState(p=>({...p,outletCount:e.target.value}))} className="w-full bg-industrial-900 border border-green-900/50 rounded-xl pt-4 pb-2 text-center text-white text-sm"/></div>
                    
                    <button onClick={calculate} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg active:scale-95 text-sm">試算配置</button>
                </div>
            </div>
            {state.result && (
                <div className="bg-industrial-900 rounded-2xl p-5 border border-blue-600/50 animate-slide-up shadow-2xl mt-4">
                    <div className="flex justify-between items-end mb-4 border-b border-gray-800 pb-2">
                        <div className="text-gray-500 text-xs">法蘭面積: {state.result.flangeArea} cm²</div>
                        <div className={`text-xl font-bold ${state.result.statusColor}`}>{state.result.mainSizeStr}</div>
                    </div>
                    <div className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap bg-industrial-950 p-3 rounded border border-gray-800 text-left font-mono mb-4">
                        {state.result.advice}
                    </div>
                    
                    {/* 新增：公式計算細節區 */}
                    <div className="bg-industrial-950/50 rounded-lg p-3 border border-gray-700">
                        <div className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-wider">計算公式參考 (法蘭/管面積)</div>
                        <div className="space-y-1">
                            {state.result.calcDetails.map(detail => (
                                <div key={detail.size} className="flex justify-between text-xs font-mono text-gray-400 border-b border-gray-800/50 pb-1 last:border-0">
                                    <span>{detail.size}" ({detail.area}cm²):</span>
                                    <span className="text-yellow-500/80">{detail.formula}</span>
                                </div>
                            ))}
                            {state.result.calcDetails.length === 0 && <div className="text-xs text-gray-600 text-center">法蘭過小，無合適管徑 (>1孔)</div>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- 降溫模擬 (保留) ---
const CoolingTimeCalculator = ({ state, setState }) => {
    const calculate = () => {
        const { ping, height, currentTemp, targetTemp, acKw } = state; 
        const time = Math.round(((ping * 3.3 * height) * 1.2 * (currentTemp - targetTemp) * 10) / acKw / 60);
        setState(p=>({...p, result: time}));
    };
    return (
        <div className="animate-fade-in space-y-4">
            <div className="bg-industrial-800 p-6 rounded-2xl border border-industrial-700 shadow-xl">
                <div className="flex justify-between items-center mb-4 text-white"><h2 className="text-purple-400 font-bold text-sm flex gap-2"><Icon name="thermometer" className="w-4 h-4"/> 降溫模擬</h2><button onClick={()=>setState({ping:'',height:3.0,currentTemp:32,targetTemp:26,acKw:'',result:null})} className="text-[10px] text-gray-500">重置</button></div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <input type="number" value={state.ping} onChange={e=>setState(p=>({...p,ping:e.target.value}))} className="bg-industrial-900 rounded p-2 text-xs text-center text-white" placeholder="坪數" />
                    <input type="number" value={state.acKw} onChange={e=>setState(p=>({...p,acKw:e.target.value}))} className="bg-industrial-900 rounded p-2 text-xs text-center text-white" placeholder="能力kW" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <input type="number" value={state.currentTemp} onChange={e=>setState(p=>({...p,currentTemp:e.target.value}))} className="bg-industrial-900 rounded p-2 text-xs text-center text-red-300" placeholder="室溫" />
                    <input type="number" value={state.targetTemp} onChange={e=>setState(p=>({...p,targetTemp:e.target.value}))} className="bg-industrial-900 rounded p-2 text-xs text-center text-blue-300" placeholder="目標" />
                </div>
                <button onClick={calculate} className="w-full py-3 bg-purple-600 rounded-xl text-white font-bold text-sm">模擬</button>
            </div>
            {state.result!==null && <div className="bg-industrial-900 p-4 rounded-xl text-center border border-purple-600/50"><div className="text-gray-500 text-xs">預計耗時</div><div className="text-3xl font-bold text-purple-400">{state.result} <span className="text-sm">min</span></div></div>}
        </div>
    );
};

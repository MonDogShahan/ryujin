// ================= calculators.js (V13.70 智慧法蘭匹配版) =================
// 更新重點：吊隱式規劃器自動連結 AC_DATABASE，選型號即自動帶出法蘭尺寸

const { useState, useEffect } = React;
const { Icon } = window.Components; // 引用共用 Icon

// ------------------------------------------
// 1. 負載與機型配置計算 (MultiRoomCapacityCalculator)
// ------------------------------------------
const MultiRoomCapacityCalculator = ({ rooms, setRooms, result, setResult, db }) => {
    const addRoom = () => setRooms([...rooms, { id: Date.now(), name: `房間 ${rooms.length + 1}`, w: '', d: '', ping: '', conditions: {}, kw: 0 }]);
    const removeRoom = (id) => setRooms(rooms.filter(r => r.id !== id));
    
    const updateRoom = (id, field, val) => {
        setRooms(rooms.map(r => {
            if (r.id !== id) return r;
            const newR = { ...r, [field]: val };
            if (field === 'w' || field === 'd') {
                if (newR.w && newR.d) newR.ping = (parseFloat(newR.w) * parseFloat(newR.d) / 32400).toFixed(1);
            } else if (field === 'ping') {
                newR.w = ''; newR.d = '';
            }
            return newR;
        }));
    };

    const toggleCondition = (roomId, cond) => {
        setRooms(rooms.map(r => {
            if (r.id !== roomId) return r;
            const newConds = { ...r.conditions, [cond]: !r.conditions[cond] };
            return { ...r, conditions: newConds };
        }));
    };

    const calculate = () => {
        let totalKw = 0;
        let indoorUnits = [];

        const calculatedRooms = rooms.map(r => {
            let baseKcal = 450; // 基礎熱負載
            if (r.conditions.top) baseKcal += 100;
            if (r.conditions.west) baseKcal += 80;
            if (r.conditions.window) baseKcal += 150;
            if (r.conditions.heat) baseKcal += 100;

            const reqKcal = parseFloat(r.ping) * baseKcal;
            const reqKw = reqKcal / 860;
            totalKw += reqKw;

            // 尋找適合的室內機 (簡易邏輯：找大於需求的最小機型)
            // 這裡假設 db 是全域資料庫，需傳入或直接使用
            const suitable = db.filter(m => !m.type.includes('室外') && parseFloat(m.maxKw) >= reqKw)
                               .sort((a,b) => parseFloat(a.maxKw) - parseFloat(b.maxKw))[0];

            return { ...r, reqKw: reqKw.toFixed(2), match: suitable ? `${suitable.brandCN} ${suitable.modelIdu} (${suitable.maxKw}kW)` : '無合適機型' };
        });
        
        // 尋找室外機 (假設是一對多，這裡僅作總負載參考)
        const suitableOdu = db.filter(m => m.type.includes('室外') && parseFloat(m.maxKw) >= totalKw)
                              .sort((a,b) => parseFloat(a.maxKw) - parseFloat(b.maxKw))[0];

        setResult({ totalKw: totalKw.toFixed(2), rooms: calculatedRooms, odu: suitableOdu });
    };

    return (
        <div className="space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><Icon name="ruler" /> 空間負載計算</h3>
                <button onClick={addRoom} className="text-xs bg-industrial-800 hover:bg-industrial-700 px-3 py-1.5 rounded border border-industrial-600 transition-colors">+ 新增房間</button>
            </div>
            
            <div className="space-y-3">
                {rooms.map((room, idx) => (
                    <div key={room.id} className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 relative">
                        <div className="flex justify-between mb-2">
                            <input type="text" value={room.name} onChange={(e) => updateRoom(room.id, 'name', e.target.value)} className="bg-transparent text-industrial-accent font-bold text-sm w-20 border-b border-dashed border-gray-600 focus:border-industrial-accent outline-none" />
                            {rooms.length > 1 && <button onClick={() => removeRoom(room.id)} className="text-gray-500 hover:text-red-400"><Icon name="x" className="w-4 h-4" /></button>}
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                            <div><label className="text-[10px] text-gray-500 block">長 (cm)</label><input type="number" value={room.d} onChange={e => updateRoom(room.id, 'd', e.target.value)} className="w-full bg-industrial-900 border border-gray-700 rounded px-2 py-1 text-xs text-white" /></div>
                            <div><label className="text-[10px] text-gray-500 block">寬 (cm)</label><input type="number" value={room.w} onChange={e => updateRoom(room.id, 'w', e.target.value)} className="w-full bg-industrial-900 border border-gray-700 rounded px-2 py-1 text-xs text-white" /></div>
                            <div><label className="text-[10px] text-gray-500 block">坪數</label><input type="number" value={room.ping} onChange={e => updateRoom(room.id, 'ping', e.target.value)} className="w-full bg-industrial-900 border border-industrial-500 rounded px-2 py-1 text-xs text-industrial-accent font-bold" /></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['top:頂樓', 'west:西曬', 'window:大窗', 'heat:熱源'].map(c => {
                                const [key, label] = c.split(':');
                                return (
                                    <button key={key} onClick={() => toggleCondition(room.id, key)} className={`text-[10px] px-2 py-1 rounded border transition-colors ${room.conditions[key] ? 'bg-red-900/30 border-red-500 text-red-400' : 'bg-industrial-900 border-gray-700 text-gray-500'}`}>
                                        {label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={calculate} className="w-full py-3 bg-industrial-accent hover:bg-yellow-500 text-black font-bold rounded-xl shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-2"><Icon name="check" /> 開始計算配置</button>

            {result && (
                <div className="bg-industrial-900 p-4 rounded-xl border border-industrial-600 animate-slide-up">
                    <div className="text-center mb-4">
                        <span className="text-xs text-gray-400">總熱負載需求</span>
                        <div className="text-3xl font-black text-white">{result.totalKw} <span className="text-sm font-normal text-gray-500">kW</span></div>
                    </div>
                    <div className="space-y-2 mb-4">
                        {result.rooms.map((r, i) => (
                            <div key={i} className="flex justify-between text-xs border-b border-gray-800 pb-1">
                                <span className="text-gray-300">{r.name} ({r.ping}坪)</span>
                                <div className="text-right">
                                    <div className="text-industrial-accent font-bold">{r.reqKw} kW</div>
                                    <div className="text-[9px] text-gray-500">{r.match}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-industrial-800 p-3 rounded-lg border border-industrial-700">
                        <span className="text-[10px] text-gray-400 block mb-1">建議室外機</span>
                        {result.odu ? (
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-white">{result.odu.modelOdu}</span>
                                <span className="text-xs bg-industrial-700 px-2 py-0.5 rounded text-gray-300">{result.odu.maxKw} kW</span>
                            </div>
                        ) : <span className="text-xs text-red-400">無單一主機可滿足，建議分拆系統</span>}
                    </div>
                </div>
            )}
        </div>
    );
};

// ------------------------------------------
// 2. 物理降溫模擬 (CoolingTimeCalculator)
// ------------------------------------------
const CoolingTimeCalculator = ({ state, setState }) => {
    const calculate = () => {
        if (!state.ping || !state.acKw) return;
        const vol = parseFloat(state.ping) * 3.3 * state.height; // 體積 m3
        const diff = state.currentTemp - state.targetTemp; // 溫差
        // 簡易物理公式：Q = m * c * dt. 時間 t = Q / P. 
        // 空氣比熱 c~1.005 kJ/kgK, 密度 m~1.2 kg/m3. 
        // 1 kW = 1 kJ/s. 
        // 需移除熱量 (kJ) = vol * 1.2 * 1.005 * diff
        // 但冷氣能力是持續移除，且牆壁有蓄熱，這裡用經驗係數 1.5 倍修正
        const energyNeeded = vol * 1.2 * 1.005 * diff * 1.5; 
        const power = parseFloat(state.acKw); // kW = kJ/s
        const seconds = energyNeeded / power;
        const minutes = Math.ceil(seconds / 60);
        
        setState(p => ({ ...p, result: minutes }));
    };

    return (
        <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><Icon name="thermometer" /> 降溫時間模擬</h3>
            <div className="grid grid-cols-2 gap-4">
                <div><label className="text-[10px] text-gray-500">空間坪數</label><input type="number" value={state.ping} onChange={e => setState({...state, ping: e.target.value})} className="w-full bg-industrial-800 border-gray-700 rounded text-white p-2" /></div>
                <div><label className="text-[10px] text-gray-500">天花板高(m)</label><input type="number" value={state.height} onChange={e => setState({...state, height: e.target.value})} className="w-full bg-industrial-800 border-gray-700 rounded text-white p-2" /></div>
                <div><label className="text-[10px] text-gray-500">目前室溫</label><input type="number" value={state.currentTemp} onChange={e => setState({...state, currentTemp: e.target.value})} className="w-full bg-industrial-800 border-gray-700 rounded text-white p-2" /></div>
                <div><label className="text-[10px] text-gray-500">目標溫度</label><input type="number" value={state.targetTemp} onChange={e => setState({...state, targetTemp: e.target.value})} className="w-full bg-industrial-800 border-gray-700 rounded text-white p-2" /></div>
                <div className="col-span-2"><label className="text-[10px] text-gray-500">冷氣能力 (kW)</label><input type="number" value={state.acKw} onChange={e => setState({...state, acKw: e.target.value})} className="w-full bg-industrial-800 border-industrial-500 rounded text-industrial-accent font-bold p-2" /></div>
            </div>
            <button onClick={calculate} className="w-full py-3 bg-industrial-700 hover:bg-industrial-600 text-white font-bold rounded-xl shadow transition-colors">計算預估時間</button>
            {state.result && (
                <div className="text-center p-6 bg-industrial-900 rounded-xl border border-industrial-600">
                    <span className="text-gray-400 text-xs">預計降溫時間</span>
                    <div className="text-4xl font-black text-industrial-accent my-2">{state.result} <span className="text-sm">分鐘</span></div>
                    <span className="text-gray-500 text-[10px]">此為物理理論值，未考慮熱源持續產生的狀況</span>
                </div>
            )}
        </div>
    );
};

// ------------------------------------------
// 3. 吊隱式風管規劃 (DuctedCalculator) - 智慧版
// ------------------------------------------
const DuctedCalculator = ({ plans, setPlans, db }) => {
    const [searchKw, setSearchKw] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [activePlanId, setActivePlanId] = useState(null);

    const addPlan = () => setPlans([...plans, { id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', outlets: 1, result: null }]);
    
    // ★★★ 智慧搜尋功能 ★★★
    const handleSearch = (keyword, planId) => {
        setSearchKw(keyword);
        setActivePlanId(planId);
        if (!keyword) { setSearchResults([]); return; }
        
        // 搜尋吊隱式室內機
        const res = db.filter(item => 
            item.type.includes('吊隱') && 
            (item.modelIdu.toLowerCase().includes(keyword.toLowerCase()) || 
             item.series.includes(keyword) || 
             item.brandCN.includes(keyword))
        ).slice(0, 5);
        setSearchResults(res);
    };

    // ★★★ 自動帶入規格 ★★★
    const selectModel = (machine) => {
        const planIndex = plans.findIndex(p => p.id === activePlanId);
        if (planIndex === -1) return;
        
        const newPlans = [...plans];
        const plan = newPlans[planIndex];
        
        plan.brand = machine.brandCN;
        plan.model = machine.modelIdu;
        plan.kw = machine.maxKw; // 帶入 KW

        // 解析法蘭尺寸 (格式如 "1100x200" or "640×160")
        if (machine.idu && machine.idu.flangeDims) {
            const dims = machine.idu.flangeDims.match(/(\d+)[x×X](\d+)/);
            if (dims) {
                plan.flangeW = dims[1];
                plan.flangeH = dims[2];
            } else {
                plan.flangeW = ''; plan.flangeH = ''; // 解析失敗則留空
            }
        } else {
             plan.flangeW = ''; plan.flangeH = '';
        }
        
        setPlans(newPlans);
        setSearchKw('');
        setSearchResults([]);
    };

    const updatePlan = (id, field, val) => {
        setPlans(plans.map(p => p.id === id ? { ...p, [field]: val } : p));
    };

    const calculate = (id) => {
        setPlans(plans.map(p => {
            if (p.id !== id) return p;
            // 簡易風速計算：Q(CMH) ~ kW * 150.  A(m2) = W*H. V(m/s) = Q / 3600 / A.
            // 這是非常粗略的估算，僅供參考風速是否過快
            if (!p.kw || !p.flangeW || !p.flangeH) return p;
            
            const w_m = parseFloat(p.flangeW) / 1000;
            const h_m = parseFloat(p.flangeH) / 1000;
            const area = w_m * h_m;
            
            // 估算風量 (CMH) - 經驗值：每kW約需 160 CMH (高靜壓可能更高)
            const cmh = parseFloat(p.kw) * 160; 
            
            // 出風口風速 (m/s)
            const velocity = cmh / 3600 / area;
            
            // 建議出風口尺寸 (假設風速 2.5m/s 為舒適)
            const suggestArea = cmh / 3600 / 2.5;
            // 假設寬高比 4:1
            // w * (w/4) = area => w^2 = 4*area => w = sqrt(4*area)
            const suggestW = Math.sqrt(4 * suggestArea) * 1000;
            const suggestH = suggestW / 4;

            return { 
                ...p, 
                result: { 
                    cmh: Math.round(cmh), 
                    velocity: velocity.toFixed(1), 
                    suggestW: Math.round(suggestW), 
                    suggestH: Math.round(suggestH) 
                } 
            };
        }));
    };

    return (
        <div className="space-y-6 animate-fade-in pb-10">
             <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><Icon name="box" /> 吊隱式出風口規劃</h3>
                <button onClick={addPlan} className="text-xs bg-industrial-800 hover:bg-industrial-700 px-3 py-1.5 rounded border border-industrial-600">+ 新增機台</button>
            </div>

            {plans.map((p, idx) => (
                <div key={p.id} className="bg-industrial-800 p-5 rounded-xl border border-industrial-700 relative">
                     <div className="absolute top-3 right-3 text-industrial-800 font-black text-5xl opacity-20 pointer-events-none">{idx+1}</div>
                    
                    {/* 搜尋欄位 */}
                    <div className="mb-4 relative">
                         <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">機型快搜 (輸入型號或系列)</label>
                         <div className="flex gap-2">
                             <input 
                                type="text" 
                                placeholder={p.model || "例如: FBA50, 大金, 63..."} 
                                className="w-full bg-industrial-900 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:border-industrial-accent"
                                onChange={(e) => handleSearch(e.target.value, p.id)}
                                value={activePlanId === p.id ? searchKw : p.model}
                                onFocus={() => { setActivePlanId(p.id); setSearchKw(p.model || ''); }}
                             />
                         </div>
                         {/* 搜尋下拉選單 */}
                         {activePlanId === p.id && searchResults.length > 0 && (
                             <div className="absolute top-full left-0 w-full bg-industrial-900 border border-industrial-500 rounded-lg shadow-2xl z-20 mt-1 max-h-48 overflow-y-auto">
                                 {searchResults.map(m => (
                                     <div key={m.id} onClick={() => selectModel(m)} className="p-2 hover:bg-industrial-700 cursor-pointer border-b border-gray-800 last:border-0">
                                         <div className="text-xs font-bold text-white">{m.brandCN} {m.modelIdu}</div>
                                         <div className="text-[10px] text-gray-400 flex justify-between">
                                             <span>{m.series}</span>
                                             <span className="text-industrial-accent">{m.maxKw} kW</span>
                                         </div>
                                         {m.idu?.flangeDims && <div className="text-[9px] text-blue-300">法蘭: {m.idu.flangeDims}</div>}
                                     </div>
                                 ))}
                             </div>
                         )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-[10px] text-gray-500">法蘭寬 (mm)</label>
                            <input type="number" value={p.flangeW} onChange={e => updatePlan(p.id, 'flangeW', e.target.value)} className="w-full bg-industrial-900 border border-gray-700 rounded p-2 text-white" placeholder="自帶數據" />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-500">法蘭高 (mm)</label>
                            <input type="number" value={p.flangeH} onChange={e => updatePlan(p.id, 'flangeH', e.target.value)} className="w-full bg-industrial-900 border border-gray-700 rounded p-2 text-white" placeholder="自帶數據" />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-500">冷房能力 (kW)</label>
                            <input type="number" value={p.kw} onChange={e => updatePlan(p.id, 'kw', e.target.value)} className="w-full bg-industrial-900 border border-gray-700 rounded p-2 text-white" placeholder="自帶數據" />
                        </div>
                         <div>
                            <label className="text-[10px] text-gray-500">出風口數量</label>
                            <select value={p.outlets} onChange={e => updatePlan(p.id, 'outlets', e.target.value)} className="w-full bg-industrial-900 border border-gray-700 rounded p-2 text-white">
                                <option value="1">1 (集中)</option>
                                <option value="2">2 (分流)</option>
                                <option value="3">3 (多點)</option>
                            </select>
                        </div>
                    </div>

                    <button onClick={() => calculate(p.id)} className="w-full py-2 bg-industrial-700 hover:bg-industrial-600 text-gray-200 text-xs font-bold rounded mb-4">計算風速與建議尺寸</button>

                    {p.result && (
                        <div className="bg-black/30 rounded p-3 text-xs space-y-1 border border-industrial-600/30">
                            <div className="flex justify-between"><span className="text-gray-400">估計總風量</span> <span className="text-white font-mono">{p.result.cmh} CMH</span></div>
                            <div className="flex justify-between"><span className="text-gray-400">法蘭口風速</span> <span className={`${parseFloat(p.result.velocity) > 6 ? 'text-red-400' : 'text-green-400'} font-mono font-bold`}>{p.result.velocity} m/s</span></div>
                            <div className="mt-2 pt-2 border-t border-gray-700">
                                <span className="text-gray-400 block mb-1">建議出風口總面積 (單口)</span>
                                <span className="text-industrial-accent font-mono text-sm block text-center">
                                    {Math.round(p.result.suggestW / p.outlets)} x {p.result.suggestH} mm
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

window.Calculators = { MultiRoomCapacityCalculator, CoolingTimeCalculator, DuctedCalculator };

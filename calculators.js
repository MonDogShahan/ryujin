// ================= calculators.js (V13.82 復刻功能版) =================
// 包含：負載計算(舊版邏輯), 降溫模擬, 吊隱規劃(智慧搜尋)
// 修正：還原鐵皮屋/黑鐵皮/挑高選項，加入PDF與重置按鈕

(function() {
    const { useState, useRef } = React;
    const { Icon } = window.Components;

    // PDF 匯出函數
    const exportToPDF = (elementId, title) => {
        const input = document.getElementById(elementId);
        if (!input) return;
        const btn = document.activeElement;
        const originalText = btn.innerText;
        btn.innerText = "生成中...";
        
        // 簡單檢查是否有 html2canvas
        if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
            alert("PDF 元件尚未載入，請確認網路連線或 index.html 設定");
            btn.innerText = originalText;
            return;
        }

        html2canvas(input, { backgroundColor: '#1e293b', scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${title}_${new Date().toISOString().slice(0,10)}.pdf`);
            btn.innerText = originalText;
        }).catch(err => {
            console.error(err);
            alert("PDF 生成失敗");
            btn.innerText = originalText;
        });
    };

    // 1. 負載與機型配置 (復刻版)
    const MultiRoomCapacityCalculator = ({ rooms, setRooms, result, setResult, db }) => {
        const addRoom = () => setRooms([...rooms, { id: Date.now(), name: `房間 ${rooms.length + 1}`, w: '', d: '', h: '3.0', ping: '', conditions: {}, kw: 0 }]);
        
        const resetAll = () => {
            if (confirm("確定要重置所有資料嗎？")) {
                setRooms([{ id: Date.now(), name: '客廳', w: '', d: '', h: '3.0', ping: '', conditions: {}, kw: 0 }]);
                setResult(null);
            }
        };

        const removeRoom = (id) => {
            if (rooms.length > 1 && confirm("確定刪除此房間？")) {
                setRooms(rooms.filter(r => r.id !== id));
            }
        };
        
        const updateRoom = (id, field, val) => {
            setRooms(rooms.map(r => {
                if (r.id !== id) return r;
                const newR = { ...r, [field]: val };
                if ((field === 'w' || field === 'd') && newR.w && newR.d) {
                    newR.ping = (parseFloat(newR.w) * parseFloat(newR.d) / 32400).toFixed(1);
                }
                return newR;
            }));
        };

        const toggleCondition = (roomId, cond) => {
            setRooms(rooms.map(r => {
                if (r.id !== roomId) return r;
                let newConds = { ...r.conditions };
                // 互斥：鐵皮 vs 黑鐵皮
                if (cond === 'iron') newConds.blackIron = false;
                if (cond === 'blackIron') newConds.iron = false;
                newConds[cond] = !newConds[cond];
                return { ...r, conditions: newConds };
            }));
        };

        const calculate = () => {
            let totalKw = 0;
            const calculatedRooms = rooms.map(r => {
                // 舊版邏輯：基礎 500 kcal/坪
                let baseKcal = 500;
                if (r.conditions.top) baseKcal += 100;      // 頂樓
                if (r.conditions.west) baseKcal += 80;      // 西曬
                if (r.conditions.fullSun) baseKcal += 150;  // 全日曬
                if (r.conditions.iron) baseKcal += 200;     // 鐵皮
                if (r.conditions.blackIron) baseKcal += 300;// 黑鐵皮

                // 挑高加成
                const height = parseFloat(r.h) || 3.0;
                const hFactor = height > 3.0 ? height / 3.0 : 1;

                const reqKcal = parseFloat(r.ping) * baseKcal * hFactor;
                const reqKw = reqKcal / 860;
                totalKw += reqKw;

                const suitable = db.filter(m => !m.type.includes('室外') && parseFloat(m.maxKw) >= reqKw)
                                   .sort((a,b) => parseFloat(a.maxKw) - parseFloat(b.maxKw))[0];

                return { ...r, reqKw: reqKw.toFixed(2), match: suitable ? `${suitable.brandCN} ${suitable.modelIdu} (${suitable.maxKw}kW)` : '建議多台組合' };
            });
            
            const suitableOdu = db.filter(m => m.type.includes('室外') && parseFloat(m.maxKw) >= totalKw)
                                  .sort((a,b) => parseFloat(a.maxKw) - parseFloat(b.maxKw))[0];

            setResult({ totalKw: totalKw.toFixed(2), rooms: calculatedRooms, odu: suitableOdu });
        };

        return (
            <div id="capacity-calculator" className="space-y-4 animate-fade-in pb-20">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2"><Icon name="ruler" /> 空間負載計算</h3>
                    <div className="flex gap-2">
                        <button onClick={resetAll} className="text-xs bg-red-900/50 hover:bg-red-800 text-red-200 px-3 py-1.5 rounded border border-red-700/50">重置</button>
                        <button onClick={addRoom} className="text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 py-1.5 rounded">+ 房間</button>
                    </div>
                </div>
                
                <div className="space-y-3">
                    {rooms.map((room, idx) => (
                        <div key={room.id} className="glass-panel p-4 rounded-xl relative transition-all">
                            <div className="flex justify-between mb-2 border-b border-white/10 pb-2">
                                <input type="text" value={room.name} onChange={(e) => updateRoom(room.id, 'name', e.target.value)} className="bg-transparent text-yellow-500 font-bold text-sm w-24 focus:outline-none" />
                                {rooms.length > 1 && <button onClick={() => removeRoom(room.id)} className="text-gray-500 hover:text-red-400"><Icon name="x" className="w-4 h-4" /></button>}
                            </div>
                            <div className="grid grid-cols-4 gap-2 mb-3">
                                <div><label className="text-[10px] text-gray-400 block mb-1">長(cm)</label><input type="number" value={room.d} onChange={e => updateRoom(room.id, 'd', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white" /></div>
                                <div><label className="text-[10px] text-gray-400 block mb-1">寬(cm)</label><input type="number" value={room.w} onChange={e => updateRoom(room.id, 'w', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white" /></div>
                                <div><label className="text-[10px] text-gray-400 block mb-1">高(m)</label><input type="number" value={room.h} onChange={e => updateRoom(room.id, 'h', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white" placeholder="3.0" /></div>
                                <div><label className="text-[10px] text-gray-400 block mb-1">坪數</label><input type="number" value={room.ping} onChange={e => updateRoom(room.id, 'ping', e.target.value)} className="w-full bg-black/40 border border-yellow-500/50 rounded px-2 py-1 text-xs text-yellow-500 font-bold" /></div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    {k:'top', l:'頂樓'}, {k:'west', l:'西曬'}, {k:'fullSun', l:'全日曬'},
                                    {k:'iron', l:'鐵皮'}, {k:'blackIron', l:'黑鐵皮'}
                                ].map(c => (
                                    <button key={c.k} onClick={() => toggleCondition(room.id, c.k)} 
                                        className={`text-[10px] px-2 py-1 rounded border transition-colors ${room.conditions[c.k] ? 'bg-yellow-500 text-black border-yellow-500 font-bold' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                                        {c.l}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2 mt-4">
                    <button onClick={calculate} className="flex-1 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-xl shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-2"><Icon name="check" /> 計算配置</button>
                    {result && <button onClick={() => exportToPDF('capacity-calculator', '負載計算表')} className="px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1"><Icon name="pdf" className="w-5 h-5"/> PDF</button>}
                </div>

                {result && (
                    <div className="glass-panel p-5 rounded-xl mt-6 animate-slide-up border border-yellow-500/30">
                        <div className="text-center mb-4">
                            <span className="text-xs text-gray-400 tracking-widest uppercase">Total Load</span>
                            <div className="text-4xl font-black text-white mt-1">{result.totalKw} <span className="text-sm font-normal text-gray-500">kW</span></div>
                        </div>
                        <div className="space-y-2 mb-4">
                            {result.rooms.map((r, i) => (
                                <div key={i} className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                                    <div className="flex flex-col">
                                        <span className="text-gray-300 font-bold">{r.name}</span>
                                        <span className="text-[10px] text-gray-500">{r.ping}坪 / 高{r.h}m</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-yellow-500 font-bold">{r.reqKw} kW</div>
                                        <div className="text-[10px] text-gray-400">{r.match}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-black/30 p-3 rounded-lg border border-white/10">
                            <span className="text-[10px] text-gray-400 block mb-1">建議室外機</span>
                            {result.odu ? (
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">{result.odu.brandCN} {result.odu.modelOdu}</span>
                                    <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded font-bold">{result.odu.maxKw} kW</span>
                                </div>
                            ) : <span className="text-xs text-red-400">無單一主機可滿足</span>}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // 2. 物理降溫模擬 (保持原樣，僅調整樣式)
    const CoolingTimeCalculator = ({ state, setState }) => {
        const calculate = () => {
            if (!state.ping || !state.acKw) return;
            const vol = parseFloat(state.ping) * 3.3 * state.height;
            const diff = state.currentTemp - state.targetTemp;
            const energyNeeded = vol * 1.2 * 1.005 * diff * 1.5; 
            const power = parseFloat(state.acKw);
            const minutes = Math.ceil(energyNeeded / power / 60);
            setState(p => ({ ...p, result: minutes }));
        };

        return (
            <div className="space-y-4 animate-fade-in glass-panel p-5 rounded-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><Icon name="thermometer" /> 降溫時間模擬</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-[10px] text-gray-400">空間坪數</label><input type="number" value={state.ping} onChange={e => setState({...state, ping: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                    <div><label className="text-[10px] text-gray-400">天花板高(m)</label><input type="number" value={state.height} onChange={e => setState({...state, height: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                    <div><label className="text-[10px] text-gray-400">目前室溫</label><input type="number" value={state.currentTemp} onChange={e => setState({...state, currentTemp: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                    <div><label className="text-[10px] text-gray-400">目標溫度</label><input type="number" value={state.targetTemp} onChange={e => setState({...state, targetTemp: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                    <div className="col-span-2"><label className="text-[10px] text-gray-400">冷氣能力 (kW)</label><input type="number" value={state.acKw} onChange={e => setState({...state, acKw: e.target.value})} className="w-full bg-black/40 border border-yellow-500/50 rounded text-yellow-500 font-bold p-2 text-sm" /></div>
                </div>
                <button onClick={calculate} className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl shadow transition-colors">計算預估時間</button>
                {state.result && (
                    <div className="text-center p-4 bg-black/30 rounded-xl border border-white/10 mt-4">
                        <span className="text-gray-400 text-xs">預計降溫時間</span>
                        <div className="text-4xl font-black text-yellow-500 my-2">{state.result} <span className="text-sm">分鐘</span></div>
                        <span className="text-[10px] text-gray-500">此為物理理論值，僅供參考</span>
                    </div>
                )}
            </div>
        );
    };

    // 3. 吊隱式風管規劃 (智慧版 + PDF + 重置)
    const DuctedCalculator = ({ plans, setPlans, db }) => {
        const [searchKw, setSearchKw] = useState('');
        const [searchResults, setSearchResults] = useState([]);
        const [activePlanId, setActivePlanId] = useState(null);

        const addPlan = () => setPlans([...plans, { id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', outlets: 1, result: null }]);
        
        const resetAll = () => {
            if (confirm('⚠️ 確定要重置所有規劃嗎？')) {
                setPlans([{ id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', outlets: 1, result: null }]);
            }
        };

        const handleSearch = (keyword, planId) => {
            setSearchKw(keyword);
            setActivePlanId(planId);
            if (!keyword) { setSearchResults([]); return; }
            const res = db.filter(item => 
                item.type.includes('吊隱') && 
                (item.modelIdu.toLowerCase().includes(keyword.toLowerCase()) || 
                 item.series.includes(keyword) || 
                 item.brandCN.includes(keyword))
            ).slice(0, 5);
            setSearchResults(res);
        };

        const selectModel = (machine) => {
            const newPlans = plans.map(p => {
                if (p.id !== activePlanId) return p;
                let fw = '', fh = '';
                if (machine.idu && machine.idu.flangeDims) {
                    const dims = machine.idu.flangeDims.match(/(\d+)\s*[x×X*]\s*(\d+)/);
                    if (dims) { fw = dims[1]; fh = dims[2]; }
                }
                return { ...p, brand: machine.brandCN, model: machine.modelIdu, kw: machine.maxKw, flangeW: fw, flangeH: fh };
            });
            setPlans(newPlans);
            setSearchKw('');
            setSearchResults([]);
        };

        const updatePlan = (id, field, val) => setPlans(plans.map(p => p.id === id ? { ...p, [field]: val } : p));

        const calculate = (id) => {
            setPlans(plans.map(p => {
                if (p.id !== id || !p.kw || !p.flangeW || !p.flangeH) return p;
                const w_m = parseFloat(p.flangeW) / 1000;
                const h_m = parseFloat(p.flangeH) / 1000;
                const area = w_m * h_m;
                const cmh = parseFloat(p.kw) * 160; 
                const velocity = cmh / 3600 / area;
                const suggestArea = cmh / 3600 / 2.5; 
                const suggestW = Math.sqrt(4 * suggestArea) * 1000;
                const suggestH = suggestW / 4;
                return { ...p, result: { cmh: Math.round(cmh), velocity: velocity.toFixed(1), suggestW: Math.round(suggestW), suggestH: Math.round(suggestH) } };
            }));
        };

        return (
            <div id="ducted-calculator" className="space-y-6 animate-fade-in pb-20">
                 <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2"><Icon name="box" /> 吊隱式出風口規劃</h3>
                    <div className="flex gap-2">
                        <button onClick={resetAll} className="text-xs bg-red-900/50 hover:bg-red-800 text-red-200 px-3 py-1.5 rounded border border-red-700/50">重置</button>
                        <button onClick={() => exportToPDF('ducted-calculator', '吊隱規劃表')} className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded flex items-center gap-1"><Icon name="pdf" className="w-3 h-3"/> PDF</button>
                        <button onClick={addPlan} className="text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 py-1.5 rounded">+ 機台</button>
                    </div>
                </div>

                {plans.map((p, idx) => (
                    <div key={p.id} className="glass-panel p-5 rounded-xl relative">
                         <div className="absolute top-3 right-3 text-white/10 font-black text-5xl pointer-events-none">{idx+1}</div>
                        
                        <div className="mb-4 relative">
                             <label className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1 block">機型快搜</label>
                             <input type="text" placeholder={p.model || "輸入型號，例如: FBA50..."} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-yellow-500 outline-none" onChange={(e) => handleSearch(e.target.value, p.id)} value={activePlanId === p.id ? searchKw : p.model} onFocus={() => { setActivePlanId(p.id); setSearchKw(p.model || ''); }} />
                             {activePlanId === p.id && searchResults.length > 0 && (
                                 <div className="absolute top-full left-0 w-full bg-slate-900 border border-slate-600 rounded-lg shadow-2xl z-20 mt-1 max-h-48 overflow-y-auto">
                                     {searchResults.map(m => (
                                         <div key={m.id} onClick={() => selectModel(m)} className="p-2 hover:bg-slate-800 cursor-pointer border-b border-slate-700 last:border-0">
                                             <div className="text-xs font-bold text-white">{m.brandCN} {m.modelIdu}</div>
                                             <div className="text-[10px] text-gray-400 flex justify-between"><span>{m.series}</span><span className="text-yellow-500">{m.maxKw} kW</span></div>
                                             {m.idu?.flangeDims && <div className="text-[9px] text-blue-300">法蘭: {m.idu.flangeDims}</div>}
                                         </div>
                                     ))}
                                 </div>
                             )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div><label className="text-[10px] text-gray-400">法蘭寬 (mm)</label><input type="number" value={p.flangeW} onChange={e => updatePlan(p.id, 'flangeW', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" placeholder="自帶數據" /></div>
                            <div><label className="text-[10px] text-gray-400">法蘭高 (mm)</label><input type="number" value={p.flangeH} onChange={e => updatePlan(p.id, 'flangeH', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" placeholder="自帶數據" /></div>
                            <div><label className="text-[10px] text-gray-400">冷房能力 (kW)</label><input type="number" value={p.kw} onChange={e => updatePlan(p.id, 'kw', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" placeholder="自帶數據" /></div>
                             <div><label className="text-[10px] text-gray-400">出風口數量</label><select value={p.outlets} onChange={e => updatePlan(p.id, 'outlets', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm"><option value="1">1 (集中)</option><option value="2">2 (分流)</option><option value="3">3 (多點)</option></select></div>
                        </div>

                        <button onClick={() => calculate(p.id)} className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded mb-4 transition-colors">計算風速與建議尺寸</button>

                        {p.result && (
                            <div className="bg-black/40 rounded p-3 text-xs space-y-1 border border-white/10">
                                <div className="flex justify-between"><span className="text-gray-400">估計總風量</span> <span className="text-white font-mono">{p.result.cmh} CMH</span></div>
                                <div className="flex justify-between"><span className="text-gray-400">法蘭口風速</span> <span className={`${parseFloat(p.result.velocity) > 6 ? 'text-red-400' : 'text-green-400'} font-mono font-bold`}>{p.result.velocity} m/s</span></div>
                                <div className="mt-2 pt-2 border-t border-white/10">
                                    <span className="text-gray-400 block mb-1">建議出風口總面積 (單口)</span>
                                    <span className="text-yellow-400 font-mono text-sm block text-center">
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
})();

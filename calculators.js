// ================= calculators.js (V13.86 復刻邏輯修復版) =================
// 修正：移除封裝，確保全域讀取
// 功能：還原鐵皮屋、黑鐵皮、挑高選項、PDF 匯出、重置確認

var { useState } = React;

// PDF 匯出函數
window.exportToPDF = (elementId, title) => {
    const input = document.getElementById(elementId);
    if (!input) return;
    const btn = document.activeElement;
    const originalText = btn.innerText;
    btn.innerText = "生成中...";
    
    if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
        alert("PDF 庫未載入，請檢查網路");
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

// 1. 負載計算 (還原舊版)
window.MultiRoomCapacityCalculator = ({ rooms, setRooms, result, setResult, db }) => {
    const addRoom = () => setRooms([...rooms, { id: Date.now(), name: `房間 ${rooms.length + 1}`, w: '', d: '', h: '3.0', ping: '', conditions: {}, kw: 0 }]);
    
    const resetAll = () => {
        if (confirm("確定重置所有資料？")) {
            setRooms([{ id: Date.now(), name: '客廳', w: '', d: '', h: '3.0', ping: '', conditions: {}, kw: 0 }]);
            setResult(null);
        }
    };

    const removeRoom = (id) => {
        if (rooms.length > 1 && confirm("確定刪除此房間？")) setRooms(rooms.filter(r => r.id !== id));
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
            if (cond === 'iron') newConds.blackIron = false;
            if (cond === 'blackIron') newConds.iron = false;
            newConds[cond] = !newConds[cond];
            return { ...r, conditions: newConds };
        }));
    };

    const calculate = () => {
        let totalKw = 0;
        const calculatedRooms = rooms.map(r => {
            let baseKcal = 500;
            if (r.conditions.top) baseKcal += 100;
            if (r.conditions.west) baseKcal += 80;
            if (r.conditions.fullSun) baseKcal += 150;
            if (r.conditions.iron) baseKcal += 200;
            if (r.conditions.blackIron) baseKcal += 300;

            const height = parseFloat(r.h) || 3.0;
            const hFactor = height > 3.0 ? height / 3.0 : 1;

            const reqKcal = parseFloat(r.ping) * baseKcal * hFactor;
            const reqKw = reqKcal / 860;
            totalKw += reqKw;

            const suitable = db.filter(m => !m.type.includes('室外') && parseFloat(m.maxKw) >= reqKw)
                               .sort((a,b) => parseFloat(a.maxKw) - parseFloat(b.maxKw))[0];

            return { ...r, reqKw: reqKw.toFixed(2), match: suitable ? `${suitable.brandCN} ${suitable.modelIdu} (${suitable.maxKw}kW)` : '無合適機型' };
        });
        
        const suitableOdu = db.filter(m => m.type.includes('室外') && parseFloat(m.maxKw) >= totalKw)
                              .sort((a,b) => parseFloat(a.maxKw) - parseFloat(b.maxKw))[0];
        setResult({ totalKw: totalKw.toFixed(2), rooms: calculatedRooms, odu: suitableOdu });
    };

    return (
        <div id="capacity-calculator" className="space-y-4 animate-fade-in pb-20">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><window.Icon name="ruler" /> 空間負載計算</h3>
                <div className="flex gap-2">
                    <button onClick={resetAll} className="text-xs bg-red-900/50 hover:bg-red-800 text-red-200 px-3 py-1.5 rounded border border-red-700/50">重置</button>
                    <button onClick={addRoom} className="text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 py-1.5 rounded">+ 房間</button>
                </div>
            </div>
            
            <div className="space-y-4">
                {rooms.map((room, idx) => (
                    <div key={room.id} className="glass-panel p-4 rounded-xl relative transition-all">
                        <div className="flex justify-between mb-2 border-b border-white/10 pb-2">
                            <input type="text" value={room.name} onChange={(e) => updateRoom(room.id, 'name', e.target.value)} className="bg-transparent text-yellow-500 font-bold text-sm w-24 focus:outline-none" />
                            {rooms.length > 1 && <button onClick={() => removeRoom(room.id)} className="text-gray-500 hover:text-red-400"><window.Icon name="x" className="w-4 h-4" /></button>}
                        </div>
                        <div className="grid grid-cols-4 gap-2 mb-3">
                            <div><label className="text-[10px] text-gray-400 block mb-1">長(cm)</label><input type="number" value={room.d} onChange={e => updateRoom(room.id, 'd', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white" /></div>
                            <div><label className="text-[10px] text-gray-400 block mb-1">寬(cm)</label><input type="number" value={room.w} onChange={e => updateRoom(room.id, 'w', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white" /></div>
                            <div><label className="text-[10px] text-gray-400 block mb-1">高(m)</label><input type="number" value={room.h} onChange={e => updateRoom(room.id, 'h', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white" placeholder="3.0" /></div>
                            <div><label className="text-[10px] text-gray-400 block mb-1">坪數</label><input type="number" value={room.ping} onChange={e => updateRoom(room.id, 'ping', e.target.value)} className="w-full bg-black/40 border border-yellow-500/50 rounded px-2 py-1 text-xs text-yellow-500 font-bold" /></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[{k:'top',l:'頂樓'},{k:'west',l:'西曬'},{k:'fullSun',l:'全日曬'},{k:'iron',l:'鐵皮'},{k:'blackIron',l:'黑鐵皮'}].map(c => (
                                <button key={c.k} onClick={() => toggleCondition(room.id, c.k)} className={`text-[10px] px-2 py-1 rounded border transition-colors ${room.conditions[c.k] ? 'bg-yellow-500 text-black border-yellow-500 font-bold' : 'bg-white/5 border-white/10 text-gray-400'}`}>{c.l}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-3 mt-6">
                <button onClick={calculate} className="flex-1 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-xl shadow-lg flex justify-center items-center gap-2"><window.Icon name="check" /> 計算配置</button>
                {result && <button onClick={() => window.exportToPDF('capacity-calculator', '負載計算表')} className="px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1"><window.Icon name="pdf" className="w-5 h-5"/> PDF</button>}
            </div>

            {result && (
                <div className="glass-panel p-5 rounded-xl mt-6 animate-slide-up border border-yellow-500/30">
                    <div className="text-center mb-4"><span className="text-xs text-gray-400 uppercase tracking-widest">Total Load</span><div className="text-4xl font-black text-white mt-1">{result.totalKw} <span className="text-sm font-normal text-gray-500">kW</span></div></div>
                    <div className="space-y-3 mb-5">
                        {result.rooms.map((r, i) => (
                            <div key={i} className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                                <div><span className="text-gray-300 font-bold">{r.name}</span><span className="text-gray-500 text-[10px]"> {r.ping}坪/高{r.h}m</span></div>
                                <div className="text-right"><div className="text-yellow-500 font-bold">{r.reqKw} kW</div><div className="text-[10px] text-gray-400">{r.match}</div></div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10"><span className="text-[10px] text-gray-400 block mb-1">建議室外機</span>{result.odu ? (<div className="flex justify-between items-center"><span className="text-sm font-bold text-white">{result.odu.brandCN} {result.odu.modelOdu}</span><span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded font-bold">{result.odu.maxKw} kW</span></div>) : <span className="text-xs text-red-400">無單一主機可滿足</span>}</div>
                </div>
            )}
        </div>
    );
};

// 2. 物理降溫 (維持)
window.CoolingTimeCalculator = ({ state, setState }) => {
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
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><window.Icon name="thermometer" /> 降溫時間模擬</h3>
            <div className="grid grid-cols-2 gap-4">
                <div><label className="text-[10px] text-gray-400">空間坪數</label><input type="number" value={state.ping} onChange={e => setState({...state, ping: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                <div><label className="text-[10px] text-gray-400">天花板高(m)</label><input type="number" value={state.height} onChange={e => setState({...state, height: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                <div><label className="text-[10px] text-gray-400">目前室溫</label><input type="number" value={state.currentTemp} onChange={e => setState({...state, currentTemp: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                <div><label className="text-[10px] text-gray-400">目標溫度</label><input type="number" value={state.targetTemp} onChange={e => setState({...state, targetTemp: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded text-white p-2 text-sm" /></div>
                <div className="col-span-2"><label className="text-[10px] text-gray-400">冷氣能力 (kW)</label><input type="number" value={state.acKw} onChange={e => setState({...state, acKw: e.target.value})} className="w-full bg-black/40 border border-yellow-500/50 rounded text-yellow-500 font-bold p-2 text-sm" /></div>
            </div>
            <button onClick={calculate} className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl shadow transition-colors">計算預估時間</button>
            {state.result && (<div className="text-center p-4 bg-black/30 rounded-xl border border-white/10 mt-4"><span className="text-gray-400 text-xs">預計降溫時間</span><div className="text-4xl font-black text-yellow-500 my-2">{state.result} <span className="text-sm">分鐘</span></div></div>)}
        </div>
    );
};

// 3. 吊隱式風管 (還原舊版 - 集風箱/出風口)
window.DuctedCalculator = ({ plans, setPlans }) => {
    const addPlan = () => setPlans([...plans, { id: Date.now(), name: '機台', cmh: '', boxW: '', boxH: '', outlets: 1, outletW: '', outletH: '', result: null }]);
    
    const resetAll = () => {
        if (confirm("確定重置規劃？")) setPlans([{ id: Date.now(), name: '機台', cmh: '', boxW: '', boxH: '', outlets: 1, outletW: '', outletH: '', result: null }]);
    };

    const removePlan = (id) => {
        if (plans.length > 1 && confirm("確定刪除此機台？")) setPlans(plans.filter(p => p.id !== id));
    };

    const updatePlan = (id, field, val) => setPlans(plans.map(p => p.id === id ? { ...p, [field]: val } : p));

    const calculate = (id) => {
        setPlans(plans.map(p => {
            if (p.id !== id) return p;
            const cmh = parseFloat(p.cmh);
            
            // 集風箱風速
            const boxArea = (parseFloat(p.boxW) * parseFloat(p.boxH)) / 1000000; // mm轉m2
            const boxV = cmh / 3600 / boxArea;

            // 出風口風速
            const outletArea = (parseFloat(p.outletW) * parseFloat(p.outletH)) / 1000000;
            const totalOutletArea = outletArea * parseInt(p.outlets);
            const outletV = cmh / 3600 / totalOutletArea;

            return { ...p, result: { boxV: boxV.toFixed(1), outletV: outletV.toFixed(1) } };
        }));
    };

    return (
        <div id="ducted-calculator" className="space-y-6 animate-fade-in pb-20">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><window.Icon name="box" /> 吊隱式風管規劃</h3>
                <div className="flex gap-2">
                    <button onClick={resetAll} className="text-xs bg-red-900/50 hover:bg-red-800 text-red-200 px-3 py-1.5 rounded border border-red-700/50">重置</button>
                    <button onClick={() => window.exportToPDF('ducted-calculator', '風管規劃表')} className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded flex items-center gap-1"><window.Icon name="pdf" className="w-3 h-3"/> PDF</button>
                    <button onClick={addPlan} className="text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 py-1.5 rounded">+ 機台</button>
                </div>
            </div>

            {plans.map((p, idx) => (
                <div key={p.id} className="glass-panel p-5 rounded-xl relative">
                    <div className="flex justify-between mb-4 border-b border-white/10 pb-2">
                        <span className="text-yellow-500 font-bold text-lg">#{idx+1}</span>
                        {plans.length > 1 && <button onClick={() => removePlan(p.id)} className="text-gray-500 hover:text-red-400"><window.Icon name="x" className="w-4 h-4" /></button>}
                    </div>
                    
                    <div className="mb-4">
                        <label className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1 block">總風量 (CMH)</label>
                        <input type="number" value={p.cmh} onChange={e => updatePlan(p.id, 'cmh', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-white font-mono focus:border-yellow-500 outline-none" placeholder="例如: 800" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="col-span-2 text-[10px] text-yellow-500 font-bold uppercase tracking-wider">集風箱尺寸 (mm)</div>
                        <div><input type="number" value={p.boxW} onChange={e => updatePlan(p.id, 'boxW', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" placeholder="寬 W" /></div>
                        <div><input type="number" value={p.boxH} onChange={e => updatePlan(p.id, 'boxH', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" placeholder="高 H" /></div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="col-span-3 text-[10px] text-blue-400 font-bold uppercase tracking-wider">出風口配置 (mm)</div>
                        <div><label className="text-[9px] text-gray-500 block">數量</label><select value={p.outlets} onChange={e => updatePlan(p.id, 'outlets', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div>
                        <div><label className="text-[9px] text-gray-500 block">寬 W</label><input type="number" value={p.outletW} onChange={e => updatePlan(p.id, 'outletW', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" /></div>
                        <div><label className="text-[9px] text-gray-500 block">高 H</label><input type="number" value={p.outletH} onChange={e => updatePlan(p.id, 'outletH', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-white text-sm" /></div>
                    </div>

                    <button onClick={() => calculate(p.id)} className="w-full py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 text-xs font-bold rounded mb-4 transition-colors">計算風速</button>

                    {p.result && (
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-black/40 rounded p-2 border border-white/10">
                                <span className="text-[10px] text-gray-400 block">集風箱風速</span>
                                <span className={`text-lg font-bold font-mono ${parseFloat(p.result.boxV) > 6 ? 'text-red-400' : 'text-green-400'}`}>{p.result.boxV} <span className="text-xs">m/s</span></span>
                            </div>
                            <div className="bg-black/40 rounded p-2 border border-white/10">
                                <span className="text-[10px] text-gray-400 block">出風口風速</span>
                                <span className={`text-lg font-bold font-mono ${parseFloat(p.result.outletV) > 3 ? 'text-red-400' : 'text-green-400'}`}>{p.result.outletV} <span className="text-xs">m/s</span></span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// 匯出
window.Calculators = { MultiRoomCapacityCalculator: window.MultiRoomCapacityCalculator, CoolingTimeCalculator: window.CoolingTimeCalculator, DuctedCalculator: window.DuctedCalculator };

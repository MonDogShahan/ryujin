// ================= 3. 計算工具邏輯 (calculators.js) V13.8 =================
const { useState, useMemo, useEffect } = React;

// PDF 生成器 (專業版)
const generateProfessionalPDF = (title, items, summary) => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    if (!printWindow) { alert('請允許彈出視窗以列印 PDF'); return; }

    const date = new Date().toLocaleString();
    
    let html = `
    <html>
    <head>
        <title>${title}</title>
        <style>
            body { font-family: "Microsoft JhengHei", sans-serif; padding: 40px; color: #333; }
            .header { display: flex; justify-content: space-between; border-bottom: 3px solid #f59e0b; padding-bottom: 20px; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: 900; color: #1e293b; font-style: italic; }
            .meta { text-align: right; font-size: 12px; color: #64748b; }
            .section-title { background: #1e293b; color: #fff; padding: 8px 15px; font-size: 14px; font-weight: bold; border-radius: 4px; margin-top: 20px; margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px; }
            th { background: #f1f5f9; text-align: left; padding: 10px; border-bottom: 2px solid #cbd5e1; color: #475569; font-weight: bold; }
            td { padding: 10px; border-bottom: 1px solid #e2e8f0; }
            .total-box { background: #fef3c7; border: 1px solid #fcd34d; padding: 15px; border-radius: 8px; text-align: right; font-size: 16px; font-weight: bold; color: #92400e; }
            .footer { margin-top: 50px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; }
            @media print { .no-print { display: none; } }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo">龍神空調幫手 <span style="font-size:12px;color:#f59e0b;font-weight:normal">PROFESSIONAL</span></div>
            <div class="meta">
                <div>報告日期: ${date}</div>
                <div>專案: ${title}</div>
            </div>
        </div>
        
        <div class="section-title">規劃明細</div>
        ${items}
        
        ${summary ? `<div class="total-box">${summary}</div>` : ''}
        
        <div class="footer">本報告由 龍神空調幫手 自動生成 | 數據僅供參考，實際施工請依現場為準</div>
    </body>
    </html>`;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 500);
};

// --- 負載計算 (PDF 升級版) ---
const MultiRoomCapacityCalculator = ({ rooms, setRooms, result, setResult, db }) => {
    const [error, setError] = useState('');
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const addRoom = () => { if (rooms.length >= 8) { setError('最多 8 間'); return; } setError(''); setRooms([...rooms, { id: Date.now(), name: `空間 ${rooms.length + 1}`, w: '', d: '', ping: '', conditions: {}, kw: 0 }]); };
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
            return { ...r, conditions: nextConds };
        }));
    };

    const resetAll = () => { setRooms([{ id: Date.now(), name: '客廳', w: '', d: '', ping: '', conditions: {}, kw: 0 }]); setResult(null); setShowResetConfirm(false); };

    const calculateAll = () => {
        let totalKw = 0;
        const calculated = rooms.map(r => {
            const p = parseFloat(r.ping);
            if (!p) return r;
            let kcal = 450, mult = 1.0;
            if (r.conditions.westSun) mult += 0.2; if (r.conditions.allDaySun) mult += 0.3;
            if (r.conditions.topFloor) mult += 0.2; if (r.conditions.ironSheet) mult += 0.5;
            const kw = parseFloat(((kcal * mult * p) / 860).toFixed(2));
            totalKw += kw;
            const bestMatch = db.filter(d => d.type === '壁掛式' && d.maxKw >= kw).sort((a,b) => a.maxKw - b.maxKw)[0];
            return { ...r, kw, bestMatch };
        });
        setRooms(calculated);
        setResult({ totalKw: totalKw.toFixed(2) });
    };

    const handleSavePDF = () => {
        if (!result) { setError('請先進行計算後再存檔'); return; }
        const rows = `
            <table>
                <thead><tr><th>空間名稱</th><th>坪數</th><th>環境條件</th><th>需求 kW</th><th>建議機型</th></tr></thead>
                <tbody>
                    ${rooms.map(r => `<tr>
                        <td>${r.name}</td>
                        <td>${r.ping}</td>
                        <td>${Object.keys(r.conditions).filter(k=>r.conditions[k]).map(k=>conditionLabels[k]).join(', ') || '標準'}</td>
                        <td>${r.kw} kW</td>
                        <td>${r.bestMatch ? `${r.bestMatch.brandCN} ${r.bestMatch.modelIdu}` : '無合適'}</td>
                    </tr>`).join('')}
                </tbody>
            </table>`;
        const summary = `總負載需求: ${result.totalKw} kW`;
        generateProfessionalPDF('負載配置報告', rows, summary);
    };

    return (
        <div className="animate-fade-in pb-10">
            <div className="flex justify-between items-center mb-4 text-white">
                <h2 className="text-yellow-400 font-bold flex items-center gap-2 text-sm"><Icon name="ruler" className="w-5 h-5"/> 負載配置</h2>
                <div className="flex gap-2">
                    <button onClick={handleSavePDF} className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-xs font-bold flex items-center gap-1"><Icon name="save" className="w-4 h-4"/> 存成 PDF</button>
                    <button onClick={() => setShowResetConfirm(true)} className="p-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"><Icon name="refresh" className="w-4 h-4"/></button>
                </div>
            </div>
            {error && <div className="text-red-400 text-center text-xs mb-2 font-bold">{error}</div>}
            {showResetConfirm && (
                <div className="bg-red-900/30 border border-red-500/50 p-3 rounded-lg mb-4 text-center">
                    <p className="text-xs text-red-200 mb-2">確定要清空所有資料嗎？</p>
                    <div className="flex gap-2 justify-center">
                        <button onClick={resetAll} className="px-3 py-1 bg-red-600 text-white rounded text-xs">確定</button>
                        <button onClick={() => setShowResetConfirm(false)} className="px-3 py-1 bg-gray-600 text-white rounded text-xs">取消</button>
                    </div>
                </div>
            )}
            <div className="space-y-4 mb-6">
                {rooms.map((room) => (
                    <div key={room.id} className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-sm relative">
                        {rooms.length > 1 && <button onClick={() => removeRoom(room.id)} className="absolute top-3 right-3 text-gray-500 hover:text-red-400"><Icon name="x" className="w-4 h-4" /></button>}
                        <div className="mb-3"><input type="text" value={room.name} onChange={e => updateRoom(room.id, 'name', e.target.value)} className="bg-transparent border-b border-industrial-600 font-bold w-full text-sm text-white" placeholder="空間名稱" /></div>
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
                        {room.bestMatch && <div className="mt-2 text-xs text-green-400 bg-green-900/20 p-2 rounded">推薦: {room.bestMatch.brandCN} {room.bestMatch.modelIdu} ({room.bestMatch.maxKw}kW)</div>}
                    </div>
                ))}
            </div>
            <button onClick={addRoom} className="w-full py-3 mb-3 border border-dashed border-gray-600 text-gray-400 rounded-xl text-sm hover:text-white">+ 新增空間</button>
            <button onClick={calculateAll} className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-lg active:scale-95 text-sm flex items-center justify-center gap-2"><Icon name="zap" className="w-4 h-4"/> 計算並推薦</button>
            {result && <div className="mt-6 bg-industrial-900 rounded-2xl p-5 border border-yellow-600/50 text-center"><div className="text-gray-500 text-xs mb-1">系統總負載</div><div className="text-4xl font-bold text-yellow-400">{result.totalKw} <span className="text-sm">kW</span></div></div>}
        </div>
    );
};

// --- 吊隱式風管規劃 (V13.8: 批量 + 智慧填寫 + PDF) ---
const DuctedCalculator = ({ state, setState, db }) => {
    // 使用本地狀態管理批量清單，不依賴 App.js 的單一 state
    const [plans, setPlans] = useState([{ id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', ping: '', outlets: 1, result: null }]);
    const [brands, setBrands] = useState([]);
    const [showReset, setShowReset] = useState(false);

    // 初始化品牌列表
    useEffect(() => {
        if (db) {
            const ductBrands = [...new Set(db.filter(m => m.type === '吊隱式').map(m => m.brandCN))];
            setBrands(ductBrands);
        }
    }, [db]);

    const updatePlan = (id, field, value) => {
        setPlans(plans.map(p => {
            if (p.id !== id) return p;
            let updates = { [field]: value };

            // 選擇品牌後清空型號
            if (field === 'brand') updates.model = '';

            // 選擇型號後，自動填寫規格 & 智慧計算出風口
            if (field === 'model') {
                const modelData = db.find(m => m.id === value);
                if (modelData) {
                    updates.kw = modelData.maxKw;
                    // 解析法蘭尺寸 "700x200"
                    if (modelData.idu?.flangeDims) {
                        const dims = modelData.idu.flangeDims.replace(/[^0-9x]/g, '').split('x');
                        if (dims.length === 2) {
                            updates.flangeW = dims[0];
                            updates.flangeH = dims[1];
                        }
                    }
                    // 智慧推算建議出風口數量
                    const kw = parseFloat(modelData.maxKw);
                    if (kw < 2.8) updates.outlets = 1;
                    else if (kw < 5.0) updates.outlets = 2;
                    else if (kw < 8.0) updates.outlets = 3;
                    else updates.outlets = 4;
                }
            }
            return { ...p, ...updates };
        }));
    };

    const calculatePlan = (id) => {
        setPlans(plans.map(p => {
            if (p.id !== id) return p;
            const fw = parseFloat(p.flangeW);
            const fh = parseFloat(p.flangeH);
            const outlets = parseInt(p.outlets);
            if (!fw || !fh || !outlets) return { ...p, result: { error: '請完整輸入法蘭與出風口' } };

            const flangeArea = Math.round((fw * fh) / 100);
            const area8 = 314;
            let statusColor = "text-green-400";
            let advice = "";

            // 簡單判斷邏輯
            if (flangeArea < outlets * area8 * 0.8) {
                statusColor = "text-red-400";
                advice = "法蘭過小，建議減少孔數或擴管";
            } else {
                advice = "配置合理，可使用";
            }

            return { ...p, result: { flangeArea, statusColor, advice } };
        }));
    };

    const addPlan = () => setPlans([...plans, { id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', ping: '', outlets: 1, result: null }]);
    const removePlan = (id) => setPlans(plans.filter(p => p.id !== id));
    
    const handleSavePDF = () => {
        const rows = `
            <table>
                <thead><tr><th>品牌/型號</th><th>能力</th><th>法蘭(mm)</th><th>出風口</th><th>計算結果</th></tr></thead>
                <tbody>
                    ${plans.map(p => {
                        const modelName = db.find(m => m.id === p.model)?.modelIdu || p.model;
                        return `<tr>
                            <td>${p.brand} <br/> <span style="font-size:10px">${modelName}</span></td>
                            <td>${p.kw} kW</td>
                            <td>${p.flangeW} x ${p.flangeH}</td>
                            <td>${p.outlets} 孔</td>
                            <td>${p.result ? `${p.result.flangeArea}cm² (${p.result.advice})` : '未計算'}</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>`;
        generateProfessionalPDF('吊隱式風管規劃報告', rows, `共規劃 ${plans.length} 台主機`);
    };

    const resetAll = () => { setPlans([{ id: Date.now(), brand: '', model: '', kw: '', flangeW: '', flangeH: '', ping: '', outlets: 1, result: null }]); setShowReset(false); };

    return (
        <div className="animate-fade-in pb-10 space-y-4">
            <div className="flex justify-between items-center mb-2 text-white">
                <h2 className="text-blue-400 font-bold flex items-center gap-2 text-sm"><Icon name="box" className="w-4 h-4" /> 吊隱式批量規劃</h2>
                <div className="flex gap-2">
                    <button onClick={handleSavePDF} className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-xs font-bold flex items-center gap-1"><Icon name="save" className="w-4 h-4"/> 存成 PDF</button>
                    <button onClick={() => setShowReset(true)} className="p-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"><Icon name="refresh" className="w-4 h-4"/></button>
                </div>
            </div>

            {showReset && (
                <div className="bg-red-900/30 border border-red-500/50 p-3 rounded-lg text-center">
                    <p className="text-xs text-red-200 mb-2">確定重置所有規劃嗎？</p>
                    <div className="flex gap-2 justify-center">
                        <button onClick={resetAll} className="px-3 py-1 bg-red-600 text-white rounded text-xs">確定</button>
                        <button onClick={() => setShowReset(false)} className="px-3 py-1 bg-gray-600 text-white rounded text-xs">取消</button>
                    </div>
                </div>
            )}

            {plans.map((plan, idx) => (
                <div key={plan.id} className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-xl relative">
                    <div className="absolute top-2 left-2 text-[10px] text-gray-500 font-bold">#{idx + 1}</div>
                    {plans.length > 1 && <button onClick={() => removePlan(plan.id)} className="absolute top-2 right-2 text-gray-500 hover:text-red-400"><Icon name="x" className="w-4 h-4"/></button>}
                    
                    <div className="grid grid-cols-2 gap-3 mt-4 mb-3">
                        <div className="relative">
                            <span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[8px] text-gray-400">品牌</span>
                            <select value={plan.brand} onChange={e => updatePlan(plan.id, 'brand', e.target.value)} className="w-full bg-industrial-900 border border-industrial-600 rounded p-2 text-xs text-white">
                                <option value="">請選擇</option>
                                {brands.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </div>
                        <div className="relative">
                            <span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[8px] text-gray-400">型號</span>
                            <select value={plan.model} onChange={e => updatePlan(plan.id, 'model', e.target.value)} className="w-full bg-industrial-900 border border-industrial-600 rounded p-2 text-xs text-white" disabled={!plan.brand}>
                                <option value="">請選擇</option>
                                {db.filter(m => m.brandCN === plan.brand && m.type === '吊隱式').map(m => (
                                    <option key={m.id} value={m.id}>{m.modelIdu} ({m.maxKw}kW)</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="relative"><span className="absolute top-0 left-1 text-[8px] text-blue-400">kW</span><input type="number" value={plan.kw} onChange={e=>updatePlan(plan.id, 'kw', e.target.value)} className="w-full bg-industrial-900 rounded p-2 pt-3 text-xs text-white text-center" /></div>
                        <div className="relative col-span-2 flex items-center gap-1">
                            <input type="number" value={plan.flangeW} onChange={e=>updatePlan(plan.id, 'flangeW', e.target.value)} className="w-full bg-industrial-900 rounded p-2 text-xs text-white text-center" placeholder="寬" />
                            <span className="text-white">x</span>
                            <input type="number" value={plan.flangeH} onChange={e=>updatePlan(plan.id, 'flangeH', e.target.value)} className="w-full bg-industrial-900 rounded p-2 text-xs text-white text-center" placeholder="高" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex-1 relative">
                            <span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[8px] text-green-400">出風口</span>
                            <input type="number" value={plan.outlets} onChange={e=>updatePlan(plan.id, 'outlets', e.target.value)} className="w-full bg-industrial-900 border border-green-900/50 rounded p-2 text-center text-white" />
                        </div>
                        <button onClick={() => calculatePlan(plan.id)} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded p-2 text-xs font-bold">試算</button>
                    </div>

                    {plan.result && (
                        <div className="mt-3 pt-2 border-t border-gray-700">
                            <div className={`text-xs font-bold ${plan.result.statusColor}`}>{plan.result.advice}</div>
                            <div className="text-[10px] text-gray-500">法蘭面積: {plan.result.flangeArea} cm²</div>
                        </div>
                    )}
                </div>
            ))}
            
            <button onClick={addPlan} className="w-full py-3 border border-dashed border-gray-600 text-gray-400 rounded-xl text-sm hover:text-white">+ 新增一台</button>
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

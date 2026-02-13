// ================= 1. 完整資料庫 (2026 型錄) =================
const AC_DATABASE = [
    // --- 日立 Hitachi (2025型錄) ---
    { id: 'hitachi-njp-22', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.85', odu: { dims: '560×730×290', weight: '33', power: '220V', currentCool: '2.5A', currentHeat: '3.0A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C' }, idu: { dims: '295×810×250', weight: '9.5', noise: '19dB' } },
    { id: 'hitachi-njp-28', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.20', odu: { dims: '560×730×290', weight: '34', power: '220V', currentCool: '3.0A', currentHeat: '3.4A', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C' }, idu: { dims: '295×810×250', weight: '9.5', noise: '19dB' } },
    { id: 'hitachi-njp-36', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.85', odu: { dims: '560×730×290', weight: '35', power: '220V', currentCool: '4.2A', currentHeat: '4.8A', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C' }, idu: { dims: '295×810×250', weight: '10.0', noise: '22dB' } },
    { id: 'hitachi-njp-50', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '6.05', odu: { dims: '800×880×315', weight: '48', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C' }, idu: { dims: '295×1090×250', weight: '12.5', noise: '25dB' } },
    
    // 旗艦 NT
    { id: 'hitachi-nt-22', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'RAS-22NT', modelOdu: 'RAC-22NP', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.40', odu: { dims: '560×730×290', weight: '32', power: '220V', currentCool: '2.4A', currentHeat: '2.8A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C' }, idu: { dims: '295×810×250', weight: '9.0', noise: '19dB' } },
    { id: 'hitachi-nt-50', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'RAS-50NT', modelOdu: 'RAC-50NP', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '5.85', odu: { dims: '800×880×315', weight: '47', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C' }, idu: { dims: '295×1090×250', weight: '12.5' } },

    // --- 大金 Daikin ---
    { id: 'daikin-y-22', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.60', odu: { dims: '595×845×300', weight: '36', power: '220V', currentCool: '1.8A', currentHeat: '2.0A', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×798×272', weight: '10.0' } },
    { id: 'daikin-y-50', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTXM50YVLT', modelOdu: 'RXM50YVLT', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '6.10', odu: { dims: '695×930×350', weight: '48', power: '220V', currentCool: '5.5A', currentHeat: '6.0A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×990×281', weight: '14' } },
    { id: 'daikin-z-22', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXM22ZVLT', modelOdu: 'RXM22ZVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.65', odu: { dims: '595×845×300', weight: '36', power: '220V', currentCool: '1.8A', currentHeat: '2.0A', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×798×272', weight: '11' } },
    { id: 'daikin-x-22', brandCN: '大金', series: '橫綱X系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXM22XVLT', modelOdu: 'RXM22XVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.20', odu: { dims: '550×675×284', weight: '33', power: '220V', currentCool: '2.0A', currentHeat: '2.2A', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '285×770×226', weight: '9' } },
    { id: 'daikin-u-22', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.30', odu: { dims: '550×675×284', weight: '28', power: '220V', currentCool: '2.2A', currentHeat: '2.4A', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '285×770×226', weight: '9' } },
    { id: 'daikin-u-22-co', brandCN: '大金', series: '大關U系列', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXV22UVLT', modelOdu: 'RKO22UVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.30', odu: { dims: '550×675×284', weight: '27', power: '220V', currentCool: '2.2A', currentHeat: 'N/A', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '285×770×226', weight: '9' } }, 
    { id: 'daikin-u-50', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '5.50', odu: { dims: '695×930×350', weight: '45', power: '220V', currentCool: '6.2A', currentHeat: '6.8A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×990×263', weight: '13' } },
    { id: 'daikin-z-std-22', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXV22ZVLT', modelOdu: 'RXV22ZVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.30', odu: { dims: '550×675×284', weight: '28', power: '220V', currentCool: '2.2A', currentHeat: '2.4A', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '285×770×226', weight: '9' } },
    { id: 'daikin-sa-22', brandCN: '大金', series: '大關SA系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTHF22VAVLT', modelOdu: 'RHF22VAVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.00', odu: { dims: '550×658×275', weight: '27', power: '220V', currentCool: '2.3A', currentHeat: '2.5A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '283×770×223', weight: '8' } },
    { id: 'daikin-v-20', brandCN: '大金', series: '經典V系列', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, modelIdu: 'FTHF20VAVLT', modelOdu: 'RHF20VAVLT', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.00', odu: { dims: '550×658×275', weight: '27', power: '220V', currentCool: '2.1A', currentHeat: 'N/A', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '283×770×223', weight: '8' } },
    { id: 'daikin-sky-71', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.1, modelIdu: 'FDBQ71ZAVLT', modelOdu: 'RZQ71ZAVLT', pipes: '3分(9.52mm) / 5分(15.88mm)', cspf: '5.6', odu: { dims: '595×845×300', weight: '44', power: '220V', currentCool: '9.0A', currentHeat: '9.5A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '245×1000×800' } },
    { id: 'daikin-sky-160', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 16.0, modelIdu: '搭配內機', modelOdu: 'RZQ160ZAVLT', pipes: '3分(9.52mm) / 6分(19.05mm)', cspf: '4.8', odu: { dims: '1430×940×320', weight: '95', power: '220V', currentCool: '20.0A', currentHeat: '21.0A', currentMax: '35.0A', powerWire: '22mm²', signalWire: '2.0mm²×4C' }, idu: null },

    // --- 三菱重工 Mitsubishi ---
    { id: 'mhi-zsxt-25', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, modelIdu: 'SRK25ZSXT-W', modelOdu: 'SRC25ZSXT-W', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '7.80', odu: { dims: '595×780×290', weight: '35', power: '220V', currentCool: '2.1A', currentHeat: '2.4A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '305×920×220', weight: '13.0', noise: '19dB' } },
    { id: 'mhi-zst-35', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, modelIdu: 'SRK35ZST-W', modelOdu: 'SRC35ZST-W', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '6.10', odu: { dims: '540×780×290', weight: '33', power: '220V', currentCool: '3.8A', currentHeat: '4.2A', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '290×870×230', weight: '10.0', noise: '22dB' } },
    { id: 'mhi-zrt-71', brandCN: '三菱重工', series: '朝日系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, modelIdu: 'SRK71ZRT-W', modelOdu: 'SRC71ZRT-W', pipes: '3分(9.52mm) / 5分(15.88mm)', cspf: '5.20', odu: { dims: '750×880×340', weight: '58', power: '220V', currentCool: '9.2A', currentHeat: '9.8A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '339×1197×262', weight: '16.0', noise: '26dB' } },
    { id: 'mhi-vs-50', brandCN: '三菱重工', series: '旭山系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'SRK50VS-W', modelOdu: 'SRC50VS-W', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '5.30', odu: { dims: '595×780×290', weight: '38', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '268×790×224', weight: '10.0' } },
    { id: 'mhi-fdc-140', brandCN: '三菱重工', series: '商用系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 14.0, modelIdu: 'FDT140', modelOdu: 'FDC140VNP', pipes: '3分(9.52mm) / 5分(15.88mm)', cspf: '5.1', odu: { dims: '845×970×370', weight: '80', power: '220V', currentCool: '17.0A', currentHeat: '18.0A', currentMax: '32.0A', powerWire: '14mm²', signalWire: '2.0mm²×4C' }, idu: null },

    // --- 國際牌 Panasonic ---
    { id: 'panasonic-rx-22', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'CS-RX22NA2', modelOdu: 'CU-RX22NHA2', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '8.30', odu: { dims: '542×780×289', weight: '30', power: '220V', currentCool: '2.0A', currentHeat: '2.3A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×798×235', weight: '10.0' } },
    { id: 'panasonic-qx-50', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'CS-QX50NA2', modelOdu: 'CU-QX50NHA2', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '6.00', odu: { dims: '619×824×299', weight: '38', power: '220V', currentCool: '6.2A', currentHeat: '6.6A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×990×255', weight: '12.0' } },

    // --- 富士通 & 華菱 ---
    { id: 'fujitsu-kg-50', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'ASCG050KGTA', modelOdu: 'AOCG050KGTA', pipes: '2分(6.35mm) / 4分(12.70mm)', cspf: '5.60', odu: { dims: '632×799×290', weight: '38', power: '220V', currentCool: '6.0A', currentHeat: '6.2A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '280×980×240', weight: '12.5' } },
    { id: 'hawrin-dt-36', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'HP-36KA', modelOdu: 'HPC-36KA', pipes: '2分(6.35mm) / 3分(9.52mm)', cspf: '5.80', odu: { dims: '555×770×300', weight: '32', power: '220V', currentCool: '4.0A', currentHeat: '4.5A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C' }, idu: { dims: '295×800×210', weight: '10.0' } }
];

// ================= 2. React 應用程式 =================
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

// --- 規格詳情視窗 (智慧切換版) ---
const SpecModal = ({ group, onClose }) => {
    if (!group || !group.variants) return null;
    
    // 找有無冷暖/冷專
    const heatVariant = group.variants.find(v => v.func === '冷暖');
    const coolVariant = group.variants.find(v => v.func === '冷專');
    const [displayMode, setDisplayMode] = useState(heatVariant ? 'heat' : 'cool');
    
    // 確保當前顯示的型號存在，否則切換
    const currentVariant = displayMode === 'heat' ? heatVariant : coolVariant;
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
                
                <div className="glass-header p-5 flex justify-between items-start shrink-0 z-20">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">{currentVariant.brandCN}</span>
                            <h3 className="text-xl font-bold text-white tracking-wide">{currentVariant.series}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="flex bg-industrial-900 rounded-lg p-1 border border-gray-700 mr-2">
                                {heatVariant && (
                                    <button 
                                        onClick={() => setDisplayMode('heat')} 
                                        className={`px-3 py-1 text-xs rounded-md transition-all ${displayMode === 'heat' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        冷暖
                                    </button>
                                )}
                                {coolVariant && (
                                    <button 
                                        onClick={() => setDisplayMode('cool')} 
                                        className={`px-3 py-1 text-xs rounded-md transition-all ${displayMode === 'cool' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        冷專
                                    </button>
                                )}
                            </div>
                            <span className="text-sm font-mono text-yellow-400 font-bold">{currentVariant.maxKw} kW</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-industrial-800 hover:bg-red-900/50 rounded-full text-gray-400 hover:text-red-400 transition-colors"><Icon name="x" className="w-5 h-5" /></button>
                </div>

                <div className="flex border-b border-gray-800 bg-industrial-900/50 backdrop-blur-sm sticky top-0 z-10">
                    {['basic:⚡ 效能概覽', 'detail:📦 內外機細節', 'install:🔧 安裝參數'].map(tab => {
                        const [key, label] = tab.split(':');
                        return (
                            <button key={key} onClick={() => setActiveTab(key)} className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase transition-all relative ${activeTab === key ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                                {label}
                                {activeTab === key && <span className={`absolute bottom-0 left-0 w-full h-0.5 shadow-[0_0_10px] ${key === 'basic' ? 'bg-blue-500 shadow-blue-500/50' : key === 'detail' ? 'bg-green-500 shadow-green-500/50' : 'bg-orange-500 shadow-orange-500/50'}`}></span>}
                            </button>
                        );
                    })}
                </div>

                <div className="flex-1 overflow-y-auto custom-scroll p-5 bg-gradient-to-b from-industrial-950 to-industrial-900">
                    {activeTab === 'basic' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-panel p-4 rounded-xl text-center">
                                    <div className="text-[10px] text-gray-500 font-bold mb-1 uppercase">室內機型號</div>
                                    <div className="text-lg font-mono font-bold text-white">{currentVariant.modelIdu}</div>
                                </div>
                                <div className="glass-panel p-4 rounded-xl text-center">
                                    <div className="text-[10px] text-gray-500 font-bold mb-1 uppercase">室外機型號</div>
                                    <div className="text-lg font-mono font-bold text-white">{currentVariant.modelOdu}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="glass-panel p-3 rounded-lg text-center"><div className="text-[10px] text-gray-500 uppercase">冷房能力</div><div className="text-xl font-bold text-blue-400">{currentVariant.maxKw} <span className="text-xs text-gray-500">kW</span></div></div>
                                <div className="glass-panel p-3 rounded-lg text-center"><div className="text-[10px] text-gray-500 uppercase">CSPF</div><div className="text-xl font-bold text-green-400">{currentVariant.cspf}</div></div>
                                <div className="glass-panel p-3 rounded-lg text-center"><div className="text-[10px] text-gray-500 uppercase">冷媒</div><div className="text-xl font-bold text-gray-300">{currentVariant.refrigerant}</div></div>
                            </div>
                            <div className="glass-panel rounded-xl overflow-hidden mt-2">
                                <div className="bg-industrial-800/80 px-4 py-2 text-xs font-bold text-gray-300 border-b border-gray-700 flex items-center gap-2"><Icon name="zap" className="w-3 h-3 text-yellow-500"/> 電力規格 (Electrical)</div>
                                <div className="p-4 grid grid-cols-2 gap-4">
                                    <div><div className="text-[10px] text-gray-500">電源規格</div><div className="text-sm font-mono text-white">{currentVariant.odu?.power}</div></div>
                                    <div><div className="text-[10px] text-gray-500">最大電流</div><div className="text-sm font-mono text-red-400 font-bold">{currentVariant.odu?.currentMax || '-'}</div></div>
                                    <div className="col-span-2"><div className="text-[10px] text-gray-500">運轉電流 (冷/暖)</div><div className="text-sm font-mono text-blue-300">{currentVariant.odu?.currentCool || '-'} / {currentVariant.odu?.currentHeat || '-'}</div></div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'detail' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-blue-500">
                                <div className="bg-industrial-800/50 px-4 py-3 border-b border-industrial-700"><h4 className="text-sm font-bold text-blue-400 flex items-center gap-2"><Icon name="wind" className="w-4 h-4"/> 室內機 (Indoor)</h4></div>
                                <div className="p-4 space-y-3">
                                    <div className="spec-row"><span className="spec-label">外觀尺寸 (寬x高x深)</span><span className="spec-val">{currentVariant.idu?.dims} mm</span></div>
                                    <div className="spec-row"><span className="spec-label">機器重量</span><span className="spec-val">{currentVariant.idu?.weight} kg</span></div>
                                    <div className="spec-row"><span className="spec-label">噪音值</span><span className="spec-val">{currentVariant.idu?.noise || '-'}</span></div>
                                </div>
                            </div>
                            <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-green-500">
                                <div className="bg-industrial-800/50 px-4 py-3 border-b border-industrial-700"><h4 className="text-sm font-bold text-green-400 flex items-center gap-2"><Icon name="box" className="w-4 h-4"/> 室外機 (Outdoor)</h4></div>
                                <div className="p-4 space-y-3">
                                    <div className="spec-row"><span className="spec-label">外觀尺寸 (寬x高x深)</span><span className="spec-val">{currentVariant.odu?.dims} mm</span></div>
                                    <div className="spec-row"><span className="spec-label">機器重量</span><span className="spec-val">{currentVariant.odu?.weight} kg</span></div>
                                    <div className="spec-row"><span className="spec-label">腳座孔距</span><span className="spec-val text-yellow-400">{currentVariant.odu?.footSpacing || '參閱說明書'}</span></div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'install' && (
                        <div className="space-y-5 animate-fade-in">
                            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 flex items-center gap-4">
                                <div className="p-3 bg-orange-500/20 rounded-full text-orange-400"><Icon name="wrench" className="w-6 h-6"/></div>
                                <div><div className="text-[10px] text-orange-300 font-bold uppercase tracking-widest mb-1">配管尺寸 (液/氣)</div><div className="text-xl font-mono font-bold text-white">{currentVariant.pipes}</div></div>
                            </div>
                            <div className="glass-panel rounded-xl p-4">
                                <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest border-b border-industrial-700 pb-2">線材規格</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    <div><span className="text-[10px] text-gray-500 block mb-1">電源配線</span><div className="text-sm font-mono text-blue-300">{currentVariant.odu?.powerWire}</div></div>
                                    <div><span className="text-[10px] text-gray-500 block mb-1">內外機訊號線</span><div className="text-sm font-mono text-green-300">{currentVariant.odu?.signalWire}</div></div>
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

const FilterSelect = ({ label, value, options, onChange }) => (
    <div className="relative">
        <span className="absolute -top-2 left-2 bg-industrial-800 px-1 text-[10px] text-industrial-accent font-bold tracking-widest z-10">{label}</span>
        <div className="relative">
            <select value={value} onChange={e => onChange(e.target.value)} className="w-full appearance-none bg-industrial-900 border border-industrial-700 rounded-lg pl-3 pr-8 py-3 text-sm text-white focus:border-industrial-accent outline-none transition-all cursor-pointer">
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500"><Icon name="chevron" className="w-4 h-4"/></div>
        </div>
    </div>
);

// 搜尋結果卡片 (智慧顯示冷暖/冷專)
const ResultCard = ({ group, onClick }) => {
    const hasHeat = group.variants.some(v => v.func === '冷暖');
    const hasCool = group.variants.some(v => v.func === '冷專');
    const displayItem = group.variants[0];

    return (
        <div onClick={onClick} className="bg-industrial-800 rounded-xl p-4 border border-industrial-700 shadow-lg mb-3 relative overflow-hidden cursor-pointer hover:border-industrial-500 hover:bg-industrial-700 transition-all group">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${hasHeat && hasCool ? 'bg-gradient-to-b from-heat-500 to-cool-500' : hasHeat ? 'bg-heat-500' : 'bg-cool-500'}`}></div>
            <div className="pl-3 flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-industrial-accent bg-industrial-950 px-2 py-0.5 rounded">{displayItem.brandCN}</span>
                        <span className="text-[10px] text-gray-400 border border-industrial-600 px-1.5 py-0.5 rounded">{displayItem.series}</span>
                        {hasHeat && hasCool && <span className="text-[9px] bg-gray-700 text-white px-1 rounded ml-1">冷暖/冷專</span>}
                    </div>
                    <div className="text-lg font-bold text-white tracking-wide group-hover:text-industrial-accent transition-colors">{displayItem.modelIdu}</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">{displayItem.maxKw} kW | {displayItem.pipes}</div>
                </div>
                <button className="bg-industrial-900 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-900/50 rounded-lg px-3 py-1.5 text-xs font-bold flex items-center gap-1 transition-all"><Icon name="search" className="w-3 h-3" /> 詳情</button>
            </div>
        </div>
    );
};

const SidebarBtn = ({ id, icon, label, onClick, active }) => (
    <button onClick={onClick} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${active ? 'bg-industrial-800 border border-industrial-700 text-industrial-accent font-bold' : 'text-gray-400 hover:text-white'}`}>
        <Icon name={icon} className="w-5 h-5" /><span className="text-sm tracking-widest">{label}</span>
    </button>
);

// --- 負載計算 (V3.1: 存檔為 txt + 智慧推薦) ---
const MultiRoomCapacityCalculator = ({ rooms, setRooms, result, setResult, db }) => {
    const [error, setError] = useState('');
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const addRoom = () => { if (rooms.length >= 6) { setError('最多 6 間'); return; } setError(''); setRooms([...rooms, { id: Date.now(), name: `空間 ${rooms.length + 1}`, w: '', d: '', ping: '', conditions: {}, kw: 0 }]); };
    const removeRoom = (id) => setRooms(rooms.filter(r => r.id !== id));
    
    const updateRoom = (id, field, value) => {
        setRooms(rooms.map(r => {
            if (r.id !== id) return r;
            const updated = { ...r, [field]: value };
            // 自動計算坪數
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
            // 互斥邏輯
            if (key === 'westSun' && nextConds.westSun) nextConds.allDaySun = false;
            if (key === 'allDaySun' && nextConds.allDaySun) nextConds.westSun = false;
            if (key === 'ironSheet' && nextConds.ironSheet) nextConds.blackIron = false;
            if (key === 'blackIron' && nextConds.blackIron) nextConds.ironSheet = false;
            return { ...r, conditions: nextConds };
        }));
    };

    const handleReset = () => { setShowResetConfirm(false); setRooms([{ id: Date.now(), name: '客廳', w: '', d: '', ping: '', conditions: {}, kw: 0 }]); setResult(null); };
    
    const handleSave = () => {
        // 產生純文字報告
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
            // 智慧推薦：找大於需求且最接近的壁掛機
            const bestMatch = db.filter(d => d.type === '壁掛式' && d.maxKw >= kw)
                                    .sort((a,b) => a.maxKw - b.maxKw)[0];
            return { ...r, kw, bestMatch };
        });

        if (hasError) { setError('請確認所有空間皆已輸入有效坪數'); return; }
        setError('');
        setRooms(calculatedRooms);
        
        // 總負載推薦 (一對多)
        const mainRecommend = db.filter(d => d.type.includes('室外機') && d.maxKw >= totalKw)
                                    .sort((a,b) => a.maxKw - b.maxKw)[0];
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

// --- 吊隱式計算 (V13.1: 實務變通邏輯版) ---
const DuctedCalculator = ({ state, setState }) => {
    const [error, setError] = useState('');
    
    // 當坪數改變時，自動建議出風口數量 (簡單邏輯：5坪以上建議2孔，以下1孔)
    const handlePingChange = (val) => {
        const ping = parseFloat(val);
        let suggestedOutlets = state.outletCount;
        if (ping) {
            suggestedOutlets = ping >= 5 ? 2 : 1;
        }
        setState(p => ({ ...p, ping: val, outletCount: suggestedOutlets, result: null }));
    };

    const calculate = () => {
        const fw = parseFloat(state.flangeW);
        const fh = parseFloat(state.flangeH);
        const ping = parseFloat(state.ping);
        const outlets = parseInt(state.outletCount);

        if (!fw || !fh || !ping || !outlets) { setError('請輸入完整資訊 (含坪數)'); return; }
        setError('');

        // 1. 計算基礎數據
        const flangeArea = (fw * fh) / 100; // cm2
        const area8 = 314;   // 8 inch
        const area10 = 490;  // 10 inch
        const area12 = 706;  // 12 inch
        const tolerance = 120; // 實務容許誤差 120cm2

        let advice = "";
        let mainSizeStr = "";
        let statusColor = "text-white"; // default

        // 2. 邏輯判斷
        // 狀況 A: 單孔需求 (通常是小坪數)
        if (outlets === 1) {
            // 找最大可用管徑 (法蘭面積 + 容許值 >= 管徑面積)
            if (flangeArea + tolerance >= area12) {
                mainSizeStr = "10\" ~ 12\"";
                advice = `坪數 ${ping} 坪，單孔配置。\n法蘭面積 ${Math.round(flangeArea)}cm² 充裕。\n建議：集風箱出 10" 或 12" 單孔直接送風。`;
            } else if (flangeArea + tolerance >= area10) {
                mainSizeStr = "10\"";
                advice = `坪數 ${ping} 坪，單孔配置。\n建議：集風箱出 10" (490cm²) 單孔。\n(法蘭面積 ${Math.round(flangeArea)}cm² 符合需求)`;
            } else {
                mainSizeStr = "8\"";
                advice = `坪數 ${ping} 坪，單孔配置。\n法蘭較小 (${Math.round(flangeArea)}cm²)，建議出 8" 單孔即可。`;
            }
        } 
        // 狀況 B: 雙孔需求 (通常是 > 5坪 或 狹長空間)
        else if (outlets === 2) {
            const requiredArea2x8 = area8 * 2; // 628
            const requiredArea2x10 = area10 * 2; // 980

            // B-1: 法蘭夠大，直接出 2 孔 10"
            if (flangeArea + tolerance >= requiredArea2x10) {
                 mainSizeStr = "雙孔 10\"";
                 advice = `空間較大，法蘭面積充足 (${Math.round(flangeArea)}cm²)。\n標準配置：集風箱直接出 2 孔 10"，風量最足。`;
            }
            // B-2: 法蘭中等，出 2 孔 8" (標準)
            else if (flangeArea >= requiredArea2x8) { // > 628
                mainSizeStr = "雙孔 8\"";
                advice = `標準配置：法蘭面積 (${Math.round(flangeArea)}cm²) 足夠。\n建議：集風箱直接出 2 孔 8" 風管。`;
            }
            // B-3: 法蘭偏小 (例如 600cm2)，但在容許誤差內 (變通做法!)
            // 邏輯：600 < 628 (2x8")，差 28，在 120 內 -> 可行
            else if (flangeArea + tolerance >= requiredArea2x8) {
                mainSizeStr = "變通配置 (12\"轉2x8\")";
                statusColor = "text-yellow-400";
                advice = `⚠️ 法蘭面積 (${Math.round(flangeArea)}cm²) 略小於雙孔 8" 需求 (628cm²)，但在 ${tolerance}cm² 容許範圍內。\n\n實務變通建議：\n1. 集風箱製作「單孔 12"」(${area12}cm²)。\n   (雖然 12" > 法蘭，但可透過集風箱擴管)\n2. 接一段 12" 風管後，使用「三通 (分風箱)」轉為 2 孔 8"。\n\n這樣可滿足 ${ping} 坪雙出風口需求。`;
            }
            // B-4: 法蘭太小，硬做雙孔會出問題
            else {
                mainSizeStr = "建議改單孔";
                statusColor = "text-red-400";
                advice = `🔴 法蘭面積 (${Math.round(flangeArea)}cm²) 過小，無法負擔 2 孔 8" 風量 (即使算上容許值)。\n\n強烈建議：\n1. 改用單孔 10" 或 12" 出風。\n2. 若必定要雙孔，風切聲會很大且風量衰減嚴重。`;
            }
        }
        // 狀況 C: 多孔 (3孔以上)
        else {
            const req8 = area8 * outlets;
            if (flangeArea + tolerance >= req8) {
                mainSizeStr = `${outlets} 孔 8\"`;
                advice = `法蘭面積 (${Math.round(flangeArea)}cm²) 足夠。\n建議：集風箱直接出 ${outlets} 孔 8" 風管。`;
            } else {
                mainSizeStr = "法蘭過小";
                statusColor = "text-red-400";
                advice = `需求 ${outlets} 孔 8" 需要約 ${req8}cm²，但法蘭僅 ${Math.round(flangeArea)}cm²。\n建議減少出風口數量。`;
            }
        }

        setState(prev => ({ ...prev, result: { mainSizeStr, flangeArea: Math.round(flangeArea), advice, statusColor } }));
    };

    const reset = () => { setState({ flangeW:'', flangeH:'', ping: '', outletCount: 1, result: null }); setError(''); };

    return (
        <div className="animate-fade-in space-y-4 pb-10">
            <div className="bg-industrial-800 p-6 rounded-2xl border border-industrial-700 shadow-xl">
                <div className="flex justify-between items-center mb-6 text-white"><h2 className="text-blue-400 font-bold flex items-center gap-2 text-sm"><Icon name="box" className="w-4 h-4" /> 吊隱式風管規劃 (實務版)</h2><button onClick={reset} className="text-[10px] text-gray-500 hover:text-white px-2 py-1 bg-industrial-900 rounded">重置</button></div>
                {error && <div className="text-red-400 text-xs font-bold mb-3 text-center bg-red-900/20 py-2 rounded-lg">{error}</div>}
                <div className="space-y-4">
                    <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-yellow-500">空間坪數</span><input type="number" value={state.ping || ''} onChange={e=>handlePingChange(e.target.value)} className="w-full bg-industrial-900 border border-yellow-600/30 rounded-xl pt-4 pb-2 text-center text-white text-sm" placeholder="輸入坪數自動推算孔數"/></div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-gray-500">法蘭寬(mm)</span><input type="number" value={state.flangeW} onChange={e=>setState(p=>({...p,flangeW:e.target.value}))} className="w-full bg-industrial-900 border border-industrial-700 rounded-xl pt-4 pb-2 text-center text-white text-sm"/></div>
                        <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-gray-500">法蘭高(mm)</span><input type="number" value={state.flangeH} onChange={e=>setState(p=>({...p,flangeH:e.target.value}))} className="w-full bg-industrial-900 border border-industrial-700 rounded-xl pt-4 pb-2 text-center text-white text-sm"/></div>
                    </div>
                    
                    <div className="relative"><span className="absolute left-2 top-0 text-[8px] text-green-400">出風口數量 (可手動修改)</span><input type="number" value={state.outletCount} onChange={e=>setState(p=>({...p,outletCount:e.target.value}))} className="w-full bg-industrial-900 border border-green-900/50 rounded-xl pt-4 pb-2 text-center text-white text-sm"/></div>
                    
                    <button onClick={calculate} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg active:scale-95 text-sm">試算配置</button>
                </div>
            </div>
            {state.result && (
                <div className="bg-industrial-900 rounded-2xl p-5 border border-blue-600/50 animate-slide-up shadow-2xl mt-4">
                    <div className="flex justify-between items-end mb-4 border-b border-gray-800 pb-2">
                        <div className="text-gray-500 text-xs">法蘭面積: {state.result.flangeArea} cm²</div>
                        <div className={`text-2xl font-bold ${state.result.statusColor}`}>{state.result.mainSizeStr}</div>
                    </div>
                    <div className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap bg-industrial-950 p-3 rounded border border-gray-800 text-left font-mono">
                        {state.result.advice}
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

// --- 主程式 App ---
const App = () => {
    const [activeTab, setActiveTab] = useState('search');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchState, setSearchState] = useState({ brand: '不拘', series: '不拘', func: '不拘', type: '不拘', keyword: '', results: [], history: [] });
    const [showHistory, setShowHistory] = useState(false);
    const [selectedSpecGroup, setSelectedSpecGroup] = useState(null);

    // 各功能狀態
    const [rooms, setRooms] = useState([{ id: Date.now(), name: '客廳', w: '', d: '', ping: '', conditions: {}, kw: 0 }]);
    const [capacityResult, setCapacityResult] = useState(null);
    const [ductedState, setDuctedState] = useState({ flangeW: '', flangeH: '', ping: '', outletCount: 1, result: null });
    const [coolingState, setCoolingState] = useState({ ping: '', height: 3.0, currentTemp: 32, targetTemp: 26, acKw: '', result: null });

    useEffect(() => {
        const saved = localStorage.getItem('searchHistory');
        if (saved) setSearchState(p => ({ ...p, history: JSON.parse(saved) }));
    }, []);

    const availableSeries = useMemo(() => {
        if (searchState.brand === '不拘') return ['不拘'];
        return ['不拘', ...new Set(AC_DATABASE.filter(i => i.brandCN === searchState.brand).map(i => i.series))];
    }, [searchState.brand]);

    // 搜尋核心邏輯 (含自動建議)
    const getFilteredResults = (kw) => {
        const results = AC_DATABASE.filter(i => {
            if (searchState.brand !== '不拘' && i.brandCN !== searchState.brand) return false;
            if (searchState.series !== '不拘' && i.series !== searchState.series) return false;
            if (searchState.func !== '不拘' && i.func !== searchState.func) return false;
            if (searchState.type !== '不拘' && i.type !== searchState.type) return false;
            if (kw && !JSON.stringify(i).toLowerCase().includes(kw.toLowerCase())) return false;
            return true;
        });
        return results;
    };

    const executeSearch = () => {
        const filtered = getFilteredResults(searchState.keyword);
        
        // 智慧分組：將同型號的冷暖/冷專合併
        const grouped = [];
        filtered.forEach(item => {
            const key = `${item.brandCN}-${item.series}-${item.maxKw}`;
            let group = grouped.find(g => `${g.brandCN}-${g.series}-${g.maxKw}` === key);
            if (!group) { group = { ...item, variants: [] }; grouped.push(group); }
            group.variants.push(item);
        });

        setSearchState(p => {
            const newHistory = p.keyword && !p.history.includes(p.keyword) ? [p.keyword, ...p.history].slice(0, 5) : p.history;
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
            return { ...p, results: grouped.sort((a,b) => a.maxKw - b.maxKw), history: newHistory };
        });
        setShowHistory(false);
    };

    // 搜尋建議邏輯：空白顯示歷史，有字顯示相關型號
    const suggestions = useMemo(() => {
        if (!searchState.keyword) return searchState.history;
        // 簡單示範：列出包含關鍵字的型號 (去重)
        const matches = AC_DATABASE.filter(i => JSON.stringify(i).toLowerCase().includes(searchState.keyword.toLowerCase()))
                                        .map(i => i.modelIdu).slice(0, 5);
        return [...new Set(matches)];
    }, [searchState.keyword, searchState.history]);

    const clearHistory = () => {
        localStorage.removeItem('searchHistory');
        setSearchState(p => ({ ...p, history: [] }));
    };

    // 處理點擊外部關閉搜尋紀錄 (修復 Bug)
    const searchContainerRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setShowHistory(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const SidebarBtn = ({ id, icon, label, onClick, active }) => (
        <button onClick={() => { setActiveTab(id); setIsSidebarOpen(false); }} className={`flex items-center gap-4 w-full text-left px-4 py-3.5 rounded-xl transition-all ${activeTab === id ? 'bg-industrial-800 border border-industrial-700 text-industrial-accent font-bold' : 'text-gray-400 hover:text-white'}`}>
            <Icon name={icon} className="w-5 h-5" /><span className="text-sm tracking-widest">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen flex flex-col font-sans select-none relative bg-industrial-950 pb-20">
            <header className="bg-industrial-900 border-b border-industrial-700 sticky top-0 z-40 px-4 py-3 shadow-lg flex items-center justify-between overflow-hidden">
                <div className="flex items-center gap-3 z-10 w-1/4">
                    <button onClick={() => setIsSidebarOpen(true)} className="p-1 -ml-1 text-gray-400 hover:text-white"><Icon name="menu" className="w-6 h-6" /></button>
                </div>
                
                {/* 8-bit 動畫跑馬燈 (絕對定位) - 修復位置 */}
                <div className="marquee-track w-full pointer-events-none">
                    <div className="pixel-scene">
                        <div className="pixel-art worker">👷</div>
                        <div className="pixel-art" style={{marginLeft: '10px'}}>🐉</div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-2 z-10 w-1/4">
                    <h1 className="text-lg font-bold tracking-tighter text-white font-sans text-center whitespace-nowrap">龍神空調幫手</h1>
                    <span className="text-[10px] text-gray-500 font-mono">V13.0</span>
                </div>
            </header>

            {/* 側邊欄 */}
            <div className={`fixed inset-0 z-[200] ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)}></div>
                <div className={`absolute top-0 left-0 w-64 h-full bg-industrial-900 border-r border-industrial-700 transform transition-transform duration-300 flex flex-col shadow-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-5 border-b border-industrial-700 bg-industrial-950 flex justify-between items-center">
                        <span className="text-lg font-bold text-white tracking-widest">選單</span>
                        <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500"><Icon name="x" className="w-5 h-5" /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-4 space-y-1.5 px-3">
                        <SidebarBtn id="search" icon="search" label="機型與規格查詢" />
                        <SidebarBtn id="capacity" icon="ruler" label="負載與機型配置" />
                        <SidebarBtn id="cooling" icon="thermometer" label="物理降溫模擬" />
                        <SidebarBtn id="ducted" icon="box" label="吊隱式風管規劃" />
                    </div>
                </div>
            </div>

            <main className="flex-1 max-w-md mx-auto w-full p-4">
                {activeTab === 'search' && (
                    <div className="animate-fade-in">
                        <div className="bg-industrial-800 p-4 rounded-xl border border-industrial-700 shadow-inner mb-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <FilterSelect label="品牌" value={searchState.brand} options={['不拘', '日立', '大金', '三菱重工', '國際牌', '富士通', '華菱']} onChange={v => setSearchState(p => ({...p, brand: v, series: '不拘'}))} />
                                <FilterSelect label="系列" value={searchState.series} options={availableSeries} onChange={v => setSearchState(p => ({...p, series: v}))} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FilterSelect label="功能" value={searchState.func} options={['不拘', '冷暖', '冷專']} onChange={v => setSearchState(p => ({...p, func: v}))} />
                                <FilterSelect label="型式" value={searchState.type} options={['不拘', '壁掛式', '吊隱式', '室外機(一對多)', '室外機(商用)']} onChange={v => setSearchState(p => ({...p, type: v}))} />
                            </div>
                            <div className="relative pt-2" ref={searchContainerRef}>
                                <span className="absolute top-0 left-2 bg-industrial-800 px-1 text-[10px] text-industrial-accent font-bold tracking-widest z-10">型號關鍵字</span>
                                <div className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-center pointer-events-none text-gray-500"><Icon name="search" className="w-4 h-4" /></div>
                                <input 
                                    type="text" 
                                    className="w-full pl-9 pr-8 py-3 bg-industrial-900 border border-industrial-700 rounded-lg text-sm text-white focus:border-industrial-accent transition-all" 
                                    placeholder="輸入型號..." 
                                    value={searchState.keyword} 
                                    onChange={e => setSearchState(p => ({...p, keyword: e.target.value}))}
                                    onFocus={() => setShowHistory(true)}
                                    onKeyDown={e => e.key === 'Enter' && executeSearch()}
                                />
                                {searchState.keyword && (
                                    <button 
                                        onClick={() => { setSearchState(p => ({...p, keyword: ''})); setShowHistory(false); }} 
                                        className="absolute right-2 top-5 text-gray-500 hover:text-white"
                                    >
                                        <Icon name="x" className="w-4 h-4"/>
                                    </button>
                                )}
                                
                                {showHistory && suggestions.length > 0 && (
                                    <div className="absolute top-full left-0 w-full bg-industrial-900 border border-industrial-700 rounded-lg mt-1 z-20 shadow-xl overflow-hidden animate-zoom-in">
                                        {suggestions.map((h, i) => (
                                            <button key={i} onClick={() => { setSearchState(p => ({...p, keyword: h})); executeSearch(); }} className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-industrial-800 border-b border-gray-800 last:border-0">{h}</button>
                                        ))}
                                        <div className="bg-industrial-950 p-2 text-right">
                                            <button onClick={clearHistory} className="text-xs text-red-400 hover:text-red-300 flex items-center justify-end gap-1 w-full"><Icon name="trash" className="w-3 h-3"/> 清除紀錄</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button onClick={executeSearch} className="w-full py-3 bg-industrial-accent hover:bg-yellow-500 text-white font-bold rounded-lg shadow-lg active:scale-95 text-sm flex justify-center items-center gap-2"><Icon name="search" className="w-4 h-4" /> 執行搜尋</button>
                        </div>
                        <div className="space-y-3">
                            {searchState.results.map((g, i) => <ResultCard key={i} group={g} onClick={() => setSelectedSpecGroup(g)} />)}
                            {searchState.results.length === 0 && <div className="text-center text-gray-500 py-10">請選擇條件並執行搜尋</div>}
                        </div>
                    </div>
                )}
                {activeTab === 'capacity' && <MultiRoomCapacityCalculator rooms={rooms} setRooms={setRooms} systemPref={'multi'} setSystemPref={()=>{}} result={capacityResult} setResult={setCapacityResult} addToHistory={()=>{}} db={AC_DATABASE} />}
                {activeTab === 'cooling' && <CoolingTimeCalculator state={coolingState} setState={setCoolingState} />}
                {activeTab === 'ducted' && <DuctedCalculator state={ductedState} setState={setDuctedState} />}
            </main>

            {selectedSpecGroup && <SpecModal group={selectedSpecGroup} onClose={() => setSelectedSpecGroup(null)} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
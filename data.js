// ================= data1.js - 日立 Hitachi 完整收錄 =================
// 資料來源：參照 2023/2025 日立技術手冊與型錄
// 包含系列：尊榮 (NJP/NP)、旗艦 (HQ/NK)、精品 (YSP/YK)、標準 (HS/HK)
// 新增欄位：coolCap(冷氣能力), heatCap(暖氣能力), current(運轉電流), power(消耗電功率)

window.DATA_HITACHI = [
    // ==========================================
    // --- 尊榮 NJP 系列 (冷暖/凍結洗淨3.0/日本製壓縮機) ---
    // ==========================================
    { 
        id: 'hitachi-22njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.0', power: '398', cspf: '9.00',
        modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '33', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-28njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.5', power: '515', cspf: '8.30',
        modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '34', power: '220V', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-36njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.6, coolCap: '3.6', heatCap: '3.8', current: '3.6', power: '755', cspf: '7.85',
        modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '35', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'hitachi-40njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '4.5', current: '4.1', power: '880', cspf: '7.60',
        modelIdu: 'RAS-40NJP', modelOdu: 'RAC-40JP', pipes: '2分/3分',
        odu: { dims: '600×810×300', weight: '42', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '550×345' }, 
        idu: { dims: '295×960×250', weight: '11.5', noise: '23dB' } 
    },
    { 
        id: 'hitachi-50njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '5.6', current: '5.3', power: '1130', cspf: '7.35',
        modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', pipes: '2分/4分',
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '12.5', noise: '25dB' } 
    },
    { 
        id: 'hitachi-63njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 6.3, coolCap: '6.3', heatCap: '7.2', current: '7.3', power: '1580', cspf: '6.80',
        modelIdu: 'RAS-63NJP', modelOdu: 'RAC-63JP', pipes: '2分/4分',
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '13.0' } 
    },
    { 
        id: 'hitachi-71njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '8.5', power: '1850', cspf: '6.35',
        modelIdu: 'RAS-71NJP', modelOdu: 'RAC-71JP', pipes: '2分/5分',
        odu: { dims: '840×920×375', weight: '56', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },
    { 
        id: 'hitachi-80njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 8.0, coolCap: '8.0', heatCap: '9.1', current: '10.3', power: '2250', cspf: '6.00',
        modelIdu: 'RAS-80NJP', modelOdu: 'RAC-80JP', pipes: '2分/5分',
        odu: { dims: '840×920×375', weight: '57', power: '220V', currentMax: '22.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },
    { 
        id: 'hitachi-90njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 8.7, coolCap: '8.7', heatCap: '9.5', current: '11.5', power: '2520', cspf: '5.65',
        modelIdu: 'RAS-90NJP', modelOdu: 'RAC-90JP', pipes: '2分/5分',
        odu: { dims: '840×920×375', weight: '57', power: '220V', currentMax: '24.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },

    // ==========================================
    // --- 旗艦 NT 系列 (冷暖/凍結洗淨2.0) ---
    // ==========================================
    { 
        id: 'hitachi-22nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.1', power: '425', cspf: '7.40',
        modelIdu: 'RAS-22NT', modelOdu: 'RAC-22NP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '32', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-28nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.6', power: '550', cspf: '6.70',
        modelIdu: 'RAS-28NT', modelOdu: 'RAC-28NP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '33', power: '220V', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-36nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.6, coolCap: '3.6', heatCap: '3.8', current: '3.8', power: '820', cspf: '6.40',
        modelIdu: 'RAS-36NT', modelOdu: 'RAC-36NP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '34', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'hitachi-40nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '4.5', current: '4.5', power: '985', cspf: '6.10',
        modelIdu: 'RAS-40NT', modelOdu: 'RAC-40NP', pipes: '2分/3分',
        odu: { dims: '600×810×300', weight: '41', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '550×345' }, 
        idu: { dims: '295×960×250', weight: '11.0' } 
    },
    { 
        id: 'hitachi-50nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '5.6', current: '5.8', power: '1260', cspf: '5.85',
        modelIdu: 'RAS-50NT', modelOdu: 'RAC-50NP', pipes: '2分/4分',
        odu: { dims: '800×880×315', weight: '47', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '12.5' } 
    },
    { 
        id: 'hitachi-63nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 6.3, coolCap: '6.3', heatCap: '7.2', current: '7.8', power: '1700', cspf: '5.55',
        modelIdu: 'RAS-63NT', modelOdu: 'RAC-63NP', pipes: '2分/4分',
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '13.0' } 
    },
    { 
        id: 'hitachi-71nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '9.2', power: '2000', cspf: '5.20',
        modelIdu: 'RAS-71NT', modelOdu: 'RAC-71NP', pipes: '2分/5分',
        odu: { dims: '840×920×375', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },

    // ==========================================
    // --- 精品 YSP 系列 (冷暖/標準型) ---
    // ==========================================
    { 
        id: 'hitachi-22ysp', brandCN: '日立', series: '精品系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.4', power: '495', cspf: '6.50',
        modelIdu: 'RAS-22YSP', modelOdu: 'RAC-22YP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '30', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0' } 
    },
    { 
        id: 'hitachi-28ysp', brandCN: '日立', series: '精品系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '3.2', power: '685', cspf: '6.15',
        modelIdu: 'RAS-28YSP', modelOdu: 'RAC-28YP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '33', power: '220V', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0' } 
    },
    { 
        id: 'hitachi-36ysp', brandCN: '日立', series: '精品系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.6, coolCap: '3.6', heatCap: '3.8', current: '4.5', power: '970', cspf: '5.90',
        modelIdu: 'RAS-36YSP', modelOdu: 'RAC-36YP', pipes: '2分/3分',
        odu: { dims: '560×730×290', weight: '34', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0' } 
    },
    { 
        id: 'hitachi-40ysp', brandCN: '日立', series: '精品系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '4.5', current: '5.5', power: '1180', cspf: '5.65',
        modelIdu: 'RAS-40YSP', modelOdu: 'RAC-40YP', pipes: '2分/3分',
        odu: { dims: '600×810×300', weight: '41', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '550×345' }, 
        idu: { dims: '295×960×250', weight: '11.0' } 
    },
    { 
        id: 'hitachi-50ysp', brandCN: '日立', series: '精品系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '5.6', current: '7.0', power: '1500', cspf: '5.40',
        modelIdu: 'RAS-50YSP', modelOdu: 'RAC-50YP', pipes: '2分/4分',
        odu: { dims: '800×880×315', weight: '47', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '12.5' } 
    },
    { 
        id: 'hitachi-63ysp', brandCN: '日立', series: '精品系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 6.3, coolCap: '6.3', heatCap: '7.2', current: '9.0', power: '1950', cspf: '5.33',
        modelIdu: 'RAS-63YSP', modelOdu: 'RAC-63YP', pipes: '2分/4分',
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '13.0' } 
    }
];

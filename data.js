// ================= 1. 資料庫 (AC_DATABASE) V13.6 - Part 1 (日立/大金) =================
const AC_DATABASE = [
    // ==========================================
    // --- 日立 Hitachi (2025 尊榮 NJP / 旗艦 NT) ---
    // ==========================================
    
    // --- 尊榮 NJP 系列 (冷暖/凍結洗淨3.0/日本製壓縮機) ---
    { 
        id: 'hitachi-22njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', pipes: '2分/3分', cspf: '7.85', 
        odu: { dims: '560×730×290', weight: '33', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.5', noise: '19dB' } 
    },
    { 
        id: 'hitachi-28njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', pipes: '2分/3分', cspf: '7.20', 
        odu: { dims: '560×730×290', weight: '34', power: '220V', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.5', noise: '19dB' } 
    },
    { 
        id: 'hitachi-36njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', pipes: '2分/3分', cspf: '6.85', 
        odu: { dims: '560×730×290', weight: '35', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'hitachi-40njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'RAS-40NJP', modelOdu: 'RAC-40JP', pipes: '2分/3分', cspf: '6.55', 
        odu: { dims: '600×810×300', weight: '42', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '550×345' }, 
        idu: { dims: '295×960×250', weight: '11.5', noise: '23dB' } 
    },
    { 
        id: 'hitachi-50njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', pipes: '2分/4分', cspf: '6.05', 
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '12.5', noise: '25dB' } 
    },
    { 
        id: 'hitachi-63njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, 
        modelIdu: 'RAS-63NJP', modelOdu: 'RAC-63JP', pipes: '2分/4分', cspf: '5.65', 
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '13.0' } 
    },
    { 
        id: 'hitachi-71njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'RAS-71NJP', modelOdu: 'RAC-71JP', pipes: '2分/5分', cspf: '5.35', 
        odu: { dims: '840×920×375', weight: '56', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },
    { 
        id: 'hitachi-80njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, 
        modelIdu: 'RAS-80NJP', modelOdu: 'RAC-80JP', pipes: '2分/5分', cspf: '5.10', 
        odu: { dims: '840×920×375', weight: '57', power: '220V', currentMax: '22.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },
    { 
        id: 'hitachi-90njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.7, 
        modelIdu: 'RAS-90NJP', modelOdu: 'RAC-90JP', pipes: '2分/5分', cspf: '4.70', 
        odu: { dims: '840×920×375', weight: '57', power: '220V', currentMax: '24.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },

    // --- 旗艦 NT 系列 (冷暖/凍結洗淨2.0) ---
    { 
        id: 'hitachi-22nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'RAS-22NT', modelOdu: 'RAC-22NP', pipes: '2分/3分', cspf: '7.40', 
        odu: { dims: '560×730×290', weight: '32', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-28nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'RAS-28NT', modelOdu: 'RAC-28NP', pipes: '2分/3分', cspf: '6.70', 
        odu: { dims: '560×730×290', weight: '33', power: '220V', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-36nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'RAS-36NT', modelOdu: 'RAC-36NP', pipes: '2分/3分', cspf: '6.40', 
        odu: { dims: '560×730×290', weight: '34', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'hitachi-40nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'RAS-40NT', modelOdu: 'RAC-40NP', pipes: '2分/3分', cspf: '6.10', 
        odu: { dims: '600×810×300', weight: '41', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '550×345' }, 
        idu: { dims: '295×960×250', weight: '11.0' } 
    },
    { 
        id: 'hitachi-50nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'RAS-50NT', modelOdu: 'RAC-50NP', pipes: '2分/4分', cspf: '5.85', 
        odu: { dims: '800×880×315', weight: '47', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '12.5' } 
    },
    { 
        id: 'hitachi-63nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, 
        modelIdu: 'RAS-63NT', modelOdu: 'RAC-63NP', pipes: '2分/4分', cspf: '5.55', 
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '13.0' } 
    },
    { 
        id: 'hitachi-71nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'RAS-71NT', modelOdu: 'RAC-71NP', pipes: '2分/5分', cspf: '5.20', 
        odu: { dims: '840×920×375', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×390' }, 
        idu: { dims: '295×1090×250', weight: '13.5' } 
    },

    // ==========================================
    // --- 大金 Daikin (2026 橫綱Y / 大關U / 隱藏) ---
    // ==========================================

    // --- 橫綱 Y 系列 (旗艦/溫濕雙控/Hybrid Cooling) ---
    { 
        id: 'daikin-22y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2分/3分', cspf: '7.81', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '10.0', noise: '19dB' } 
    },
    { 
        id: 'daikin-28y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'FTXM28YVLT', modelOdu: 'RXM28YVLT', pipes: '2分/3分', cspf: '7.45', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '9.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '10.0' } 
    },
    { 
        id: 'daikin-36y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'FTXM36YVLT', modelOdu: 'RXM36YVLT', pipes: '2分/3分', cspf: '7.09', 
        odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '11.0' } 
    },
    { 
        id: 'daikin-41y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'FTXM41YVLT', modelOdu: 'RXM41YVLT', pipes: '2分/3分', cspf: '6.65', 
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×798×272', weight: '11.0' } 
    },
    { 
        id: 'daikin-50y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'FTXM50YVLT', modelOdu: 'RXM50YVLT', pipes: '2分/4分', cspf: '6.10', 
        odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×281', weight: '14.0' } 
    },
    { 
        id: 'daikin-60y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, 
        modelIdu: 'FTXM60YVLT', modelOdu: 'RXM60YVLT', pipes: '2分/4分', cspf: '5.85', 
        odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '18.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×281', weight: '14.0' } 
    },
    { 
        id: 'daikin-71y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'FTXM71YVLT', modelOdu: 'RXM71YVLT', pipes: '2分/5分', cspf: '6.25', 
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '299×1100×275', weight: '15.0' } 
    },

    // --- 大關 U 系列 (高CP值/標準型) ---
    { 
        id: 'daikin-22u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT', pipes: '2分/3分', cspf: '6.30', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-28u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT', pipes: '2分/3分', cspf: '6.12', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-36u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'FTXV36UVLT', modelOdu: 'RXV36UVLT', pipes: '2分/3分', cspf: '5.92', 
        odu: { dims: '550×675×284', weight: '31', power: '220V', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-41u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'FTXV41UVLT', modelOdu: 'RXV41UVLT', pipes: '2分/3分', cspf: '5.70', 
        odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-50u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2分/4分', cspf: '5.50', 
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },
    { 
        id: 'daikin-60u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, 
        modelIdu: 'FTXV60UVLT', modelOdu: 'RXV60UVLT', pipes: '2分/4分', cspf: '5.33', 
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },
    { 
        id: 'daikin-71u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'FTXV71UVLT', modelOdu: 'RXV71UVLT', pipes: '2分/5分', cspf: '5.13', 
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },

    // --- 吊隱式 (隱藏型 FDXV系列) - 包含法蘭尺寸估算 ---
    { 
        id: 'daikin-duct-22', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'FDXV22RVLT', modelOdu: 'RXM22ZVLT', pipes: '2分/3分', cspf: '4.49', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '200×700×620', weight: '21', flangeDims: '560×153' } 
    },
    { 
        id: 'daikin-duct-28', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'FDXV28RVLT', modelOdu: 'RXM28ZVLT', pipes: '2分/3分', cspf: '4.47', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '200×700×620', weight: '21', flangeDims: '560×153' } 
    },
    { 
        id: 'daikin-duct-36', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'FDXV36RVLT', modelOdu: 'RXM36ZVLT', pipes: '2分/3分', cspf: '4.40', 
        odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '200×700×620', weight: '21', flangeDims: '560×153' } 
    },
    { 
        id: 'daikin-duct-41', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'FDXV41RVLT', modelOdu: 'RXM41ZVLT', pipes: '2分/3分', cspf: '4.29', 
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '200×900×620', weight: '25', flangeDims: '760×153' } 
    },
    { 
        id: 'daikin-duct-50', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'FDXV50RVLT', modelOdu: 'RXM50ZVLT', pipes: '2分/4分', cspf: '4.27', 
        odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '16.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '200×900×620', weight: '25', flangeDims: '760×153' } 
    },
    { 
        id: 'daikin-duct-60', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 6.0, 
        modelIdu: 'FDXV60RVLT', modelOdu: 'RXM60ZVLT', pipes: '2分/4分', cspf: '4.17', 
        odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '200×1100×620', weight: '30', flangeDims: '960×153' } 
    },
    { 
        id: 'daikin-duct-71', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'FDXV71RVLT', modelOdu: 'RXM71ZVLT', pipes: '3分/5分', cspf: '4.10', 
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '200×1100×620', weight: '30', flangeDims: '960×153' } 
    },
];

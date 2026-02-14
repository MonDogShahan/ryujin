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
        // ==========================================
    // --- Panasonic 國際牌 (2026 UX/VX/J系列) ---
    // ==========================================
    
    // --- UX 頂級旗艦系列 (AI智慧/nanoeX/史上最省電) ---
    { 
        id: 'panasonic-ux22', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'CS-UX22FA2', modelOdu: 'CU-UX22FHA2', pipes: '2分/3分', cspf: '9.12', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '315×820×250', weight: '10.0', noise: '19dB' } 
    },
    { 
        id: 'panasonic-ux28', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'CS-UX28FA2', modelOdu: 'CU-UX28FHA2', pipes: '2分/3分', cspf: '8.25', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '315×820×250', weight: '10.0' } 
    },
    { 
        id: 'panasonic-ux36', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'CS-UX36FA2', modelOdu: 'CU-UX36FHA2', pipes: '2分/3分', cspf: '7.75', 
        odu: { dims: '582×780×289', weight: '33', power: '220V', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '315×820×250', weight: '10.0' } 
    },
    { 
        id: 'panasonic-ux40', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'CS-UX40FA2', modelOdu: 'CU-UX40FHA2', pipes: '2分/3分', cspf: '7.30', 
        odu: { dims: '666×860×289', weight: '40', power: '220V', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×330' }, 
        idu: { dims: '315×1080×250', weight: '12.0' } 
    },
    { 
        id: 'panasonic-ux50', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'CS-UX50FA2', modelOdu: 'CU-UX50FHA2', pipes: '2分/4分', cspf: '7.00', 
        odu: { dims: '666×860×289', weight: '42', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×330' }, 
        idu: { dims: '315×1080×250', weight: '12.0' } 
    },
    { 
        id: 'panasonic-ux63', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, 
        modelIdu: 'CS-UX63FA2', modelOdu: 'CU-UX63FHA2', pipes: '2分/4分', cspf: '6.45', 
        odu: { dims: '795×880×340', weight: '53', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '610×390' }, 
        idu: { dims: '335×1280×250', weight: '15.0' } 
    },
    { 
        id: 'panasonic-ux71', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'CS-UX71FA2', modelOdu: 'CU-UX71FHA2', pipes: '2分/5分', cspf: '6.05', 
        odu: { dims: '795×880×340', weight: '54', power: '220V', currentMax: '19.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '610×390' }, 
        idu: { dims: '335×1280×250', weight: '15.0' } 
    },
    { 
        id: 'panasonic-ux80', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, 
        modelIdu: 'CS-UX80FA2', modelOdu: 'CU-UX80FHA2', pipes: '2分/5分', cspf: '5.65', 
        odu: { dims: '920×960×340', weight: '64', power: '220V', currentMax: '22.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '610×390' }, 
        idu: { dims: '335×1280×250', weight: '15.0' } 
    },
    { 
        id: 'panasonic-ux90', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.7, 
        modelIdu: 'CS-UX90FA2', modelOdu: 'CU-UX90FHA2', pipes: '2分/5分', cspf: '5.35', 
        odu: { dims: '920×960×340', weight: '64', power: '220V', currentMax: '24.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '610×390' }, 
        idu: { dims: '335×1280×250', weight: '15.0' } 
    },

    // --- VX 智慧聯網系列 (nanoeX) ---
    { 
        id: 'panasonic-vx22', brandCN: '國際牌', series: 'VX智慧聯網', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'CS-VX22FA2', modelOdu: 'CU-VX22FHA2', pipes: '2分/3分', cspf: '7.65', 
        odu: { dims: '542×780×289', weight: '29', power: '220V', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '295×798×241', weight: '9.5' } 
    },
    { 
        id: 'panasonic-vx36', brandCN: '國際牌', series: 'VX智慧聯網', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'CS-VX36FA2', modelOdu: 'CU-VX36FHA2', pipes: '2分/3分', cspf: '6.70', 
        odu: { dims: '542×780×289', weight: '31', power: '220V', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '295×798×241', weight: '9.5' } 
    },
    { 
        id: 'panasonic-vx50', brandCN: '國際牌', series: 'VX智慧聯網', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'CS-VX50FA2', modelOdu: 'CU-VX50FHA2', pipes: '2分/4分', cspf: '6.00', 
        odu: { dims: '619×824×299', weight: '38', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×330' }, 
        idu: { dims: '319×1080×241', weight: '12.0' } 
    },

    // --- 國際牌 吊隱式 (J系列) ---
    { 
        id: 'panasonic-duct-22', brandCN: '國際牌', series: '隱藏型J系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'CS-J22BDA2', modelOdu: 'CU-UX22FHA2', pipes: '2分/3分', cspf: '6.00', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '200×548×570', weight: '18', flangeDims: '514×142' } 
    },
    { 
        id: 'panasonic-duct-28', brandCN: '國際牌', series: '隱藏型J系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'CS-J28BDA2', modelOdu: 'CU-UX28FHA2', pipes: '2分/3分', cspf: '5.85', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '200×698×570', weight: '20', flangeDims: '664×142' } 
    },
    { 
        id: 'panasonic-duct-36', brandCN: '國際牌', series: '隱藏型J系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'CS-J36BDA2', modelOdu: 'CU-UX36FHA2', pipes: '2分/3分', cspf: '5.55', 
        odu: { dims: '582×780×289', weight: '33', power: '220V', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '200×698×570', weight: '20', flangeDims: '664×142' } 
    },
    { 
        id: 'panasonic-duct-50', brandCN: '國際牌', series: '隱藏型J系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'CS-J50BDA2', modelOdu: 'CU-UX50FHA2', pipes: '2分/4分', cspf: '5.05', 
        odu: { dims: '666×860×289', weight: '42', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×330' }, 
        idu: { dims: '200×1100×570', weight: '25', flangeDims: '1071×142' } 
    },
    { 
        id: 'panasonic-duct-71', brandCN: '國際牌', series: '隱藏型J系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'CS-J71BDA2', modelOdu: 'CU-UX71FHA2', pipes: '2分/5分', cspf: '4.95', 
        odu: { dims: '795×880×340', weight: '54', power: '220V', currentMax: '19.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '610×390' }, 
        idu: { dims: '200×1100×570', weight: '25', flangeDims: '1071×142' } 
    },

    // ==========================================
    // --- 三菱重工 Mitsubishi Heavy (2025) ---
    // ==========================================
    
    // --- 未來 ZSXT 系列 (頂級) ---
    { 
        id: 'mhi-zsxt-25', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, 
        modelIdu: 'DXK25ZSXT2-W', modelOdu: 'DXC25ZSXT2-W', pipes: '2分/3分', cspf: '7.30', 
        odu: { dims: '640×800×290', weight: '43', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '305×920×220', weight: '13.0', noise: '19dB' } 
    },
    { 
        id: 'mhi-zsxt-35', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'DXK35ZSXT2-W', modelOdu: 'DXC35ZSXT2-W', pipes: '2分/3分', cspf: '6.90', 
        odu: { dims: '640×800×290', weight: '43', power: '220V', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '305×920×220', weight: '13.0', noise: '19dB' } 
    },
    { 
        id: 'mhi-zsxt-50', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'DXK50ZSXT2-W', modelOdu: 'DXC50ZSXT2-W', pipes: '2分/4分', cspf: '6.30', 
        odu: { dims: '640×800×290', weight: '45', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '305×920×220', weight: '13.0' } 
    },
    { 
        id: 'mhi-zsxt-60', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, 
        modelIdu: 'DXK60ZSXT2-W', modelOdu: 'DXC60ZSXT2-W', pipes: '2分/4分', cspf: '5.80', 
        odu: { dims: '640×800×290', weight: '45', power: '220V', currentMax: '17.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '305×920×220', weight: '13.0' } 
    },

    // --- 晴空 ZST 系列 (標準) ---
    { 
        id: 'mhi-zst-25', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, 
        modelIdu: 'DXK25ZST2-W', modelOdu: 'DXC25ZST2-W', pipes: '2分/3分', cspf: '6.62', 
        odu: { dims: '540×645×290', weight: '33', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '290×870×230', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'mhi-zst-35', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'DXK35ZST2-W', modelOdu: 'DXC35ZST2-W', pipes: '2分/3分', cspf: '6.20', 
        odu: { dims: '595×780×290', weight: '36', power: '220V', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '290×870×230', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'mhi-zst-50', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'DXK50ZST2-W', modelOdu: 'DXC50ZST2-W', pipes: '2分/4分', cspf: '5.62', 
        odu: { dims: '595×780×290', weight: '38', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '290×870×230', weight: '10.0' } 
    },

    // --- 朝日 ZRT 系列 (大空間) ---
    { 
        id: 'mhi-zrt-71', brandCN: '三菱重工', series: '朝日系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, 
        modelIdu: 'DXK71ZRT-W', modelOdu: 'DXC71ZRT-W', pipes: '3分/5分', cspf: '5.20', 
        odu: { dims: '750×880×340', weight: '58', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×380' }, 
        idu: { dims: '339×1197×262', weight: '16.0', noise: '26dB' } 
    },
    { 
        id: 'mhi-zrt-80', brandCN: '三菱重工', series: '朝日系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, 
        modelIdu: 'DXK80ZRT-W', modelOdu: 'DXC80ZRT-W', pipes: '3分/5分', cspf: '5.10', 
        odu: { dims: '750×880×340', weight: '58', power: '220V', currentMax: '22.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×380' }, 
        idu: { dims: '339×1197×262', weight: '16.0' } 
    },

    // --- 三菱吊隱式 ---
    { 
        id: 'mhi-duct-35', brandCN: '三菱重工', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'DXR35ZSU-W', modelOdu: 'DXC35ZSU-W', pipes: '2分/3分', cspf: '5.80', 
        odu: { dims: '595×780×290', weight: '35', power: '220V', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '200×750×500', weight: '18', flangeDims: '650×150 (估算)' } 
    },
    { 
        id: 'mhi-duct-50', brandCN: '三菱重工', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'DXR50ZSU-W', modelOdu: 'DXC50ZSU-W', pipes: '2分/4分', cspf: '5.10', 
        odu: { dims: '595×780×290', weight: '38', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '200×950×500', weight: '22', flangeDims: '850×150 (估算)' } 
    },

    // ==========================================
    // --- 華菱 Hawrin (2025 旗艦/窗型) ---
    // ==========================================
    
    // --- 旗艦潔淨系列 ---
    { 
        id: 'hawrin-dnc-28', brandCN: '華菱', series: '旗艦潔淨', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'DNC-28KIGSH', modelOdu: 'DTC-28KIGSH', pipes: '2分/3分', cspf: '6.26', 
        odu: { dims: '540×870×320', weight: '26', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '530×292' }, 
        idu: { dims: '285×860×225', weight: '8.5' } 
    },
    { 
        id: 'hawrin-dnc-36', brandCN: '華菱', series: '旗艦潔淨', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'DNC-36KIGSH', modelOdu: 'DTC-36KIGSH', pipes: '2分/3分', cspf: '5.92', 
        odu: { dims: '540×870×320', weight: '32', power: '220V', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '530×292' }, 
        idu: { dims: '285×860×225', weight: '9.0' } 
    },
    { 
        id: 'hawrin-dnc-50', brandCN: '華菱', series: '旗艦潔淨', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'DNC-50KIGSH', modelOdu: 'DTC-50KIGSH', pipes: '2分/4分', cspf: '5.61', 
        odu: { dims: '590×890×335', weight: '34', power: '220V', currentMax: '13.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×310' }, 
        idu: { dims: '335×970×260', weight: '12.0' } 
    },
    { 
        id: 'hawrin-dnc-72', brandCN: '華菱', series: '旗艦潔淨', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'DNC-72KIGSH', modelOdu: 'DTC-72KIGSH', pipes: '2分/5分', cspf: '5.12', 
        odu: { dims: '690×890×340', weight: '45', power: '220V', currentMax: '19.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×340' }, 
        idu: { dims: '335×1110×260', weight: '16.0' } 
    },

    // --- 華菱 窗型變頻 (唯一窗型) ---
    { 
        id: 'hawrin-win-29', brandCN: '華菱', series: '窗型變頻', func: '冷暖', type: '窗型', refrigerant: 'R32', maxKw: 2.9, 
        modelIdu: 'HANR-29KIGSH', modelOdu: '一體機', pipes: '無', cspf: '5.19', 
        odu: { dims: '350×560×655', weight: '33', power: '220V', currentMax: '6.0A', powerWire: '2.0mm²', signalWire: '無', footSpacing: '580×360' }, 
        idu: { dims: '350×560×655', weight: '33' } 
    },
    { 
        id: 'hawrin-win-36', brandCN: '華菱', series: '窗型變頻', func: '冷暖', type: '窗型', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'HANR-36KIGSH', modelOdu: '一體機', pipes: '無', cspf: '4.85', 
        odu: { dims: '400×600×760', weight: '45', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '無', footSpacing: '620×400' }, 
        idu: { dims: '400×600×760', weight: '45' } 
    },

    // --- 華菱 吊隱式 ---
    { 
        id: 'hawrin-duct-80', brandCN: '華菱', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'DN-800PV', modelOdu: 'DT-800V', pipes: '3分/5分', cspf: '5.10', 
        odu: { dims: '690×890×340', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×340' }, 
        idu: { dims: '260×1100×450', weight: '32', flangeDims: '900×200 (估算)' } 
    }

];

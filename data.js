// ================= 1. 資料庫 (AC_DATABASE) V13.6 完整版 =================
// 資料來源：2025-2026 原廠型錄 (Panasonic, Daikin, Hitachi, Mitsubishi, Hawrin)
// 包含：壁掛式、吊隱式、窗型、室外機安裝孔距、吊隱式法蘭尺寸

const AC_DATABASE = [
    // ==========================================
    // --- 日立 Hitachi (2025 尊榮/旗艦/頂級) ---
    // ==========================================
    // 尊榮 NJP 系列 (冷暖/R32/凍結洗淨3.0+)
    { 
        id: 'hitachi-ras-22njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', pipes: '2分/3分', cspf: '7.85', 
        odu: { dims: '560×730×290', weight: '33', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.5', noise: '19dB' } 
    },
    { 
        id: 'hitachi-ras-28njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', pipes: '2分/3分', cspf: '7.20', 
        odu: { dims: '560×730×290', weight: '34', power: '220V', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.5', noise: '19dB' } 
    },
    { 
        id: 'hitachi-ras-36njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', pipes: '2分/3分', cspf: '6.85', 
        odu: { dims: '560×730×290', weight: '35', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '10.0', noise: '22dB' } 
    },
    { 
        id: 'hitachi-ras-40njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, 
        modelIdu: 'RAS-40NJP', modelOdu: 'RAC-40JP', pipes: '2分/3分', cspf: '6.55', 
        odu: { dims: '600×810×300', weight: '42', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '550×345' }, 
        idu: { dims: '295×960×250', weight: '11.5', noise: '23dB' } 
    },
    { 
        id: 'hitachi-ras-50njp', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', pipes: '2分/4分', cspf: '6.05', 
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '12.5', noise: '25dB' } 
    },
    // 旗艦 NT 系列 (冷暖/R32)
    { 
        id: 'hitachi-ras-22nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'RAS-22NT', modelOdu: 'RAC-22NP', pipes: '2分/3分', cspf: '7.40', 
        odu: { dims: '560×730×290', weight: '32', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×3C', footSpacing: '540×335' }, 
        idu: { dims: '295×810×250', weight: '9.0', noise: '19dB' } 
    },
    { 
        id: 'hitachi-ras-63nt', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, 
        modelIdu: 'RAS-63NT', modelOdu: 'RAC-63NP', pipes: '2分/4分', cspf: '5.55', 
        odu: { dims: '800×880×315', weight: '48', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×3C', footSpacing: '600×360' }, 
        idu: { dims: '295×1090×250', weight: '13.0', noise: '28dB' } 
    },

    // ==========================================
    // --- 大金 Daikin (2026 橫綱/大關/經典/隱藏) ---
    // ==========================================
    // 橫綱 Y 系列 (Hybrid Cooling/溫濕雙控)
    { 
        id: 'daikin-ftxm22y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2分/3分', cspf: '7.81', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '10.0', noise: '19dB' } 
    },
    { 
        id: 'daikin-ftxm36y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'FTXM36YVLT', modelOdu: 'RXM36YVLT', pipes: '2分/3分', cspf: '7.09', 
        odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '11.0' } 
    },
    { 
        id: 'daikin-ftxm71y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'FTXM71YVLT', modelOdu: 'RXM71YVLT', pipes: '2分/5分', cspf: '6.25', 
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '299×1100×275', weight: '15.0' } 
    },
    // 大關 U 系列 (高CP值)
    { 
        id: 'daikin-ftxv28u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT', pipes: '2分/3分', cspf: '6.12', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-ftxv50u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2分/4分', cspf: '5.50', 
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },
    // 隱藏系列 (吊隱式)
    { 
        id: 'daikin-fdxv22r', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'FDXV22RVLT', modelOdu: 'RXM22ZVLT', pipes: '2分/3分', cspf: '4.49', 
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '200×700×620', weight: '21', flangeDims: '560×150 (估算)' } 
    },
    { 
        id: 'daikin-fdxv36r', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'FDXV36RVLT', modelOdu: 'RXM36ZVLT', pipes: '2分/3分', cspf: '4.40', 
        odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '200×700×620', weight: '21', flangeDims: '560×150 (估算)' } 
    },
    { 
        id: 'daikin-fdxv71r', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'FDXV71RVLT', modelOdu: 'RXM71ZVLT', pipes: '3分/5分', cspf: '4.10', 
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '200×1100×620', weight: '30', flangeDims: '960×150 (估算)' } 
    },

    // ==========================================
    // --- Panasonic 國際牌 (2026 UX/VX/UJ) ---
    // ==========================================
    // UX 頂級旗艦 (AI智慧/nanoeX)
    { 
        id: 'panasonic-cs-ux22', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'CS-UX22FA2', modelOdu: 'CU-UX22FHA2', pipes: '2分/3分', cspf: '9.12', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '315×820×250', weight: '10.0' } 
    },
    { 
        id: 'panasonic-cs-ux50', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'CS-UX50FA2', modelOdu: 'CU-UX50FHA2', pipes: '2分/4分', cspf: '7.00', 
        odu: { dims: '666×860×289', weight: '42', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×330' }, 
        idu: { dims: '315×1080×250', weight: '12.0' } 
    },
    { 
        id: 'panasonic-cs-ux71', brandCN: '國際牌', series: 'UX頂級旗艦', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'CS-UX71FA2', modelOdu: 'CU-UX71FHA2', pipes: '2分/5分', cspf: '6.05', 
        odu: { dims: '795×880×340', weight: '54', power: '220V', currentMax: '19.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '610×390' }, 
        idu: { dims: '335×1280×250', weight: '15.0' } 
    },
    // UJ 精緻系列
    { 
        id: 'panasonic-cs-uj28', brandCN: '國際牌', series: 'UJ精緻系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'CS-UJ28BA2', modelOdu: 'CU-UJ28BHA2', pipes: '2分/3分', cspf: '6.77', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '295×798×241', weight: '9.5' } 
    },
    // 隱藏型 (吊隱式)
    { 
        id: 'panasonic-cs-j22', brandCN: '國際牌', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.2, 
        modelIdu: 'CS-J22BDA2', modelOdu: 'CU-UX22FHA2', pipes: '2分/3分', cspf: '6.0', 
        odu: { dims: '582×780×289', weight: '30', power: '220V', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '540×300' }, 
        idu: { dims: '200×548×570', weight: '18', flangeDims: '514×142' } // 依據型錄數據
    },
    { 
        id: 'panasonic-cs-j50', brandCN: '國際牌', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'CS-J50BDA2', modelOdu: 'CU-UX50FHA2', pipes: '2分/4分', cspf: '5.05', 
        odu: { dims: '666×860×289', weight: '42', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×330' }, 
        idu: { dims: '200×1100×570', weight: '25', flangeDims: '1071×142' } // 依據型錄數據
    },

    // ==========================================
    // --- 三菱重工 Mitsubishi (2025) ---
    // ==========================================
    // 未來 ZSXT 系列
    { 
        id: 'mhi-zsxt-25', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, 
        modelIdu: 'DXK25ZSXT2-W', modelOdu: 'DXC25ZSXT2-W', pipes: '2分/3分', cspf: '7.30', 
        odu: { dims: '640×800×290', weight: '43', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '305×920×220', weight: '13.0', noise: '19dB' } 
    },
    { 
        id: 'mhi-zsxt-50', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'DXK50ZSXT2-W', modelOdu: 'DXC50ZSXT2-W', pipes: '2分/4分', cspf: '6.30', 
        odu: { dims: '640×800×290', weight: '45', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '305×920×220', weight: '13.0' } 
    },
    // 晴空 ZST 系列
    { 
        id: 'mhi-zst-25', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, 
        modelIdu: 'DXK25ZST2-W', modelOdu: 'DXC25ZST2-W', pipes: '2分/3分', cspf: '6.62', 
        odu: { dims: '540×645×290', weight: '33', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '290×870×230', weight: '10.0' } 
    },
    // 吊隱式 (未來)
    { 
        id: 'mhi-ducted-35', brandCN: '三菱重工', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 3.5, 
        modelIdu: 'DXR35ZSU-W', modelOdu: 'DXC35ZSU-W', pipes: '2分/3分', cspf: '5.80', 
        odu: { dims: '595×780×290', weight: '35', power: '220V', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '510×312.5' }, 
        idu: { dims: '200×750×500', weight: '18', flangeDims: '650×150 (估算)' } 
    },

    // ==========================================
    // --- 華菱 Hawrin (2025 旗艦/精緻/窗型) ---
    // ==========================================
    // 旗艦潔淨 (易拆洗/防鏽)
    { 
        id: 'hawrin-dnc-28', brandCN: '華菱', series: '旗艦潔淨', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, 
        modelIdu: 'DNC-28KIGSH', modelOdu: 'DTC-28KIGSH', pipes: '2分/3分', cspf: '6.26', 
        odu: { dims: '540×870×320', weight: '26', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '530×292' }, 
        idu: { dims: '285×860×225', weight: '8.5' } 
    },
    { 
        id: 'hawrin-dnc-50', brandCN: '華菱', series: '旗艦潔淨', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, 
        modelIdu: 'DNC-50KIGSH', modelOdu: 'DTC-50KIGSH', pipes: '2分/4分', cspf: '5.61', 
        odu: { dims: '590×890×335', weight: '34', power: '220V', currentMax: '13.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '510×310' }, 
        idu: { dims: '335×970×260', weight: '12.0' } 
    },
    // 精緻時尚
    { 
        id: 'hawrin-bhi-36', brandCN: '華菱', series: '精緻時尚', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, 
        modelIdu: 'BHI-36KIGSH', modelOdu: 'BHO-36KIGSH', pipes: '2分/3分', cspf: '5.76', 
        odu: { dims: '540×870×320', weight: '32', power: '220V', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '530×292' }, 
        idu: { dims: '270×805×215', weight: '8.5' } 
    },
    // 窗型變頻
    { 
        id: 'hawrin-hanr-29', brandCN: '華菱', series: '窗型變頻', func: '冷暖', type: '窗型', refrigerant: 'R32', maxKw: 2.9, 
        modelIdu: 'HANR-29KIGSH', modelOdu: '一體機', pipes: '無', cspf: '5.19', 
        odu: { dims: '350×560×655', weight: '33', power: '220V', currentMax: '6.0A', powerWire: '2.0mm²', signalWire: '無', footSpacing: '580×360' }, 
        idu: { dims: '350×560×655', weight: '33' } 
    },
    // 吊隱式 (正壓)
    { 
        id: 'hawrin-dn-800', brandCN: '華菱', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.2, 
        modelIdu: 'DN-800PV', modelOdu: 'DT-800V', pipes: '3分/5分', cspf: '5.10', 
        odu: { dims: '690×890×340', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '540×340' }, 
        idu: { dims: '260×1100×450', weight: '32', flangeDims: '900×200 (估算)' } 
    }
];

// ================= data2.js - 大金 Daikin & 富士通 Fujitsu =================
// 資料來源：參照 2026 大金型錄 & 富士通官網規格
// 包含系列：大金(橫綱Y/大關U/經典V/隱藏V)、富士通(nocria Z/優級KG)

window.DATA_DAIKIN_FUJITSU = [
    // ==========================================
    // --- 大金 Daikin (2026 橫綱 Y 系列) ---
    // ==========================================
    // 特色：溫濕雙控 / 閃流放電 / 防霉運轉
    { 
        id: 'daikin-22y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.0', power: '395', cspf: '7.81',
        modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2分/3分',
        odu: { dims: '550×675×284', weight: '32', power: '220V', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '11.0', noise: '19dB' } 
    },
    { 
        id: 'daikin-28y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.6', power: '525', cspf: '7.45',
        modelIdu: 'FTXM28YVLT', modelOdu: 'RXM28YVLT', pipes: '2分/3分',
        odu: { dims: '550×675×284', weight: '32', power: '220V', currentMax: '9.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '11.0' } 
    },
    { 
        id: 'daikin-36y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.5, coolCap: '3.5', heatCap: '3.8', current: '3.7', power: '790', cspf: '7.09',
        modelIdu: 'FTXM36YVLT', modelOdu: 'RXM36YVLT', pipes: '2分/3分',
        odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '295×798×272', weight: '11.0' } 
    },
    { 
        id: 'daikin-41y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '5.0', current: '4.6', power: '980', cspf: '6.65',
        modelIdu: 'FTXM41YVLT', modelOdu: 'RXM41YVLT', pipes: '2分/3分',
        odu: { dims: '695×930×350', weight: '46', power: '220V', currentMax: '14.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×798×272', weight: '11.0' } 
    },
    { 
        id: 'daikin-50y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '5.8', power: '1240', cspf: '6.10',
        modelIdu: 'FTXM50YVLT', modelOdu: 'RXM50YVLT', pipes: '2分/4分',
        odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×281', weight: '14.0' } 
    },
    { 
        id: 'daikin-60y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '7.8', power: '1680', cspf: '5.85',
        modelIdu: 'FTXM60YVLT', modelOdu: 'RXM60YVLT', pipes: '2分/4分',
        odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '18.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×281', weight: '14.0' } 
    },
    { 
        id: 'daikin-71y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 7.2, coolCap: '7.2', heatCap: '8.5', current: '10.5', power: '2250', cspf: '6.25',
        modelIdu: 'FTXM71YVLT', modelOdu: 'RXM71YVLT', pipes: '2分/5分',
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '299×1100×275', weight: '15.0' } 
    },

    // ==========================================
    // --- 大金 Daikin (2026 大關 U 系列) ---
    // ==========================================
    // 特色：3D立體氣流 / 智慧眼 / 舒適高CP
    { 
        id: 'daikin-22u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.2', current: '2.4', power: '450', cspf: '6.30',
        modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT', pipes: '2分/3分',
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-28u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '2.8', current: '3.1', power: '620', cspf: '6.12',
        modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT', pipes: '2分/3分',
        odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-36u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.5, coolCap: '3.5', heatCap: '3.5', current: '4.2', power: '900', cspf: '5.92',
        modelIdu: 'FTXV36UVLT', modelOdu: 'RXV36UVLT', pipes: '2分/3分',
        odu: { dims: '550×675×284', weight: '31', power: '220V', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-41u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '4.8', current: '5.6', power: '1150', cspf: '5.70',
        modelIdu: 'FTXV41UVLT', modelOdu: 'RXV41UVLT', pipes: '2分/3分',
        odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '285×770×226', weight: '9.0' } 
    },
    { 
        id: 'daikin-50u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '5.8', current: '6.5', power: '1380', cspf: '5.50',
        modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2分/4分',
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },
    { 
        id: 'daikin-60u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '8.2', power: '1780', cspf: '5.33',
        modelIdu: 'FTXV60UVLT', modelOdu: 'RXV60UVLT', pipes: '2分/4分',
        odu: { dims: '695×930×350', weight: '45', power: '220V', currentMax: '17.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },
    { 
        id: 'daikin-71u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '10.5', power: '2280', cspf: '5.13',
        modelIdu: 'FTXV71UVLT', modelOdu: 'RXV71UVLT', pipes: '2分/5分',
        odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '620×380' }, 
        idu: { dims: '295×990×263', weight: '13.0' } 
    },

    // ==========================================
    // --- 大金 吊隱式 (隱藏型) ---
    // ==========================================
    { 
        id: 'daikin-duct-25', brandCN: '大金', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', 
        maxKw: 2.5, coolCap: '2.5', heatCap: '3.0', current: '3.0', power: '600', cspf: '5.6',
        modelIdu: 'FDBQ25ZAVLT', modelOdu: 'RZQ25ZAVLT', pipes: '2分/3分',
        odu: { dims: '595×845×300', weight: '34', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '245×700×800', weight: '26', flangeDims: '560×200 (估)' } 
    },
    { 
        id: 'daikin-duct-35', brandCN: '大金', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', 
        maxKw: 3.5, coolCap: '3.5', heatCap: '4.0', current: '4.0', power: '850', cspf: '5.6',
        modelIdu: 'FDBQ35ZAVLT', modelOdu: 'RZQ35ZAVLT', pipes: '2分/3分',
        odu: { dims: '595×845×300', weight: '34', power: '220V', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '245×700×800', weight: '26', flangeDims: '560×200 (估)' } 
    },
    { 
        id: 'daikin-duct-50', brandCN: '大金', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '5.6', current: '6.0', power: '1300', cspf: '5.4',
        modelIdu: 'FDBQ50ZAVLT', modelOdu: 'RZQ50ZAVLT', pipes: '2分/4分',
        odu: { dims: '595×845×300', weight: '44', power: '220V', currentMax: '20.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '245×1000×800', weight: '32', flangeDims: '860×200 (估)' } 
    },
    { 
        id: 'daikin-duct-60', brandCN: '大金', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', 
        maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '8.0', power: '1700', cspf: '5.3',
        modelIdu: 'FDBQ60ZAVLT', modelOdu: 'RZQ60ZAVLT', pipes: '2分/4分',
        odu: { dims: '595×845×300', weight: '44', power: '220V', currentMax: '20.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '245×1000×800', weight: '32', flangeDims: '860×200 (估)' } 
    },
    { 
        id: 'daikin-duct-71', brandCN: '大金', series: '隱藏型', func: '冷暖', type: '吊隱式', refrigerant: 'R32', 
        maxKw: 7.1, coolCap: '7.1', heatCap: '8.0', current: '10.5', power: '2250', cspf: '5.6',
        modelIdu: 'FDBQ71ZAVLT', modelOdu: 'RZQ71ZAVLT', pipes: '3分/5分',
        odu: { dims: '595×845×300', weight: '44', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '550×330' }, 
        idu: { dims: '245×1000×800', weight: '32', flangeDims: '860×200 (估)' } 
    },

    // ==========================================
    // --- 富士通 Fujitsu (2025 壁掛式) ---
    // ==========================================
    // nocria Z 系列 (日本製/自動清潔/熱交換器加熱除菌)
    { 
        id: 'fujitsu-z-22', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '1.9', power: '385', cspf: '7.85',
        modelIdu: 'ASCG022KZTA', modelOdu: 'AOCG022KZTA', pipes: '2分/3分',
        odu: { dims: '542×799×290', weight: '32', power: '220V', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '15.5' } 
    },
    { 
        id: 'fujitsu-z-28', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '3.6', current: '2.6', power: '550', cspf: '7.60',
        modelIdu: 'ASCG028KZTA', modelOdu: 'AOCG028KZTA', pipes: '2分/3分',
        odu: { dims: '542×799×290', weight: '32', power: '220V', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '15.5' } 
    },
    { 
        id: 'fujitsu-z-36', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.6, coolCap: '3.6', heatCap: '4.6', current: '3.8', power: '820', cspf: '7.20',
        modelIdu: 'ASCG036KZTA', modelOdu: 'AOCG036KZTA', pipes: '2分/3分',
        odu: { dims: '632×799×290', weight: '37', power: '220V', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '15.5' } 
    },
    { 
        id: 'fujitsu-z-40', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '5.4', current: '4.6', power: '980', cspf: '6.70',
        modelIdu: 'ASCG040KZTA', modelOdu: 'AOCG040KZTA', pipes: '2分/3分',
        odu: { dims: '632×799×290', weight: '37', power: '220V', currentMax: '13.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '15.5' } 
    },
    { 
        id: 'fujitsu-z-50', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '6.3', current: '5.8', power: '1250', cspf: '6.30',
        modelIdu: 'ASCG050KZTA', modelOdu: 'AOCG050KZTA', pipes: '2分/3分',
        odu: { dims: '716×820×315', weight: '42', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '17.0' } 
    },
    { 
        id: 'fujitsu-z-63', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 6.3, coolCap: '6.3', heatCap: '7.1', current: '8.2', power: '1780', cspf: '6.00',
        modelIdu: 'ASCG063KZTA', modelOdu: 'AOCG063KZTA', pipes: '2分/4分',
        odu: { dims: '716×820×315', weight: '42', power: '220V', currentMax: '17.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '17.5' } 
    },
    { 
        id: 'fujitsu-z-71', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 7.1, coolCap: '7.1', heatCap: '8.4', current: '9.8', power: '2100', cspf: '5.60',
        modelIdu: 'ASCG071KZTA', modelOdu: 'AOCG071KZTA', pipes: '2分/5分',
        odu: { dims: '716×820×315', weight: '45', power: '220V', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '293×798×355', weight: '17.5' } 
    },

    // 優級 KG 系列 (高CP值/安靜)
    { 
        id: 'fujitsu-kg-22', brandCN: '富士通', series: '優級 KG', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.2', power: '430', cspf: '7.20',
        modelIdu: 'ASCG022KGTA', modelOdu: 'AOCG022KGTA', pipes: '2分/3分',
        odu: { dims: '542×799×290', weight: '30', power: '220V', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '270×834×215', weight: '10.0' } 
    },
    { 
        id: 'fujitsu-kg-28', brandCN: '富士通', series: '優級 KG', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.9', power: '600', cspf: '6.70',
        modelIdu: 'ASCG028KGTA', modelOdu: 'AOCG028KGTA', pipes: '2分/3分',
        odu: { dims: '542×799×290', weight: '30', power: '220V', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '270×834×215', weight: '10.0' } 
    },
    { 
        id: 'fujitsu-kg-36', brandCN: '富士通', series: '優級 KG', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 3.6, coolCap: '3.6', heatCap: '4.6', current: '4.5', power: '900', cspf: '6.65',
        modelIdu: 'ASCG036KGTA', modelOdu: 'AOCG036KGTA', pipes: '2分/3分',
        odu: { dims: '542×799×290', weight: '31', power: '220V', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '270×834×215', weight: '10.0' } 
    },
    { 
        id: 'fujitsu-kg-41', brandCN: '富士通', series: '優級 KG', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 4.1, coolCap: '4.1', heatCap: '5.2', current: '5.2', power: '1100', cspf: '6.20',
        modelIdu: 'ASCG041KGTA', modelOdu: 'AOCG041KGTA', pipes: '2分/3分',
        odu: { dims: '542×799×290', weight: '33', power: '220V', currentMax: '13.5A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '270×834×215', weight: '10.0' } 
    },
    { 
        id: 'fujitsu-kg-50', brandCN: '富士通', series: '優級 KG', func: '冷暖', type: '壁掛式', refrigerant: 'R32', 
        maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '6.2', power: '1350', cspf: '5.60',
        modelIdu: 'ASCG050KGTA', modelOdu: 'AOCG050KGTA', pipes: '2分/4分',
        odu: { dims: '632×799×290', weight: '38', power: '220V', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm²×4C', footSpacing: '580×330' }, 
        idu: { dims: '280×980×240', weight: '12.5' } 
    }
];

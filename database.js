// 這是專門存放資料的地方
// 因為是在 HTML 中直接引用，這個變數會自動變成全域變數，主程式可以直接讀取

const AC_DATABASE = [
    // ================= 日立 Hitachi 尊榮系列 (NJP) 冷暖 =================
    { 
        id: 'hitachi-njp-22', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2, 
        modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.85',
        odu: { dims: '560×730×290', weight: '33.0', power: '220V', currentCool: '2.5A', currentHeat: '3.0A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.5', airflow: '凍結洗淨3.0+/日本製壓縮機', noise: '44/34/26/22' } 
    },
    { 
        id: 'hitachi-njp-28', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8, 
        modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.20',
        odu: { dims: '560×730×290', weight: '34.0', power: '220V', currentCool: '3.0A', currentHeat: '3.4A', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.5', airflow: '凍結洗淨3.0+/日本製壓縮機', noise: '45/36/28/22' } 
    },
    { 
        id: 'hitachi-njp-36', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6, 
        modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.85',
        odu: { dims: '560×730×290', weight: '35.0', power: '220V', currentCool: '4.2A', currentHeat: '4.8A', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '10.0', airflow: '凍結洗淨3.0+', noise: '46/38/29/25' } 
    },
    { 
        id: 'hitachi-njp-40', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1, 
        modelIdu: 'RAS-40NJP', modelOdu: 'RAC-40JP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.40',
        odu: { dims: '600×810×300', weight: '45.0', power: '220V', currentCool: '4.8A', currentHeat: '5.2A', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×810×250', weight: '10.0', airflow: '凍結洗淨3.0+', noise: '47/39/30/26' } 
    },
    { 
        id: 'hitachi-njp-50', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0, 
        modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', 
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.05',
        odu: { dims: '800×880×315', weight: '48.0', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '12.5', airflow: '凍結洗淨3.0+', noise: '48/42/35/29' } 
    },
    { 
        id: 'hitachi-njp-63', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3, 
        modelIdu: 'RAS-63NJP', modelOdu: 'RAC-63JP', 
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.75',
        odu: { dims: '800×880×315', weight: '52.0', power: '220V', currentCool: '8.5A', currentHeat: '9.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨3.0+', noise: '50/45/38/32' } 
    },
    { 
        id: 'hitachi-njp-71', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2, 
        modelIdu: 'RAS-71NJP', modelOdu: 'RAC-71JP', 
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.50',
        odu: { dims: '800×880×315', weight: '55.0', power: '220V', currentCool: '9.5A', currentHeat: '10.0A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨3.0+', noise: '51/46/39/33' } 
    },
    { 
        id: 'hitachi-njp-81', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 8.1, 
        modelIdu: 'RAS-81NJP', modelOdu: 'RAC-81JP', 
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.20',
        odu: { dims: '800×880×315', weight: '58.0', power: '220V', currentCool: '10.5A', currentHeat: '11.0A', currentMax: '22.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨3.0+', noise: '52/47/40/34' } 
    },
    { 
        id: 'hitachi-njp-90', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 9.0, 
        modelIdu: 'RAS-90NJP', modelOdu: 'RAC-90JP', 
        pipes: '3分(9.52) / 5分(15.88)', cspf: '5.05',
        odu: { dims: '800×880×315', weight: '60.0', power: '220V', currentCool: '11.8A', currentHeat: '12.5A', currentMax: '25.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.5', airflow: '凍結洗淨3.0+', noise: '54/49/42/36' } 
    },

    // ================= 日立 Hitachi 旗艦系列 (NT) 冷暖 =================
    // 2025 最新完整收錄
    { 
        id: 'hitachi-nt-22', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2, 
        modelIdu: 'RAS-22NT', modelOdu: 'RAC-22NP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.40',
        odu: { dims: '560×730×290', weight: '32.0', power: '220V', currentCool: '2.4A', currentHeat: '2.8A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.0', airflow: '凍結洗淨/風扇自動清', noise: '43/33/25/19' } 
    },
    { 
        id: 'hitachi-nt-28', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8, 
        modelIdu: 'RAS-28NT', modelOdu: 'RAC-28NP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.70',
        odu: { dims: '560×730×290', weight: '33.0', power: '220V', currentCool: '3.2A', currentHeat: '3.6A', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.0', airflow: '凍結洗淨/風扇自動清', noise: '44/34/26/22' } 
    },
    { 
        id: 'hitachi-nt-36', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6, 
        modelIdu: 'RAS-36NT', modelOdu: 'RAC-36NP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.45',
        odu: { dims: '560×730×290', weight: '35.0', power: '220V', currentCool: '4.0A', currentHeat: '4.5A', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '10.0', airflow: '凍結洗淨/風扇自動清', noise: '46/38/29/25' } 
    },
    { 
        id: 'hitachi-nt-40', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1, 
        modelIdu: 'RAS-40NT', modelOdu: 'RAC-40NP', 
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.10',
        odu: { dims: '600×810×300', weight: '43.0', power: '220V', currentCool: '4.8A', currentHeat: '5.2A', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×810×250', weight: '10.0', airflow: '凍結洗淨/風扇自動清', noise: '47/39/30/26' } 
    },
    { 
        id: 'hitachi-nt-50', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0, 
        modelIdu: 'RAS-50NT', modelOdu: 'RAC-50NP', 
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.85',
        odu: { dims: '800×880×315', weight: '47.0', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '12.5', airflow: '凍結洗淨/風扇自動清', noise: '48/42/35/29' } 
    },
    { 
        id: 'hitachi-nt-63', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3, 
        modelIdu: 'RAS-63NT', modelOdu: 'RAC-63NP', 
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.55',
        odu: { dims: '800×880×315', weight: '51.0', power: '220V', currentCool: '8.5A', currentHeat: '9.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨/風扇自動清', noise: '50/45/38/32' } 
    },
    { 
        id: 'hitachi-nt-71', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2, 
        modelIdu: 'RAS-71NT', modelOdu: 'RAC-71NP', 
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.35',
        odu: { dims: '800×880×315', weight: '54.0', power: '220V', currentCool: '9.5A', currentHeat: '10.0A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨/風扇自動清', noise: '51/46/39/33' } 
    },

    // ================= Panasonic 國際牌 RX系列 (頂級旗艦) (2026 AI PLUS) =================
    {
        id: 'panasonic-rx-22', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2,
        modelIdu: 'CS-RX22NA2', modelOdu: 'CU-RX22NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '8.30',
        odu: { dims: '542×780×289', weight: '30.0', power: '220V', currentCool: '2.0A', currentHeat: '2.3A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '10.0', airflow: 'AI控頻/nanoeX', noise: '38/30/22/19' }
    },
    {
        id: 'panasonic-rx-28', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'CS-RX28NA2', modelOdu: 'CU-RX28NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.85',
        odu: { dims: '542×780×289', weight: '31.0', power: '220V', currentCool: '2.5A', currentHeat: '2.8A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '10.0', airflow: 'AI控頻/nanoeX', noise: '39/32/24/19' }
    },
    {
        id: 'panasonic-rx-36', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6,
        modelIdu: 'CS-RX36NA2', modelOdu: 'CU-RX36NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.65',
        odu: { dims: '542×780×289', weight: '33.0', power: '220V', currentCool: '3.5A', currentHeat: '3.8A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '11.0', airflow: 'AI控頻/nanoeX', noise: '42/34/26/20' }
    },
    {
        id: 'panasonic-rx-40', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'CS-RX40NA2', modelOdu: 'CU-RX40NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.15',
        odu: { dims: '542×780×289', weight: '33.0', power: '220V', currentCool: '4.2A', currentHeat: '4.6A', currentMax: '13.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '11.0', airflow: 'AI控頻/nanoeX', noise: '43/36/28/22' }
    },
    {
        id: 'panasonic-rx-50', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'CS-RX50NA2', modelOdu: 'CU-RX50NHA2',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.75',
        odu: { dims: '619×824×299', weight: '38.0', power: '220V', currentCool: '5.5A', currentHeat: '5.9A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×990×255', weight: '12.0', airflow: 'AI控頻/nanoeX', noise: '45/38/30/23' }
    },
    {
        id: 'panasonic-rx-63', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3,
        modelIdu: 'CS-RX63NA2', modelOdu: 'CU-RX63NHA2',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.20',
        odu: { dims: '619×824×299', weight: '42.0', power: '220V', currentCool: '8.0A', currentHeat: '8.5A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×990×255', weight: '13.0', airflow: 'AI控頻/nanoeX', noise: '48/40/32/25' }
    },
    {
        id: 'panasonic-rx-71', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2,
        modelIdu: 'CS-RX71NA2', modelOdu: 'CU-RX71NHA2',
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.85',
        odu: { dims: '914×920×340', weight: '55.0', power: '220V', currentCool: '9.5A', currentHeat: '10.0A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '610x390' },
        idu: { dims: '295×1090×255', weight: '14.0', airflow: 'AI控頻/nanoeX', noise: '50/42/34/26' }
    },

    // ================= Panasonic 國際牌 QX系列 (旗艦) (2026) =================
    {
        id: 'panasonic-qx-22', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2,
        modelIdu: 'CS-QX22NA2', modelOdu: 'CU-QX22NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.45',
        odu: { dims: '542×780×289', weight: '29.0', power: '220V', currentCool: '2.2A', currentHeat: '2.5A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '10.0', airflow: 'nanoeX/自體淨', noise: '38/30/23/19' }
    },
    {
        id: 'panasonic-qx-28', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'CS-QX28NA2', modelOdu: 'CU-QX28NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.80',
        odu: { dims: '542×780×289', weight: '31.0', power: '220V', currentCool: '2.8A', currentHeat: '3.1A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '10.0', airflow: 'nanoeX/自體淨', noise: '40/32/24/20' }
    },
    {
        id: 'panasonic-qx-36', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6,
        modelIdu: 'CS-QX36NA2', modelOdu: 'CU-QX36NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.65',
        odu: { dims: '542×780×289', weight: '33.0', power: '220V', currentCool: '3.8A', currentHeat: '4.2A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '11.0', airflow: 'nanoeX/自體淨', noise: '43/35/27/21' }
    },
    {
        id: 'panasonic-qx-40', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'CS-QX40NA2', modelOdu: 'CU-QX40NHA2',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.35',
        odu: { dims: '542×780×289', weight: '33.0', power: '220V', currentCool: '4.5A', currentHeat: '4.8A', currentMax: '13.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×798×235', weight: '11.0', airflow: 'nanoeX/自體淨', noise: '44/37/29/23' }
    },
    {
        id: 'panasonic-qx-50', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'CS-QX50NA2', modelOdu: 'CU-QX50NHA2',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.00',
        odu: { dims: '619×824×299', weight: '38.0', power: '220V', currentCool: '6.2A', currentHeat: '6.6A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×990×255', weight: '12.0', airflow: 'nanoeX/自體淨', noise: '46/39/31/24' }
    },
    {
        id: 'panasonic-qx-63', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3,
        modelIdu: 'CS-QX63NA2', modelOdu: 'CU-QX63NHA2',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.65',
        odu: { dims: '619×824×299', weight: '42.0', power: '220V', currentCool: '8.5A', currentHeat: '9.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '540x330' },
        idu: { dims: '295×990×255', weight: '13.0', airflow: 'nanoeX/自體淨', noise: '49/42/34/26' }
    },

    // ================= 大金 Daikin 橫綱Z系列 (2026 PCW2026-1) =================
    { 
        id: 'daikin-z-22', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2,
        modelIdu: 'FTXM22ZVLT', modelOdu: 'RXM22ZVLT',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.65',
        odu: { dims: '595×845×300', weight: '36.0', power: '220V', currentCool: '1.8A', currentHeat: '2.0A', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '295×798×272', weight: '11.0', airflow: '康達氣流/閃流放電', noise: '40/32/24/19' }
    },
    { 
        id: 'daikin-z-28', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'FTXM28ZVLT', modelOdu: 'RXM28ZVLT',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.45',
        odu: { dims: '595×845×300', weight: '38.0', power: '220V', currentCool: '2.2A', currentHeat: '2.5A', currentMax: '9.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '295×798×272', weight: '11.0', airflow: '康達氣流/閃流放電', noise: '41/33/25/19' }
    },
    { 
        id: 'daikin-z-36', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.5,
        modelIdu: 'FTXM36ZVLT', modelOdu: 'RXM36ZVLT',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.12',
        odu: { dims: '595×845×300', weight: '38.0', power: '220V', currentCool: '3.0A', currentHeat: '3.2A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '295×798×272', weight: '11.0', airflow: '康達氣流/閃流放電', noise: '42/34/26/19' }
    },
    { 
        id: 'daikin-z-41', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'FTXM41ZVLT', modelOdu: 'RXM41ZVLT',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.55',
        odu: { dims: '595×845×300', weight: '42.0', power: '220V', currentCool: '4.0A', currentHeat: '4.5A', currentMax: '13.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '295×798×272', weight: '11.0', airflow: '康達氣流/閃流放電', noise: '43/36/28/22' }
    },
    { 
        id: 'daikin-z-50', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'FTXM50ZVLT', modelOdu: 'RXM50ZVLT',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.15',
        odu: { dims: '695×930×350', weight: '48.0', power: '220V', currentCool: '5.5A', currentHeat: '6.0A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '630x370' },
        idu: { dims: '295×990×281', weight: '14.0', airflow: '康達氣流/閃流放電', noise: '45/38/30/23' }
    },
    { 
        id: 'daikin-z-60', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.0,
        modelIdu: 'FTXM60ZVLT', modelOdu: 'RXM60ZVLT',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.85',
        odu: { dims: '695×930×350', weight: '50.0', power: '220V', currentCool: '7.2A', currentHeat: '7.8A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '630x370' },
        idu: { dims: '295×990×281', weight: '14.0', airflow: '康達氣流/閃流放電', noise: '47/40/33/25' }
    },
    { 
        id: 'daikin-z-71', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2,
        modelIdu: 'FTXM71ZVLT', modelOdu: 'RXM71ZVLT',
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.55',
        odu: { dims: '695×930×350', weight: '55.0', power: '220V', currentCool: '8.8A', currentHeat: '9.2A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '630x370' },
        idu: { dims: '295×1160×281', weight: '16.0', airflow: '康達氣流/閃流放電', noise: '49/42/35/27' }
    },

    // ================= 大金 Daikin 大關U系列 (2026) =================
    { 
        id: 'daikin-u-22', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2,
        modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.30',
        odu: { dims: '550×675×284', weight: '28.0', power: '220V', currentCool: '2.2A', currentHeat: '2.4A', currentMax: '7.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '285×770×226', weight: '9.0', airflow: '3D氣流/智慧眼', noise: '40/32/24/19' }
    },
    { 
        id: 'daikin-u-28', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.05',
        odu: { dims: '550×675×284', weight: '30.0', power: '220V', currentCool: '3.0A', currentHeat: '3.3A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '285×770×226', weight: '9.0', airflow: '3D氣流/智慧眼', noise: '41/33/25/19' }
    },
    { 
        id: 'daikin-u-36', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.5,
        modelIdu: 'FTXV36UVLT', modelOdu: 'RXV36UVLT',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '5.85',
        odu: { dims: '550×675×284', weight: '32.0', power: '220V', currentCool: '3.8A', currentHeat: '4.2A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '285×770×226', weight: '9.0', airflow: '3D氣流/智慧眼', noise: '42/34/26/20' }
    },
    { 
        id: 'daikin-u-41', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'FTXV41UVLT', modelOdu: 'RXV41UVLT',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.60',
        odu: { dims: '595×845×300', weight: '38.0', power: '220V', currentCool: '4.8A', currentHeat: '5.2A', currentMax: '13.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' },
        idu: { dims: '295×990×263', weight: '13.0', airflow: '3D氣流/智慧眼', noise: '43/36/28/22' }
    },
    { 
        id: 'daikin-u-50', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.50',
        odu: { dims: '695×930×350', weight: '45.0', power: '220V', currentCool: '6.2A', currentHeat: '6.8A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '630x370' },
        idu: { dims: '295×990×263', weight: '13.0', airflow: '3D氣流/智慧眼', noise: '46/38/30/23' }
    },
    { 
        id: 'daikin-u-60', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.0,
        modelIdu: 'FTXV60UVLT', modelOdu: 'RXV60UVLT',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.35',
        odu: { dims: '695×930×350', weight: '48.0', power: '220V', currentCool: '7.5A', currentHeat: '8.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '630x370' },
        idu: { dims: '295×990×263', weight: '13.0', airflow: '3D氣流/智慧眼', noise: '48/40/32/25' }
    },
    { 
        id: 'daikin-u-71', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2,
        modelIdu: 'FTXV71UVLT', modelOdu: 'RXV71UVLT',
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.20',
        odu: { dims: '695×930×350', weight: '52.0', power: '220V', currentCool: '9.2A', currentHeat: '9.8A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '630x370' },
        idu: { dims: '295×990×263', weight: '13.0', airflow: '3D氣流/智慧眼', noise: '50/42/34/26' }
    },

    // ================= 三菱重工 Mitsubishi Heavy 未來系列 (ZSXT) (2025) =================
    {
        id: 'mhi-zsxt-20', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.0,
        modelIdu: 'SRK20ZSXT-W', modelOdu: 'SRC20ZSXT-W',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '8.50',
        odu: { dims: '595×780×290', weight: '35.0', power: '220V', currentCool: '1.8A', currentHeat: '2.0A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '305×920×220', weight: '13.0', airflow: '噴射氣流/智慧眼', noise: '38/29/22/19' }
    },
    {
        id: 'mhi-zsxt-25', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.5,
        modelIdu: 'SRK25ZSXT-W', modelOdu: 'SRC25ZSXT-W',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.80',
        odu: { dims: '595×780×290', weight: '35.0', power: '220V', currentCool: '2.1A', currentHeat: '2.4A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '305×920×220', weight: '13.0', airflow: '噴射氣流/智慧眼', noise: '39/30/23/19' }
    },
    {
        id: 'mhi-zsxt-35', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.5,
        modelIdu: 'SRK35ZSXT-W', modelOdu: 'SRC35ZSXT-W',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '7.20',
        odu: { dims: '595×780×290', weight: '37.0', power: '220V', currentCool: '3.2A', currentHeat: '3.5A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '305×920×220', weight: '13.0', airflow: '噴射氣流/智慧眼', noise: '41/32/24/19' }
    },
    {
        id: 'mhi-zsxt-50', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'SRK50ZSXT-W', modelOdu: 'SRC50ZSXT-W',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.50',
        odu: { dims: '640×800×290', weight: '45.0', power: '220V', currentCool: '5.5A', currentHeat: '6.0A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '305×920×220', weight: '13.0', airflow: '噴射氣流/智慧眼', noise: '44/36/28/22' }
    },
    {
        id: 'mhi-zsxt-60', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.0,
        modelIdu: 'SRK60ZSXT-W', modelOdu: 'SRC60ZSXT-W',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '6.10',
        odu: { dims: '640×800×290', weight: '48.0', power: '220V', currentCool: '7.5A', currentHeat: '8.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '305×920×220', weight: '13.0', airflow: '噴射氣流/智慧眼', noise: '46/38/30/23' }
    },

    // ================= 三菱重工 Mitsubishi Heavy 晴空系列 (ZST) (2025) =================
    {
        id: 'mhi-zst-20', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.0,
        modelIdu: 'SRK20ZST-W', modelOdu: 'SRC20ZST-W',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.50',
        odu: { dims: '540×645×275', weight: '27.0', power: '220V', currentCool: '2.2A', currentHeat: '2.5A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '290×870×230', weight: '9.5', airflow: '噴射氣流', noise: '39/30/23/19' }
    },
    {
        id: 'mhi-zst-25', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.5,
        modelIdu: 'SRK25ZST-W', modelOdu: 'SRC25ZST-W',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.30',
        odu: { dims: '540×645×275', weight: '27.0', power: '220V', currentCool: '2.8A', currentHeat: '3.0A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '290×870×230', weight: '9.5', airflow: '噴射氣流', noise: '40/32/24/20' }
    },
    {
        id: 'mhi-zst-35', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.5,
        modelIdu: 'SRK35ZST-W', modelOdu: 'SRC35ZST-W',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.10',
        odu: { dims: '540×780×290', weight: '33.0', power: '220V', currentCool: '3.8A', currentHeat: '4.2A', currentMax: '12.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '290×870×230', weight: '10.0', airflow: '噴射氣流', noise: '41/33/26/22' }
    },
    {
        id: 'mhi-zst-41', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'SRK41ZST-W', modelOdu: 'SRC41ZST-W',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.90',
        odu: { dims: '595×780×290', weight: '38.0', power: '220V', currentCool: '4.8A', currentHeat: '5.2A', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '290×870×230', weight: '10.0', airflow: '噴射氣流', noise: '43/35/27/23' }
    },
    {
        id: 'mhi-zst-50', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'SRK50ZST-W', modelOdu: 'SRC50ZST-W',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.60',
        odu: { dims: '595×780×290', weight: '38.0', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '290×870×230', weight: '10.5', airflow: '噴射氣流', noise: '45/38/30/24' }
    },
    {
        id: 'mhi-zst-63', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3,
        modelIdu: 'SRK63ZST-W', modelOdu: 'SRC63ZST-W',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.30',
        odu: { dims: '640×800×290', weight: '45.0', power: '220V', currentCool: '7.8A', currentHeat: '8.2A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '510x312.5' },
        idu: { dims: '339×1197×262', weight: '15.0', airflow: '噴射氣流', noise: '47/40/33/26' }
    },
    {
        id: 'mhi-zst-71', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.1,
        modelIdu: 'SRK71ZST-W', modelOdu: 'SRC71ZST-W',
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.10',
        odu: { dims: '750×880×340', weight: '58.0', power: '220V', currentCool: '9.0A', currentHeat: '9.5A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580x380' },
        idu: { dims: '339×1197×262', weight: '15.5', airflow: '噴射氣流', noise: '49/42/35/27' }
    },

    // ================= 華菱 Hawrin 易拆洗系列 (DT) (2025) =================
    {
        id: 'hawrin-dt-22', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.3,
        modelIdu: 'HP-22KA', modelOdu: 'HPC-22KA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.00',
        odu: { dims: '555×770×300', weight: '28.0', power: '220V', currentCool: '2.5A', currentHeat: '2.8A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '500x320' },
        idu: { dims: '295×800×210', weight: '9.0', airflow: '易拆洗結構', noise: '40/34/28/22' }
    },
    {
        id: 'hawrin-dt-28', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'HP-28KA', modelOdu: 'HPC-28KA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '5.90',
        odu: { dims: '555×770×300', weight: '29.0', power: '220V', currentCool: '3.0A', currentHeat: '3.4A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '500x320' },
        idu: { dims: '295×800×210', weight: '9.0', airflow: '易拆洗結構', noise: '41/35/29/23' }
    },
    {
        id: 'hawrin-dt-36', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6,
        modelIdu: 'HP-36KA', modelOdu: 'HPC-36KA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '5.80',
        odu: { dims: '555×770×300', weight: '32.0', power: '220V', currentCool: '4.0A', currentHeat: '4.5A', currentMax: '11.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '500x320' },
        idu: { dims: '295×800×210', weight: '10.0', airflow: '易拆洗結構', noise: '42/36/30/24' }
    },
    {
        id: 'hawrin-dt-41', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'HP-42KA', modelOdu: 'HPC-42KA',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.50',
        odu: { dims: '555×845×325', weight: '38.0', power: '220V', currentCool: '5.0A', currentHeat: '5.5A', currentMax: '13.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '560x340' },
        idu: { dims: '315×970×235', weight: '12.0', airflow: '易拆洗結構', noise: '44/38/32/25' }
    },
    {
        id: 'hawrin-dt-50', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'HP-50KA', modelOdu: 'HPC-50KA',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.30',
        odu: { dims: '555×845×325', weight: '42.0', power: '220V', currentCool: '6.5A', currentHeat: '7.0A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '560x340' },
        idu: { dims: '315×970×235', weight: '12.5', airflow: '易拆洗結構', noise: '46/40/34/26' }
    },
    {
        id: 'hawrin-dt-63', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3,
        modelIdu: 'HP-63KA', modelOdu: 'HPC-63KA',
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.10',
        odu: { dims: '700×960×396', weight: '55.0', power: '220V', currentCool: '8.5A', currentHeat: '9.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '600x370' },
        idu: { dims: '330×1100×235', weight: '15.0', airflow: '易拆洗結構', noise: '48/42/36/28' }
    },
    {
        id: 'hawrin-dt-72', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2,
        modelIdu: 'HP-72KA', modelOdu: 'HPC-72KA',
        pipes: '2分(6.35) / 5分(15.88)', cspf: '5.00',
        odu: { dims: '700×960×396', weight: '58.0', power: '220V', currentCool: '10.0A', currentHeat: '10.5A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '600x370' },
        idu: { dims: '330×1100×235', weight: '16.0', airflow: '易拆洗結構', noise: '50/44/38/30' }
    },

    // ================= 富士通 Fujitsu (General) KG系列 (優級/美型) =================
    {
        id: 'fujitsu-kg-22', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2,
        modelIdu: 'ASCG022KGTA', modelOdu: 'AOCG022KGTA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.53',
        odu: { dims: '542×799×290', weight: '30.0', power: '220V', currentCool: '2.5A', currentHeat: '3.0A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×215', weight: '10.0', airflow: 'Hybrid氣流/智慧眼', noise: '38/32/25/19' }
    },
    {
        id: 'fujitsu-kg-28', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'ASCG028KGTA', modelOdu: 'AOCG028KGTA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.23',
        odu: { dims: '542×799×290', weight: '30.0', power: '220V', currentCool: '3.4A', currentHeat: '4.2A', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×215', weight: '10.0', airflow: 'Hybrid氣流/智慧眼', noise: '40/34/26/19' }
    },
    {
        id: 'fujitsu-kg-36', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6,
        modelIdu: 'ASCG036KGTA', modelOdu: 'AOCG036KGTA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.01',
        odu: { dims: '542×799×290', weight: '32.0', power: '220V', currentCool: '4.5A', currentHeat: '5.0A', currentMax: '13.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×215', weight: '10.0', airflow: 'Hybrid氣流/智慧眼', noise: '42/36/28/20' }
    },
    {
        id: 'fujitsu-kg-40', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'ASCG040KGTA', modelOdu: 'AOCG040KGTA',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '5.85',
        odu: { dims: '542×799×290', weight: '33.0', power: '220V', currentCool: '5.5A', currentHeat: '6.0A', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×215', weight: '10.0', airflow: 'Hybrid氣流/智慧眼', noise: '43/38/30/21' }
    },
    {
        id: 'fujitsu-kg-50', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0,
        modelIdu: 'ASCG050KGTA', modelOdu: 'AOCG050KGTA',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.60',
        odu: { dims: '632×799×290', weight: '38.0', power: '220V', currentCool: '6.0A', currentHeat: '6.2A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '280×980×240', weight: '12.5', airflow: 'Hybrid氣流/智慧眼/大型機', noise: '45/40/32/22' }
    },
    {
        id: 'fujitsu-kg-63', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3,
        modelIdu: 'ASCG063KGTA', modelOdu: 'AOCG063KGTA',
        pipes: '2分(6.35) / 4分(12.70)', cspf: '5.33',
        odu: { dims: '632×799×290', weight: '40.0', power: '220V', currentCool: '8.2A', currentHeat: '8.8A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '280×980×240', weight: '13.0', airflow: 'Hybrid氣流/智慧眼/大型機', noise: '47/42/35/24' }
    },

    // ================= 富士通 Fujitsu (General) KM系列 (高級/標準) =================
    {
        id: 'fujitsu-km-22', brandCN: '富士通', series: '高級KM系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2,
        modelIdu: 'ASCG022KMTC', modelOdu: 'AOCG022KMTC',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.20',
        odu: { dims: '541×663×290', weight: '24.0', power: '220V', currentCool: '2.8A', currentHeat: '3.2A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×222', weight: '10.0', airflow: '舒適氣流', noise: '40/34/28/20' }
    },
    {
        id: 'fujitsu-km-28', brandCN: '富士通', series: '高級KM系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8,
        modelIdu: 'ASCG028KMTC', modelOdu: 'AOCG028KMTC',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '6.05',
        odu: { dims: '541×663×290', weight: '25.0', power: '220V', currentCool: '3.6A', currentHeat: '4.0A', currentMax: '10.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×222', weight: '10.0', airflow: '舒適氣流', noise: '42/36/30/21' }
    },
    {
        id: 'fujitsu-km-40', brandCN: '富士通', series: '高級KM系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1,
        modelIdu: 'ASCG040KMTC', modelOdu: 'AOCG040KMTC',
        pipes: '2分(6.35) / 3分(9.52)', cspf: '5.65',
        odu: { dims: '542×799×290', weight: '33.0', power: '220V', currentCool: '5.8A', currentHeat: '6.2A', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: { dims: '270×834×222', weight: '10.0', airflow: '舒適氣流', noise: '44/38/32/22' }
    },

    // ================= 富士通 Fujitsu 多聯式室外機 (R32) =================
    {
        id: 'fujitsu-multi-50', brandCN: '富士通', series: '多聯系列', func: '冷暖', type: '室外機(一對多)', refrigerant: 'R32', isMulti: true, maxKw: 5.0, maxIdus: 2,
        modelIdu: '請搭配多聯內機', modelOdu: 'AOCG050KBCA2',
        pipes: '依內機配置', cspf: '5.6 (依組合)',
        odu: { dims: '632×799×290', weight: '37.0', power: '220V', currentCool: '6.2A', currentHeat: '6.5A', currentMax: '15.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: null
    },
    {
        id: 'fujitsu-multi-84', brandCN: '富士通', series: '多聯系列', func: '冷暖', type: '室外機(一對多)', refrigerant: 'R32', isMulti: true, maxKw: 8.4, maxIdus: 4,
        modelIdu: '請搭配多聯內機', modelOdu: 'AOCG084KBTA4',
        pipes: '依內機配置', cspf: '5.2 (依組合)',
        odu: { dims: '884×820×315', weight: '60.0', power: '220V', currentCool: '10.5A', currentHeat: '11.0A', currentMax: '25.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (4芯)', footSpacing: '580×330' },
        idu: null
    }
];

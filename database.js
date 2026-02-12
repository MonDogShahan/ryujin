// 這是專門存放資料的地方
// 因為是在 HTML 中直接引用，這個變數會自動變成全域變數，主程式可以直接讀取

const AC_DATABASE = [
    // ================= 日立 Hitachi 尊榮系列 (NJP) 冷暖 =================
    { 
        id: 'hitachi-njp-22', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2, 
        modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', 
        pipes: '2分(6.35) / 3分(9.52)',
        cspf: '7.85',
        odu: { dims: '560×730×290', weight: '33.0', power: '220V', currentCool: '2.5A', currentHeat: '3.0A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.5', airflow: '凍結洗淨3.0+/日本製壓縮機', noise: '44/34/26/22' } 
    },
    { 
        id: 'hitachi-njp-28', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.8, 
        modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', 
        pipes: '2分(6.35) / 3分(9.52)',
        cspf: '7.20',
        odu: { dims: '560×730×290', weight: '34.0', power: '220V', currentCool: '3.0A', currentHeat: '3.4A', currentMax: '10.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.5', airflow: '凍結洗淨3.0+/日本製壓縮機', noise: '45/36/28/22' } 
    },
    { 
        id: 'hitachi-njp-36', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 3.6, 
        modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', 
        pipes: '2分(6.35) / 3分(9.52)',
        cspf: '6.85',
        odu: { dims: '560×730×290', weight: '35.0', power: '220V', currentCool: '4.2A', currentHeat: '4.8A', currentMax: '13.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '10.0', airflow: '凍結洗淨3.0+', noise: '46/38/29/25' } 
    },
    { 
        id: 'hitachi-njp-40', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 4.1, 
        modelIdu: 'RAS-40NJP', modelOdu: 'RAC-40JP', 
        pipes: '2分(6.35) / 3分(9.52)',
        cspf: '6.40',
        odu: { dims: '600×810×300', weight: '45.0', power: '220V', currentCool: '4.8A', currentHeat: '5.2A', currentMax: '14.0A', powerWire: '3.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×810×250', weight: '10.0', airflow: '凍結洗淨3.0+', noise: '47/39/30/26' } 
    },
    { 
        id: 'hitachi-njp-50', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 5.0, 
        modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', 
        pipes: '2分(6.35) / 4分(12.70)',
        cspf: '6.05',
        odu: { dims: '800×880×315', weight: '48.0', power: '220V', currentCool: '6.0A', currentHeat: '6.5A', currentMax: '15.5A', powerWire: '3.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '12.5', airflow: '凍結洗淨3.0+', noise: '48/42/35/29' } 
    },
    { 
        id: 'hitachi-njp-63', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 6.3, 
        modelIdu: 'RAS-63NJP', modelOdu: 'RAC-63JP', 
        pipes: '2分(6.35) / 4分(12.70)',
        cspf: '5.75',
        odu: { dims: '800×880×315', weight: '52.0', power: '220V', currentCool: '8.5A', currentHeat: '9.0A', currentMax: '18.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨3.0+', noise: '50/45/38/32' } 
    },
    { 
        id: 'hitachi-njp-71', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 7.2, 
        modelIdu: 'RAS-71NJP', modelOdu: 'RAC-71JP', 
        pipes: '2分(6.35) / 5分(15.88)',
        cspf: '5.50',
        odu: { dims: '800×880×315', weight: '55.0', power: '220V', currentCool: '9.5A', currentHeat: '10.0A', currentMax: '20.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨3.0+', noise: '51/46/39/33' } 
    },
    { 
        id: 'hitachi-njp-81', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 8.1, 
        modelIdu: 'RAS-81NJP', modelOdu: 'RAC-81JP', 
        pipes: '2分(6.35) / 5分(15.88)',
        cspf: '5.20',
        odu: { dims: '800×880×315', weight: '58.0', power: '220V', currentCool: '10.5A', currentHeat: '11.0A', currentMax: '22.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.0', airflow: '凍結洗淨3.0+', noise: '52/47/40/34' } 
    },
    { 
        id: 'hitachi-njp-90', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 9.0, 
        modelIdu: 'RAS-90NJP', modelOdu: 'RAC-90JP', 
        pipes: '3分(9.52) / 5分(15.88)',
        cspf: '5.05',
        odu: { dims: '800×880×315', weight: '60.0', power: '220V', currentCool: '11.8A', currentHeat: '12.5A', currentMax: '25.0A', powerWire: '5.5mm²', signalWire: '2.0mm² (3芯)', footSpacing: '580×380' }, 
        idu: { dims: '295×1090×250', weight: '13.5', airflow: '凍結洗淨3.0+', noise: '54/49/42/36' } 
    },
    { 
        id: 'hitachi-njp-110', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 11.0, 
        modelIdu: 'RAS-110NJP', modelOdu: 'RAC-110JP', 
        pipes: '3分(9.52) / 6分(19.05)',
        cspf: '4.85',
        odu: { dims: '910×920×370', weight: '72.0', power: '220V', currentCool: '14.5A', currentHeat: '15.0A', currentMax: '28.0A', powerWire: '8.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '600×390' }, 
        idu: { dims: '330×1100×260', weight: '17.0', airflow: '凍結洗淨3.0+', noise: '55/50/45/38' } 
    },
    { 
        id: 'hitachi-njp-125', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 12.5, 
        modelIdu: 'RAS-125NJP', modelOdu: 'RAC-125JP', 
        pipes: '3分(9.52) / 6分(19.05)',
        cspf: '4.60',
        odu: { dims: '1060×890×320', weight: '85.0', power: '220V', currentCool: '17.0A', currentHeat: '18.0A', currentMax: '32.0A', powerWire: '8.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '880×390' }, 
        idu: { dims: '330×1350×260', weight: '21.0', airflow: '凍結洗淨3.0+', noise: '56/51/46/39' } 
    },

    // ================= 日立 Hitachi 頂級系列 (NJK) 雙效合一模擬 =================
    { 
        id: 'hitachi-njk-22', brandCN: '日立', series: '頂級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2, 
        modelIdu: 'RAS-22NJK', modelOdu: 'RAC-22JK', 
        pipes: '2分(6.35) / 3分(9.52)',
        cspf: '7.45',
        odu: { dims: '560×730×290', weight: '32.0', power: '220V', currentCool: '2.5A', currentHeat: '3.0A', currentMax: '9.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.0', airflow: '凍結洗淨', noise: '43/33/25/20' } 
    },
    { 
        id: 'hitachi-njk-22-co', brandCN: '日立', series: '頂級系列', func: '冷專', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2, 
        modelIdu: 'RAS-22NJK', modelOdu: 'RAC-22SK', 
        pipes: '2分(6.35) / 3分(9.52)',
        cspf: '7.45',
        odu: { dims: '560×730×290', weight: '31.0', power: '220V', currentCool: '2.5A', currentHeat: 'N/A', currentMax: '8.5A', powerWire: '2.0mm²', signalWire: '2.0mm² (3芯)', footSpacing: '510×312.5' }, 
        idu: { dims: '295×810×250', weight: '9.0', airflow: '凍結洗淨', noise: '43/33/25/20' } 
    },
    // ================= 大金 Daikin =================
    { id: 'daikin-y-22', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', type: '壁掛式', refrigerant: 'R32', isMulti: false, maxKw: 2.2, pipes: '2分(6.35) / 3分(9.52)', cspf: '7.6', odu: { dims: '595×845×300', weight: '36.0', power: '220V', currentCool: '1.8A', currentHeat: '2.0A', currentMax: '8.0A', powerWire: '2.0mm²', signalWire: '2.0mm² (4芯)', footSpacing: '550x330' }, idu: { dims: '295×798×272', weight: '10.0', airflow: '閃流放電', noise: '40/32/24/19' } },
];
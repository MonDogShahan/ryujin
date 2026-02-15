// ================= data_daikin.js - 大金 Daikin (2025 終極全開版) =================
// 資料來源：2025 綜合型錄 & 商用 SkyAir 型錄
// 收錄：橫綱(Y/Z), 大關(U/Z), 經典(V), 豪菁(Z), 商用SkyAir(冷專)

// ------------------------------------------
// 1. 橫綱 Y 系列 (FTXM-Y) - 2025 旗艦 (R32 冷暖)
// ------------------------------------------
const DAIKIN_Y_SERIES = [
    { id: 'daikin-22y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.3', power: '360', cspf: '7.81', modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '32', power: '220V', footSpacing: '490×290' }, idu: { dims: '299×920×275', weight: '13.0' } },
    { id: 'daikin-28y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.5', power: '496', cspf: '7.51', modelIdu: 'FTXM28YVLT', modelOdu: 'RXM28YVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', footSpacing: '540×290' }, idu: { dims: '299×920×275', weight: '13.0' } },
    { id: 'daikin-36y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.8', current: '3.5', power: '734', cspf: '7.09', modelIdu: 'FTXM36YVLT', modelOdu: 'RXM36YVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', footSpacing: '540×290' }, idu: { dims: '299×920×275', weight: '13.0' } },
    { id: 'daikin-41y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.7', current: '4.3', power: '890', cspf: '7.13', modelIdu: 'FTXM41YVLT', modelOdu: 'RXM41YVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '40', power: '220V', footSpacing: '540×290' }, idu: { dims: '299×1100×275', weight: '15.0' } },
    { id: 'daikin-50y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '6.1', power: '1040', cspf: '7.00', modelIdu: 'FTXM50YVLT', modelOdu: 'RXM50YVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '53', power: '220V', footSpacing: '600×320' }, idu: { dims: '299×1100×275', weight: '15.0' } },
    { id: 'daikin-60y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.2', current: '5.0', power: '1230', cspf: '6.48', modelIdu: 'FTXM60YVLT', modelOdu: 'RXM60YVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '53', power: '220V', footSpacing: '600×320' }, idu: { dims: '299×1100×275', weight: '15.0' } },
    { id: 'daikin-71y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '7.3', power: '1530', cspf: '6.25', modelIdu: 'FTXM71YVLT', modelOdu: 'RXM71YVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '56', power: '220V', footSpacing: '600×320' }, idu: { dims: '299×1100×275', weight: '15.0' } }
];

// ------------------------------------------
// 2. 橫綱 Z 系列 (FTXM-Z) (R32 冷暖)
// ------------------------------------------
const DAIKIN_Z_SERIES = [
    { id: 'daikin-22z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.7', power: '540', cspf: '6.90', modelIdu: 'FTXM22ZVLT', modelOdu: 'RXM22ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', footSpacing: '490×290' }, idu: { dims: '299×838×275', weight: '12.0' } },
    { id: 'daikin-28z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.2', power: '435', cspf: '6.60', modelIdu: 'FTXM28ZVLT', modelOdu: 'RXM28ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', footSpacing: '490×290' }, idu: { dims: '299×838×275', weight: '12.0' } },
    { id: 'daikin-36z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.8', current: '2.9', power: '600', cspf: '6.84', modelIdu: 'FTXM36ZVLT', modelOdu: 'RXM36ZVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', footSpacing: '540×290' }, idu: { dims: '299×838×275', weight: '12.0' } },
    { id: 'daikin-41z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.7', current: '3.7', power: '750', cspf: '6.52', modelIdu: 'FTXM41ZVLT', modelOdu: 'RXM41ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', footSpacing: '540×290' }, idu: { dims: '299×920×275', weight: '13.0' } },
    { id: 'daikin-50z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '3.8', power: '780', cspf: '5.97', modelIdu: 'FTXM50ZVLT', modelOdu: 'RXM50ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', footSpacing: '540×290' }, idu: { dims: '299×920×275', weight: '13.0' } },
    { id: 'daikin-60z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '4.0', power: '830', cspf: '6.20', modelIdu: 'FTXM60ZVLT', modelOdu: 'RXM60ZVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '48', power: '220V', footSpacing: '600×320' }, idu: { dims: '299×1100×275', weight: '15.0' } },
    { id: 'daikin-71z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '4.7', power: '995', cspf: '5.86', modelIdu: 'FTXM71ZVLT', modelOdu: 'RXM71ZVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '55', power: '220V', footSpacing: '600×320' }, idu: { dims: '299×1100×275', weight: '15.0' } },
    { id: 'daikin-80z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, coolCap: '8.0', heatCap: '9.0', current: '5.0', power: '1060', cspf: '5.98', modelIdu: 'FTXM80ZVLT', modelOdu: 'RXM80ZVLT', pipes: '2分/5分', odu: { dims: '990×940×320', weight: '77', power: '220V', footSpacing: '600×370' }, idu: { dims: '329×1240×278', weight: '19.0' } },
    { id: 'daikin-90z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 9.0, coolCap: '8.7', heatCap: '9.5', current: '7.1', power: '1530', cspf: '5.76', modelIdu: 'FTXM90ZVLT', modelOdu: 'RXM90ZVLT', pipes: '2分/5分', odu: { dims: '990×940×320', weight: '77', power: '220V', footSpacing: '600×370' }, idu: { dims: '329×1240×278', weight: '19.0' } }
];

// ------------------------------------------
// 3. 大關 U 系列 (FTXV-U) (R32 冷暖)
// ------------------------------------------
const DAIKIN_DKU_SERIES = [
    { id: 'daikin-22u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.3', power: '455', cspf: '6.66', modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', footSpacing: '490×290' }, idu: { dims: '285×770×226', weight: '9.0' } },
    { id: 'daikin-28u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.9', power: '590', cspf: '6.12', modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', footSpacing: '490×290' }, idu: { dims: '285×770×226', weight: '9.0' } },
    { id: 'daikin-36u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.8', current: '3.8', power: '785', cspf: '6.52', modelIdu: 'FTXV36UVLT', modelOdu: 'RXV36UVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', footSpacing: '540×290' }, idu: { dims: '285×770×226', weight: '9.0' } },
    { id: 'daikin-41u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.7', current: '4.5', power: '1020', cspf: '6.00', modelIdu: 'FTXV41UVLT', modelOdu: 'RXV41UVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '41', power: '220V', footSpacing: '540×290' }, idu: { dims: '295×990×266', weight: '13.0' } },
    { id: 'daikin-50u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '4.9', power: '940', cspf: '5.85', modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', footSpacing: '540×290' }, idu: { dims: '295×990×266', weight: '13.0' } },
    { id: 'daikin-60u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '7.8', power: '1670', cspf: '5.70', modelIdu: 'FTXV60UVLT', modelOdu: 'RXV60UVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '50', power: '220V', footSpacing: '600×320' }, idu: { dims: '295×990×266', weight: '13.0' } },
    { id: 'daikin-71u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '8.4', power: '1800', cspf: '5.20', modelIdu: 'FTXV71UVLT', modelOdu: 'RXV71UVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '55', power: '220V', footSpacing: '600×320' }, idu: { dims: '295×990×266', weight: '13.0' } }
];

// ------------------------------------------
// 4. 經典 V 系列 (FTHF-V) (R32 冷暖)
// ------------------------------------------
const DAIKIN_CV_SERIES = [
    { id: 'daikin-20v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, coolCap: '2.0', heatCap: '2.0', current: '3.1', power: '465', cspf: '6.38', modelIdu: 'FTHF20VAVLT', modelOdu: 'RHF20VAVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', footSpacing: '490×290' }, idu: { dims: '285×770×242', weight: '9.0' } },
    { id: 'daikin-25v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, coolCap: '2.5', heatCap: '2.5', current: '2.8', power: '560', cspf: '6.32', modelIdu: 'FTHF25VAVLT', modelOdu: 'RHF25VAVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', footSpacing: '490×290' }, idu: { dims: '285×770×242', weight: '9.0' } },
    { id: 'daikin-30v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.0, coolCap: '3.0', heatCap: '3.0', current: '3.4', power: '700', cspf: '6.03', modelIdu: 'FTHF30VAVLT', modelOdu: 'RHF30VAVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', footSpacing: '490×290' }, idu: { dims: '285×770×242', weight: '9.0' } },
    { id: 'daikin-40v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.0, coolCap: '4.0', heatCap: '4.0', current: '4.4', power: '952', cspf: '5.96', modelIdu: 'FTHF40VAVLT', modelOdu: 'RHF40VAVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', footSpacing: '540×290' }, idu: { dims: '295×990×281', weight: '13.0' } },
    { id: 'daikin-50v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '6.1', power: '1315', cspf: '5.83', modelIdu: 'FTHF50VAVLT', modelOdu: 'RHF50VAVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', footSpacing: '540×290' }, idu: { dims: '295×990×281', weight: '13.0' } },
    { id: 'daikin-60v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '6.0', current: '8.2', power: '1780', cspf: '5.34', modelIdu: 'FTHF60VAVLT', modelOdu: 'RHF60VAVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', footSpacing: '540×290' }, idu: { dims: '295×990×281', weight: '13.0' } },
    { id: 'daikin-71v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '7.2', current: '10.2', power: '2230', cspf: '5.11', modelIdu: 'FTHF71VAVLT', modelOdu: 'RHF71VAVLT', pipes: '2分/5分', odu: { dims: '595×845×300', weight: '39', power: '220V', footSpacing: '540×290' }, idu: { dims: '295×990×281', weight: '13.0' } }
];

// ------------------------------------------
// 5. 商用 SkyAir 冷專系列 (RZF-C) - 頂級冷專
// ------------------------------------------
// 特色：商用空間專用、大能力、冷專設計
const DAIKIN_SKYAIR_COOL = [
    { id: 'daikin-rzf-71', brandCN: '大金', series: 'SkyAir商用', func: '冷專', type: '室外機(商用)', refrigerant: 'R32', maxKw: 7.1, coolCap: '7.1', heatCap: '-', current: '8.8', power: '1850', cspf: '5.37', modelIdu: '-', modelOdu: 'RZF71CVLT', pipes: '3分/5分', odu: { dims: '595×845×300', weight: '43', power: '220V', footSpacing: '540×290' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-rzf-100', brandCN: '大金', series: 'SkyAir商用', func: '冷專', type: '室外機(商用)', refrigerant: 'R32', maxKw: 10.0, coolCap: '10.0', heatCap: '-', current: '12.5', power: '2650', cspf: '5.35', modelIdu: '-', modelOdu: 'RZF100CYLT', pipes: '3分/5分', odu: { dims: '695×930×350', weight: '48', power: '220V', footSpacing: '600×320' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-rzf-125', brandCN: '大金', series: 'SkyAir商用', func: '冷專', type: '室外機(商用)', refrigerant: 'R32', maxKw: 12.5, coolCap: '12.5', heatCap: '-', current: '15.5', power: '3800', cspf: '5.10', modelIdu: '-', modelOdu: 'RZF125CYLT', pipes: '3分/5分', odu: { dims: '990×940×320', weight: '77', power: '220V', footSpacing: '600×370' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-rzf-140', brandCN: '大金', series: 'SkyAir商用', func: '冷專', type: '室外機(商用)', refrigerant: 'R32', maxKw: 14.0, coolCap: '14.0', heatCap: '-', current: '17.5', power: '4500', cspf: '4.80', modelIdu: '-', modelOdu: 'RZF140CYLT', pipes: '3分/6分', odu: { dims: '990×940×320', weight: '82', power: '220V', footSpacing: '600×370' }, idu: { dims: '-', weight: '-' } }
];

// 合併並輸出單一變數 (確保 index.html 能正確讀取)
window.DATA_DAIKIN = [
    ...DAIKIN_Y_SERIES,
    ...DAIKIN_Z_SERIES,
    ...DAIKIN_DKU_SERIES,
    ...DAIKIN_CV_SERIES,
    ...DAIKIN_SKYAIR_COOL
];

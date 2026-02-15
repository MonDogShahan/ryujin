// ================= data2.js - 大金 Daikin (2026 全系列完整收錄版) =================
// 資料來源：2026 綜合型錄 (PCW2026-1) 及各系列單本型錄 (PCRTW...)
// 涵蓋品牌：大金 (Daikin)、富士通 (Fujitsu)

// ------------------------------------------
// 1. 橫綱 Y 系列 (FTXM-Y) - 2026 頂級旗艦 (溫濕雙控/閃流放電/防霉)
// ------------------------------------------
const DAIKIN_Y_SERIES = [
    { id: 'daikin-22y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.3', power: '360', cspf: '7.81', modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '32', power: '220V', currentMax: '9.0' }, idu: { dims: '299×920×275', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-28y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.5', power: '496', cspf: '7.51', modelIdu: 'FTXM28YVLT', modelOdu: 'RXM28YVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '10.5' }, idu: { dims: '299×920×275', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-36y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.8', current: '3.5', power: '734', cspf: '7.09', modelIdu: 'FTXM36YVLT', modelOdu: 'RXM36YVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '13.0' }, idu: { dims: '299×920×275', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-41y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.7', current: '4.3', power: '890', cspf: '7.13', modelIdu: 'FTXM41YVLT', modelOdu: 'RXM41YVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '40', power: '220V', currentMax: '14.5' }, idu: { dims: '299×1100×275', weight: '15.0', flangeDims: '' } },
    { id: 'daikin-50y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '6.1', power: '1040', cspf: '7.00', modelIdu: 'FTXM50YVLT', modelOdu: 'RXM50YVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '53', power: '220V', currentMax: '15.5' }, idu: { dims: '299×1100×275', weight: '15.0', flangeDims: '' } },
    { id: 'daikin-60y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.2', current: '5.0', power: '1230', cspf: '6.48', modelIdu: 'FTXM60YVLT', modelOdu: 'RXM60YVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '53', power: '220V', currentMax: '17.5' }, idu: { dims: '299×1100×275', weight: '15.0', flangeDims: '' } },
    { id: 'daikin-71y', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '7.3', power: '1530', cspf: '6.25', modelIdu: 'FTXM71YVLT', modelOdu: 'RXM71YVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '56', power: '220V', currentMax: '20.0' }, idu: { dims: '299×1100×275', weight: '15.0', flangeDims: '' } }
];

// ------------------------------------------
// 2. 橫綱 Z 系列 (FTXM-Z) - 經典旗艦
// ------------------------------------------
const DAIKIN_Z_SERIES = [
    { id: 'daikin-22z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.7', power: '540', cspf: '6.90', modelIdu: 'FTXM22ZVLT', modelOdu: 'RXM22ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '9.0' }, idu: { dims: '299×838×275', weight: '12.0', flangeDims: '' } },
    { id: 'daikin-28z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.2', power: '435', cspf: '6.60', modelIdu: 'FTXM28ZVLT', modelOdu: 'RXM28ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '10.5' }, idu: { dims: '299×838×275', weight: '12.0', flangeDims: '' } },
    { id: 'daikin-36z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.8', current: '2.9', power: '600', cspf: '6.84', modelIdu: 'FTXM36ZVLT', modelOdu: 'RXM36ZVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '12.0' }, idu: { dims: '299×838×275', weight: '12.0', flangeDims: '' } },
    { id: 'daikin-41z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.7', current: '3.7', power: '750', cspf: '6.52', modelIdu: 'FTXM41ZVLT', modelOdu: 'RXM41ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', currentMax: '14.5' }, idu: { dims: '299×920×275', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-50z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '3.8', power: '780', cspf: '5.97', modelIdu: 'FTXM50ZVLT', modelOdu: 'RXM50ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', currentMax: '15.5' }, idu: { dims: '299×920×275', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-60z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '4.0', power: '830', cspf: '6.20', modelIdu: 'FTXM60ZVLT', modelOdu: 'RXM60ZVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '17.5' }, idu: { dims: '299×1100×275', weight: '15.0', flangeDims: '' } },
    { id: 'daikin-71z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '4.7', power: '995', cspf: '5.86', modelIdu: 'FTXM71ZVLT', modelOdu: 'RXM71ZVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0' }, idu: { dims: '299×1100×275', weight: '15.0', flangeDims: '' } },
    { id: 'daikin-80z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, coolCap: '8.0', heatCap: '9.0', current: '5.0', power: '1060', cspf: '5.98', modelIdu: 'FTXM80ZVLT', modelOdu: 'RXM80ZVLT', pipes: '2分/5分', odu: { dims: '990×940×320', weight: '77', power: '220V', currentMax: '22.0' }, idu: { dims: '329×1240×278', weight: '19.0', flangeDims: '' } },
    { id: 'daikin-90z', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 9.0, coolCap: '8.7', heatCap: '9.5', current: '7.1', power: '1530', cspf: '5.76', modelIdu: 'FTXM90ZVLT', modelOdu: 'RXM90ZVLT', pipes: '2分/5分', odu: { dims: '990×940×320', weight: '77', power: '220V', currentMax: '25.0' }, idu: { dims: '329×1240×278', weight: '19.0', flangeDims: '' } }
];

// ------------------------------------------
// 3. 大關 Z 系列 (FTXV-Z) - 高級冷暖
// ------------------------------------------
const DAIKIN_DKZ_SERIES = [
    { id: 'daikin-22z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.0', current: '2.0', power: '420', cspf: '6.65', modelIdu: 'FTXV22ZVLT', modelOdu: 'RXV22ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '8.0' }, idu: { dims: '286×770×244', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-28z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '2.8', current: '2.8', power: '670', cspf: '6.38', modelIdu: 'FTXV28ZVLT', modelOdu: 'RXV28ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '9.0' }, idu: { dims: '286×770×244', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-36z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.5', current: '3.7', power: '780', cspf: '6.53', modelIdu: 'FTXV36ZVLT', modelOdu: 'RXV36ZVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '12.0' }, idu: { dims: '286×770×244', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-41z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.1', current: '4.5', power: '976', cspf: '6.24', modelIdu: 'FTXV41ZVLT', modelOdu: 'RXV41ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '14.0' }, idu: { dims: '295×993×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-50z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '6.0', power: '1315', cspf: '5.96', modelIdu: 'FTXV50ZVLT', modelOdu: 'RXV50ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '15.5' }, idu: { dims: '295×993×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-60z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '6.0', current: '8.0', power: '1720', cspf: '5.61', modelIdu: 'FTXV60ZVLT', modelOdu: 'RXV60ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '17.5' }, idu: { dims: '295×993×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-71z-dk', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '7.2', current: '10.0', power: '2150', cspf: '5.39', modelIdu: 'FTXV71ZVLT', modelOdu: 'RXV71ZVLT', pipes: '2分/5分', odu: { dims: '595×845×300', weight: '39', power: '220V', currentMax: '20.0' }, idu: { dims: '295×993×281', weight: '13.0', flangeDims: '' } }
];

// ------------------------------------------
// 4. 大關 U 系列 (FTXV-U) - 標準冷暖
// ------------------------------------------
const DAIKIN_DKU_SERIES = [
    { id: 'daikin-22u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.3', power: '455', cspf: '6.66', modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.0' }, idu: { dims: '285×770×226', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-28u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '2.9', power: '590', cspf: '6.12', modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '9.0' }, idu: { dims: '285×770×226', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-36u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.5', heatCap: '3.8', current: '3.8', power: '785', cspf: '6.52', modelIdu: 'FTXV36UVLT', modelOdu: 'RXV36UVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '12.0' }, idu: { dims: '285×770×226', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-41u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '4.7', current: '4.5', power: '1020', cspf: '6.00', modelIdu: 'FTXV41UVLT', modelOdu: 'RXV41UVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '41', power: '220V', currentMax: '14.0' }, idu: { dims: '295×990×266', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-50u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '4.9', power: '940', cspf: '5.85', modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', currentMax: '15.5' }, idu: { dims: '295×990×266', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-60u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '7.8', power: '1670', cspf: '5.70', modelIdu: 'FTXV60UVLT', modelOdu: 'RXV60UVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '50', power: '220V', currentMax: '17.5' }, idu: { dims: '295×990×266', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-71u', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.0', current: '8.4', power: '1800', cspf: '5.20', modelIdu: 'FTXV71UVLT', modelOdu: 'RXV71UVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0' }, idu: { dims: '295×990×266', weight: '13.0', flangeDims: '' } }
];

// ------------------------------------------
// 5. 豪菁 Z 系列 (FTHF-Z) - 超值冷暖
// ------------------------------------------
const DAIKIN_HJZ_SERIES = [
    { id: 'daikin-20z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, coolCap: '2.2', heatCap: '2.0', current: '3.1', power: '465', cspf: '6.38', modelIdu: 'FTHF20ZVLT', modelOdu: 'RHF20ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '7.0' }, idu: { dims: '285×770×242', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-25z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, coolCap: '2.5', heatCap: '2.5', current: '2.8', power: '560', cspf: '6.32', modelIdu: 'FTHF25ZVLT', modelOdu: 'RHF25ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '8.0' }, idu: { dims: '285×770×242', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-30z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.0, coolCap: '3.0', heatCap: '3.0', current: '3.4', power: '650', cspf: '6.24', modelIdu: 'FTHF30ZVLT', modelOdu: 'RHF30ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '10.0' }, idu: { dims: '285×770×242', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-40z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.0, coolCap: '4.1', heatCap: '4.1', current: '4.5', power: '1000', cspf: '5.96', modelIdu: 'FTHF40ZVLT', modelOdu: 'RHF40ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '13.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-50z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '6.0', power: '1315', cspf: '5.83', modelIdu: 'FTHF50ZVLT', modelOdu: 'RHF50ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '15.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-60z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '6.0', current: '8.0', power: '1720', cspf: '5.61', modelIdu: 'FTHF60ZVLT', modelOdu: 'RHF60ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '18.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-71z-h', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '7.2', current: '10.0', power: '2150', cspf: '5.38', modelIdu: 'FTHF71ZVLT', modelOdu: 'RHF71ZVLT', pipes: '2分/5分', odu: { dims: '595×845×300', weight: '39', power: '220V', currentMax: '20.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } }
];

// ------------------------------------------
// 6. 經典 V 系列 (FTHF-V) - 專案冷暖
// ------------------------------------------
const DAIKIN_CV_SERIES = [
    { id: 'daikin-20v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, coolCap: '2.2', heatCap: '2.0', current: '3.1', power: '465', cspf: '6.38', modelIdu: 'FTHF20VAVLT', modelOdu: 'RHF20VAVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '7.0' }, idu: { dims: '285×770×242', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-25v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, coolCap: '2.5', heatCap: '2.5', current: '2.8', power: '560', cspf: '6.32', modelIdu: 'FTHF25VAVLT', modelOdu: 'RHF25VAVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '8.0' }, idu: { dims: '285×770×242', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-30v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.0, coolCap: '3.0', heatCap: '3.0', current: '3.4', power: '700', cspf: '6.03', modelIdu: 'FTHF30VAVLT', modelOdu: 'RHF30VAVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '26', power: '220V', currentMax: '10.0' }, idu: { dims: '285×770×242', weight: '9.0', flangeDims: '' } },
    { id: 'daikin-40v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.0, coolCap: '4.0', heatCap: '4.0', current: '4.4', power: '952', cspf: '5.96', modelIdu: 'FTHF40VAVLT', modelOdu: 'RHF40VAVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '13.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-50v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '6.1', power: '1315', cspf: '5.83', modelIdu: 'FTHF50VAVLT', modelOdu: 'RHF50VAVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '15.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-60v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '6.0', current: '8.2', power: '1780', cspf: '5.34', modelIdu: 'FTHF60VAVLT', modelOdu: 'RHF60VAVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '36', power: '220V', currentMax: '18.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } },
    { id: 'daikin-71v-c', brandCN: '大金', series: '經典V系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '7.2', current: '10.2', power: '2230', cspf: '5.11', modelIdu: 'FTHF71VAVLT', modelOdu: 'RHF71VAVLT', pipes: '2分/5分', odu: { dims: '595×845×300', weight: '39', power: '220V', currentMax: '20.0' }, idu: { dims: '295×990×281', weight: '13.0', flangeDims: '' } }
];

// ------------------------------------------
// 7. 隱藏系列 (FDXV-R) - 吊隱式冷暖
// ------------------------------------------
const DAIKIN_DUCT_SERIES = [
    { id: 'daikin-duct-22', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.9', power: '670', cspf: '4.49', modelIdu: 'FDXV22RVLT', modelOdu: 'RXM22ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '8.0' }, idu: { dims: '200×700×620', weight: '21.0', flangeDims: '請參考手冊 (需現場製作風箱)' } },
    { id: 'daikin-duct-28', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.4', current: '3.2', power: '590', cspf: '4.27', modelIdu: 'FDXV28RVLT', modelOdu: 'RXM28ZVLT', pipes: '2分/3分', odu: { dims: '550×675×284', weight: '28', power: '220V', currentMax: '9.0' }, idu: { dims: '200×700×620', weight: '21.0', flangeDims: '請參考手冊 (需現場製作風箱)' } },
    { id: 'daikin-duct-36', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 3.5, coolCap: '3.5', heatCap: '3.8', current: '5.6', power: '1050', cspf: '4.40', modelIdu: 'FDXV36RVLT', modelOdu: 'RXM36ZVLT', pipes: '2分/3分', odu: { dims: '595×845×300', weight: '38', power: '220V', currentMax: '12.0' }, idu: { dims: '200×700×620', weight: '21.0', flangeDims: '請參考手冊 (需現場製作風箱)' } },
    { id: 'daikin-duct-41', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '5.2', current: '4.9', power: '1180', cspf: '4.67', modelIdu: 'FDXV41RVLT', modelOdu: 'RXM41ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', currentMax: '14.0' }, idu: { dims: '200×900×620', weight: '27.0', flangeDims: '請參考手冊 (需現場製作風箱)' } },
    { id: 'daikin-duct-50', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '6.1', power: '1260', cspf: '4.18', modelIdu: 'FDXV50RVLT', modelOdu: 'RXM50ZVLT', pipes: '2分/4分', odu: { dims: '595×845×300', weight: '41', power: '220V', currentMax: '15.5' }, idu: { dims: '200×900×620', weight: '27.0', flangeDims: '請參考手冊 (需現場製作風箱)' } },
    { id: 'daikin-duct-60', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 6.0, coolCap: '6.0', heatCap: '7.0', current: '9.3', power: '1980', cspf: '4.36', modelIdu: 'FDXV60RVLT', modelOdu: 'RXM60ZVLT', pipes: '2分/4分', odu: { dims: '695×930×350', weight: '48', power: '220V', currentMax: '17.5' }, idu: { dims: '200×1100×620', weight: '30.0', flangeDims: '請參考手冊 (需現場製作風箱)' } },
    { id: 'daikin-duct-71', brandCN: '大金', series: '隱藏系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '7.5', current: '12.2', power: '2600', cspf: '4.10', modelIdu: 'FDXV71RVLT', modelOdu: 'RXM71ZVLT', pipes: '2分/5分', odu: { dims: '695×930×350', weight: '55', power: '220V', currentMax: '20.0' }, idu: { dims: '200×1100×620', weight: '30.0', flangeDims: '請參考手冊 (需現場製作風箱)' } }
];

// ------------------------------------------
// 8. 家用多聯系統 (2MXP/MXM) - 室外機(家用)
// ------------------------------------------
const DAIKIN_MULTI_SERIES = [
    { id: 'daikin-multi-50', brandCN: '大金', series: '家用多聯', func: '冷暖', type: '室外機(家用)', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.0', current: '-', power: '-', cspf: '5.8', modelIdu: '-', modelOdu: '2MXP50ZVLT', pipes: '依室內機', odu: { dims: '550×675×284', weight: '37', power: '220V', currentMax: '15.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-multi-85', brandCN: '大金', series: '家用多聯', func: '冷暖', type: '室外機(家用)', refrigerant: 'R32', maxKw: 8.5, coolCap: '8.5', heatCap: '9.0', current: '-', power: '-', cspf: '5.7', modelIdu: '-', modelOdu: '2MXP85ZVLT', pipes: '依室內機', odu: { dims: '695×930×350', weight: '57', power: '220V', currentMax: '22.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-multi-56', brandCN: '大金', series: '家用多聯', func: '冷暖', type: '室外機(家用)', refrigerant: 'R32', maxKw: 5.6, coolCap: '5.6', heatCap: '5.8', current: '-', power: '-', cspf: '6.66', modelIdu: '-', modelOdu: '2MXM56YVLT', pipes: '依室內機', odu: { dims: '695×930×350', weight: '51', power: '220V', currentMax: '15.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-multi-75', brandCN: '大金', series: '家用多聯', func: '冷暖', type: '室外機(家用)', refrigerant: 'R32', maxKw: 7.2, coolCap: '7.2', heatCap: '8.6', current: '-', power: '-', cspf: '6.2', modelIdu: '-', modelOdu: '2MXM75YVLT', pipes: '依室內機', odu: { dims: '695×930×350', weight: '57', power: '220V', currentMax: '20.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-multi-90', brandCN: '大金', series: '家用多聯', func: '冷暖', type: '室外機(家用)', refrigerant: 'R32', maxKw: 8.5, coolCap: '8.5', heatCap: '9.0', current: '-', power: '-', cspf: '6.3', modelIdu: '-', modelOdu: '3MXM90YVLT', pipes: '依室內機', odu: { dims: '695×930×350', weight: '57', power: '220V', currentMax: '22.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-multi-110', brandCN: '大金', series: '家用多聯', func: '冷暖', type: '室外機(家用)', refrigerant: 'R32', maxKw: 10.5, coolCap: '10.5', heatCap: '11.5', current: '-', power: '-', cspf: '6.41', modelIdu: '-', modelOdu: '4MXM110YVLT', pipes: '依室內機', odu: { dims: '990×940×320', weight: '83', power: '220V', currentMax: '28.0' }, idu: { dims: '-', weight: '-' } }
];

// ------------------------------------------
// 9. VRV mini (RSUYQ/RXYCQ) - 室外機(家用)
// ------------------------------------------
const DAIKIN_VRV_SERIES = [
    { id: 'daikin-vrv-112', brandCN: '大金', series: 'VRV S', func: '冷暖', type: '室外機(家用)', refrigerant: 'R410A', maxKw: 11.2, coolCap: '11.2', heatCap: '12.5', current: '-', power: '-', cspf: '7.03', modelIdu: '-', modelOdu: 'RSUYQ112AVT', pipes: '依設計', odu: { dims: '870×1100×460', weight: '98', power: '220V', currentMax: '32.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-vrv-140', brandCN: '大金', series: 'VRV S', func: '冷暖', type: '室外機(家用)', refrigerant: 'R410A', maxKw: 14.0, coolCap: '14.0', heatCap: '16.0', current: '-', power: '-', cspf: '6.61', modelIdu: '-', modelOdu: 'RSUYQ140AVT', pipes: '依設計', odu: { dims: '870×1100×460', weight: '98', power: '220V', currentMax: '40.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-vrv-160', brandCN: '大金', series: 'VRV S', func: '冷暖', type: '室外機(家用)', refrigerant: 'R410A', maxKw: 16.0, coolCap: '16.0', heatCap: '18.0', current: '-', power: '-', cspf: '6.38', modelIdu: '-', modelOdu: 'RSUYQ160AVT', pipes: '依設計', odu: { dims: '870×1100×460', weight: '98', power: '220V', currentMax: '45.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-vrv-mini-4', brandCN: '大金', series: 'VRV mini', func: '冷暖', type: '室外機(家用)', refrigerant: 'R410A', maxKw: 11.2, coolCap: '11.2', heatCap: '12.5', current: '-', power: '-', cspf: '6.35', modelIdu: '-', modelOdu: 'RXYCQ4BVET', pipes: '依設計', odu: { dims: '990×940×320', weight: '78', power: '220V', currentMax: '30.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-vrv-mini-5', brandCN: '大金', series: 'VRV mini', func: '冷暖', type: '室外機(家用)', refrigerant: 'R410A', maxKw: 12.5, coolCap: '12.5', heatCap: '14.0', current: '-', power: '-', cspf: '6.27', modelIdu: '-', modelOdu: 'RXYCQ5BVET', pipes: '依設計', odu: { dims: '990×940×320', weight: '78', power: '220V', currentMax: '35.0' }, idu: { dims: '-', weight: '-' } },
    { id: 'daikin-vrv-mini-6', brandCN: '大金', series: 'VRV mini', func: '冷暖', type: '室外機(家用)', refrigerant: 'R410A', maxKw: 14.0, coolCap: '14.0', heatCap: '16.0', current: '-', power: '-', cspf: '6.21', modelIdu: '-', modelOdu: 'RXYCQ6BVET', pipes: '依設計', odu: { dims: '990×940×320', weight: '78', power: '220V', currentMax: '40.0' }, idu: { dims: '-', weight: '-' } }
];

// ------------------------------------------
// 10. 富士通 (保留既有資料)
// ------------------------------------------
const FUJITSU_SERIES = [
    { id: 'fujitsu-z-22', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '1.9', power: '385', cspf: '7.85', modelIdu: 'ASCG022KZTA', modelOdu: 'AOCG022KZTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V', currentMax: '10.0' }, idu: { dims: '293×798×355', weight: '15.5', flangeDims: '' } },
    { id: 'fujitsu-z-50', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.3', current: '5.8', power: '1250', cspf: '6.30', modelIdu: 'ASCG050KZTA', modelOdu: 'AOCG050KZTA', pipes: '2分/3分', odu: { dims: '716×820×315', weight: '42', power: '220V', currentMax: '15.0' }, idu: { dims: '293×798×355', weight: '17.0', flangeDims: '' } },
    { id: 'fujitsu-duct-25', brandCN: '富士通', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.5, coolCap: '2.5', heatCap: '3.2', current: '2.3', power: '550', cspf: '6.00', modelIdu: 'ARCG025K', modelOdu: 'AOCG025K', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V', currentMax: '10.0' }, idu: { dims: '198×700×620', weight: '19', flangeDims: '560×150' } },
    { id: 'fujitsu-duct-50', brandCN: '富士通', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '5.8', power: '1450', cspf: '5.30', modelIdu: 'ARCG050K', modelOdu: 'AOCG050K', pipes: '2分/4分', odu: { dims: '632×799×290', weight: '38', power: '220V', currentMax: '15.0' }, idu: { dims: '198×900×620', weight: '23', flangeDims: '760×150' } },
    { id: 'fujitsu-duct-90', brandCN: '富士通', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 9.0, coolCap: '9.0', heatCap: '10.0', current: '11.5', power: '2800', cspf: '5.00', modelIdu: 'ARCG090K', modelOdu: 'AOCG090K', pipes: '3分/5分', odu: { dims: '800×900×330', weight: '60', power: '220V', currentMax: '25.0' }, idu: { dims: '270×1400×700', weight: '40', flangeDims: '1260×200' } }
];

// 合併所有系列
window.DATA_DAIKIN_FUJITSU = [
    ...DAIKIN_Y_SERIES,
    ...DAIKIN_Z_SERIES,
    ...DAIKIN_DKZ_SERIES,
    ...DAIKIN_DKU_SERIES,
    ...DAIKIN_HJZ_SERIES,
    ...DAIKIN_CV_SERIES,
    ...DAIKIN_DUCT_SERIES,
    ...DAIKIN_MULTI_SERIES,
    ...DAIKIN_VRV_SERIES,
    ...FUJITSU_SERIES
];

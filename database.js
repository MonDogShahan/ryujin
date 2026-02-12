// database.js - 專門存放冷氣機型資料
// 包含日立、Panasonic、大金(含商用)、三菱重工(含商用)、富士通、華菱等完整系列

const AC_DATABASE = [
    // ================= 日立 Hitachi (尊榮/旗艦/頂級) =================
    // 尊榮系列 (NJP) - 凍結洗淨3.0+
    { id: 'hitachi-njp-22', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'RAS-22NJP', modelOdu: 'RAC-22JP', pipes: '2/3', cspf: '7.85', odu: { dims: '560×730×290', weight: '33', power: '220V', powerWire: '2.0mm²' }, idu: { dims: '295×810×250', weight: '9.5' } },
    { id: 'hitachi-njp-28', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'RAS-28NJP', modelOdu: 'RAC-28JP', pipes: '2/3', cspf: '7.20', odu: { dims: '560×730×290', weight: '34', power: '220V', powerWire: '2.0mm²' }, idu: { dims: '295×810×250', weight: '9.5' } },
    { id: 'hitachi-njp-36', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'RAS-36NJP', modelOdu: 'RAC-36JP', pipes: '2/3', cspf: '6.85', odu: { dims: '560×730×290', weight: '35', power: '220V', powerWire: '2.0mm²' }, idu: { dims: '295×810×250', weight: '10.0' } },
    { id: 'hitachi-njp-40', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, modelIdu: 'RAS-40NJP', modelOdu: 'RAC-40JP', pipes: '2/3', cspf: '6.40', odu: { dims: '600×810×300', weight: '45', power: '220V', powerWire: '3.5mm²' }, idu: { dims: '295×810×250', weight: '10.0' } },
    { id: 'hitachi-njp-50', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'RAS-50NJP', modelOdu: 'RAC-50JP', pipes: '2/4', cspf: '6.05', odu: { dims: '800×880×315', weight: '48', power: '220V', powerWire: '3.5mm²' }, idu: { dims: '295×1090×250', weight: '12.5' } },
    { id: 'hitachi-njp-63', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, modelIdu: 'RAS-63NJP', modelOdu: 'RAC-63JP', pipes: '2/4', cspf: '5.75', odu: { dims: '800×880×315', weight: '52', power: '220V', powerWire: '5.5mm²' }, idu: { dims: '295×1090×250', weight: '13.0' } },
    { id: 'hitachi-njp-71', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, modelIdu: 'RAS-71NJP', modelOdu: 'RAC-71JP', pipes: '2/5', cspf: '5.50', odu: { dims: '800×880×315', weight: '55', power: '220V', powerWire: '5.5mm²' }, idu: { dims: '295×1090×250', weight: '13.0' } },
    { id: 'hitachi-njp-81', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.1, modelIdu: 'RAS-81NJP', modelOdu: 'RAC-81JP', pipes: '2/5', cspf: '5.20', odu: { dims: '800×880×315', weight: '58', power: '220V', powerWire: '5.5mm²' }, idu: { dims: '295×1090×250', weight: '13.0' } },
    { id: 'hitachi-njp-90', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 9.0, modelIdu: 'RAS-90NJP', modelOdu: 'RAC-90JP', pipes: '3/5', cspf: '5.05', odu: { dims: '800×880×315', weight: '60', power: '220V', powerWire: '5.5mm²' }, idu: { dims: '295×1090×250', weight: '13.5' } },
    { id: 'hitachi-njp-110', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 11.0, modelIdu: 'RAS-110NJP', modelOdu: 'RAC-110JP', pipes: '3/6', cspf: '4.85', odu: { dims: '910×920×370', weight: '72', power: '220V', powerWire: '8.0mm²' }, idu: { dims: '330×1100×260', weight: '17.0' } },
    { id: 'hitachi-njp-125', brandCN: '日立', series: '尊榮系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 12.5, modelIdu: 'RAS-125NJP', modelOdu: 'RAC-125JP', pipes: '3/6', cspf: '4.60', odu: { dims: '1060×890×320', weight: '85', power: '220V', powerWire: '8.0mm²' }, idu: { dims: '330×1350×260', weight: '21.0' } },

    // 旗艦系列 (NT)
    { id: 'hitachi-nt-22', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'RAS-22NT', modelOdu: 'RAC-22NP', pipes: '2/3', cspf: '7.40', odu: { dims: '560×730×290', weight: '32', power: '220V' }, idu: { dims: '295×810×250', weight: '9.0' } },
    { id: 'hitachi-nt-28', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'RAS-28NT', modelOdu: 'RAC-28NP', pipes: '2/3', cspf: '6.70', odu: { dims: '560×730×290', weight: '33', power: '220V' }, idu: { dims: '295×810×250', weight: '9.0' } },
    { id: 'hitachi-nt-36', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'RAS-36NT', modelOdu: 'RAC-36NP', pipes: '2/3', cspf: '6.45', odu: { dims: '560×730×290', weight: '35', power: '220V' }, idu: { dims: '295×810×250', weight: '10.0' } },
    { id: 'hitachi-nt-40', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, modelIdu: 'RAS-40NT', modelOdu: 'RAC-40NP', pipes: '2/3', cspf: '6.10', odu: { dims: '600×810×300', weight: '43', power: '220V' }, idu: { dims: '295×810×250', weight: '10.0' } },
    { id: 'hitachi-nt-50', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'RAS-50NT', modelOdu: 'RAC-50NP', pipes: '2/4', cspf: '5.85', odu: { dims: '800×880×315', weight: '47', power: '220V' }, idu: { dims: '295×1090×250', weight: '12.5' } },
    { id: 'hitachi-nt-63', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, modelIdu: 'RAS-63NT', modelOdu: 'RAC-63NP', pipes: '2/4', cspf: '5.55', odu: { dims: '800×880×315', weight: '51', power: '220V' }, idu: { dims: '295×1090×250', weight: '13.0' } },
    { id: 'hitachi-nt-71', brandCN: '日立', series: '旗艦系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, modelIdu: 'RAS-71NT', modelOdu: 'RAC-71NP', pipes: '2/5', cspf: '5.35', odu: { dims: '800×880×315', weight: '54', power: '220V' }, idu: { dims: '295×1090×250', weight: '13.0' } },

    // ================= 大金 Daikin (全系列完整收錄) =================
    // 1. 橫綱 Y 系列 (2025/2026 最新)
    { id: 'daikin-y-22', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXM22YVLT', modelOdu: 'RXM22YVLT', pipes: '2/3', cspf: '7.60', odu: { dims: '595×845×300', weight: '36' }, idu: { dims: '295×798×272', weight: '10' } },
    { id: 'daikin-y-28', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'FTXM28YVLT', modelOdu: 'RXM28YVLT', pipes: '2/3', cspf: '7.40', odu: { dims: '595×845×300', weight: '38' }, idu: { dims: '295×798×272', weight: '10' } },
    { id: 'daikin-y-36', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'FTXM36YVLT', modelOdu: 'RXM36YVLT', pipes: '2/3', cspf: '7.10', odu: { dims: '595×845×300', weight: '38' }, idu: { dims: '295×798×272', weight: '10' } },
    { id: 'daikin-y-41', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, modelIdu: 'FTXM41YVLT', modelOdu: 'RXM41YVLT', pipes: '2/4', cspf: '6.50', odu: { dims: '595×845×300', weight: '42' }, idu: { dims: '295×798×272', weight: '10' } },
    { id: 'daikin-y-50', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTXM50YVLT', modelOdu: 'RXM50YVLT', pipes: '2/4', cspf: '6.10', odu: { dims: '695×930×350', weight: '48' }, idu: { dims: '295×990×281', weight: '14' } },
    { id: 'daikin-y-60', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, modelIdu: 'FTXM60YVLT', modelOdu: 'RXM60YVLT', pipes: '2/4', cspf: '5.80', odu: { dims: '695×930×350', weight: '50' }, idu: { dims: '295×990×281', weight: '14' } },
    { id: 'daikin-y-71', brandCN: '大金', series: '橫綱Y系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, modelIdu: 'FTXM71YVLT', modelOdu: 'RXM71YVLT', pipes: '2/5', cspf: '5.50', odu: { dims: '695×930×350', weight: '55' }, idu: { dims: '295×1160×281', weight: '16' } },

    // 2. 橫綱 Z 系列
    { id: 'daikin-z-22', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXM22ZVLT', modelOdu: 'RXM22ZVLT', pipes: '2/3', cspf: '7.65', odu: { dims: '595×845×300', weight: '36' }, idu: { dims: '295×798×272', weight: '11' } },
    { id: 'daikin-z-28', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'FTXM28ZVLT', modelOdu: 'RXM28ZVLT', pipes: '2/3', cspf: '7.45', odu: { dims: '595×845×300', weight: '38' }, idu: { dims: '295×798×272', weight: '11' } },
    { id: 'daikin-z-36', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, modelIdu: 'FTXM36ZVLT', modelOdu: 'RXM36ZVLT', pipes: '2/3', cspf: '7.12', odu: { dims: '595×845×300', weight: '38' }, idu: { dims: '295×798×272', weight: '11' } },
    { id: 'daikin-z-41', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, modelIdu: 'FTXM41ZVLT', modelOdu: 'RXM41ZVLT', pipes: '2/4', cspf: '6.55', odu: { dims: '595×845×300', weight: '42' }, idu: { dims: '295×798×272', weight: '11' } },
    { id: 'daikin-z-50', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTXM50ZVLT', modelOdu: 'RXM50ZVLT', pipes: '2/4', cspf: '6.15', odu: { dims: '695×930×350', weight: '48' }, idu: { dims: '295×990×281', weight: '14' } },
    { id: 'daikin-z-60', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, modelIdu: 'FTXM60ZVLT', modelOdu: 'RXM60ZVLT', pipes: '2/4', cspf: '5.85', odu: { dims: '695×930×350', weight: '50' }, idu: { dims: '295×990×281', weight: '14' } },
    { id: 'daikin-z-71', brandCN: '大金', series: '橫綱Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, modelIdu: 'FTXM71ZVLT', modelOdu: 'RXM71ZVLT', pipes: '2/5', cspf: '5.55', odu: { dims: '695×930×350', weight: '55' }, idu: { dims: '295×1160×281', weight: '16' } },

    // 3. 橫綱 X 系列 (經典高階/Hybrid)
    { id: 'daikin-x-22', brandCN: '大金', series: '橫綱X系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXM22XVLT', modelOdu: 'RXM22XVLT', pipes: '2/3', cspf: '7.20', odu: { dims: '550×675×284', weight: '33' }, idu: { dims: '285×770×226' } },
    { id: 'daikin-x-28', brandCN: '大金', series: '橫綱X系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'FTXM28XVLT', modelOdu: 'RXM28XVLT', pipes: '2/3', cspf: '7.00', odu: { dims: '550×675×284', weight: '33' }, idu: { dims: '285×770×226' } },

    // 4. 大關 U 系列 (熱銷)
    { id: 'daikin-u-22', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXV22UVLT', modelOdu: 'RXV22UVLT', pipes: '2/3', cspf: '6.30', odu: { dims: '550×675×284', weight: '28' }, idu: { dims: '285×770×226', weight: '9' } },
    { id: 'daikin-u-28', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'FTXV28UVLT', modelOdu: 'RXV28UVLT', pipes: '2/3', cspf: '6.05', odu: { dims: '550×675×284', weight: '30' }, idu: { dims: '285×770×226', weight: '9' } },
    { id: 'daikin-u-36', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'FTXV36UVLT', modelOdu: 'RXV36UVLT', pipes: '2/3', cspf: '5.85', odu: { dims: '550×675×284', weight: '32' }, idu: { dims: '285×770×226', weight: '9' } },
    { id: 'daikin-u-41', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, modelIdu: 'FTXV41UVLT', modelOdu: 'RXV41UVLT', pipes: '2/4', cspf: '5.60', odu: { dims: '595×845×300', weight: '38' }, idu: { dims: '295×990×263', weight: '13' } },
    { id: 'daikin-u-50', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTXV50UVLT', modelOdu: 'RXV50UVLT', pipes: '2/4', cspf: '5.50', odu: { dims: '695×930×350', weight: '45' }, idu: { dims: '295×990×263', weight: '13' } },
    { id: 'daikin-u-60', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, modelIdu: 'FTXV60UVLT', modelOdu: 'RXV60UVLT', pipes: '2/4', cspf: '5.35', odu: { dims: '695×930×350', weight: '48' }, idu: { dims: '295×990×263', weight: '13' } },
    { id: 'daikin-u-71', brandCN: '大金', series: '大關U系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, modelIdu: 'FTXV71UVLT', modelOdu: 'RXV71UVLT', pipes: '2/5', cspf: '5.20', odu: { dims: '695×930×350', weight: '52' }, idu: { dims: '295×990×263', weight: '13' } },

    // 5. 大關 Z 系列 (特殊通路/新款)
    { id: 'daikin-z-std-22', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTXV22ZVLT', modelOdu: 'RXV22ZVLT', pipes: '2/3', cspf: '6.30', odu: { dims: '550×675×284' }, idu: { dims: '285×770×226' } },
    { id: 'daikin-z-std-50', brandCN: '大金', series: '大關Z系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTXV50ZVLT', modelOdu: 'RXV50ZVLT', pipes: '2/4', cspf: '5.50', odu: { dims: '695×930×350' }, idu: { dims: '295×990×263' } },

    // 6. 大關 SA 系列 (標準型)
    { id: 'daikin-sa-22', brandCN: '大金', series: '大關SA系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'FTHF22VAVLT', modelOdu: 'RHF22VAVLT', pipes: '2/3', cspf: '6.00', odu: { dims: '550×658×275' }, idu: { dims: '283×770×223' } },
    { id: 'daikin-sa-50', brandCN: '大金', series: '大關SA系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'FTHF50VAVLT', modelOdu: 'RHF50VAVLT', pipes: '2/4', cspf: '5.30', odu: { dims: '595×845×300' }, idu: { dims: '290×1050×238' } },

    // 7. 經典 V 系列
    { id: 'daikin-v-20', brandCN: '大金', series: '經典V系列', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, modelIdu: 'FTHF20VAVLT', modelOdu: 'RHF20VAVLT', pipes: '2/3', cspf: '6.00', odu: { dims: '550×658×275' }, idu: { dims: '283×770×223' } },

    // 8. 豪菁 Z 系列 (SkyAir/商用) - 16kW 支援
    { id: 'daikin-sky-71', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 7.1, modelIdu: 'FDBQ71ZAVLT', modelOdu: 'RZQ71ZAVLT', pipes: '3/5', cspf: '5.6', odu: { dims: '595×845×300', powerWire: '5.5mm²' }, idu: { dims: '245×1000×800' } },
    { id: 'daikin-sky-100', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 10.0, modelIdu: '搭配內機', modelOdu: 'RZQ100ZAVLT', pipes: '3/5', cspf: '5.4', odu: { dims: '990×940×320', weight: '70', powerWire: '8.0mm²' }, idu: null },
    { id: 'daikin-sky-125', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 12.5, modelIdu: '搭配內機', modelOdu: 'RZQ125ZAVLT', pipes: '3/5', cspf: '5.1', odu: { dims: '1430×940×320', weight: '90', powerWire: '14mm²' }, idu: null },
    { id: 'daikin-sky-140', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 14.0, modelIdu: '搭配內機', modelOdu: 'RZQ140ZAVLT', pipes: '3/5', cspf: '5.0', odu: { dims: '1430×940×320', weight: '92', powerWire: '22mm²' }, idu: null },
    { id: 'daikin-sky-160', brandCN: '大金', series: '豪菁Z系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 16.0, modelIdu: '搭配內機', modelOdu: 'RZQ160ZAVLT', pipes: '3/6', cspf: '4.8', odu: { dims: '1430×940×320', weight: '95', powerWire: '22mm²' }, idu: null },

    // ================= 三菱重工 Mitsubishi Heavy (2025 完整) =================
    // 1. 未來系列 (ZSXT) - 高階
    { id: 'mhi-zsxt-20', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, modelIdu: 'SRK20ZSXT-W', modelOdu: 'SRC20ZSXT-W', pipes: '2/3', cspf: '8.50', odu: { dims: '595×780×290', weight: '35' }, idu: { dims: '305×920×220' } },
    { id: 'mhi-zsxt-25', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, modelIdu: 'SRK25ZSXT-W', modelOdu: 'SRC25ZSXT-W', pipes: '2/3', cspf: '7.80', odu: { dims: '595×780×290', weight: '35' }, idu: { dims: '305×920×220' } },
    { id: 'mhi-zsxt-35', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, modelIdu: 'SRK35ZSXT-W', modelOdu: 'SRC35ZSXT-W', pipes: '2/3', cspf: '7.20', odu: { dims: '595×780×290', weight: '37' }, idu: { dims: '305×920×220' } },
    { id: 'mhi-zsxt-50', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'SRK50ZSXT-W', modelOdu: 'SRC50ZSXT-W', pipes: '2/4', cspf: '6.50', odu: { dims: '640×800×290', weight: '45' }, idu: { dims: '305×920×220' } },
    { id: 'mhi-zsxt-60', brandCN: '三菱重工', series: '未來系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.0, modelIdu: 'SRK60ZSXT-W', modelOdu: 'SRC60ZSXT-W', pipes: '2/4', cspf: '6.10', odu: { dims: '640×800×290', weight: '48' }, idu: { dims: '305×920×220' } },

    // 2. 晴空系列 (ZST) - 標準
    { id: 'mhi-zst-20', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.0, modelIdu: 'SRK20ZST-W', modelOdu: 'SRC20ZST-W', pipes: '2/3', cspf: '6.50', odu: { dims: '540×645×275' }, idu: { dims: '290×870×230' } },
    { id: 'mhi-zst-25', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, modelIdu: 'SRK25ZST-W', modelOdu: 'SRC25ZST-W', pipes: '2/3', cspf: '6.30', odu: { dims: '540×645×275' }, idu: { dims: '290×870×230' } },
    { id: 'mhi-zst-35', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, modelIdu: 'SRK35ZST-W', modelOdu: 'SRC35ZST-W', pipes: '2/3', cspf: '6.10', odu: { dims: '540×780×290' }, idu: { dims: '290×870×230' } },
    { id: 'mhi-zst-41', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, modelIdu: 'SRK41ZST-W', modelOdu: 'SRC41ZST-W', pipes: '2/4', cspf: '5.90', odu: { dims: '595×780×290' }, idu: { dims: '290×870×230' } },
    { id: 'mhi-zst-50', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'SRK50ZST-W', modelOdu: 'SRC50ZST-W', pipes: '2/4', cspf: '5.60', odu: { dims: '595×780×290' }, idu: { dims: '290×870×230' } },
    { id: 'mhi-zst-63', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, modelIdu: 'SRK63ZST-W', modelOdu: 'SRC63ZST-W', pipes: '2/4', cspf: '5.30', odu: { dims: '640×800×290' }, idu: { dims: '339×1197×262' } },
    { id: 'mhi-zst-71', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, modelIdu: 'SRK71ZST-W', modelOdu: 'SRC71ZST-W', pipes: '2/5', cspf: '5.10', odu: { dims: '750×880×340' }, idu: { dims: '339×1197×262' } },
    { id: 'mhi-zst-80', brandCN: '三菱重工', series: '晴空系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, modelIdu: 'SRK80ZST-W', modelOdu: 'SRC80ZST-W', pipes: '3/5', cspf: '5.00', odu: { dims: '750×880×340' }, idu: { dims: '339×1197×262' } },

    // 3. 朝日系列 (Asahi) - 高功率壁掛 (ZRT)
    { id: 'mhi-zrt-50', brandCN: '三菱重工', series: '朝日系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'SRK50ZRT-W', modelOdu: 'SRC50ZRT-W', pipes: '2/4', cspf: '5.80', odu: { dims: '640×800×290' }, idu: { dims: '339×1197×262', airflow: '20米送風' } },
    { id: 'mhi-zrt-71', brandCN: '三菱重工', series: '朝日系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, modelIdu: 'SRK71ZRT-W', modelOdu: 'SRC71ZRT-W', pipes: '3/5', cspf: '5.20', odu: { dims: '750×880×340' }, idu: { dims: '339×1197×262', airflow: '20米送風' } },
    { id: 'mhi-zrt-100', brandCN: '三菱重工', series: '朝日系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 10.0, modelIdu: 'SRK100ZRT-W', modelOdu: 'SRC100ZRT-W', pipes: '3/5', cspf: '4.50', odu: { dims: '1300×970×370' }, idu: { dims: '339×1620×262', airflow: '大型空間專用' } },

    // 4. 旭山系列 (Asayama) - 標準入門 (VS/YVS)
    { id: 'mhi-vs-25', brandCN: '三菱重工', series: '旭山系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.5, modelIdu: 'SRK25VS-W', modelOdu: 'SRC25VS-W', pipes: '2/3', cspf: '6.10', odu: { dims: '540×645×275' }, idu: { dims: '268×790×224' } },
    { id: 'mhi-vs-35', brandCN: '三菱重工', series: '旭山系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.5, modelIdu: 'SRK35VS-W', modelOdu: 'SRC35VS-W', pipes: '2/3', cspf: '5.80', odu: { dims: '540×780×290' }, idu: { dims: '268×790×224' } },
    { id: 'mhi-vs-50', brandCN: '三菱重工', series: '旭山系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'SRK50VS-W', modelOdu: 'SRC50VS-W', pipes: '2/4', cspf: '5.30', odu: { dims: '595×780×290' }, idu: { dims: '268×790×224' } },

    // 5. 商用 FDC 系列 (大能力)
    { id: 'mhi-fdc-100', brandCN: '三菱重工', series: '商用系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 10.0, modelIdu: 'FDT100', modelOdu: 'FDC100VNP', pipes: '3/5', cspf: '5.3', odu: { dims: '845×970×370' }, idu: null },
    { id: 'mhi-fdc-140', brandCN: '三菱重工', series: '商用系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 14.0, modelIdu: 'FDT140', modelOdu: 'FDC140VNP', pipes: '3/5', cspf: '5.1', odu: { dims: '845×970×370', weight: '80' }, idu: null },
    { id: 'mhi-fdc-160', brandCN: '三菱重工', series: '商用系列', func: '冷暖', type: '室外機(商用)', refrigerant: 'R32', maxKw: 16.0, modelIdu: 'FDT160', modelOdu: 'FDC160VNP', pipes: '3/6', cspf: '4.8', odu: { dims: '1300×970×370', weight: '95' }, idu: null },

    // ================= Panasonic 國際牌 (RX/QX) =================
    { id: 'panasonic-rx-22', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'CS-RX22NA2', modelOdu: 'CU-RX22NHA2', pipes: '2/3', cspf: '8.30', odu: { dims: '542×780×289' }, idu: { dims: '295×798×235' } },
    { id: 'panasonic-rx-28', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'CS-RX28NA2', modelOdu: 'CU-RX28NHA2', pipes: '2/3', cspf: '7.85', odu: { dims: '542×780×289' }, idu: { dims: '295×798×235' } },
    { id: 'panasonic-rx-36', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, modelIdu: 'CS-RX36NA2', modelOdu: 'CU-RX36NHA2', pipes: '2/3', cspf: '7.65', odu: { dims: '542×780×289' }, idu: { dims: '295×798×235' } },
    { id: 'panasonic-rx-50', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'CS-RX50NA2', modelOdu: 'CU-RX50NHA2', pipes: '2/4', cspf: '6.75', odu: { dims: '619×824×299' }, idu: { dims: '295×990×255' } },
    { id: 'panasonic-rx-63', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, modelIdu: 'CS-RX63NA2', modelOdu: 'CU-RX63NHA2', pipes: '2/4', cspf: '6.20', odu: { dims: '619×824×299' }, idu: { dims: '295×990×255' } },
    { id: 'panasonic-rx-71', brandCN: '國際牌', series: 'RX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.2, modelIdu: 'CS-RX71NA2', modelOdu: 'CU-RX71NHA2', pipes: '2/5', cspf: '5.85', odu: { dims: '914×920×340' }, idu: { dims: '295×1090×255' } },
    { id: 'panasonic-qx-28', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'CS-QX28NA2', modelOdu: 'CU-QX28NHA2', pipes: '2/3', cspf: '6.80', odu: { dims: '542×780×289' }, idu: { dims: '295×798×235' } },
    { id: 'panasonic-qx-50', brandCN: '國際牌', series: 'QX系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'CS-QX50NA2', modelOdu: 'CU-QX50NHA2', pipes: '2/4', cspf: '6.00', odu: { dims: '619×824×299' }, idu: { dims: '295×990×255' } },

    // ================= 富士通 Fujitsu (優級KG/高級KM/多聯) =================
    { id: 'fujitsu-kg-22', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, modelIdu: 'ASCG022KGTA', modelOdu: 'AOCG022KGTA', pipes: '2/3', cspf: '6.53', odu: { dims: '542×799×290' }, idu: { dims: '270×834×215' } },
    { id: 'fujitsu-kg-50', brandCN: '富士通', series: '優級KG系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'ASCG050KGTA', modelOdu: 'AOCG050KGTA', pipes: '2/4', cspf: '5.60', odu: { dims: '632×799×290' }, idu: { dims: '280×980×240' } },
    { id: 'fujitsu-km-28', brandCN: '富士通', series: '高級KM系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, modelIdu: 'ASCG028KMTC', modelOdu: 'AOCG028KMTC', pipes: '2/3', cspf: '6.05', odu: { dims: '541×663×290' }, idu: { dims: '270×834×222' } },
    
    // ================= 華菱 Hawrin (易拆洗) =================
    { id: 'hawrin-dt-22', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.3, modelIdu: 'HP-22KA', modelOdu: 'HPC-22KA', pipes: '2/3', cspf: '6.00', odu: { dims: '555×770×300' }, idu: { dims: '295×800×210' } },
    { id: 'hawrin-dt-50', brandCN: '華菱', series: '易拆洗系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, modelIdu: 'HP-50KA', modelOdu: 'HPC-50KA', pipes: '2/4', cspf: '5.30', odu: { dims: '555×845×325' }, idu: { dims: '315×970×235' } }
];



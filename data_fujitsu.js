// ================= data_fujitsu.js - 富士通/General (2025 全系列完整版) =================
// 資料來源：General Taiwan 官網 (高級/優級/nocria Z/美型機)
// 包含：KZTA, KGTB, KGTA, KMTC, KMTB, CMTD, CMTC
// 修正：補齊所有室外機安裝腳座孔距 (footSpacing)

// ------------------------------------------
// 1. nocria® Z 系列 (KZTA) - 頂級旗艦
// ------------------------------------------
// 特色：自動清潔濾網、熱交換器加熱除菌、智慧眼、雙風扇氣流
const FUJITSU_NOCRIA_Z = [
    { id: 'fujitsu-z-22', brandCN: '富士通(General)', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.4', power: '380', cspf: '7.85', modelIdu: 'ASCG022KZTA', modelOdu: 'AOCG022KZTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V', footSpacing: '580×330' }, idu: { dims: '293×798×355', weight: '15.5' } },
    { id: 'fujitsu-z-28', brandCN: '富士通(General)', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.6', current: '3.2', power: '490', cspf: '7.45', modelIdu: 'ASCG028KZTA', modelOdu: 'AOCG028KZTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '33', power: '220V', footSpacing: '580×330' }, idu: { dims: '293×798×355', weight: '15.5' } },
    { id: 'fujitsu-z-36', brandCN: '富士通(General)', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '3.8', current: '4.5', power: '700', cspf: '7.00', modelIdu: 'ASCG036KZTA', modelOdu: 'AOCG036KZTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '33', power: '220V', footSpacing: '580×330' }, idu: { dims: '293×798×355', weight: '16.0' } },
    { id: 'fujitsu-z-40', brandCN: '富士通(General)', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '5.4', current: '5.2', power: '880', cspf: '7.20', modelIdu: 'ASCG040KZTA', modelOdu: 'AOCG040KZTA', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '37', power: '220V', footSpacing: '580×330' }, idu: { dims: '293×798×355', weight: '16.0' } },
    { id: 'fujitsu-z-50', brandCN: '富士通(General)', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.3', current: '6.8', power: '1250', cspf: '6.30', modelIdu: 'ASCG050KZTA', modelOdu: 'AOCG050KZTA', pipes: '2分/3分', odu: { dims: '716×820×315', weight: '42', power: '220V', footSpacing: '600×370' }, idu: { dims: '293×798×355', weight: '17.0' } },
    { id: 'fujitsu-z-63', brandCN: '富士通(General)', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '7.2', current: '8.8', power: '1720', cspf: '5.70', modelIdu: 'ASCG063KZTA', modelOdu: 'AOCG063KZTA', pipes: '2分/4分', odu: { dims: '716×820×315', weight: '42', power: '220V', footSpacing: '600×370' }, idu: { dims: '293×798×355', weight: '17.0' } }
];

// ------------------------------------------
// 2. 高級系列 冷暖 (KGTB) - 高效能
// ------------------------------------------
// 特色：智慧眼、高CSPF、大型機種對應
const FUJITSU_ADVANCED_KGTB = [
    { id: 'fujitsu-kgtb-28', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.5', current: '3.0', power: '630', cspf: '6.49', modelIdu: 'ASCG028KGTB', modelOdu: 'AOCG028KGTB', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '30', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.0' } },
    { id: 'fujitsu-kgtb-36', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '4.0', current: '4.2', power: '850', cspf: '6.20', modelIdu: 'ASCG036KGTB', modelOdu: 'AOCG036KGTB', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '31', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.0' } },
    { id: 'fujitsu-kgtb-40', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '5.0', current: '5.2', power: '1080', cspf: '6.00', modelIdu: 'ASCG040KGTB', modelOdu: 'AOCG040KGTB', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.5' } },
    { id: 'fujitsu-kgtb-50', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '6.5', power: '1350', cspf: '5.80', modelIdu: 'ASCG050KGTB', modelOdu: 'AOCG050KGTB', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.5' } },
    { id: 'fujitsu-kgtb-63', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '7.1', current: '8.8', power: '1850', cspf: '5.40', modelIdu: 'ASCG063KGTB', modelOdu: 'AOCG063KGTB', pipes: '2分/4分', odu: { dims: '716×820×315', weight: '42', power: '220V', footSpacing: '600×370' }, idu: { dims: '270×834×215', weight: '10.5' } },
    { id: 'fujitsu-kgtb-71', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, coolCap: '7.1', heatCap: '8.0', current: '10.0', power: '2100', cspf: '5.30', modelIdu: 'ASCG071KGTB', modelOdu: 'AOCG071KGTB', pipes: '2分/5分', odu: { dims: '716×820×315', weight: '42', power: '220V', footSpacing: '600×370' }, idu: { dims: '280×980×240', weight: '13.5' } },
    { id: 'fujitsu-kgtb-80', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 8.0, coolCap: '8.0', heatCap: '9.0', current: '11.5', power: '2400', cspf: '5.10', modelIdu: 'ASCG080KGTB', modelOdu: 'AOCG080KGTB', pipes: '3分/5分', odu: { dims: '716×820×315', weight: '45', power: '220V', footSpacing: '600×370' }, idu: { dims: '280×980×240', weight: '13.5' } },
    { id: 'fujitsu-kgtb-90', brandCN: '富士通(General)', series: '高級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 9.0, coolCap: '9.0', heatCap: '10.0', current: '13.0', power: '2800', cspf: '4.80', modelIdu: 'ASCG090KGTB', modelOdu: 'AOCG090KGTB', pipes: '3分/5分', odu: { dims: '716×820×315', weight: '45', power: '220V', footSpacing: '600×370' }, idu: { dims: '280×980×240', weight: '13.5' } }
];

// ------------------------------------------
// 3. 高級系列 美型機 (KGTA) - 設計款
// ------------------------------------------
// 特色：美型機身、厚度僅21.5cm
const FUJITSU_ADVANCED_DESIGN_KGTA = [
    { id: 'fujitsu-kgta-22', brandCN: '富士通(General)', series: '高級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.3', power: '380', cspf: '6.23', modelIdu: 'ASCG022KGTA', modelOdu: 'AOCG022KGTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V', footSpacing: '580×330' }, idu: { dims: '293×798×355', weight: '15.0' } }, // Note: KGTA IDU dimensions might vary, using standard KG for now
    { id: 'fujitsu-kgta-28', brandCN: '富士通(General)', series: '高級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.5', current: '3.0', power: '630', cspf: '6.23', modelIdu: 'ASCG028KGTA', modelOdu: 'AOCG028KGTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '30', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.0' } },
    { id: 'fujitsu-kgta-36', brandCN: '富士通(General)', series: '高級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '4.0', current: '4.2', power: '850', cspf: '6.23', modelIdu: 'ASCG036KGTA', modelOdu: 'AOCG036KGTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '31', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.0' } },
    { id: 'fujitsu-kgta-40', brandCN: '富士通(General)', series: '高級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '5.0', current: '5.2', power: '1080', cspf: '6.00', modelIdu: 'ASCG040KGTA', modelOdu: 'AOCG040KGTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.5' } },
    { id: 'fujitsu-kgta-50', brandCN: '富士通(General)', series: '高級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '6.5', power: '1350', cspf: '5.80', modelIdu: 'ASCG050KGTA', modelOdu: 'AOCG050KGTA', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×215', weight: '10.5' } },
    { id: 'fujitsu-kgta-63', brandCN: '富士通(General)', series: '高級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '7.1', current: '8.8', power: '1850', cspf: '5.40', modelIdu: 'ASCG063KGTA', modelOdu: 'AOCG063KGTA', pipes: '2分/4分', odu: { dims: '716×820×315', weight: '42', power: '220V', footSpacing: '600×370' }, idu: { dims: '270×834×215', weight: '10.5' } }
];

// ------------------------------------------
// 4. 優級系列 冷暖 (KMTC) - 標準款
// ------------------------------------------
const FUJITSU_PREMIUM_KMTC = [
    { id: 'fujitsu-kmtc-22', brandCN: '富士通(General)', series: '優級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.7', power: '560', cspf: '6.23', modelIdu: 'ASCG022KMTC', modelOdu: 'AOCG022KMTC', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '23', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtc-28', brandCN: '富士通(General)', series: '優級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.5', current: '3.0', power: '630', cspf: '6.23', modelIdu: 'ASCG028KMTC', modelOdu: 'AOCG028KMTC', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtc-36', brandCN: '富士通(General)', series: '優級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '4.0', current: '4.5', power: '920', cspf: '6.00', modelIdu: 'ASCG036KMTC', modelOdu: 'AOCG036KMTC', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtc-40', brandCN: '富士通(General)', series: '優級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '5.0', current: '5.5', power: '1150', cspf: '5.80', modelIdu: 'ASCG040KMTC', modelOdu: 'AOCG040KMTC', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '33', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtc-50', brandCN: '富士通(General)', series: '優級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '7.0', power: '1450', cspf: '5.60', modelIdu: 'ASCG050KMTC', modelOdu: 'AOCG050KMTC', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtc-63', brandCN: '富士通(General)', series: '優級系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '7.1', current: '9.0', power: '1900', cspf: '5.30', modelIdu: 'ASCG063KMTC', modelOdu: 'AOCG063KMTC', pipes: '2分/4分', odu: { dims: '632×799×290', weight: '38', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } }
];

// ------------------------------------------
// 5. 優級系列 美型機 (KMTB) - 設計款
// ------------------------------------------
const FUJITSU_PREMIUM_DESIGN_KMTB = [
    { id: 'fujitsu-kmtb-22', brandCN: '富士通(General)', series: '優級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.7', power: '560', cspf: '6.23', modelIdu: 'ASCG022KMTB', modelOdu: 'AOCG022KMTB', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '23', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtb-28', brandCN: '富士通(General)', series: '優級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.5', current: '3.0', power: '630', cspf: '6.23', modelIdu: 'ASCG028KMTB', modelOdu: 'AOCG028KMTB', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtb-36', brandCN: '富士通(General)', series: '優級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '4.0', current: '4.5', power: '920', cspf: '6.00', modelIdu: 'ASCG036KMTB', modelOdu: 'AOCG036KMTB', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtb-40', brandCN: '富士通(General)', series: '優級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '5.0', current: '5.5', power: '1150', cspf: '5.80', modelIdu: 'ASCG040KMTB', modelOdu: 'AOCG040KMTB', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '33', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtb-50', brandCN: '富士通(General)', series: '優級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '7.0', power: '1450', cspf: '5.60', modelIdu: 'ASCG050KMTB', modelOdu: 'AOCG050KMTB', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-kmtb-63', brandCN: '富士通(General)', series: '優級美型', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '7.1', current: '9.0', power: '1900', cspf: '5.30', modelIdu: 'ASCG063KMTB', modelOdu: 'AOCG063KMTB', pipes: '2分/4分', odu: { dims: '632×799×290', weight: '38', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } }
];

// ------------------------------------------
// 6. 優級系列 冷專 (CMTD)
// ------------------------------------------
const FUJITSU_PREMIUM_COOL_CMTD = [
    { id: 'fujitsu-cmtd-22', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '-', current: '2.7', power: '560', cspf: '6.23', modelIdu: 'ASCG022CMTD', modelOdu: 'AOCG022CMTD', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '23', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtd-28', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '-', current: '3.0', power: '630', cspf: '6.23', modelIdu: 'ASCG028CMTD', modelOdu: 'AOCG028CMTD', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtd-36', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '-', current: '4.5', power: '920', cspf: '6.00', modelIdu: 'ASCG036CMTD', modelOdu: 'AOCG036CMTD', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtd-40', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '-', current: '5.5', power: '1150', cspf: '5.80', modelIdu: 'ASCG040CMTD', modelOdu: 'AOCG040CMTD', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '33', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtd-50', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '-', current: '7.0', power: '1450', cspf: '5.60', modelIdu: 'ASCG050CMTD', modelOdu: 'AOCG050CMTD', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtd-63', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '-', current: '9.0', power: '1900', cspf: '5.30', modelIdu: 'ASCG063CMTD', modelOdu: 'AOCG063CMTD', pipes: '2分/4分', odu: { dims: '632×799×290', weight: '38', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtd-71', brandCN: '富士通(General)', series: '優級冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, coolCap: '7.1', heatCap: '-', current: '10.0', power: '2200', cspf: '5.20', modelIdu: 'ASCG071CMTD', modelOdu: 'AOCG071CMTD', pipes: '2分/5分', odu: { dims: '632×799×290', weight: '40', power: '220V', footSpacing: '580×330' }, idu: { dims: '280×980×240', weight: '13.5' } }
];

// ------------------------------------------
// 7. 優級系列 美型冷專 (CMTC)
// ------------------------------------------
const FUJITSU_PREMIUM_DESIGN_COOL_CMTC = [
    { id: 'fujitsu-cmtc-22', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '-', current: '2.7', power: '560', cspf: '6.23', modelIdu: 'ASCG022CMTC', modelOdu: 'AOCG022CMTC', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '23', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtc-28', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '-', current: '3.0', power: '630', cspf: '6.23', modelIdu: 'ASCG028CMTC', modelOdu: 'AOCG028CMTC', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtc-36', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '-', current: '4.5', power: '920', cspf: '6.00', modelIdu: 'ASCG036CMTC', modelOdu: 'AOCG036CMTC', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '25', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtc-40', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 4.1, coolCap: '4.1', heatCap: '-', current: '5.5', power: '1150', cspf: '5.80', modelIdu: 'ASCG040CMTC', modelOdu: 'AOCG040CMTC', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '33', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtc-50', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '-', current: '7.0', power: '1450', cspf: '5.60', modelIdu: 'ASCG050CMTC', modelOdu: 'AOCG050CMTC', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtc-63', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 6.3, coolCap: '6.3', heatCap: '-', current: '9.0', power: '1900', cspf: '5.30', modelIdu: 'ASCG063CMTC', modelOdu: 'AOCG063CMTC', pipes: '2分/4分', odu: { dims: '632×799×290', weight: '38', power: '220V', footSpacing: '580×330' }, idu: { dims: '270×834×222', weight: '10.0' } },
    { id: 'fujitsu-cmtc-71', brandCN: '富士通(General)', series: '優級美型冷專', func: '冷專', type: '壁掛式', refrigerant: 'R32', maxKw: 7.1, coolCap: '7.1', heatCap: '-', current: '10.0', power: '2200', cspf: '5.20', modelIdu: 'ASCG071CMTC', modelOdu: 'AOCG071CMTC', pipes: '2分/5分', odu: { dims: '632×799×290', weight: '40', power: '220V', footSpacing: '580×330' }, idu: { dims: '280×980×240', weight: '13.5' } }
];

// 合併並輸出 (確保 index.html 能正確讀取)
window.DATA_FUJITSU = [
    ...FUJITSU_NOCRIA_Z,
    ...FUJITSU_ADVANCED_KGTB,
    ...FUJITSU_ADVANCED_DESIGN_KGTA,
    ...FUJITSU_PREMIUM_KMTC,
    ...FUJITSU_PREMIUM_DESIGN_KMTB,
    ...FUJITSU_PREMIUM_COOL_CMTD,
    ...FUJITSU_PREMIUM_DESIGN_COOL_CMTC
];

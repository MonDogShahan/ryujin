// ================= data_fujitsu.js - 富士通 Fujitsu (2025 全系列) =================
// 收錄：nocria X (頂級), nocria Z (旗艦), M (優級), C (高級), 吊隱式

window.DATA_FUJITSU = [
    // --- nocria X 系列 (頂級冷暖) ---
    { id: 'fujitsu-x-28', brandCN: '富士通', series: 'nocria X', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.8, coolCap: '2.8', heatCap: '3.6', current: '2.3', power: '490', cspf: '7.85', modelIdu: 'ASCG028KXTA', modelOdu: 'AOCG028KXTA', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V' }, idu: { dims: '293×786×378', weight: '20.0' } },
    { id: 'fujitsu-x-36', brandCN: '富士通', series: 'nocria X', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 3.6, coolCap: '3.6', heatCap: '4.2', current: '3.2', power: '700', cspf: '7.00', modelIdu: 'ASCG036KXTA', modelOdu: 'AOCG036KXTA', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '36', power: '220V' }, idu: { dims: '293×786×378', weight: '20.0' } },
    { id: 'fujitsu-x-50', brandCN: '富士通', series: 'nocria X', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.3', current: '5.5', power: '1190', cspf: '6.30', modelIdu: 'ASCG050KXTA', modelOdu: 'AOCG050KXTA', pipes: '2分/3分', odu: { dims: '716×820×315', weight: '42', power: '220V' }, idu: { dims: '293×786×378', weight: '20.0' } },

    // --- nocria Z 系列 (旗艦冷暖) ---
    { id: 'fujitsu-z-22', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '1.9', power: '385', cspf: '7.85', modelIdu: 'ASCG022KZTA', modelOdu: 'AOCG022KZTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V' }, idu: { dims: '293×798×355', weight: '15.5' } },
    { id: 'fujitsu-z-50', brandCN: '富士通', series: 'nocria Z', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.3', current: '5.8', power: '1250', cspf: '6.30', modelIdu: 'ASCG050KZTA', modelOdu: 'AOCG050KZTA', pipes: '2分/3分', odu: { dims: '716×820×315', weight: '42', power: '220V' }, idu: { dims: '293×798×355', weight: '17.0' } },

    // --- M 系列 (優級冷暖) ---
    { id: 'fujitsu-m-22', brandCN: '富士通', series: '優級M系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.7', current: '2.2', power: '430', cspf: '6.50', modelIdu: 'ASCG022KMTA', modelOdu: 'AOCG022KMTA', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '27', power: '220V' }, idu: { dims: '280×834×222', weight: '10.0' } },
    { id: 'fujitsu-m-50', brandCN: '富士通', series: '優級M系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '5.8', current: '6.0', power: '1280', cspf: '5.60', modelIdu: 'ASCG050KMTA', modelOdu: 'AOCG050KMTA', pipes: '2分/3分', odu: { dims: '632×799×290', weight: '38', power: '220V' }, idu: { dims: '280×980×240', weight: '13.0' } },

    // --- C 系列 (高級冷暖) ---
    { id: 'fujitsu-c-22', brandCN: '富士通', series: '高級C系列', func: '冷暖', type: '壁掛式', refrigerant: 'R32', maxKw: 2.2, coolCap: '2.2', heatCap: '2.2', current: '2.4', power: '470', cspf: '6.05', modelIdu: 'ASCG022CMTA', modelOdu: 'AOCG022CMTA', pipes: '2分/3分', odu: { dims: '541×663×290', weight: '22', power: '220V' }, idu: { dims: '280×834×222', weight: '10.0' } },

    // --- 吊隱式系列 ---
    { id: 'fujitsu-duct-25', brandCN: '富士通', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 2.5, coolCap: '2.5', heatCap: '3.2', current: '2.3', power: '550', cspf: '6.00', modelIdu: 'ARCG025K', modelOdu: 'AOCG025K', pipes: '2分/3分', odu: { dims: '542×799×290', weight: '32', power: '220V' }, idu: { dims: '198×700×620', weight: '19', flangeDims: '560×150' } },
    { id: 'fujitsu-duct-50', brandCN: '富士通', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 5.0, coolCap: '5.0', heatCap: '6.0', current: '5.8', power: '1450', cspf: '5.30', modelIdu: 'ARCG050K', modelOdu: 'AOCG050K', pipes: '2分/4分', odu: { dims: '632×799×290', weight: '38', power: '220V' }, idu: { dims: '198×900×620', weight: '23', flangeDims: '760×150' } },
    { id: 'fujitsu-duct-90', brandCN: '富士通', series: '吊隱式', func: '冷暖', type: '吊隱式', refrigerant: 'R32', maxKw: 9.0, coolCap: '9.0', heatCap: '10.0', current: '11.5', power: '2800', cspf: '5.00', modelIdu: 'ARCG090K', modelOdu: 'AOCG090K', pipes: '3分/5分', odu: { dims: '800×900×330', weight: '60', power: '220V' }, idu: { dims: '270×1400×700', weight: '40', flangeDims: '1260×200' } }
];

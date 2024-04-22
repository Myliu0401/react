Mock.setup({
    timeout: 3000
});

const totleData = Math.ceil(Math.random() * (200 - 100) + 100); //总数据量

Mock.mock(/\api\/getData/, 'get', (ev) => {

    const index = ev.url.indexOf('?');
    const obj = {};
    const arr = ev.url.slice(index + 1).split('&');

    for (let i = 0; i < arr.length; i++) {
        const kp = arr[i].split('=');
        obj[kp[0]] = kp[1];
    }


    return Mock.mock({
        code: obj['paging'] ? 0 : 200,
        msg: obj['paging'] ? '查询成功' : '缺少paging参数',
        [`data|${obj['paging'] * 10 > totleData ? totleData % 10 : 10}`]: obj['paging'] ? [{
            name: '@cname', //姓名
            "gen|1": [0, 1], //性别
            address: '@county(true)', //地址
            zip: '@zip', //邮编
            id: '@guid', //id编号
        }] : [],
        totle: totleData
    })
});

Mock.setup({
    timeout: '1000 - 3000'
});

Mock.mock(/\/api\/pagingData\?page=[0-9]*/, (options) => {

    const index = options.url.indexOf('?');
    const strs = options.url.slice(index + 1).split('&');
    const obj = {};
    for (let i = 0; i < strs.length; i++) {
        const s = strs[i].split('=');
        obj[s[0]] = s[1];
    };

    const total = 233;

    return Mock.mock({
        code: 0,
        msg: '',
        total: total,
        [`data|${obj.page * 10 >= total ? total % 10 : 10}`]: [{
            name: '@cname',
            'sex|1': [0, 1],
            id: '@guid',
            address: '@county(true)',
            zip: '@zip'
        }]
    });
});
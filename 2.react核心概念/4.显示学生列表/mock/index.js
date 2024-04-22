
Mock.setup({
    timeout: 4000 - 6000
});


Mock.mock('/api/getStudent', 'get', {
    code: 0,
    msg: '',
    "data|20-40": [{
        id: '@guid',  //id编号
        name: '@cname', //姓名
        "ged|1":[0,1],
        address: '@county(true)',  //地址
        zip: '@zip',   //邮政编号
    }]
});
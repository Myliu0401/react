import Mock from 'mockjs';
import qs from 'query-string';


Mock.mock(/^\/api\/student(\?.*){0,1}/, 'get', (options) => {
    const obj = qs.parse(options.url);
    if(obj['/api/students?key']){
      obj.key = obj['/api/students?key']
    }
    delete obj['/api/students?key'];
    console.log(obj)
    const total = Math.ceil(Math.random() * (1000 - 500) + 500);
    const num = obj.page * obj.limit > total ? 0 : obj.page * obj.limit % obj.limit ? obj.page * obj.limit % obj.limit : obj.limit;
    return Mock.mock({
        total,
        [`datas|${num}`]: [{
            name:'@cuname'
        }]
    });
});

import Mock from 'mockjs';
import qs from 'query-string'

Mock.mock(/^\/api\/student(\?.*){0,1}/, 'get', (options) => {
  const total = 100;
  const index = options.url.indexOf('?');
  const query = index !== -1 ? options.url.slice(index) : '';
  const obj = qs.parse(query);

  obj.page = obj.page || null;
  obj.size = obj.size || 10;
  obj.name = obj.name || null
  
  const pagin = Math.ceil(total / (obj.size || 10))
  
  let size = null

  if(!obj.page){
    size = total
  }else if(obj.page <= pagin){
    if(obj.page * obj.size > total){
       const surplus = obj.page * obj.size - total;
       size = total - surplus
    }else{
      size = obj.size
    }
    
  }else {
    size = 0
  }
 

  return Mock.mock({
      total,
      [`datas|${ size }`]: [{
          name:'@cname',
          'age|15-60': 1,
          address:'@county(true)',
          zip:'@zip',
          'gender|0-1':1
      }]
  });
});


Mock.setup({
  timeout: '200-600'
});
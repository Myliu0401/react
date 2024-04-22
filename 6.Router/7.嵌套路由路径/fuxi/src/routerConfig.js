
const router = {
  user: {
      root: '',
      par: {
          naisi: '',
          misi: '',
          root: ''
      },
      add: '',
      delete: '',
  }
};



function recursionRouter(router, str = ''){
     for(let name in router){
          if(name === 'root'){
              router[name] = str ? str : str + `/${name}`;
          }else if(typeof(router[name]) === 'object'){
              const str1 = router[name].root ? router[name].root : str + `/${name}`;
              recursionRouter(router[name], str1);
          }else {
              router[name] = str + `/${name}`
          }
     }
     return router
};


export default recursionRouter(router);
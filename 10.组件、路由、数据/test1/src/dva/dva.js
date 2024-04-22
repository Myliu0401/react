import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as sagaEffects from './saga.js'
import createSagaMiddleware  from 'redux-saga';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware } from "connected-react-router";


/**
 * 
 * @param {Object} options 配置对象
 */
export default function dva(options = {}){

      const app = {

        router: (routerFunc)=>{
         app._router = routerFunc
        },

        _router: null,

        model: (options)=>{
          model(options, app)
        },

        _models: null,

        start: (selector)=>{
          start(selector, app, newOptions);
        }

      };

      const newOptions = handleOptions(options);


      return app;
};


/**
 * 处理配置对象
 * @param {Object} options 
 */
function handleOptions(options = {}){
     return {
        history: options.history || createHashHistory(),
        initialState: options.initialState === undefined ? {} : options.initialState,
        onError: options.onError || ((err, dispatch)=>{})
     };
};


/**
     * 得到一些额外的reducer，会合并到根reducer中去
     */
 function getExtraReducers(options) {
  return {
      router: connectRouter(options.history),
      /* eslint-disable */
      ["@@dva"](state = 0, action) {
          return state;
      }
  }
}


/**
 * 启动程序
 * @param {String} selector   css选择器
 * @param {Object} app dva对象
 */
function start(selector, app, newOptions){
     const store = getStore(app, newOptions);
     runSubScriptions(app, store.dispatch, newOptions);
     render(selector, app, store, newOptions);
};


/**
 * 添加模型函数
 * @param {Object} options 模型对象
 * @param {Object} app   dva对象
 */
function model(options, app){
    app._models = app._models || [];
    app._models.push(options);
};

/**
 * 创建仓库
 * @param {Object} app  dva对象 
 * @returns 
 */
function getStore(app, newOptions){
  
  const rootReducer = { }; // 一个根的reducer
 
  for(const model in app._models){
    rootReducer[app._models[model].namespace] = getReducer(app._models[model]).reducer;
  };

  const sagaMid = createSagaMiddleware(); // 创建saga中间件

  const store =  createStore(combineReducers({ ...rootReducer, ...getExtraReducers(newOptions) }), newOptions.initialState,getMiddlewares(sagaMid, newOptions));
  window.store = store
  
  const effects = handleEffects(app); 

  // 运行saga
  sagaMid.run(function* (){
      for(const effect of effects){
         function* func(action){
           try{
              yield effect.generatorFunc(action, { ...sagaEffects, put: effect.put });
           }catch(err){
              newOptions.onError(err, store.dispatch);
           }
           
         }
         yield sagaEffects.takeEvery(effect.type, func); //添加监听
      }
  });

  return store; 

};


/**
 * 处理中间件
 * @param {*} sagaMid saga中间件
 * @returns 
 */
function getMiddlewares(sagaMid, options){
  return composeWithDevTools(applyMiddleware(routerMiddleware(options.history), sagaMid));
};


/**
 * 处理副作用函数
 * @param {Object} app  dva对象
 */
function handleEffects(app){
   const effects = []; // 存储所有模型中的所有副作用函数
   if(!app._models){
    return;
   };

   for(const model of app._models){
    if(model.effects){
      const put = (action)=>{  // 重新构造put方法，后面要用其覆盖掉saga的put方法
          return sagaEffects.put(createNewAction(model, action));   
      };
      for(const key in model.effects){
          effects.push({
            type: `${model.namespace}/${key}`,
            generatorFunc: model.effects[key],
            put    
          });
      }
    }
  };


   return effects;
};


/**
 * 创建处理后的action
 * @param {*} model 
 * @param {*} action 
 */
function createNewAction(model, action){
    if(action.type.includes('/')){
        return action
    };

    return {
      ...action,
      type: `${model.namespace}/${action.type}`
    };
};


/**
 * 根据模型得到一个reducer
 * @param {Object} model 模型 
 */
function getReducer(model){
    const reducers = []; // 存储模型中的reducers里的函数  

    for(const key in model.reducers){
          reducers.push({ 
              type: `${model.namespace}/${key}`,
              reducer: model.reducers[key]
          });
    };

    function reducer(state = model.state, action){
      const item = reducers.find(t => t.type === action.type);
      if(item){
        return item.reducer(state, action)
      }else {
        return state;
      };
    };


    return {
      name: model.namespace,
      reducer
    };
};



/**
 * 运行配置项scriptions里的函数
 * @param {Object} app   dva对象
 * @param {Function} dispatch 触发action的函数
 */
function runSubScriptions(app, dispatch, newOptions){
     
     if(!app._models){
        return;
     };

     for(const model of app._models){
         const newDispatch = (action)=>{
              dispatch( createNewAction(model, action) );
         };
         if(model.subscriptions){
           for(const key in model.subscriptions){
            model.subscriptions[key]({ 
                 dispatch: newDispatch,
                 history: newOptions.history
             });
           }
         }
     };
};


/**
 * 渲染
 * @param {*} selector 
 * @param {*} app 
 * @param {*} store 
 */
function render(selector, app, store, newOptions){
     const rootComponent = app._router(newOptions); // 返回节点
     const root = <Provider store={store}> 
           { rootComponent } 
     </Provider>
     ReactDOM.render(root, document.querySelector(selector)); // 渲染
};







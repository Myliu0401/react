 import  ConnectedRouter  from './ConnectedRouter.js'
 import  connectRouter  from './connectRouter.js'
 import  routerMiddleware  from './routerMiddleware.js'
 import { push, replace } from './action-creators.js';


 const connectedReactRouter = {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
  push,
  replace
};


export default  connectedReactRouter;
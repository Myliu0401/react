 import dva from './dva/index.js';
import counter from './model/counter.js';
import routerConfig from './routerConfig.js';


const app = dva({
  initialState:{
    counter:1230
  }

});

app.model(counter);

app.router(routerConfig);


app.start('#root');
import dva from 'dva';
import counter from './model/counter.js';
import routerConfig from './routerConfig.js';
import { createBrowserHistory } from 'history';

const myDva = dva({
  history: createBrowserHistory()
});

myDva.model(counter);

myDva.router(routerConfig);

myDva.start('#root'); // 启动程序
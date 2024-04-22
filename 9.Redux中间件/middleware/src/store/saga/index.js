

import { all } from 'redux-saga/effects'; //导出指令函数
import takeEveryTask from './takeEvery.js';



export default function* rootSaga(){
      yield all([takeEveryTask()]); // 监听多个任务
      console.log('=================')
}
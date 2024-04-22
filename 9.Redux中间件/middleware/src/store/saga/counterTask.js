import { COUNTER_increase, COUNTER_reduce } from '../actions/counter/index.js'
import { takeEvery, delay } from 'redux-saga/effects';

function* a1(){
    yield delay(2000); // 延迟指令 2秒后运行下面的
    console.log('a1')
};

function* a2(){
  console.log('a2')
}

export default function* takeEveryTask(){
     yield takeEvery(COUNTER_increase, a1);
     yield takeEvery(COUNTER_reduce, a2);
};
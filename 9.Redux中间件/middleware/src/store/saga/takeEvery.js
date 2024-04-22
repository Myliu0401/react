import { COUNTER_increase, COUNTER_reduce } from '../actions/counter/index.js'
import { takeEvery } from 'redux-saga/effects';

function* a1(){
    console.log('a1')
};

function* a2(){
  console.log('a2')
}

export default function* takeEveryTask(){
     yield takeEvery(COUNTER_increase, a1);
     yield takeEvery(COUNTER_reduce, a2);
};
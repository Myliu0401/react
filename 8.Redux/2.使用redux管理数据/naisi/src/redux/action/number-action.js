import * as actionsType from './action-type.js';


export function createIncrease() {
    return {
        type: actionsType.INCREASE,
        payload: ''
    }
};


export function createDecrease() {
    return {
        type: actionsType.DECREASE,
        payload: ''
    }
};


export function createSet(newNumber) {
    return {
        type: actionsType.SET,
        payload: newNumber
    }
};
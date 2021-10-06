import { INC, DEC, ADD, REMOVE, RESET, NUMBER } from './count.actionTypes';

let inc = () => {
    return {
        type: INC
    }
}

let dec = () => {
    return {
        type: DEC
    }
}

let add = () => {
    return {
        type: ADD
    }
}

let remove = () => {
    return {
        type: REMOVE
    }
}

let reset = () => {
    return {
        type: RESET
    }
}

let numberInput = (data) => {
    return {
        type: NUMBER,
        payload: parseInt(data)
    }
}

export {inc, dec, add, remove, reset, numberInput}
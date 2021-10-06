import { INC, DEC, ADD, REMOVE, RESET } from './count.actionTypes';

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

export {inc, dec, add, remove, reset}
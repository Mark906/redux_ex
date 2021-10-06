import { INC, DEC, ADD, REMOVE, RESET } from './count.actionTypes';

let initialState = {
    counter: 0
}

export const COUNTER_KEY = 'counterStore';

let counterReducer = (state = initialState, action) => {
    let {type} = action;
    switch(type){
        case INC:
            return {
                counter: state.counter + 1
            }
        case DEC:
            return {
                counter: state.counter - 1
            }
        case ADD:
            return {
                counter: state.counter + 10
            }
        case REMOVE:
            return {
                counter: state.counter - 10
            }
        case RESET:
            return {
                counter: 0
            }
        default:
            return state
    }
}

export {counterReducer}
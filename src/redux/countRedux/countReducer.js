import {INC, DEC, ADD, REMOVE, RESET, NUMBER} from './count.actionTypes';

let initialState = {
    counter: 0
}

export const COUNTER_KEY = 'counterStore';

let counterReducer = (state = initialState, action) => {
    let {type, payload} = action;
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
        case NUMBER:
            return {
                counter: state.counter + payload
            }
        default:
            return state
    }
}

export {counterReducer}
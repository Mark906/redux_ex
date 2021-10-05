import { bgReducer } from "./bgRedux/bgReducer";
import {combineReducers} from 'redux';

let rootReducer = combineReducers({
    bgStore: bgReducer
})

export {rootReducer}

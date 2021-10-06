import { bgReducer } from "./bgRedux/bgReducer";
import {combineReducers} from 'redux';
import {counterReducer} from "./countRedux/countReducer";

let rootReducer = combineReducers({
    bgStore: bgReducer,
    counterStore: counterReducer
});
export {rootReducer}

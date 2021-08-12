  
import {combineReducers} from 'redux';
import {InitialStateReducers} from './reducerDefine'

const rootReducer = combineReducers({
    ISR:InitialStateReducers
})
export type rootReducerType = ReturnType<typeof rootReducer>;
export {rootReducer}
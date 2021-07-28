import {rootReducer} from './Actions/Reducer'
import {createStore} from 'redux'

const store= createStore(rootReducer)
export default store;
import { combineReducers, createStore } from 'redux'
import inputReducer from './reducer/inputReducer'

let reducers = combineReducers({
    input: inputReducer,
})

let store = createStore(reducers)

window.storeRea = store

export default store

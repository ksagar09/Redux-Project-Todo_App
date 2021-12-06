import reducer from './Reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    Reducer: reducer
})

export default rootReducer; //this will go to store.js
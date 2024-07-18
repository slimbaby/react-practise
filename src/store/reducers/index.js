import { combineReducers } from 'redux'
import counterReducer from './counter'
import todoReducer from './todo'

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
})
export default rootReducer

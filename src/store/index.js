import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
// 创建 store
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
// import thunk
const middlewares = applyMiddleware(thunk, logger)
const store = createStore(reducer, middlewares)
export default store

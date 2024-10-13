import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './reducers'
// 创建 store
import logger from 'redux-logger'
// import thunk中间件
const middlewares = composeWithDevTools(applyMiddleware(thunk, logger))
const store = createStore(rootReducer, middlewares)
export default store

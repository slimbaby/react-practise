import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './reducers'
import { getToken } from '@/utils/token'
// 创建 store
import logger from 'redux-logger'
// import thunk中间件
const middlewares = composeWithDevTools(applyMiddleware(thunk, logger))
const init = {
  login: getToken(),
}
const store = createStore(rootReducer, init, middlewares)
export default store

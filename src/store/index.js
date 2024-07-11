import { legacy_createStore as createStore } from 'redux'
import reducer from './reducers/counter'
// 创建 store
const store = createStore(reducer)

export default store

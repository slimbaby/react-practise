import './App.css'
import { legacy_createStore as createStore } from 'redux'

const increment = (payload) => ({ type: 'increment', payload })
const decrement = (payload) => ({ type: 'decrement', payload })
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload
    case 'decrement':
      return state - action.payload
    default:
      return state
  }
}
// 创建 store
const store = createStore(reducer)
// 监听状态的变化
store.subscribe(() => {
  console.log('监听打印', store.getState())
})
// 获取store的状态
console.log(store.getState())
// 分发action
store.dispatch(increment(6))
store.dispatch(decrement(10))
console.log('最新的状态', store.getState())

const App = () => {}

export default App

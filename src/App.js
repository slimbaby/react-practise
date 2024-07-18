import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, decrementAsync } from './store/actions/counter'
const App = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => dispatch(increment(1))}>数量增加</button>
      <button onClick={() => dispatch(decrement(2))}>数量减少</button>
      <button onClick={() => dispatch(decrementAsync(2))}>数量异步减少</button>
    </div>
  )
}

export default App

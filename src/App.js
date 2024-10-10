import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, decrementAsync } from './store/actions/counter'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
const First = () => {
  return <p>这是第一个页面的内容</p>
}
const Second = () => {
  return <p>这是第二个页面的内容</p>
}
const App = () => {
  // const count = useSelector((state) => state.count)
  // const dispatch = useDispatch()
  return (
    <Router>
      <div>
        <h1>路由的基本使用</h1>
        <ul>
          <li>
            <Link to="/first">第一个页面</Link>
            <input type="tel" />
          </li>
          <li>
            <Link to="/second">第二个页面</Link>
            <input type="tel" />
          </li>
        </ul>
        <Routes>
          <Route path="/first" Component={First}></Route>
          <Route path="/second" Component={Second}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

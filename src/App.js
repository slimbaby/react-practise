import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" Component={Layout}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

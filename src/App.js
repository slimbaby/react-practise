import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import AuthRouter from '@/components/AuthRoute'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route
            path="/home"
            element={
              <AuthRouter>
                <Layout />
              </AuthRouter>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

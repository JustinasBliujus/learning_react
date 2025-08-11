import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Routes, Route } from 'react-router'

function App() {
  return <>
    <Routes>
      <Route index element={<RegisterPage/>}/>
      <Route path="Login" element={<LoginPage/>}/>
      <Route path="Register" element={<RegisterPage/>}/>
      <Route path="Home" element={<HomePage/>}/>
    </Routes>
  </>
}

export default App

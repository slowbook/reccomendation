import './App.css'
import { Routes, Route } from 'react-router';
import Dashboard from './components/dashboard';
import Login from './components/Login';

import Signup from './components/SignUp';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/main' element={<MainPage/>} />
      </Routes>
    </>
  )
}

export default App

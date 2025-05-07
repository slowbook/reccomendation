import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/Login';
import Signup from './components/SignUp';
import MainPage from './components/MainPage';
import ProtectedRoute from './components/ProtectedRoute';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          
          <Route element={<ProtectedRoute />}>
            <Route path='/main' element={<MainPage/>} />
            <Route path='/main/test' element={<TestComponent/>} />
          </Route>
      </Routes>
    </>
  )
}

export default App

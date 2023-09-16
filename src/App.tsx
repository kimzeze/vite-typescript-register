import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '@/pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

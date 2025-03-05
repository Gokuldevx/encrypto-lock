import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from "./pages/Index"
import { AuthSignup } from "./pages/AuthSignUp"
import Storage from "./pages/Storage"
import ContactSupport from './pages/ContactSupport'

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/signIn" element={<AuthSignup/>} />
          <Route path="/storage" element={<Storage/>} />
          <Route path="/contact" element={<ContactSupport/>} />
        </Routes>
      </div>
    </>
  )
}

export default App

import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/dashboard"/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
      </BrowserRouter>

  )
}

export default App

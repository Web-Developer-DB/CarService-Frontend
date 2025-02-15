import { Routes, Route } from "react-router-dom";
/* import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; */
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;


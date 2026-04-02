import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Subscribe from "./pages/Subscribe";
import Scores from "./pages/Scores";
import Charity from "./pages/Charity";
import Winners from "./pages/Winners";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
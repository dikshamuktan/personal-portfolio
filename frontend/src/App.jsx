import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import { Link } from "react-router-dom";
import MyWorkPage from "./pages/myWork";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<MyWorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

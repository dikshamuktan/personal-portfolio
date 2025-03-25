import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import LandingPage from "./pages/landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;

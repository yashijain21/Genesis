import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import CultureCode from "./pages/Culturecode.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for CultureCode */}
        <Route path="/" element={<Home/>} />

        {/* Route for About */}
        <Route path="/about" element={<About />} />
        <Route path="/Culture" element={<CultureCode/>} />
      </Routes>
    </Router>
  );
}

export default App;

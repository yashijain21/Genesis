import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for CultureCode */}
        <Route path="/" element={<Home/>} />

        {/* Route for About */}
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
     
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Activites from "./pages/Activites";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-50 text-navy">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activites" element={<Activites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

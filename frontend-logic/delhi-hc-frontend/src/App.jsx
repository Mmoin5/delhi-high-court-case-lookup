import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchCase from "./components/SearchCase";
import Home from "./pages/Home";
import "./Style/App.css"; // ✅ Import CSS

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-left">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/search">Search Case</Link>
        </div>
        <div className="nav-right">
          <span className="app-title">Delhi HC Lookup</span>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCase />} />
      </Routes>
    </Router>
  );
}

export default App;

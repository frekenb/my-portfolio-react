import "./App.css";
import Home from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import { CiHome } from "react-icons/ci";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              M D
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <CiHome className="button-home" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    01. About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    02. Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    03. Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

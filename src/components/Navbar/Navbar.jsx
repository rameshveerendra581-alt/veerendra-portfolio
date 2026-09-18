import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">Veerendra</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-button">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>

    </nav>
  );
}

export default Navbar;
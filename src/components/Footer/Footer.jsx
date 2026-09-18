import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Veerendra Uppari</h2>

          <p>
            Aspiring Java Full Stack Developer passionate about
            building practical and scalable web applications.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <a
            href="https://github.com/rameshveerendra581-alt"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:your-email@gmail.com">
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Veerendra Uppari. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
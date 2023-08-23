import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBarContainer">
      <Link to="/" className="linkButton">
        Home
      </Link>
      <Link to="/about-me" className="linkButton">
        About me
      </Link>
      <Link to="/projects" className="linkButton">
        Projects
      </Link>
      <Link to="/contact-me" className="linkButton">
        Contact me
      </Link>
    </nav>
  );
}

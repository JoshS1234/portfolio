import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBarContainer">
      <Link to="/" className="linkButton">
        Home
      </Link>
      <Link to="/about-us" className="linkButton">
        About us
      </Link>
      <Link to="/contact-us" className="linkButton">
        Contact us
      </Link>
      <input type="button" name="Login" value="Login" id="loginButton" />
    </nav>
  );
}

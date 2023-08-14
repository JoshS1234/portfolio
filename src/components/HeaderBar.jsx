import React from "react";
import NavBar from "./NavBar";
import six from "../resources/images/6.png";
import "./stylesheets/HeaderBar.css";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <div className="headerBar">
      <div className="headerImageContainer">
        <Link to="/" className="headerImage">
          <img src={six} />
        </Link>
      </div>
      <NavBar id="nav" />
    </div>
  );
}

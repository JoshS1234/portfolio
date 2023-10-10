import React from "react";
import NavBar from "./NavBar";
import myface from "../resources/images/Untitled.jpg";
import "./stylesheets/HeaderBar.css";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <div className="headerBar">
      <div className="headerImageContainer">
        <Link to="/" className="headerImage">
          <img src={myface} />
        </Link>
      </div>
      <NavBar id="nav" />
    </div>
  );
}

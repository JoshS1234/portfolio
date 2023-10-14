import React, { useEffect, useState } from "react";
import bigLogo from "../resources/images/6.png";
import "./stylesheets/Contact.css";
import box1Image from "../resources/images/WebsitePhoto.jpg";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div id="ContactContainer">
      <div id="box1TextContainer">
        <div>
          <h2>Contact details</h2>
          <p>E-mail: joshua.spence@hotmail.co.uk</p>
          <p>Github: https://github.com/JoshS1234</p>
          <button id="box1button">Download a CV</button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./stylesheets/Contact.css";
import CV from "../resources/files/CV.pdf";

export default function Contact() {
  return (
    <div id="ContactContainer">
      <div id="box1TextContainer">
        <div>
          <h2>Contact details</h2>
          <p>E-mail: joshua.spence@hotmail.co.uk</p>
          <p>Github: https://github.com/JoshS1234</p>
          <a target="_blank" rel="noreferrer" href={CV}>
            <button id="box1button">Download a CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

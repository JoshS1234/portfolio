import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Carousel from "./Carousel";
import "../components/stylesheets/Homepage.css";
import box1Image from "../resources/images/WebsitePhoto.jpg";
import box3Image from "../resources/images/Blackjack.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return (
    <div id="homepageContainer">
      <div id="box1">
        <div id="box1ImageContainer">
          <img src={box1Image} id="box1Image" />
        </div>
        <div id="box1TextContainer">
          <div>
            <h2>I'm Josh. A junior full-stack software developer.</h2>
            <p>
              I worked as a Maths teacher for several years before deciding to
              swap careers to software development. I completed the Northcoders
              software development bootcamp and I am looking to begin a career
              where I can apply these skills in a professional capacity.
            </p>
            <p>
              This is my portfolio site, showing off some of my experience and
              previous projects. I made it using JavaScript and React. Feel free
              to contact me if you have any questions!
            </p>
            <Link to="/contact-me">
              <button id="box1button">Contact me</button>
            </Link>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="myValuesContainer">
        <h1>My values</h1>
        <p>My values guide my professional decisions</p>
        <div className="valuesList">
          <div className="value">
            <h2>Kindness</h2>
            <p>Personal and projects</p>
          </div>
          <div className="value">
            <h2>Enthusiasm</h2>
            <p>Content</p>
          </div>
          <div className="value">
            <h2>Responsibility</h2>
            <p>Taking ownership of projects, </p>
          </div>
          <div className="value">
            <h2>Improvement</h2>
            <p>Personal and projects</p>
          </div>
        </div>
      </div>
      <div id="box4">
        <Link to="/contact-me">
          <button className="homepageButton">Contact me</button>
        </Link>
      </div>
    </div>
  );
}

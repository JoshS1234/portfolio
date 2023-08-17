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
          <h3>{lorem.generateSentences(1)}</h3>
          <p>{lorem.generateSentences(5)}</p>
          <ul id="bulletpoints">
            <li key="point1">{lorem.generateWords(10)}</li>
            <li key="point2">{lorem.generateWords(15)}</li>
            <li key="point3">{lorem.generateWords(12)}</li>
          </ul>
          <Link to="/about-me">
            <button id="box1button">Learn more</button>
          </Link>
        </div>
      </div>
      <Carousel />

      <div id="box4">
        <div>
          <h3>{lorem.generateSentences(1)}</h3>
          <h4>{lorem.generateSentences(1)}</h4>
          <div id="box4TextContainer">
            <strong>
              <p>{lorem.generateParagraphs(1)}</p>
            </strong>
            <p>{lorem.generateParagraphs(2)}</p>
            <p>{lorem.generateParagraphs(2)}</p>
          </div>
        </div>
        <Link to="/contact-us">
          <button className="homepageButton">Contact me</button>
        </Link>
      </div>
    </div>
  );
}

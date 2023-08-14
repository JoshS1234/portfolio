import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Carousel from "./Carousel";
import "../components/stylesheets/Homepage.css";
import box2Image from "../resources/images/6.png";
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
      <Carousel />
      <div id="box2">
        <div id="box2TextContainer">
          <h3>{lorem.generateSentences(1)}</h3>
          <p>{lorem.generateSentences(5)}</p>
          <ul id="bulletpoints">
            <li key="point1">{lorem.generateWords(10)}</li>
            <li key="point2">{lorem.generateWords(15)}</li>
            <li key="point3">{lorem.generateWords(12)}</li>
          </ul>
          <Link to="/about-us">
            <button id="box2button">Learn more</button>
          </Link>
        </div>
        <div id="box2ImageContainer">
          <img src={box2Image} id="box2Image" />
        </div>
      </div>
      <div
        id="box3"
        style={{
          backgroundImage: "url(" + box3Image + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="box3TextContainer">
          <h3>{lorem.generateSentences(1)}</h3>
          <p>{lorem.generateParagraphs(1)}</p>
          <input
            type="button"
            name="Login"
            value="Login"
            id="loginButtonInText"
          />
        </div>
      </div>
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
          <button className="homepageButton">Contact us</button>
        </Link>
      </div>
    </div>
  );
}

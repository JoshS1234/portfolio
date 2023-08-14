import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import officeImage from "../resources/images/6.png";
import "../components/stylesheets/About.css";

export default function About() {
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
    <div id="aboutContainer">
      <div className="aboutTextbox">
        <h1>About us</h1>
        <strong>
          <p>{lorem.generateSentences(1)}</p>
        </strong>
        <p>{lorem.generateSentences(10)}</p>
        <p>{lorem.generateSentences(10)}</p>
      </div>
      <div>
        <img src={officeImage} id="aboutImage" />
      </div>
      <div className="aboutTextbox">
        <p>{lorem.generateParagraphs(2)}</p>

        <h3>{lorem.generateWords(6)}</h3>
        <strong>
          <ul>
            <li key="list item 1">{lorem.generateWords(8)}</li>
            <li key="list item 2">{lorem.generateWords(8)}</li>
            <li key="list item 3">{lorem.generateWords(8)}</li>
            <li key="list item 4">{lorem.generateWords(8)}</li>
          </ul>
        </strong>

        <p>{lorem.generateParagraphs(1)}</p>

        <p>{lorem.generateParagraphs(2)}</p>
      </div>
    </div>
  );
}

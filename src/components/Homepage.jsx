import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Carousel from "./Carousel";
import "../components/stylesheets/Homepage.css";
import box1Image from "../resources/images/WebsitePhoto.jpg";
import box3Image from "../resources/images/Blackjack.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepageContainer">
      <div id="box1">
        <img src={box1Image} id="box1Image" />
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
        <div className="valuesList">
          <div className="value">
            <h2>Enthusiasm</h2>
            <p>
              I am enthusiastic with all that I do, both professionally and with
              hobbies. As a teacher I really engaged with the extra-curricular
              side of the job, and set up several clubs for students. In my
              personal life, I love to try new stuff, this year I have started
              Spanish lessons, have taken up squash, and have worked through
              several online courses to learn more coding.
            </p>
          </div>
          <div className="value">
            <h2>Responsibility</h2>
            <p>
              I always take responsibility with projects that I am involved in.
              When I was studying coding at the Northcoders bootcamp, I really
              enjoyed completing the tasks, and liked receiving feedback and
              constructive advice on how to improve my code. When working as a
              teacher, I was responsible for overseeing the delivery of the core
              Maths curriculum, which required me to ensure that both Core Maths
              classes were making the required progress. I also took
              responsibility for the assessments in this subject, and liaised
              with the Head of Maths to ensure that the assessments reflected
              the content that students would see in the final exams.
            </p>
          </div>
          <div className="value">
            <h2>Personal Development</h2>
            <p>
              I am always keen to improve and I love to try out new things.
              While working as a teacher, I would regularly research new ways to
              teach a topic, and try to find new resources and teaching tools to
              improve my pedagogy. Since deciding to leave my role as a teacher,
              I have taken steps to move towards a career in software
              development, by completing a coding bootcamp and several online
              courses.
            </p>
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

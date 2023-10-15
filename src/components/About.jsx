import React from "react";
import "../components/stylesheets/About.css";
import image1 from "../resources/images/CodingJourneyImage.jpg";

export default function About() {
  return (
    <div id="box1">
      <div id="BiographyContainer">
        <div className="introBox">
          <h1>What led me here?</h1>
          <div className="IntroParagraph">
            <div className="ParagraphColumn">
              <p>
                It's fair to say I've tried a few different paths in my
                professional career so far, some things worked out better than
                others, but along the route I have taken I've learned so much
                more than if I had gone straight to the destination.
              </p>

              <p>
                I grew up in a small town in Yorkshire, and at school I really
                enjoyed Maths and Science, and it was during A-level mechanics
                that I first encountered coding. I found that the questions we
                were doing were very formulaic, and so with a bit of googling I
                wrote some code that would solve a SUVAT equation given the
                information from an A-level question. I found this level of
                automation really satisfying, and the seed of a new hobby was
                planted!
              </p>

              <p>
                I studied Maths at Newcastle University, as I wasn't sure what I
                wanted to do after University yet, and Maths seemed like a good
                subject to pick to keep my options open. In my degree, there
                were some computational modules, and I learned to use MATLAB, R,
                and briefly dabbled with FORTRAN. I enjoyed these modules the
                most, and when I decided to work towards a PhD, I tried to find
                a largely computational project.
              </p>

              <p>
                After graduating from my undergraduate degree at Newcastle
                University, I moved over to Manchester to start a PhD with the
                Graphene NowNano CDT. I really enjoyed the initial stages of the
                course, where I was attending lectures and studying a huge range
                of topics, but when I eventually started my project I found it
                fairly unexciting. It was a long way from what I had studied in
                my undergraduate degree, and was a tiny department so I often
                had days where I was the only person in the office. It wasn't
                for me, and as a result of having done some teaching assistant
                work in my PhD, I made the decision to submit the work I had
                done so far (for an MPhil degree), and retrain as a Maths
                teacher.
              </p>
            </div>
            <div className="ParagraphColumn">
              <p>
                Although overall I found Maths teaching to be a really
                challenging job, I have gained so much from having done it. My
                confidence with public speaking improved enormously as that is
                what I was doing day in, day out. I also really developed my
                ability to explain clearly and to understand where potential
                misunderstandings may arise. I also gained experience with
                bringing and implementing new ideas into the workplace, and the
                process of evaluating their efficacy and tweaking the plans if
                needed.
              </p>

              <p>
                Throughout my time as a teacher, I had been doing some coding
                projects and online courses as a hobbyist, and I began to feel
                that it was a route I wanted to explore professionally. I signed
                up for the Northcoders software development bootcamp, and I
                learned so much! I found the course to be exactly what I was
                looking for, a well-structured and focused course that would
                equip me with skills that would be actually useful when working
                in the industry. I was also exposed to industry processes and
                methodologies. Pair programming was a common feature of the
                course, and test-driven development and agile working were also
                standard. My deep enjoyment of the bootcamp reassured me that I
                was on the correct path and that this was a career path I wanted
                to pursue.
              </p>
              <p>
                Since completing the bootcamp, I have been working as a teaching
                assistant whilst looking for work in software development, and I
                have been working through more online courses (on CodeAcademy)
                to broaden my skillset.
              </p>
            </div>
          </div>
        </div>
        <div
          className="CodingJourney"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(" +
              image1 +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-around",
          }}
        >
          <h1>My coding milestones</h1>

          <p>
            My coding journey can be largely broken down into a few key phases:
            University, hobbyist, Northcoders bootcamp and continuing
            development. Relevant coding skills and experience are listed here.
          </p>
          <ul className="CodingInnerLists">
            <li>
              <h2>University</h2>
              <ul className="innerList">
                <li>MATLAB</li>
                <li>R</li>
              </ul>
            </li>
            <li>
              <h2>Hobbyist</h2>
              <ul className="innerList">
                <li>Fundamentals of Python</li>
                <li>Data science with Python</li>
                <li>Keras/Tensorflow</li>
              </ul>
            </li>
            <li>
              <h2>Northcoders</h2>
              <ul className="innerList">
                <li>Fundamentals of JavaScript (NodeJS)</li>
                <li>Using the command line (Linux)</li>
                <li>Git</li>
                <li>Test driven development (Jest)</li>
                <li>Introduction to SQL (PostgreSQL)</li>
                <li>Creating and using an API (Express, Axios, JSON)</li>
                <li>Introduction to Frontend (HTML, CSS, React)</li>
                <li>Final group project (React native, Firebase)</li>
              </ul>
            </li>
            <li>
              <h2>Continued study</h2>
              <ul className="innerList">
                <li>CodeAcademy: Learn React</li>
                <li>CodeAcademy: Learn C#</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="WhatNext">
          <h1>What next?</h1>
          <p>
            I'm currently looking for my first role as a software
            developer/engineer. I want to apply what I have learned previously
            in a professional environment and further develop my coding skills
            at the industry level. I will continue to make progress through
            online coding platforms, mini-projects and reading online, but I am
            hoping to supplement this through collaboration with experienced
            developers and through more formal training/practice in my first
            role.
          </p>
        </div>
      </div>
    </div>
  );
}

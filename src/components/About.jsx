import React from "react";
import "../components/stylesheets/About.css";

export default function About() {
  return (
    <div id="box1">
      <div id="BiographyContainer">
        <div classname="CodingJourney">
          <h1>My coding milestones</h1>
          <p>
            My coding journey can be largely broken down into a few key phases:
            University, hobbyist, Northcoders bootcamp and continuing
            development. I will list my relevant coding skills and experience
            here.
          </p>
          <ul>
            <li>
              <h6>University</h6>
              <ul>
                <li>MATLAB</li>
                <li>R</li>
              </ul>
            </li>
            <li>
              <h6>Hobbyist</h6>
              <ul>
                <li>Fundamentals of Python</li>
                <li>Data science with Python</li>
                <li>Keras/Tensorflow</li>
              </ul>
            </li>
            <li>
              <h6>Northcoders</h6>
              <ul>
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
              <h6>Continued study</h6>
              <ul>
                <li>CodeAcademy: Learn React</li>
                <li>CodeAcademy: Learn C#</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="IntroParagraph">
          <h1>How did I get here?</h1>
          <p>
            It's fair to say I've tried a few different paths in my professional
            career so far, some things worked out better than others, but along
            the route I have taken I've learned so much more than if I had gone
            straight to the destination.
          </p>

          <p>
            I grew up in a small town in Yorkshire, and at school I really
            enjoyed Maths and Science, and it was during A-level mechanics that
            I first encountered coding. I found that the questions we were doing
            were very formulaic, and so with a bit of googling I wrote some code
            that would solve a SUVAT equation given the information from an
            A-level question. I found this level of automation really
            satisfying, and the seed of a new hobby was planted!
          </p>

          <p>
            I studied Maths at Newcastle University, as I wasn't sure what I
            wanted to do after University yet, and Maths seemed like a good
            subject to pick to keep my options open. In my degree, there were
            some computational modules, and I learned to use MATLAB, R, and
            briefly dabbled with FORTRAN. I enjoyed these modules the most, and
            when I decided to work towards a PhD, I tried to find a largely
            computational project.
          </p>

          <p>
            After graduating from my undergraduate degree at Newcastle
            University, I moved over to Manchester to start a PhD with the
            Graphene NowNano CDT. I really enjoyed the initial stages of the
            course, where I was attending lectures and studying a huge range of
            topics, but when I eventually started my project I found it fairly
            unexciting. It was a long way from what I had studied in my
            undergraduate degree, and was a tiny department so I often had days
            where I was the only person in the office. It wasn't for me, and as
            a result of having done some teaching assistant work in my PhD, I
            made the decision to submit the work I had done so far (for an MPhil
            degree), and retrain as a Maths teacher.
          </p>

          <p>
            Although overall I found Maths teaching to be a really challenging
            job, I have gained so much from having done it. My confidence with
            public speaking improved enormously as that is what I was doing day
            in, day out. I also really developed my ability to explain clearly
            and to understand where potential misunderstandings may arise. I
            also gained experience with bringing and implementing new ideas into
            the workplace, and the process of evaluating their efficacy and
            tweaking the plans if needed.
          </p>

          <p>
            Throughout my time as a teacher, I had been doing some coding
            projects and online courses as a hobbyist, and I began to feel that
            it was a route I wanted to explore professionally. I signed up for
            the Northcoders software development bootcamp, and I learned so
            much! I found the course to be exactly what I was looking for, a
            well-structured and focused course that would equip me with skills
            that would be actually useful when working in the industry. I was
            also exposed to industry processes and methodologies. Pair
            programming was a common feature of the course, and test-driven
            development and agile working were also standard. My deep enjoyment
            of the bootcamp reassured me that I was on the correct path and that
            this was a career path I wanted to pursue.
          </p>
          <p>
            Since completing the bootcamp, I have been working as a teaching
            assistant whilst looking for work in software development, and I
            have been working through more online courses (on CodeAcademy) to
            broaden my skillset.
          </p>
        </div>

        <div classname="WhatNext?">
          <h1>What next?</h1>
          <p>asdnasdjnaskdjnaskdjnaskdjna</p>
        </div>
      </div>
    </div>
    // <div className="BiographyContainer">
    //   <div>
    //     <div>
    //       <h2>Coding experience</h2>
    //       <div>
    //         <div>
    //           <p>Languages</p>
    //           <ul>
    //             <li>Javascript</li>
    //             <li>C#</li>
    //             <li>Python</li>
    //             <li>MATLAB</li>
    //           </ul>
    //         </div>
    //         <div>
    //           <p>Frameworks and Other</p>
    //           <ul>
    //             <li>HTML</li>
    //             <li>CSS</li>
    //             <li>PostgreSQL</li>
    //             <li>Node</li>
    //             <li>React</li>
    //             <li>React Native</li>
    //             <li>React Native with Expo</li>
    //             <li>Github</li>
    //             <li>Firebase</li>
    //             <li>Express</li>
    //             <li>Axios</li>
    //             <li>Jest</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     <h2>My goals</h2>
    //     <p>
    //       I have recently begun my journey into a tech career, through online
    //       courses and the Northcoders bootcamp. I am keen to get my first job in
    //       a software developer role, and apply all that I have learned so far.
    //     </p>
    //     <p>
    //       I get huge satisfaction from working on coding projects, and I would
    //       love to work on the development of an industry scale project and see
    //       some of my code make it out into the world.
    //     </p>
    //   </div>

    //   <div className="summaryBox">
    //     <h2>Qualifications</h2>
    //     <p>
    //       I studied Maths at university, completing my Masters degree in 2016. I
    //       then went on to complete a research Masters degree in Electrical
    //       Engineering at the University of Manchester. For both degrees I used
    //       MATLAB for some small coding projects, this was mostly to simulate
    //       physics problems and solve differential equations.
    //     </p>
    //     <p>
    //       Since then, I completed my teacher training as a secondary school
    //       Maths teacher, and then worked as a qualified teacher for 3 years.
    //       During this time I also completed online courses in Python, as I still
    //       enjoyed coding as a hobbyist
    //     </p>
    //     <p>
    //       Over the summer of 2022, I completed the Northcoders coding bootcamp.
    //       I learned so much over the course of the bootcamp, and thoroughly
    //       enjoyed it also. It really enhanced my coding practices, and I was
    //       exposed to industry standards such as pair-coding, using Git, and
    //       formalised testing packages like Jest.
    //     </p>
    //   </div>

    //   <div className="summaryBox">
    //     <h2>Professional experience</h2>
    //     <p>
    //       My primary experience in a professional environment has been my work
    //       as a teacher for the last 4 years. During this time I have developed
    //       many key skills which will be transferrable to a tech role.
    //     </p>
    //     <p>
    //       Time management and planning is a key skill as a teacher, as often
    //       there are tight deadlines for marking and feedback, so planning around
    //       this is essential. Client-facing interactions are also something that
    //       I refined during my time as a teacher, it is often necessary to
    //       contact parents of students to give feedback on progress and put plans
    //       in place to help the student to reach their potential. Being clear and
    //       transparent with successes and issues is essential, but finding the
    //       best way to convey these to the parent can sometimes be challenging.
    //     </p>
    //     <p>
    //       In my final year as a teacher, I also was the lead on the Core Maths
    //       team, which required me to oversee two of my colleagues and ensure
    //       that they were progressing through the syllabus at a similar rate to
    //       each other. I also had to liaise with the Head of Maths, and put
    //       contingency plans in place in case of a lockdown
    //     </p>
    //   </div>
    // </div>
  );
}

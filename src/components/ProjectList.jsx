import React, { useEffect, useState } from "react";
import "./stylesheets/ProjectList.css";
import projects from "../resources/projects";

export default function ProjectList(props) {
  const handlePress = (e, item) => {
    e.preventDefault();
    props.setIsSingle(true);
    props.setItem(item);
  };

  return (
    <div>
      <h1>My Projects</h1>
      <div className="projectBox">
        {projects.map((item) => {
          return (
            <button
              className="projectButton"
              onClick={(e) => {
                console.log(item);
                handlePress(e, item);
              }}
            >
              <div className="projectTile">
                <h2>
                  {item.name}, {item.year}
                </h2>
                <h4>
                  Languages and tech: {item.language}
                  {""}
                  {item.tech ? <>, {item.tech}</> : <></>}
                </h4>
                <h6>{item.description}</h6>

                <h6>Click for more...</h6>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./stylesheets/Projects.css";
import projects from "../resources/projects";
import { Route, Routes } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projectBox">
        {projects.map((item) => {
          let media;
          if (item.video_url && item.image_url) {
            media = (
              <div className="mediaBox">
                <img classname="projectImage" src={item.image_url} />
                <iframe
                  className="video-responsive"
                  src={`https://www.youtube.com/embed/${item.video_url}`}
                  allowFullScreen
                  title="Embedded youtube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            );
          } else if (item.image_url) {
            media = <img classname="projectImage" src={item.image_url} />;
          } else if (item.video_url) {
            media = (
              <iframe
                className="video-responsive"
                src={`https://www.youtube.com/embed/${item.video_url}`}
                allowFullScreen
                title="Embedded youtube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            );
          }

          return (
            <button className="projectButton">
              <div className="projectTile">
                <h2>
                  {item.name}, {item.year}
                </h2>
                <h4>
                  Languages and tech: {item.language}, {item.tech}
                </h4>
                <h6>{item.description}</h6>
                <h6>
                  <a href={item.github}>Github</a>
                </h6>
                {item.hosted ? (
                  <h6>
                    <a href={item.hosted}>Hosted site</a>
                  </h6>
                ) : (
                  <></>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

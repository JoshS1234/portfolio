import React, { useEffect, useState } from "react";
import "./stylesheets/SingleProject.css";
import projects from "../resources/projects";

const SingleProject = (props) => {
  console.log(props);
  const item = props.item;
  const handleReturnButton = (e) => {
    props.setIsSingle(false);
  };

  let imageMedia;
  let videoMedia;
  if (item.video_url && item.image_url) {
    imageMedia = <img src={item.image_url} />;

    videoMedia = (
      <iframe
        className="video-responsive"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${item.video_url}`}
        allowFullScreen
        title="Embedded youtube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    );
  } else if (item.image_url) {
    imageMedia = <img classname="projectImage" src={item.image_url} />;
  } else if (item.video_url) {
    videoMedia = (
      <iframe
        className="video-responsive"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${item.video_url}`}
        allowFullScreen
        title="Embedded youtube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    );
  }

  return (
    <div className="singleProjectTile">
      <button
        onClick={(e) => {
          handleReturnButton(e);
        }}
      >
        return to projects
      </button>
      <div>
        <div>
          <div className="infoImg">
            <div className="info">
              <h2>
                {item.name}, {item.year}
              </h2>
              <h4>
                Languages and tech: {item.language}, {item.tech}
              </h4>
              <h6>{item.detailedDescription}</h6>
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
            {imageMedia ? (
              <div className="projectImage">{imageMedia}</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {videoMedia ? videoMedia : <></>}
      <button
        onClick={(e) => {
          handleReturnButton(e);
        }}
      >
        return to projects
      </button>
    </div>
  );
};

export default SingleProject;

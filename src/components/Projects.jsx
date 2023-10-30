import { useEffect, useState } from "react";
import projList from "../resources/projects";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/Projects.css";

export default function Projects(props) {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    let currentProj = projList.filter((item) => {
      return item.id === parseInt(id);
    });
    console.log(currentProj);

    setItem(currentProj[0]);
  }, [id]);

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
      <Link to="/projects">return to projects</Link>
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
      <Link to="/projects">return to projects</Link>
    </div>
  );
}

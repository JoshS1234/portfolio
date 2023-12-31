import "./stylesheets/ProjectList.css";
import projects from "../resources/projects";
import { Link } from "react-router-dom";

export default function ProjectList() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="projectBox">
        {projects.map((item) => {
          return (
            <Link to={"/projects/" + item.id} className="projectButton">
              <h3>
                {item.name}, {item.year}
              </h3>
              <h5>
                Languages and tech: {item.language}
                {""}
                {item.tech ? <>, {item.tech}</> : <></>}
              </h5>
              <h6>{item.description}</h6>

              <h6>Click for more...</h6>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

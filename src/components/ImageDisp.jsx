import { useEffect } from "react";
import projects from "../resources/projects";

const ImageDisp = () => {
  useEffect(() => {
    console.log(projects[8].image_url);
  }, []);
  return (
    <ul>
      {projects.map((item) => {
        if (item.image_url && item.video_url) {
          return <img src={item.image_url} alt={item.name} />;
        } else if (item.image_url) {
          return <img src={item.image_url} alt={item.name} />;
        } else if (item.video_url) {
          return (
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${item.video_url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          );
        } else {
          return <p>Nothing to see here...</p>;
        }
      })}
    </ul>
  );
};

export default ImageDisp;

import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import ProjectList from "./ProjectList";

export default function Projects() {
  const [isSingle, setIsSingle] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    setIsSingle(false);
  }, []);

  if (!isSingle) {
    return <ProjectList setIsSingle={setIsSingle} setItem={setItem} />;
  } else {
    return <SingleProject setIsSingle={setIsSingle} item={item} />;
  }
}

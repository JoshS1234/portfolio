import React, { useEffect, useState } from "react";
import "./stylesheets/Contact.css";
import projects from "../resources/projects";

export default function Projects() {
  return (
    <ul>
      {projects.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
}

import React from "react";
import SecondProject from "./projects.pages/SecondProject";
import "./projects.css";
import { FirstProject } from "./projects.pages/FirstProject";
import { ThirdProject } from "./projects.pages/ThirdProject";
import { FourthProject } from "./projects.pages/FourthProject";

export default function Projects() {
  return (
    <div className="Projects">
      <h1>Recent work</h1>
      <div className="row">
        <div className="col">
          <SecondProject />
          <FourthProject />

          <ThirdProject />
          <FirstProject />
        </div>
      </div>
    </div>
  );
}

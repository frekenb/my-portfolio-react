import React from "react";
import SecondProject from "./SecondProject";
import "./projects.css";
import { FirstProject } from "./FirstProject";
import { ThirdProject } from "./ThirdProject";
import { FourthProject } from "./FourthProject";

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

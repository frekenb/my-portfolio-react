import React from "react";
import SecondProject from "./SecondProject";
import "./projects.css";
import { FirstProject } from "./FirstProject";
import { ThirdProject } from "./ThirdProject";
import { FourthProject } from "./FourthProject";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="row">
        <div className="col">
          <SecondProject />
          <ThirdProject />
          <FourthProject />
          <FirstProject />
        </div>
      </div>
    </div>
  );
}

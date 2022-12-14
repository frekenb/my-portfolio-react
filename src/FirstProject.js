import React from "react";
import ImgCalculator from "./img/calculator.png";

export const FirstProject = () => {
  const link = "https://react-calculator-open-source.netlify.app/";

  return (
    <div className="FirstProject">
      <div className="row">
        <div className="col-4 shadow-regular card">
          <div className=" describing-of-project card-body">
            <h4 className="card-title shadow-sm">Calculator</h4>
            <p className="card-text">Describing of particular project</p>
            <p className="card-text">Tell about skills which I used</p>
            <button className="button shadow-regular">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="card-link "
              >
                Learn more
              </a>
            </button>
          </div>
        </div>
        <div className="col-4 shadow-regular">
          <figure>
            <div className="horizontal-img">
              <img
                src={ImgCalculator}
                alt="calculator"
                className="img-fluid shadow-sm"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

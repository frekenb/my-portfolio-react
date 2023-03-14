import React from "react";
import ImgCalculator from "../../img/calculator.png";

export const FirstProject = () => {
  const link = "https://react-calculator-open-source.netlify.app/";

  return (
    <div className="FirstProject">
      <div className="row">
        <div className="col-5 shadow-regular card">
          <div className=" describing-of-project card-body">
            <h4 className="card-title shadow-sm">Calculator</h4>
            <p className="card-text">
              Created a responsive calculator app using HTML, CSS, and
              JavaScript, improving my skills in front-end web development,
              JavaScript logic, and DOM manipulation.
            </p>
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
        <div className="col-5 shadow-regular">
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

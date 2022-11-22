import React from "react";
import ImgReactApp from "./img/weatherReactApp.gif";

export const FourthProject = () => {
  const link = "https://weather-webapp-react-frekenb.netlify.app/";

  return (
    <div className="FourthProject Weather-Webapp-React">
      <div className="row">
        <div className="col-4 card shadow-regular">
          <div className="card-body describing-of-project">
            <h4 className="card-title shadow-sm">Weather React Application</h4>
            <p className="card-text">Describing of particular project</p>
            <p className="card-text">Tell about skills which I used</p>
            <button>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="card-link shadow-regular"
              >
                Learn more
              </a>
            </button>
          </div>
        </div>
        <div className="col-5 shadow-regular">
          <figure>
            <img
              src={ImgReactApp}
              alt="calculator"
              className="img-fluid shadow-sm"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import ImgReactApp from "../../img/weatherReactApp.gif";

export const FourthProject = () => {
  const link = "https://weather-webapp-react-frekenb.netlify.app/";

  return (
    <div className="FourthProject Weather-Webapp-React">
      <div className="row">
        <div className="col-5 card shadow-regular">
          <div className="card-body describing-of-project">
            <h4 className="card-title shadow-sm">Weather React Application</h4>
            <p className="card-text">
              Developed a weather application using React, HTML5, and CSS, with
              real API integration for accurate weather data. This project
              allowed me to improve my skills in front-end web development,
              React, and API integration.
            </p>

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

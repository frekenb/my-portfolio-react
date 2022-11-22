import React from "react";
import ImgWeatherAppJs from "./img/weatherAppVanillaJS.png";

const SecondProject = () => {
  const link = "https://weather-web-app-vanillajs.netlify.app/";

  return (
    <div className="SecondProject WeatherAppVanilla">
      <div className="row">
        <div className="col-4 card shadow-regular">
          <div className="card-body describing-of-project">
            <h4 className="card-title shadow-sm">Weather App Vanilla JS</h4>
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
              src={ImgWeatherAppJs}
              alt="weather application"
              className="img-fluid shadow-sm"
              width={35}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SecondProject;

import React from "react";
import ImgWeatherAppJs from "../../img/weatherAppVanillaJS.png";

const SecondProject = () => {
  const link = "https://weather-web-app-vanillajs.netlify.app/";

  return (
    <div className="SecondProject WeatherAppVanilla">
      <div className="row">
        <div className="col-5 card shadow-regular">
          <div className="card-body describing-of-project">
            <h4 className="card-title shadow-sm">Weather App Vanilla JS</h4>
            <p className="card-text">
              Developed a weather app using HTML5, CSS, and vanilla JavaScript
              to integrate an API for real-time weather data.
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

import React from "react";
import ImgDictionary from "../../img/dictionary.png";

export const ThirdProject = () => {
  const link = "https://small-dictionary.netlify.app/";
  return (
    <div className="ThirdProject">
      <div className="row">
        <div className="col-5 card shadow-regular">
          <div className="card-body describing-of-project">
            <h4 className="card-title shadow-sm">React Dictionary App</h4>
            <p className="card-text">
              Developed a responsive dictionary app using HTML5, CSS, and React,
              integrating a real API for accurate word definitions
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
            <div className="horizontal-img">
              <img
                src={ImgDictionary}
                alt="dictionary web app"
                className="img-fluid shadow-sm"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

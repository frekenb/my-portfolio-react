import React from "react";
import ImgDictionary from "./img/dictionary.png";

export const ThirdProject = () => {
  const link = "https://small-dictionary.netlify.app/";
  return (
    <div className="ThirdProject">
      <div className="row">
        <div className="col-4 card shadow-regular">
          <div className="card-body describing-of-project">
            <h4 className="card-title shadow-sm">React Dictionary App</h4>
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
        <div className="col-4 shadow-regular">
          <figure>
            <img
              src={ImgDictionary}
              alt="dictionary web app"
              className="img-fluid shadow-sm"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

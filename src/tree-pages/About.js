import React from "react";
import ImgProfileInf from "../img/undraw_profile_details_re_ch9r.svg";
import MyPhoto from "../img/1.jpg";
import "../styles/About.css";
import Html from "../img/logo/html.svg";
import Css from "../img/logo/css3.svg";
import Js from "../img/logo/javascript.svg";
import Api from "../img/logo/api.svg";
import Bootstrap from "../img/logo/bootstrap.svg";
import Github from "../img/logo/github.svg";
import Netlify from "../img/logo/netlify.svg";
import ReactImg from "../img/logo/react.svg";
import Seo from "../img/logo/seo.png";
import Responsive from "../img/logo/responsive.svg";
import Vs from "../img/logo/vs.svg";

export const About = () => {
  return (
    <div className="About">
      <h1 className="d-none">About page</h1>
      <div className="container">
        <div className="row">
          <div className="col col-lg-5 col-md-8">
            <section className="personal-information">
              <h3>About me</h3>

              <p className="text-start">
                Hi there! I'm Maryna from Kyiv, an aspiring Junior Front-end
                developer temporary based in Georgia .
              </p>
              <p className="text-end">
                Before programming, I studied at the Medical University at the
                Faculty of Pharmacy. Therefore, I'm not afraid of large volumes
                of information and short deadlines, I approach any difficulties
                with patience and humor.{" "}
              </p>
              <p className="text-start">
                The course of{" "}
                <a
                  href="https://www.shecodes.io/learn/workshops"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SheCodes
                </a>{" "}
                showed me the direction in which I decided to develop in the
                future, to realize my ideas and creativity. I'm improving
                advanced CSS, HTML and my JavaScript knowledge with
                freeCodeCamp's and W3schools.
              </p>
            </section>
          </div>
          <div className="col col-lg-6 col-md-8">
            <figure>
              <img
                src={ImgProfileInf}
                alt="profile illustration"
                className="img-svg"
              />
              <img
                src={MyPhoto}
                alt=""
                className="img-fluid personal-information"
              />
            </figure>
          </div>
          <div className="col col-lg-6 col-md-8">
            <section className="technologies">
              <h3>Technologies I use</h3>
              <ul>
                <li>
                  <figure>
                    <img src={Html} alt="HTML5 logo" />
                    <figcaption>HTML5</figcaption>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src={Css} alt="Css logo" />
                    <figcaption>Css3</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Js} alt="Javascript logo" />
                    <figcaption>Javascript</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Vs} alt="VS code logo" />
                    <figcaption>VS code</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Github} alt="Github logo" />
                    <figcaption>GitHub</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Seo} alt="Seo logo" />
                    <figcaption>Seo</figcaption>
                  </figure>
                </li>
              </ul>
              <ul>
                <li>
                  <figure>
                    <img src={Api} alt="Api logo" />
                    <figcaption>API</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Bootstrap} alt="Bootstrap logo" />
                    <figcaption>Bootstrap</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={ReactImg} alt="React logo" />
                    <figcaption>React</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Responsive} alt="Responsive logo" />
                    <figcaption>Responcive</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={Netlify} alt="Netlify logo" />
                    <figcaption>Netlify</figcaption>
                  </figure>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import {
  BsTelegram,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from "react-icons/bs";
import mailgo from "mailgo";
import SvgContactUs from "./img/undraw_contact_us_re_4qqt.svg";
import "./Contact.css";

export const Contact = () => {
  mailgo();

  return (
    <div className="Contact">
      <h1 className="d-none">Contact page</h1>
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-6 col-ms-6">
            <figure>
              <img src={SvgContactUs} className="img-fluid" />
            </figure>
          </div>
          <div className="col col-lg-4 col-md-8 col-ms-8 personal-information">
            <h3>Let's get in touch</h3>
            <ul>
              <li>
                <BsEnvelopeFill className="bs-icons" />{" "}
                <a href="mailto:frekenb83@gmail.com">Write me an email</a>
              </li>
              <li>
                <BsGithub className="bs-icons" />{" "}
                <a
                  href="https://github.com/frekenb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Or see my code on GitHub
                </a>
              </li>
              <li>
                <BsLinkedin className="bs-icons" />{" "}
                <a
                  href="https://www.linkedin.com/in/maryna-dmytryk-b9b956122/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check profile on Linkenin
                </a>
              </li>
              <li>
                <BsTelegram className="bs-icons" />{" "}
                <a
                  href="https://t.me/freken_bk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact me on Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

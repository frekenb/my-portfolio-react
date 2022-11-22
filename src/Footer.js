import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer sticky-bottom d-none d-lg-flex">
      <ul className="personal-information">
        <li>
          <a
            href="https://github.com/frekenb"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "20" }}
              className="fa-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/frekenb_1.0"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "20" }}
              className="fa-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frekenb83"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: "20" }}
              className="fa-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/maryna-dmytryk-b9b956122/"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "20" }}
              className="fa-icons"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

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
    <footer className=" sticky-sm-left">
      <ul className="d-flex justify-content-center mb-5">
        <li>
          <a
            href="https://github.com/frekenb"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
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
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frekenb83"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/maryna-dmytryk-b9b956122/"
            target="_blank"
            className="p-3 rounded-circle m-2"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

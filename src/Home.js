import React, { Component } from "react";

import "./Home.css";
import { ReactComponent as PortfolioImage } from "./img/undraw_portfolio_website_re_jsdd.svg";
import Projects from "./Projects";

export default class Home extends Component {
  render() {
    return (
      <div className="Home-page">
        <div className="main-content row row-cols-2">
          <section className="col-lg-6 col-md-10 col-sm-10">
            <p className="greetings">Hello, my name is</p>
            <h1>
              {" "}
              <span className="first-name"> Maryna</span>
              <span className="second-name"> Dmytryk.</span>
            </h1>
            <h2 className="greetings">
              {" "}
              I'm front-end developer from Ukraine 💙💛
            </h2>
            <button type="button" className="btn btn-primary">
              <a href="">Get in touch</a>
            </button>
          </section>
          <section className="col-lg-6 col-md-10 col-sm-10">
            <h2>This is my portfolio project</h2>
            <PortfolioImage className="img-fluid" />
          </section>
        </div>
        <Projects />
      </div>
    );
  }
}

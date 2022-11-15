import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <div className="main-content">
          <section>
            <p>Hi, my name is</p>
            <h1>Maryna Dmytryk.</h1>
            <h2>I'm front-end developer from Ukraine 💙💛</h2>
            <button type="button" className="btn btn-primary">
              <a href="" className="link-dark">
                Get in touch
              </a>
            </button>
          </section>
        </div>
      </div>
    );
  }
}

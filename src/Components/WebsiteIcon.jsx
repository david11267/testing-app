import React, { Component } from "react";

export default class WebsiteIcon extends Component {
  render() {
    return (
      <a href="https://www.google.com">
        <img
          className="LogoImage content"
          loading="lazy"
          alt="Logo"
          height={75}
          src="https://hypermedia.varmeverket.com/logo.svg"
        />
      </a>
    );
  }
}

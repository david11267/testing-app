import React, { Component } from "react";
import "../Css/VV.css";
export default class WebsiteIcon extends Component {
  render() {
    return (
      <a href="https://www.google.com">
        <img className="LogoImage content" loading="lazy" alt="Logo" src={this.props.source} />
      </a>
    );
  }
}

import React, { Component } from "react";

export default class WebsiteIcon extends Component {
  render() {
    return (
      <a href="https://www.google.com">
        <img className="LogoImage" loading="lazy" alt="Logo" src={this.props.source} />
      </a>
    );
  }
}

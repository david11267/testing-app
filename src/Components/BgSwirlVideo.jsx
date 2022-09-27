import React, { Component } from "react";
import "../Css/VV.css";
export default class BgSwirlVideo extends Component {
  render() {
    return (
      <video className="video-bg " autoPlay muted loop id="video">
        <source src={this.props.source} type="video/mp4" />
      </video>
    );
  }
}

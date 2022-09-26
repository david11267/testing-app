import React, { Component } from "react";
export default class BgSwirlVideo extends Component {
  render() {
    return (
      <video autoPlay muted loop id="video">
        <source src="https://hypermedia.varmeverket.com/39.mp4" type="video/mp4" />
      </video>
    );
  }
}

import React, { Component } from "react";

export default class BuildingSpin extends Component {
  render() {
    return (
      <div>
        <video width={"100%"} height={240} loop muted autoPlay>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

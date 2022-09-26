import React, { Component } from "react";

export default class HeaderText extends Component {
  render() {
    return <h1 className="content">{this.props.text}</h1>;
  }
}

import React, { Component } from "react";
import AnimatedText from 'react-animated-text-content';

export default class AnimatedHeaderText extends Component {
  render() {
    return (
      <AnimatedText
      className="animated-text-header"
      type='words'
      interval={0.04}
      duration={0.8}
      tag='h1'
      animation={{
        y: '100px',
        ease: 'ease',
      }}
    >
      {this.props.text}
  </AnimatedText>
    )
  }
}


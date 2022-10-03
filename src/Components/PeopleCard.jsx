import React, { Component } from 'react'


export default class PeopleCard extends Component {
  render() {
    return (
      <div className='card'>
        <strong>Hej</strong>
        <div className='cardCenter'>
          <h3>h3 text</h3> 
        </div>  
        <div className='cardBottom'>
          <h4>Text header</h4>
          <p>little more info</p>
        </div>
      </div>
    )
  }
}

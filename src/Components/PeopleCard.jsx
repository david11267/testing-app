import React, { Component } from 'react'
export default class PeopleCard extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: `url(${this.props.imageUrl})`}} 
        className="card peopleCard">
        <strong>{this.props.topLeftText}</strong>
        <div className='cardCenter'>
          <h3>{this.props.centerText}</h3> 
        </div>  
        <div className='cardBottom'>
          <h4>{this.props.bottomHeaderText}</h4>
          <p>{this.props.bottomDetailsText}</p>
        </div>
      </div>
    )
  }
}

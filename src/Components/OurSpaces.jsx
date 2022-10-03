
import React, { Component } from 'react'
import PeopleCard from './PeopleCard'

export default class OurSpaces extends Component {
  render() {
    return (
      <section className='ourSpacesContainer'>
        <div>
            <p>Latest</p>
            <div className='cardWrapper'>
                <PeopleCard/>
                <PeopleCard/>
                

            </div>
        </div>
        
      </section>
    )
  }
}

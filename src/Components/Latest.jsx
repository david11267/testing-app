import React, { Component } from 'react'
import PeopleCard from './PeopleCard'
export default class OurSpaces extends Component {
  render() {
    return (
        <section className='ourSpacesContainer'>
        <div>
            <p>Latest</p>
            <div className='cardWrapper'>
                <PeopleCard
                  bottomDetailsText="These are some details"
                  bottomHeaderText="HeaderText"
                  centerText="CenterText" 
                  topLeftText="hej"
                  imageUrl="https://uploads-ssl.webflow.com/622762e08d276c4648e1fffa/624db36a933c69aaadcf901a_Group%201590.jpeg"
                  />

                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
                

            </div>
        </div>
        
      </section>
    )
  }
}

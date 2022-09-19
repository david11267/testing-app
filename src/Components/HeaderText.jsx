import React, { Component,useState } from 'react'
import "../Css/VV.css"
export default class HeaderText extends Component {
  
  render(props) {
    return (
      <>
      <section>
        <h1 className='VVH1'>Hello</h1>
      </section>

      <section>
        <h2>Join our program</h2>
        <p>Join our program and get a chance to win a free trip to the moon</p>
      </section>

      <section>
        <h3>Thanks for visiting</h3>
        <p>Thanks for visiting our space program</p>
      </section>
      </>
      
    )
  }
}

import React, { Component, useState } from "react";
import "../Css/VV.css";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <section>
        <h1 className="VVH1">Hello</h1>
      </section>

      <section>
        <h2>Join our program {color}</h2>
        <p>Join our program and get a chance to win a free trip to the moon</p>
      </section>

      <section>
        <h3>Thanks for visiting</h3>
        <p>Thanks for visiting our space program</p>
      </section>
    </div>
  );
}

export default class HeaderText extends Component {
  render(props) {
    return (
      <>
        <FavoriteColor />
      </>
    );
  }
}

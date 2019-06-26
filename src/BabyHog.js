import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import normalBaby from "./assets/unadulterated-hoglette.png";
import SunBaby from "./assets/sun-eyes.png";
import BlueBaby from "./assets/blue-eyes.png";
import GlowingBaby from "./assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {
  state = { weight: 10 };

  changeWeight = e => {
    // nothing needs to change here
    const newWeight =
      e.target.name === "+" ? this.state.weight + 10 : this.state.weight - 10;
    this.setState({
      weight: newWeight
    });
  };

  render() {
    const { name, hobby, eyeColor } = this.props;
    let img_src;
    switch (eyeColor) {
      case "sun":
        img_src = SunBaby;
        break;

      case "blue":
        img_src = BlueBaby;
        break;

      case "glowing":
        img_src = GlowingBaby;
        break;

      default:
        img_src = normalBaby;
        break;
    }

    return (
      <li className="hogbabies">
        <h1>Name: {name}</h1>
        <h3>Weight: {this.state.weight} </h3>
        <h3>Hobby: {hobby} </h3>
        <h4>Eye Color: {eyeColor} </h4>

        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img
            src={img_src}
            style={{ height: "200px" }}
            alt="MasterBlasterJrJr"
          />
        </div>
      </li>
    );
  }
}

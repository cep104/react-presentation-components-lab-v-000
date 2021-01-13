// Code SimpleComponent Here
import React, { Component } from "react";

export default class ComponentName extends Component {
  constructor() {
    super();
    //does not like putting toggle in state
    // Initial state here...
    this.state = {
      mood: "happy",
    };
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad",
      });
    } else {
      this.setState({
        mood: "happy",
      });
    }
    // Probably do some work to update the state
  };

  render() {
    //make sur it is on the first return div
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
    // Return JSX that renders into HTML
  }
}

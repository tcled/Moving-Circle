import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cx: "50",
      cy: "50",
      intervalID: null
    };
  }
  startDrag(e) {
    console.log("start");
    var intervalID = setInterval(e => this.move(e), 16.667);
    this.setState({ intervalID: intervalID });
  }
  move(e) {
    this.setState({
      cx: e.clientX,
      cy: e.clientY
    });
  }
  finishDrag() {
    console.log("finish");
    clearInterval(this.state.intervalID);
  }
  render() {
    return (
      <svg viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
        <rect
          width="100%"
          height="100%"
          fill="none"
          stroke="black"
          strokeWidth="10"
        />
        <circle
          onMouseDown={e => this.startDrag(e)}
          onMouseUp={() => this.finishDrag()}
          cx={this.state.cx}
          cy={this.state.cy}
          r="40"
          stroke="blue"
          strokeWidth="10"
          fill="white"
        />
      </svg>
    );
  }
}

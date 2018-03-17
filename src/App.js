import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cx: "50",
      cy: "50",
      dragging: false
    };
  }
  startDrag() {
    console.log("start");
    this.setState({ dragging: true });
  }
  move(e) {
    if (this.state.dragging) {
      this.setState({
        cx: e.clientX,
        cy: e.clientY
      });
    }
  }
  finishDrag() {
    console.log("finish");
    this.setState({ dragging: false });
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
          onMouseDown={() => this.startDrag()}
          onMouseMove={e => this.move(e)}
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

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  circleMoving() {
    console.log("This is Working");
  }
  render() {
    var interval;
    // Whattup Ty!!!
    return (
      <svg width={window.innerWidth} height={window.innerHeight}>
        <rect
          width="100%"
          height="100%"
          fill="none"
          stroke="black"
          strokeWidth="10"
        />
        <circle
          onMouseDown={() => setInterval(this.circleMoving, 16.667)}
          onMouseUp={() => clearInterval(this.circleMoving)}
          cx="50"
          cy="50"
          r="40"
          stroke="blue"
          strokeWidth="10"
          fill="white"
        />
      </svg>
    );
  }
}

export default App;

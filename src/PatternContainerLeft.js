import React, { Component } from "react";

class PatternContainerLeft extends Component {
  onChangeHandlerMiddle = (e) => {};

  render() {
    return (
      <div className="patternContainerLeft">
        <div className="bar1Label">
          <p className="barLabelText">Bar 1</p>
        </div>
        <div className="bar2Label">
          <p className="barLabelText">Bar 2</p>
        </div>
      </div>
    );
  }
}

export default PatternContainerLeft;

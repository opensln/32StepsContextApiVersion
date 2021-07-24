import React, { Component } from "react";

class PatternContainerLeft extends Component {
  onChangeHandlerMiddle = (e) => {};

  render() {
    return (
    <div className="patternContainerLeft">
          <div id="patternContainerLeft">
            <div id="bar1Label">
              <p class="barLabelText">Bar 1</p>
            </div>
            <div id="bar2Label">
              <p class="barLabelText">Bar 2</p>
            </div>
        </div>
    </div>
    );
  }
}

export default PatternContainerLeft;

import React, { Component } from "react";
import PatternContainerRightDrums from "./PatternContainerRightDrums";
import PatternContainerRightBass from "./PatternContainerRightBass";
import PatternContainerRightRiff from "./PatternContainerRightRiff";

class PatternContainerRight extends Component {
  onChangeHandlerMiddle = (e) => {
  };

  render() {
    let currentPanel = this.props.viewPanelState;
    return (
        <div className="patternContainerRight">
            { currentPanel === "drums"? <PatternContainerRightDrums/> : null}
            { currentPanel === "bass"? <PatternContainerRightBass/> : null}
            { currentPanel === "riff"? <PatternContainerRightRiff/>: null}
       </div>
    );

}
}

export default PatternContainerRight;
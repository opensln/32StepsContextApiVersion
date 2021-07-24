import React, { Component } from "react";
import PatternContainerLeft from "./PatternContainerLeft";
import PatternContainerRight from "./PatternContainerRight";

class PatternContainer extends Component {
  onChangeHandlerMiddle = (e) => {
    this.props.HandleChangeOuter(e);
  };

  render() {
    return (
       <div className="patternContainerHolder">
       <PatternContainerLeft/>
       <PatternContainerRight/>
       </div>
    );
  }
}

export default PatternContainer;
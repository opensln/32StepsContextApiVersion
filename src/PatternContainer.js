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
        {/* {this.props.onViewPanelSelect2} patternContainerHolder */}
       <PatternContainerLeft/>
       <PatternContainerRight
       viewPanelState={this.props.viewPanelState}/>
       </div>
    );
  }
 }

export default PatternContainer;
import React, { Component } from "react";
import PatternContainerLeft from "./PatternContainerLeft";
import PatternContainerRight from "./PatternContainerRight";

class PatternContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
       <div className="patternContainerHolder">
       <PatternContainerLeft/>
       <PatternContainerRight
       viewPanelState={this.props.viewPanelState}
       bassNotes={this.props.bassNotes}
       riffNotes={this.props.bassNotes}
       />
       </div>
    );
  }
 }

export default PatternContainer;
import React, { Component } from "react";
import PatternContainerRightDrumsReact from "./PatternContainerRightDrumsReact";
import PatternContainerRightBassReact from "./PatternContainerRightBassReact";
import PatternContainerRightRiffReact from "./PatternContainerRightRiffReact";

class PatternContainerRight extends Component {

  componentDidMount() {
  }

  render() {
    let currentPanel = this.props.viewPanelState;
    return (
        <div className="patternContainerRight" > 
            { currentPanel === "drums"? <PatternContainerRightDrumsReact
            /> : null}
            { currentPanel === "bass"? <PatternContainerRightBassReact
            bassNotes={this.props.bassNotes}
            /> : null}
            { currentPanel === "riff"? <PatternContainerRightRiffReact
            riffNotes={this.props.bassNotes}
            />: null}
       </div>
    );

}
}

export default PatternContainerRight;
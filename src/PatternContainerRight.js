import React, { Component } from "react";
import PatternContainerRightDrumsReact from "./PatternContainerRightDrumsReact";
import PatternContainerRightBassReact from "./PatternContainerRightBassReact";
import PatternContainerRightRiffReact from "./PatternContainerRightRiffReact";

class PatternContainerRight extends Component {
  onChangeHihat = (e) => {
    //console.log("hi hat change from Container Right");
    this.props.handleHH(e);
  }

  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted Pattern Container Right");
    //console.log(this.props.bassNotes , "riff notes mounted Pattern Container Right");
    console.log(this.props.hihatsData , "hihatsData mounted Pattern Container Right");
   
  }

  render() {
    let currentPanel = this.props.viewPanelState;
    return (
        <div className="patternContainerRight" > 
            { currentPanel === "drums"? <PatternContainerRightDrumsReact hihatsData={this.props.hihatsData} handleHH={this.onChangeHihat}/> : null}
            { currentPanel === "bass"? <PatternContainerRightBassReact bassNotes={this.props.bassNotes}/> : null}
            { currentPanel === "riff"? <PatternContainerRightRiffReact riffNotes={this.props.bassNotes}/>: null}
       </div>
    );

}
}

export default PatternContainerRight;
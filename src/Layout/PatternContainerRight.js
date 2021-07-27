import React, { Component } from "react";
import PatternContainerRightDrumsReact from "./PatternContainerRightDrumsReact";
import PatternContainerRightBassReact from "./PatternContainerRightBassReact";
import PatternContainerRightRiffReact from "./PatternContainerRightRiffReact";

class PatternContainerRight extends Component {
  onChangeHihat = (e) => {
    //console.log("hi hat change from Container Right");
    this.props.handleHH(e);
  }

  onChangeSnare = (e) => {
    //console.log("snare change from Container Right");
    this.props.handleSn(e);
  }

  onChangeKick = (e) => {
    //console.log("snare change from Container Right");
    this.props.handleKk(e);
  }

  onChangeBass = (e) => {
    //console.log("bass change from Container Right", e.target);
    this.props.handleBassChange(e);
  }

  onChangeRiff = (e) => {
    //console.log("riff change from Container Right", e.target);
    this.props.handleRiffChange(e);
  }

  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted Pattern Container Right");
    //console.log(this.props.bassNotes , "riff notes mounted Pattern Container Right");
    //console.log(this.props.hihatsData , "hihatsData mounted Pattern Container Right");
    //console.log(this.props.snareData , "snareData mounted Pattern Container Right");
    //console.log(this.props.kickData, "kickData from Pattern Container Right");
    //console.log(this.props.bassData, "bassData from Pattern Container Right");
    //console.log(this.props.riffData, "riffData from Pattern Container Right");
   
  }

  render() {
    let currentPanel = this.props.viewPanelState;
    return (
        <div className="patternContainerRight" > 
            { currentPanel === "drums"? <PatternContainerRightDrumsReact
            hihatsData={this.props.hihatsData}
            snareData={this.props.snareData}
            kickData={this.props.kickData}

            handleHH={this.onChangeHihat}
            handleSn={this.onChangeSnare}
            handleKk={this.onChangeKick}
            /> : null}
            { currentPanel === "bass"? <PatternContainerRightBassReact
            bassNotes={this.props.bassNotes}
            bassData={this.props.bassData}
            handleBassChange={this.onChangeBass}
            /> : null}
            { currentPanel === "riff"? <PatternContainerRightRiffReact
            riffNotes={this.props.bassNotes}
            riffData={this.props.riffData}
            handleRiffChange={this.onChangeRiff}

            />: null}
       </div>
    );

}
}

export default PatternContainerRight;
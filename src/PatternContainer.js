import React, { Component } from "react";
import PatternContainerLeft from "./PatternContainerLeft";
import PatternContainerRight from "./PatternContainerRight";

class PatternContainer extends Component {
  onHiHatsChangeOuter = (e) => {
    //console.log("Handle hihat Change from outer Pattern Holder");
    this.props.handleHH(e);
  };

  onSnareChangeOuter = (e) => {
    //console.log("Handle snare Change from outer Pattern Holder");
    this.props.handleSn(e);
  };

  onKickChangeOuter = (e) => {
    //console.log("Handle snare Change from outer Pattern Holder");
    this.props.handleKk(e);
  };

  onBassChangeOuter = (e) => {
    //console.log("Handle bass Change from outer Pattern Holder", e.target);
    this.props.handleBassChange(e);
  };

  onRiffChangeOuter = (e) => {
    //console.log("Handle riff Change from outer Pattern Holder", e.target);
    this.props.handleRiffChange(e);
  };



  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted Pattern Container");
    //console.log(this.props.riffNotes , "riff Notes - mounted Pattern Container");
    //console.log(this.props.hihatsData , "hihatsData mounted Pattern Container");
    //console.log(this.props.snareData, "snareData from Pattern container");
    //console.log(this.props.kickData, "kickData from Pattern Container");
    //console.log(this.props.bassData, "bassData from Pattern Container");
    //console.log(this.props.riffData, "riffData from Pattern Container");
  }

  render() {
    return (
       <div className="patternContainerHolder">
        {/* {this.props.onViewPanelSelect2} patternContainerHolder */}
       <PatternContainerLeft/>
       <PatternContainerRight
       viewPanelState={this.props.viewPanelState}
       bassNotes={this.props.bassNotes}
       riffNotes={this.props.bassNotes}
       hihatsData={this.props.hihatsData}
       snareData={this.props.snareData}
       kickData={this.props.kickData}
       bassData={this.props.bassData}
       riffData={this.props.riffData}

       handleHH={this.onHiHatsChangeOuter}
       handleSn={this.onSnareChangeOuter}
       handleKk={this.onKickChangeOuter}
       handleBassChange={this.onBassChangeOuter}
       handleRiffChange={this.onRiffChangeOuter}
       />
       </div>
    );
  }
 }

export default PatternContainer;
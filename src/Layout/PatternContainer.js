import React, { Component } from "react";
import PatternContainerLeft from "./PatternContainerLeft";
import PatternContainerRight from "./PatternContainerRight";

class PatternContainer extends Component {
  onHiHatsChangeOuter = (e) => {
    this.props.handleHH(e);
  };

  onSnareChangeOuter = (e) => {
    this.props.handleSn(e);
  };

  onKickChangeOuter = (e) => {
    this.props.handleKk(e);
  };

  onBassChangeOuter = (e) => {
    this.props.handleBassChange(e);
  };

  onRiffChangeOuter = (e) => {
    this.props.handleRiffChange(e);
  };

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
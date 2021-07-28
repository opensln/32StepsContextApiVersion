import React, { Component } from "react";
import PatternContainerRightDrumsReact from "./PatternContainerRightDrumsReact";
import PatternContainerRightBassReact from "./PatternContainerRightBassReact";
import PatternContainerRightRiffReact from "./PatternContainerRightRiffReact";

class PatternContainerRight extends Component {
  onChangeHihat = (e) => {
    this.props.handleHH(e);
  }

  onChangeSnare = (e) => {
    this.props.handleSn(e);
  }

  onChangeKick = (e) => {
    this.props.handleKk(e);
  }

  onChangeBass = (e) => {
    this.props.handleBassChange(e);
  }

  onChangeRiff = (e) => {
    this.props.handleRiffChange(e);
  }

  componentDidMount() {
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
            pseudoUpdate={this.props.pseudoUpdate}
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
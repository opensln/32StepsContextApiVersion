import React, { Component } from "react";
import DropDownRiffSteps from "./DropDownRiffSteps";

class PatternContainerRightRiffReact extends Component {
  onChangeRiff = (e) => {
      //console.log("riff change from Right Riff React", e.target);
      this.props.handleRiffChange(e);
  };

  componentDidMount() {
    // console.log(
    //   this.props.riffData,
    //   "riff Data mounted Pattern Container Right Riff React"
    // );
  }

  render() {
    return (
      <div
        className="patternContainerRightRiff viewPanel RIFFpanel"
        name="RIFFpanel"
      >
        <div className="bar1Holder">
          <div className="rowHolder b1bassSpacer"></div>

          <div className="rowHolder b1BassRowHolder">
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[0]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="0"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[1]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="1"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[2]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="2"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[3]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="3"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[4]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="4"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[5]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="5"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[6]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="6"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[7]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="7"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[8]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="8"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[9]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="9"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[10]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="10"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[11]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="11"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[12]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="12"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[13]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="13"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[14]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="14"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[15]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="15"
              />
            </div>
          </div>

          <div className="rowHolder b1RiffSpacer"></div>
        </div>

        <div className="bar2Holder">
          <div className="rowHolder b2RiffSpacer"></div>

          <div className="rowHolder b1RiffRowHolder">
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[16]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="16"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[17]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="17"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[18]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="18"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[19]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="19"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[20]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="20"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[21]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="21"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[22]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="22"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[23]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="23"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[24]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="24"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[25]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="25"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[26]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="26"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[27]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="27"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[28]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="28"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[29]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="29"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[30]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="30"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riffData[31]}
                handleRiffChange={this.onChangeRiff}
                stepNumber="31"
              />
            </div>
          </div>

          <div className="rowHolder b1RiffSpacer"></div>
        </div>
      </div>
    );
  }
}

export default PatternContainerRightRiffReact;

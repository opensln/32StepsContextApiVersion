import React, { Component } from "react";
import DropDownRiffSteps from "./DropDownRiffSteps";
import {connect} from "react-redux";


class PatternContainerRightRiffReact extends Component {
 
  componentDidMount() {
  }

  componentDidUpdate() {
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
                riffValue={this.props.riff[0]}
                stepNumber="0"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[1]}
                stepNumber="1"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[2]}
                stepNumber="2"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[3]}
                stepNumber="3"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[4]}
                stepNumber="4"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[5]}
                stepNumber="5"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[6]}
                stepNumber="6"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[7]}
                stepNumber="7"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[8]}
                stepNumber="8"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[9]}
                stepNumber="9"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[10]}
                stepNumber="10"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[11]}
                stepNumber="11"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[12]}
                stepNumber="12"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[13]}
                stepNumber="13"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[14]}
                stepNumber="14"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[15]}
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
                riffValue={this.props.riff[16]}
                stepNumber="16"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[17]}
                stepNumber="17"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[18]}
                stepNumber="18"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[19]}
                stepNumber="19"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[20]}
                stepNumber="20"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[21]}
                stepNumber="21"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[22]}
                stepNumber="22"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[23]}
                stepNumber="23"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[24]}
                stepNumber="24"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[25]}
                stepNumber="25"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[26]}
                stepNumber="26"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[27]}
                stepNumber="27"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[28]}
                stepNumber="28"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[29]}
                stepNumber="29"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[30]}
                stepNumber="30"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={this.props.riffNotes}
                riffValue={this.props.riff[31]}
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

const mapStateToProps = state => ({
  riff : state.riff
});

export default connect(mapStateToProps)(PatternContainerRightRiffReact);
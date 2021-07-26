import React, { Component } from "react";
import RiffStepDropDown from "./RiffStepDropDown";

class PatternContainerRightRiff extends Component {
  onChangeHandlerMiddle = (e) => {};

  componentDidMount() {
    // console.log(
    //   this.props.riffNotes,
    //   "riff Notes mounted Pattern Container Right Riff React"
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
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
          </div>

          <div className="rowHolder b1RiffSpacer"></div>
        </div>

        <div className="bar2Holder">
          <div className="rowHolder b2RiffSpacer"></div>

          <div className="rowHolder b1RiffRowHolder">
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
            <div className="riffStep even">
              <RiffStepDropDown riffNotes={this.props.riffNotes} />
            </div>
          </div>

          <div className="rowHolder b1RiffSpacer"></div>
        </div>
      </div>
    );
  }
}

export default PatternContainerRightRiff;

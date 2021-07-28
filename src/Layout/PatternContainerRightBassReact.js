import React, { Component } from "react";
import DropDownBassSteps from "./DropDownBassSteps";

class PatternContainerRightBassReact extends Component {


  onChangeBass = (e) => {
      this.props.handleBassChange(e);
  };

  componentDidMount() {
  }

  render() {
    
    return (
      <div
        className="patternContainerRightBass viewPanel BASSpanel"
        name="BASSpanel"
      >
        <div className="bar1Holder">
          <div className="rowHolder b1bassSpacer"></div>

          <div className="rowHolder b1BassRowHolder">
            <div className="bassStep" >
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[0]}
                handleBassChange={this.onChangeBass}
                stepNumber="0"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[1]}
                handleBassChange={this.onChangeBass}
                stepNumber="1"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[2]}
                handleBassChange={this.onChangeBass}
                stepNumber="2"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[3]}
                handleBassChange={this.onChangeBass}
                stepNumber="3"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[4]}
                handleBassChange={this.onChangeBass}
                stepNumber="4"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[5]}
                handleBassChange={this.onChangeBass}
                stepNumber="5"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[6]}
                handleBassChange={this.onChangeBass}
                stepNumber="6"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[7]}
                handleBassChange={this.onChangeBass}
                stepNumber="7"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[8]}
                handleBassChange={this.onChangeBass}
                stepNumber="8"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[9]}
                handleBassChange={this.onChangeBass}
                stepNumber="9"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[10]}
                handleBassChange={this.onChangeBass}
                stepNumber="10"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[11]}
                handleBassChange={this.onChangeBass}
                stepNumber="11"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[12]}
                handleBassChange={this.onChangeBass}
                stepNumber="12"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[13]}
                handleBassChange={this.onChangeBass}
                stepNumber="13"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[14]}
                handleBassChange={this.onChangeBass}
                stepNumber="14"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[15]}
                handleBassChange={this.onChangeBass}
                stepNumber="15"
              />
            </div>
          </div>

          <div className="rowHolder b1bassSpacer"></div>
        </div>

        <div className="bar2Holder">
          <div className="rowHolder b2bassSpacer"></div>

          <div className="rowHolder b2BassRowHolder">
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[16]}
                handleBassChange={this.onChangeBass}
                stepNumber="16"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[17]}
                handleBassChange={this.onChangeBass}
                stepNumber="17"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[18]}
                handleBassChange={this.onChangeBass}
                stepNumber="18"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[19]}
                handleBassChange={this.onChangeBass}
                stepNumber="19"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[20]}
                handleBassChange={this.onChangeBass}
                stepNumber="20"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[21]}
                handleBassChange={this.onChangeBass}
                stepNumber="21"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[22]}
                handleBassChange={this.onChangeBass}
                stepNumber="22"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[23]}
                handleBassChange={this.onChangeBass}
                stepNumber="23"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[24]}
                handleBassChange={this.onChangeBass}
                stepNumber="24"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[25]}
                handleBassChange={this.onChangeBass}
                stepNumber="25"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[26]}
                handleBassChange={this.onChangeBass}
                stepNumber="26"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[27]}
                handleBassChange={this.onChangeBass}
                stepNumber="27"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[28]}
                handleBassChange={this.onChangeBass}
                stepNumber="28"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[29]}
                handleBassChange={this.onChangeBass}
                stepNumber="29"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[30]}
                handleBassChange={this.onChangeBass}
                stepNumber="30"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bassData[31]}
                handleBassChange={this.onChangeBass}
                stepNumber="31"
              />
            </div>
          </div>

          <div className="rowHolder b1bassSpacer"></div>
        </div>
      </div>
    );
  }
}

export default PatternContainerRightBassReact;

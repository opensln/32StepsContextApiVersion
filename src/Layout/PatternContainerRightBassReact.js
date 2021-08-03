import React, { Component } from "react";
import DropDownBassSteps from "./DropDownBassSteps";
import {connect} from "react-redux";

class PatternContainerRightBassReact extends Component {

  componentDidMount() {
  }

  componentDidUpdate() {
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
                bassValue={this.props.bass[0]}
                handleBassChange={this.onChangeBass}
                stepNumber="0"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[1]}
                handleBassChange={this.onChangeBass}
                stepNumber="1"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[2]}
                handleBassChange={this.onChangeBass}
                stepNumber="2"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[3]}
                handleBassChange={this.onChangeBass}
                stepNumber="3"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[4]}
                handleBassChange={this.onChangeBass}
                stepNumber="4"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[5]}
                handleBassChange={this.onChangeBass}
                stepNumber="5"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[6]}
                handleBassChange={this.onChangeBass}
                stepNumber="6"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[7]}
                handleBassChange={this.onChangeBass}
                stepNumber="7"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[8]}
                handleBassChange={this.onChangeBass}
                stepNumber="8"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[9]}
                handleBassChange={this.onChangeBass}
                stepNumber="9"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[10]}
                handleBassChange={this.onChangeBass}
                stepNumber="10"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[11]}
                handleBassChange={this.onChangeBass}
                stepNumber="11"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[12]}
                handleBassChange={this.onChangeBass}
                stepNumber="12"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[13]}
                handleBassChange={this.onChangeBass}
                stepNumber="13"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[14]}
                handleBassChange={this.onChangeBass}
                stepNumber="14"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[15]}
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
                bassValue={this.props.bass[16]}
                handleBassChange={this.onChangeBass}
                stepNumber="16"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[17]}
                handleBassChange={this.onChangeBass}
                stepNumber="17"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[18]}
                handleBassChange={this.onChangeBass}
                stepNumber="18"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[19]}
                handleBassChange={this.onChangeBass}
                stepNumber="19"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[20]}
                handleBassChange={this.onChangeBass}
                stepNumber="20"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[21]}
                handleBassChange={this.onChangeBass}
                stepNumber="21"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[22]}
                handleBassChange={this.onChangeBass}
                stepNumber="22"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[23]}
                handleBassChange={this.onChangeBass}
                stepNumber="23"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[24]}
                handleBassChange={this.onChangeBass}
                stepNumber="24"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[25]}
                handleBassChange={this.onChangeBass}
                stepNumber="25"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[26]}
                handleBassChange={this.onChangeBass}
                stepNumber="26"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[27]}
                handleBassChange={this.onChangeBass}
                stepNumber="27"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[28]}
                handleBassChange={this.onChangeBass}
                stepNumber="28"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[29]}
                handleBassChange={this.onChangeBass}
                stepNumber="29"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[30]}
                handleBassChange={this.onChangeBass}
                stepNumber="30"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassNotes={this.props.bassNotes}
                bassValue={this.props.bass[31]}
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

const mapStateToProps = state => ({
  bass : state.bass
});

export default connect(mapStateToProps)(PatternContainerRightBassReact);
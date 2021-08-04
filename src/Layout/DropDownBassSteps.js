import React, { Component } from "react";
import {connect} from "react-redux";
import { partsActionsCreator } from "../Actions";

class DropDownBassSteps extends Component {
  onBassChange = (e) => {
    let value = e.target.value;
    let index = e.target.getAttribute("data-step");
    this.props.dispatch(partsActionsCreator(index,value, "bass"));
    }

  render() {
    return (
      <>
        <select
          className="bassDropDown"
          data-step={this.props.stepNumber}
          defaultValue={this.props.bassValue}
          onChange={this.onBassChange}
        >
          {this.props.bassNotes.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </>
    );
  }
}

const mapStateToProps = state => ({
  bass : state.bass
});

export default connect(mapStateToProps)(DropDownBassSteps);

import React, { Component } from "react";
import {connect} from "react-redux";
import { partsActionsCreator } from "../Actions";


class RiffStepDropDown extends Component {
 
  onRiffChange = (e) => {
    let value = e.target.value;
    let index = e.target.getAttribute("data-step");
    this.props.dispatch(partsActionsCreator(index,value, "riff"));
    }

    componentDidMount() {
    }
  
    componentDidUpdate() {
    }

  render() {
    return (
      <>
        <select
          className="riffDropDown"
          data-step={this.props.stepNumber}
          defaultValue={this.props.riffValue}
          onChange={this.onRiffChange}
        >
          {this.props.riffNotes.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </>
    );
  }
}

const mapStateToProps = state => ({
  riff : state.riff
});

export default connect(mapStateToProps)(RiffStepDropDown);

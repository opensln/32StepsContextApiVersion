import React, { Component } from "react";

class RiffStepDropDown extends Component {
  onRiffChange = (e) => {
    this.props.handleRiffChange(e);
  };

  componentDidMount() {
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

export default RiffStepDropDown;

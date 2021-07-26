import React, { Component } from "react";

class BassStepDropDown extends Component {
  onBassChange = (e) => {
    this.props.handleBassChange(e);
  };

  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted BassStepDropDown");
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

export default BassStepDropDown;

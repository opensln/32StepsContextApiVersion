import React, { Component } from "react";

class RiffStepDropDown extends Component {
  onChangeHandlerMiddle = (e) => {
    this.props.HandleChangeOuter(e);
  };

  componentDidMount() {
    //console.log(this.props.riffNotes , "riff mounted RiffStepDropDown");
  }

  render() {
    return (
        <>
           <select className="bassDropDown" id="b1Bass1" value="1">
           {this.props.riffNotes.map((item) => (
                <option key={item.index}>{item}</option>
              ))}
           </select>
          </>
    );
  }
}

export default RiffStepDropDown;
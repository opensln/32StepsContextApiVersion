import React, { Component } from "react";

class BassStepDropDown extends Component {
  onChangeHandlerMiddle = (e) => {
    this.props.HandleChangeOuter(e);
  };

  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted BassStepDropDown");
  }

  render() {
    return (
        <>
           <select className="bassDropDown" id="b1Bass1" value="1">
           {this.props.bassNotes.map((item) => (
                <option key={item.index}>{item}</option>
              ))}
           </select>
          </>
    );
  }
}

export default BassStepDropDown;
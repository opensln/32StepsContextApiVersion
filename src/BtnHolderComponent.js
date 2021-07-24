import React, { Component } from "react";

class BtnHolderComponent extends Component {
  onChangeHandlerMiddle = (e) => {
    this.props.HandleChangeOuter(e);
  };

  render() {
    return (
        <>
          <button id="clearSteps">
           
          </button>
          </>
    );
  }
}

export default BtnHolderComponent;
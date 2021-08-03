import React, { Component } from "react";
// import {PropTypes} from "react";

class InfoHolder extends Component {

  closeInfoWarning = (e) => {
  e.target.parentNode.style.display = "none";
  };

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
   
    return (
        <div className="infoHolder">
              <span onClick={this.closeInfoWarning} className="closeInfoWarning">&times;</span>
            <div className="infoWarning">
                <p>32 Steps - Trial Version.</p>
                <p>An example pattern is loaded when the page loads.</p>
                <p>
                    Press play to listen or change the steps to try out your own
                    pattern.
                </p>
                <p>Tap the logo in the top left corner to clear all of the steps.</p>
            </div>
        </div>
    );
  }
}

export default InfoHolder;
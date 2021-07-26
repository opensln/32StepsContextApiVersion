import React, { Component } from "react";
import BassStepDropDown from "./BassStepDropDown";


class PatternContainerRightBassReact extends Component {
  onChangeHandlerMiddle = (e) => {
  };

  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted Pattern Container Right Bass React");
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
          <div className="bassStep">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
          <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
        </div>

        <div className="rowHolder b1bassSpacer"></div>
      </div>

      <div className="bar2Holder">
        <div className="rowHolder b2bassSpacer"></div>

        <div className="rowHolder b2BassRowHolder">
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
          <div className="bassStep even">
            <BassStepDropDown bassNotes={this.props.bassNotes}/>
          </div>
        </div>

        <div className="rowHolder b1bassSpacer"></div>
      </div>
    </div>
    );
  }
}

export default PatternContainerRightBassReact;
import React, { Component } from "react";
import PatternContainerLeft from "./PatternContainerLeft";
import PatternContainerRight from "./PatternContainerRight";

class PatternContainer extends Component {
  onHiHatsChangeOuter = (e) => {
    //console.log("Handle hihat Change from outer Pattern Holder");
    this.props.handleHH(e);
  };

  componentDidMount() {
    //console.log(this.props.bassNotes , "mounted Pattern Container");
    //console.log(this.props.riffNotes , "riff Notes - mounted Pattern Container");
    console.log(this.props.hihatsData , "hihatsData mounted Pattern Container");
  }

  render() {
    return (
       <div className="patternContainerHolder">
        {/* {this.props.onViewPanelSelect2} patternContainerHolder */}
       <PatternContainerLeft/>
       <PatternContainerRight
       viewPanelState={this.props.viewPanelState}
       bassNotes={this.props.bassNotes}
       riffNotes={this.props.bassNotes}
       hihatsData={this.props.hihatsData}
       handleHH={this.onHiHatsChangeOuter}/>
       </div>
    );
  }
 }

export default PatternContainer;
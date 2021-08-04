import React, { Component } from "react";
import {connect} from "react-redux";
import { partsActionsCreator } from "../Actions";

let playBtnTimeOut;

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playButtonState : true,
      stopButtonState : true
    }
}

  panelViewHandler = (e) => {
    this.props.onViewPanelSelect(e.target.firstElementChild.name);
  };

  onLoopChange = (e) => {
    this.props.loopHandler(e.target.value);
  };

  onTempoChange = (e) => {
    this.props.tempoHandler(e.target.value);
  };

  onClearPattern = () => {
    let answer = window.confirm(
      "Are you sure you want to clear all of the steps?"
    );
    if (answer) {
        //call actionCreator for each <part>Reset
        let actionArray = ["hihatsReset","snareReset","kickReset","bassReset","riffReset"];

        actionArray.forEach(item => {
          this.props.dispatch(partsActionsCreator(null,null, item));
        });

        this.props.onViewPanelSelect("drums");
    }

  }

  onPlayNotes = (e) => {
   this.props.playNotesHandler(e);

   this.setState({stopButtonState: true});

   let tempPlayButtonState = this.state.playButtonState;
   tempPlayButtonState = false;
   this.setState({playButtonState : tempPlayButtonState});

   let numberOfLoops = this.props.numberOfLoops;
   let stepLength = this.props.stepLength;
   let that = this;

   playBtnTimeOut = setTimeout(function () {
    tempPlayButtonState = true;
    that.setState({playButtonState : tempPlayButtonState});
  }, stepLength * 32 * 1000 * numberOfLoops); 

  }

  onStopNotes = (e) => {
    this.props.stopNotesHandler(e);

    this.setState({stopButtonState: false});

    let tempPlayButtonState = this.state.playButtonState;
    tempPlayButtonState = true;
    this.setState({playButtonState : tempPlayButtonState});
    clearInterval(playBtnTimeOut);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    // console.log( this.props.panelState, "after componenet re-render after click");

    let drumsGreen = "activePanel";
    let riffGreen;
    let bassGreen;

    let activeTextDrums = "...";
    let activeTextRiff = "...";
    let activeTextBass = "...";

    this.props.panelState === "bass"
      ? (bassGreen = "activePanel")
      : (bassGreen = null);
    this.props.panelState === "bass"
      ? (activeTextBass = "Active")
      : (activeTextBass = "...");

    this.props.panelState === "riff"
      ? (riffGreen = "activePanel")
      : (drumsGreen = null);
    this.props.panelState === "riff"
      ? (activeTextRiff = "Active")
      : (activeTextRiff = "...");

    this.props.panelState === "drums"
      ? (drumsGreen = "activePanel")
      : (drumsGreen = null);
    this.props.panelState === "drums"
      ? (activeTextDrums = "Active")
      : (activeTextDrums = "...");

    let tempoList = [60, 70, 80, 90, 100, 110, 120, 140];

    let isPlayDisabled;
    this.state.playButtonState === true? (isPlayDisabled = false) : (isPlayDisabled = true);

    let isStopDisabled;
    this.state.stopButtonState === true? (isStopDisabled = false) : (isStopDisabled = true);

    return (
      <nav className="navBar">
        <div className="btnHolder dsLogoHolder" >
          <button className="clearSteps controlBtn dsLogo" onClick={this.onClearPattern}>
              <div className="dsLogoText">
              <p>DS</p>
            <p>LDN</p>
              </div>
          </button>
        </div>
        <div className="btnHolder" id="playSequenceHolder">
         
          <button id="playSequence" className="controlBtn" onClick={this.onPlayNotes} disabled={isPlayDisabled}>
            PLAY
          </button>
        </div>
        <div className="btnHolder">
          <button id="stopLoop" className="controlBtn" onClick={this.onStopNotes} disabled={isStopDisabled}>
            STOP
          </button>
        </div>
        <div className="btnHolder">
          <button className="controlBtn" id="setTempoBtn">
            TEMPO
          </button>
          <p id="tempoSelectHolder">
            <select
              id="tempoSelect"
              type="number"
              min="60"
              max="140"
              defaultValue="70"
              onChange={this.onTempoChange}
            >
              {tempoList.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </p>
        </div>
        <div className="btnHolder">
          <button className="controlBtn">LOOPS</button>
          <p id="loopSelectHolder">
            <select
              id="loopSelect"
              type="number"
              min="1"
              max="9"
              defaultValue="2"
              onChange={this.onLoopChange}
            >
              <option>1</option>
              <option>2</option>
            </select>
          </p>
        </div>

        <div
          onClick={this.panelViewHandler}
          className={drumsGreen + " controlsBtn btnHolder viewBtn"}
        >
          <button className="underBtn controlsBtn" name="drums">
            DRUMS
          </button>
          <p className="activeText">{activeTextDrums}</p>
        </div>
        <div
          onClick={this.panelViewHandler}
          className={bassGreen + " controlsBtn btnHolder viewBtn"}
        >
          <button className="underBtn controlsBtn" name="bass">
            BASS
          </button>
          <p className="activeText">{activeTextBass}</p>
        </div>
        <div
          onClick={this.panelViewHandler}
          className={riffGreen + " controlsBtn btnHolder viewBtn"}
        >
          <button className="underBtn controlsBtn" name="riff">
            RIFF
          </button>
          <p className="activeText">{activeTextRiff}</p>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
 
});

export default connect(mapStateToProps)(NavComponent);
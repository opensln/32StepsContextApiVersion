import React, { Component } from "react";
// import globFunc from "./gobalFunctions";

let playBtnTimeOut;

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playButtonState : true
    }
}

  panelViewHandler = (e) => {
    //console.log(e.target);
    this.panelState = e.target.firstElementChild.name;
    //console.log(this.panelState, "panelState from this module");
    this.props.onViewPanelSelect(e.target.firstElementChild.name);
    //console.log(this.props.panelState, "panel state fetched from the App state and brought to this module's props always one behind"); // always one behind
  };

  onLoopHandler = (e) => {
    //console.log(e.target.value, "from NavComponent");
    this.props.loopFunction(e.target.value);
  };

  onTempoHandler = (e) => {
    //console.log(e.target.value, "from NavComponent");
    this.props.tempoHandler(e.target.value);
  };

  onClearPattern = () => {
      //console.log(e.target, "from Nav");
      this.props.clearPatternHandler();
  }

  onPlayNotes = (e) => {
   this.props.playNotesHandler(e);
   let tempButtonState = this.state.playButtonState;
   tempButtonState = false;
   this.setState({playButtonState : tempButtonState});

   let numberOfLoops = this.props.numberOfLoops;
   let stepLength = this.props.stepLength;
   let that = this;

   playBtnTimeOut = setTimeout(function () {
    tempButtonState = true;
    that.setState({playButtonState : tempButtonState});
  }, stepLength * 32 * 1000 * numberOfLoops); 

  }

  onStopNotes = (e) => {
    this.props.stopNotesHandler(e);
    let tempButtonState = this.state.playButtonState;
    tempButtonState = true;
    this.setState({playButtonState : tempButtonState});
    clearInterval(playBtnTimeOut);
  }

  componentDidMount() {
    //console.log(this.state, "general state nav section");
  }

  componentDidUpdate() {
    //console.log(this.state.playButtonState, "play Button State");
    //console.log(this.props.stepLength, "steplength Updated from inside Nav");
  }

  render() {
    // console.log(
    //   this.props.panelState,
    //   "after componenet re-render after click"
    // );

    let drumsGreen = "activePanel";
    let riffGreen;
    let bassGreen;

    let activeTextDrums = "...";
    let activeTextRiff = "...";
    let activeTextBass = "...";
    // console.log(
    //   this.props.panelState,
    //   "just before expression",
    //   drumsGreen,
    //   "drumsGreen value"
    // );

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

    let isDisabled;
    this.state.playButtonState === true? (isDisabled = false) : (isDisabled = true);

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
         
          <button id="playSequence" className="controlBtn" onClick={this.onPlayNotes} disabled={isDisabled}>
            PLAY
          </button>
        </div>
        <div className="btnHolder">
          <button id="stopLoop" className="controlBtn" onClick={this.onStopNotes}>
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
              onChange={this.onTempoHandler}
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
              onChange={this.onLoopHandler}
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

export default NavComponent;

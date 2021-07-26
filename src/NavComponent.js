import React, { Component } from "react";
import globFunc from "./gobalFunctions";

class NavComponent extends Component {
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

  render() {
    console.log(
      this.props.panelState,
      "after componenet re-render after click"
    );

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
    // switch(this.props.panelState) {
    //     case "drums":
    //         drumsGreen = "activePanel";
    //         activeTextDrums = "Active";
    //         riffGreen = " ";
    //         bassGreen = " ";
    //         break;
    //     case "riff":
    //         drumsGreen = " ";
    //         activeTextDrums = "...";
    //         riffGreen = "activePanel";
    //         activeTextRiff = "Active";
    //         bassGreen = " ";
    //         break;
    //     case "bass":
    //         drumsGreen = " ";
    //         activeTextDrums = "...";
    //         riffGreen = " ";
    //         bassGreen = "activePanel";
    //         activeTextBass = "Active";
    //         break;
    //         default:
    //         break;
    // }
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
          <button id="playSequence" className="controlBtn">
            PLAY
          </button>
        </div>
        <div className="btnHolder">
          <button id="stopLoop" className="controlBtn">
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
              max="220"
              value="60"
              onChange={this.onTempoHandler}
            >
              {tempoList.map((item) => (
                <option key={item.index}>{item}</option>
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

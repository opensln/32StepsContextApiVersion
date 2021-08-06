import React, { useState} from "react";
import { partsActionsCreator } from "../Actions";

let playBtnTimeOut;

function NavComponent(props) {

  const [playBtn, setPlayStatus] = useState({
      status : "waiting"
    });

  const [stopBtn, setStopStatus] = useState({
      status : "idle"
    });

  const panelViewHandler = (e) => {
    props.onViewPanelSelect(e.target.firstElementChild.name);
  };

  const onLoopChange = (e) => {
    props.loopHandler(e.target.value);
    console.log(e.target.value, "number of loops");
  };

  const onTempoChange = (e) => {
    props.tempoHandler(e.target.value);
  };

  const onClearPattern = () => {
  //   let answer = window.confirm(
  //     "Are you sure you want to clear all of the steps?"
  //   );
  //   if (answer) {
  //       //call actionCreator for each <part>Reset
  //       let actionArray = ["hihatsReset","snareReset","kickReset","bassReset","riffReset"];

  //       actionArray.forEach(item => {
  //         this.props.dispatch(partsActionsCreator(null,null, item));
  //       });

  //       this.props.onViewPanelSelect("drums");
      }
  // }
  
  const onPlayNotes = (e) => {
  props.playNotesHandler(e);

  setPlayStatus({...playBtn, status : "playing"});
  setStopStatus({...stopBtn, status: "idle"});

  //  let numberOfLoops = this.props.numberOfLoops;
  //  let stepLength = this.props.stepLength;
  //  let that = this;

  //  playBtnTimeOut = setTimeout(function () {
  //   tempPlayButtonState = true;
  //   that.setState({playButtonState : tempPlayButtonState});
  // }, stepLength * 32 * 1000 * numberOfLoops); 
  }

  const onStopNotes = (e) => {
    props.stopNotesHandler(e);

    setStopStatus({...stopBtn, status: "stopRequested"});
    setPlayStatus({...playBtn, status : "waiting"});

    // let tempPlayButtonState = this.state.playButtonState;
    // tempPlayButtonState = true;
    // this.setState({playButtonState : tempPlayButtonState});
    // clearInterval(playBtnTimeOut);
  }

    // console.log( this.props.panelState, "after componenet re-render after click");

    let drumsGreen = "activePanel";
    let riffGreen;
    let bassGreen;

    let activeTextDrums = "...";
    let activeTextRiff = "...";
    let activeTextBass = "...";

    props.panelState === "bass"
      ? (bassGreen = "activePanel")
      : (bassGreen = null);
    props.panelState === "bass"
      ? (activeTextBass = "Active")
      : (activeTextBass = "...");

    props.panelState === "riff"
      ? (riffGreen = "activePanel")
      : (drumsGreen = null);
    props.panelState === "riff"
      ? (activeTextRiff = "Active")
      : (activeTextRiff = "...");

    props.panelState === "drums"
      ? (drumsGreen = "activePanel")
      : (drumsGreen = null);
    props.panelState === "drums"
      ? (activeTextDrums = "Active")
      : (activeTextDrums = "...");

    let tempoList = [60, 70, 80, 90, 100, 110, 120, 140];

    let isPlayDisabled;
    playBtn.status === "waiting"? isPlayDisabled = false : isPlayDisabled = true;
    // console.log("playButtonState", playBtn.status);
    // console.log("is playdisabled", isPlayDisabled);
   
    let isStopDisabled;
    stopBtn.status === "idle"? (isStopDisabled = false) : (isStopDisabled = true);
    // console.log("playButtonState", stopBtn.status);
    // console.log("is stopdisabled", isStopDisabled);

    return (
      <nav className="navBar">
        <div className="btnHolder dsLogoHolder" >
          <button className="clearSteps controlBtn dsLogo" onClick={onClearPattern}>
              <div className="dsLogoText">
              <p>DS</p>
            <p>LDN</p>
              </div>
          </button>
        </div>
        <div className="btnHolder" id="playSequenceHolder">
         
          <button id="playSequence" className="controlBtn" onClick={onPlayNotes} disabled={isPlayDisabled}>
            PLAY
          </button>
        </div>
        <div className="btnHolder">
          <button id="stopLoop" className="controlBtn" onClick={onStopNotes} disabled={isStopDisabled}>
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
              onChange={onTempoChange}
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
              onChange={onLoopChange}
            >
              <option>1</option>
              <option>2</option>
            </select>
          </p>
        </div>

        <div
          onClick={panelViewHandler}
          className={drumsGreen + " controlsBtn btnHolder viewBtn"}
        >
          <button className="underBtn controlsBtn" name="drums">
            DRUMS
          </button>
          <p className="activeText">{activeTextDrums}</p>
        </div>
        <div
          onClick={panelViewHandler}
          className={bassGreen + " controlsBtn btnHolder viewBtn"}
        >
          <button className="underBtn controlsBtn" name="bass">
            BASS
          </button>
          <p className="activeText">{activeTextBass}</p>
        </div>
        <div
          onClick={panelViewHandler}
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

export default NavComponent;
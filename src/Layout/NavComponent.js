import React, { useState, useContext} from "react";
import {blankSlate} from "../DataFiles/PresetData";
import { GlobalContext } from '../GlobalContext/GlobalContext';

let playBtnTimeOut;

function NavComponent(props) {
  
  const {mainState, setMyState} = useContext(GlobalContext);
  let viewBtnState = mainState.viewBtnState;

  const [playBtn, setPlayStatus] = useState({
      status : "waiting"
    });

  const [stopBtn, setStopStatus] = useState({
      status : "inactive"
    });
 
  const panelViewHandler = (e) => {
    props.onViewPanelSelect(e.target.firstElementChild.name);
  };

  const onLoopChange = (e) => {
    props.loopHandler(e.target.value);
  };

  const onTempoChange = (e) => {
    props.tempoHandler(e.target.value);
  };

  const onClearPattern = () => {
    let answer = window.confirm(
      "Are you sure you want to clear all of the steps?"
    );
      if (answer) {
        
      let tempArray = blankSlate();
      let tempState = {...mainState,
        guiDataObj : {...mainState.guiDataObj,
        hihats : tempArray,
        snare: tempArray,
        kick : tempArray,
        bassNoteArray : tempArray,
        riffNoteArray : tempArray}, //end nested object. 
        viewBtnState : "drums"
        }
        setMyState({...tempState});
      }
    }
  
  const onPlayNotes = (e) => {
  props.playNotesHandler(e);

  setPlayStatus({...playBtn, status : "playing"});
  setStopStatus({...stopBtn, status: "active"});

   let numberOfLoops = props.numberOfLoops;
   let stepLength = props.stepLength;

   playBtnTimeOut = setTimeout(function () {
     setPlayStatus({...playBtn, status : "waiting"});
  }, stepLength * 32 * 1000 * numberOfLoops); 
  }

  const onStopNotes = (e) => {
    props.stopNotesHandler(e);

    setStopStatus({...stopBtn, status: "inactive"});
    setPlayStatus({...playBtn, status : "waiting"});

    clearInterval(playBtnTimeOut);
  }

    let drumsGreen = "activePanel"; //rember that this is the CSS class
    let riffGreen;
    let bassGreen;

    let activeTextDrums = "...";
    let activeTextRiff = "...";
    let activeTextBass = "...";

    viewBtnState === "bass"
      ? (bassGreen = "activePanel")
      : (bassGreen = null);
    viewBtnState === "bass"
      ? (activeTextBass = "Active")
      : (activeTextBass = "...");

    viewBtnState === "riff"
      ? (riffGreen = "activePanel")
      : (drumsGreen = null);
    viewBtnState === "riff"
      ? (activeTextRiff = "Active")
      : (activeTextRiff = "...");

    viewBtnState === "drums"
      ? (drumsGreen = "activePanel")
      : (drumsGreen = null);
    viewBtnState === "drums"
      ? (activeTextDrums = "Active")
      : (activeTextDrums = "...");

    let tempoList = [60, 70, 80, 90, 100, 110, 120, 140];

    let isPlayDisabled;
    playBtn.status === "waiting"? isPlayDisabled = false : isPlayDisabled = true;
   
    let isStopDisabled;
    stopBtn.status === "inactive"? (isStopDisabled = true) : (isStopDisabled = false);

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
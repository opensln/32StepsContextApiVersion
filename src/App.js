import React from "react";
import "./App.css";
import NavComponent from "./Layout/NavComponent";
import InfoHolder from "./Layout/InfoHolder";
import PatternContainer from "./Layout/PatternContainer";

import { useState } from "react";
import { GlobalContext } from './GlobalContext/GlobalContext';
import {getSamples, sampleGetter} from "./DataFiles/SoundFetcher";
import {appDataStore} from "./DataFiles/PresetData";
import {playNotes, stopNotes} from "./SoundModule";

getSamples();
// Load samples here to prevent reloading after every page change
// getSamples loads the samples into the fetchedSamples variable which is accessed
// by the sampleGetter function

function App() {

    //initTempo
    let initBeatLength = 60 / 70;
    let initStepLength = initBeatLength / 4;

    const [mainState, setMyState] = useState({
      viewBtnState: "drums",
      numberOfLoops: 2,
      currentTempo: 70,
      currentStepLength: initStepLength,
      guiDataObj: appDataStore
    });

    console.log(mainState, "mainstate from main App");
  
  const panelViewHandler = (panelName) => {
    setMyState({...mainState,  viewBtnState: panelName });
  };

  const onLoopChange = (loopValue) => {
    console.log(loopValue, "Loop Value from App page");
    setMyState({...mainState, numberOfLoops: loopValue });
    console.log(mainState.numberOfLoops, "after loop change attempt");
  };

  const onTempoChange = (selectedTempo) => {
    setMyState({ ...mainState, currentTempo: selectedTempo });
    console.log("new tempo", selectedTempo);

    let beatLength = 60 / selectedTempo;
    let tempStepLength = beatLength / 4;
    setMyState({...mainState, currentStepLength: tempStepLength });
  };

  //---------------------onPlayNotes----------------
  const onPlayNotes = (e) => {
  let sampleObj = sampleGetter();
  playNotes(sampleObj, mainState, mainState.guiDataObj);
  }

  const onStopNotes = () => {
  stopNotes();
  }

    return (
      <GlobalContext.Provider value={{mainState, setMyState}}>
      <div className="App appContainer">
        <NavComponent
          onViewPanelSelect={panelViewHandler}
          panelState={mainState.viewBtnState}
          stepLength={mainState.currentStepLength}
          numberOfLoops={mainState.numberOfLoops}

          loopHandler={onLoopChange}
          tempoHandler={onTempoChange}
          playNotesHandler={onPlayNotes}
          stopNotesHandler={onStopNotes}
        />

        <InfoHolder />
        <PatternContainer
          viewPanelState={mainState.viewBtnState}
        />
      </div>
      </GlobalContext.Provider>
    );
}

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";
import { GlobalContext } from './GlobalContext/GlobalContext';
import NavComponent from "./Layout/NavComponent";
import InfoHolder from "./Layout/InfoHolder";
import PatternContainer from "./Layout/PatternContainer";

let sampleObj;
let soundFetcher = require("./DataFiles/SoundFetcher");
let appData = require("./DataFiles/PresetData");
let soundModule = require("./SoundModule");

function App() {

    soundFetcher.getSamples();

    const [mainState, setMyState] = useState({
      viewBtnState: "drums",
      numberOfLoops: 2,
      currentTempo: 70,
      currentStepLength: 0.25,
      guiDataObj: appData
    });

    // console.log(mainState.numberOfLoops, "mainState.numberOfLoops from App");
    // console.log(mainState.viewBtnState, "mainState from App");
    // console.log(mainState.guiDataObj.bassNotesGui, "bassGui from App");
  
  const panelViewHandler = (panelName) => {
    setMyState({...mainState,  viewBtnState: panelName });
  };

  const onLoopChange = (loopValue) => {
    console.log(loopValue, "Loop VAlue from App page");
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
  sampleObj = soundFetcher.fetchedSample();
  //console.log(sampleObj, "fetched sample if not too slow");
  soundModule.playNotes(sampleObj, mainState, mainState.guiDataObj);
  }

  const onStopNotes = () => {
  soundModule.stopNotes();
  }

  // componentDidMount() {
  // let beatLength = 60 / 70;
  // let tempStepLength = beatLength / 4;
  // this.setState({ currentStepLength: tempStepLength });
  // }
  
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

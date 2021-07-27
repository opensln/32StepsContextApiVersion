import React, { Component } from "react";
import "./App.css";
import NavComponent from "./Layout/NavComponent";
import InfoHolder from "./Layout/InfoHolder";
import PatternContainer from "./Layout/PatternContainer";

let soundFetcher = require("./DataFiles/SoundFetcher");
let appData = require("./DataFiles/PresetData");
let globalControls = require("./GlobalControls");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewBtnState: "drums",
      numberOfLoops: 2,
      currentTempo: 70,
      currentStepLength: 0.25,
      guiDataObj: appData,
      hihatsData: appData.hihats,
      snareData: appData.snare,
      kickData: appData.kick,
      bassData: appData.bassNoteArray,
      riffData: appData.riffNoteArray
    };

  }

  panelViewHandler = (panelName) => {
    let tempPanelName = this.state.viewBtnState;
    tempPanelName = panelName;
    this.setState({ viewBtnState: tempPanelName });
    //console.log(this.state.viewBtnState, "panelState triggered from main App");
  };

  onLoopChange = (loopValue) => {
    let tempNumberOfLoops = this.state.numberOfLoops;
    tempNumberOfLoops = loopValue;
    this.setState({ numberOfLoops: tempNumberOfLoops });
  };

  onTempoChange = (selectedTempo) => {
    let tempSelectedTempo = this.state.currentTempo;
    tempSelectedTempo = selectedTempo;
    this.setState({ currentTempo: tempSelectedTempo });

    let beatLength = 60 / selectedTempo;
    let tempStepLength = beatLength / 4;
    this.setState({ currentStepLength: tempStepLength });
  };

  onClearPattern = () => {
    //window.confirm("do you really want to cearl All of the patterns?");
    globalControls.clearSteps();
  };

  //---------------------onPlayNotes----------------
  onPlayNotes = (e) => {
  let that = this;
  
  async function getSampleObj() {
  let sampleObj = await soundFetcher.fetchedSample();
  globalControls.playNotes(sampleObj, that.state);
  }
  getSampleObj();
  }

  onStopNotes = () => {
  globalControls.stopNotes();
  }

  onHHChange = (e) => {
    let arrayPos = e.target.step;
    let tempHihatsData = this.state.hihatsData;
    if (
      e.target.getAttribute("data-roll") === "yes" &&
      e.target.checked === true
    ) {
      tempHihatsData[arrayPos] = "R";
    } else {
      tempHihatsData[arrayPos] = e.target.checked;
    }
    this.setState({ hihatsData: tempHihatsData });
  };

  onSnChange = (e) => {
    let arrayPos = e.target.step;
    let tempSnareData = this.state.snareData;
    tempSnareData[arrayPos] = e.target.checked;
    this.setState({ snareData: tempSnareData });
  };

  onKkChange = (e) => {
    let arrayPos = e.target.step;
    let tempKickData = this.state.kickData;
    tempKickData[arrayPos] = e.target.checked;
    this.setState({ kickData: tempKickData });
  };

  onBassChange = (e) => {
    let arrayPos = e.target.getAttribute("data-step");
    let tempBassData = this.state.bassData;
    tempBassData[arrayPos] = e.target.value;
    this.setState({ bassData: tempBassData });
  };

  onRiffChange = (e) => {
    let arrayPos = e.target.getAttribute("data-step");
    let tempRiffData = this.state.bassData;
    tempRiffData[arrayPos] = e.target.value;
    this.setState({ riffData: tempRiffData });
  };

//------------------------------Component Did Mount Fetch Samples-----------------------------

  componentDidMount() {
  console.log("main app loaded");
  soundFetcher.getSamples();

  let beatLength = 60 / 70;
  let tempStepLength = beatLength / 4;
  this.setState({ currentStepLength: tempStepLength });
  }

  componentDidUpdate() {
  //console.log(this.state.currentStepLength, "current stepLength");
  }

  render() {
    return (
      <div className="App appContainer">
        <audio className="audio-element">
          <source src="./sounds/kick50-cvw.wav"></source>
        </audio>
        <NavComponent
          onViewPanelSelect={this.panelViewHandler}
          panelState={this.state.viewBtnState}
          stepLength={this.state.currentStepLength}
          numberOfLoops={this.state.numberOfLoops}
          loopFunction={this.onLoopChange}
          tempoHandler={this.onTempoChange}
          clearPatternHandler={this.onClearPattern}
          playNotesHandler={this.onPlayNotes}
          stopNotesHandler={this.onStopNotes}
        />

        <InfoHolder />
        <PatternContainer
          viewPanelState={this.state.viewBtnState}
          bassNotes={this.state.guiDataObj.bassNotesGui}
          riffNotes={this.state.guiDataObj.bassNotesGui}
          hihatsData={this.state.hihatsData}
          snareData={this.state.snareData}
          kickData={this.state.kickData}
          bassData={this.state.bassData}
          riffData={this.state.riffData}

          handleHH={this.onHHChange}
          handleSn={this.onSnChange}
          handleKk={this.onKkChange}
          handleBassChange={this.onBassChange}
          handleRiffChange={this.onRiffChange}
        />
      </div>
    );
  }
}

export default App;

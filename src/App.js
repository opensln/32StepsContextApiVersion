import React, { Component } from "react";
import {connect} from "react-redux";
import "./App.css";
import NavComponent from "./Layout/NavComponent";
import InfoHolder from "./Layout/InfoHolder";
import PatternContainer from "./Layout/PatternContainer";

let soundFetcher = require("./DataFiles/SoundFetcher");
let appData = require("./DataFiles/PresetData");
let soundModule = require("./SoundModule");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewBtnState: "drums",
      numberOfLoops: 2,
      currentTempo: 70,
      currentStepLength: 0.25,
      guiDataObj: appData
    };
  }

  panelViewHandler = (panelName) => {
    let tempPanelName = this.state.viewBtnState;
    tempPanelName = panelName;
    this.setState({ viewBtnState: tempPanelName });
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

  //---------------------onPlayNotes----------------
  onPlayNotes = (e) => {
  let that = this;
  
  async function getSampleObj() {
  let sampleObj = await soundFetcher.fetchedSample();
  soundModule.playNotes(sampleObj, that.state, that.props);
  }
  getSampleObj();
  }

  onStopNotes = () => {
  soundModule.stopNotes();
  }

//------------------------------Component Did Mount Fetch Samples-----------------------------

  componentDidMount() {
  soundFetcher.getSamples();

  let beatLength = 60 / 70;
  let tempStepLength = beatLength / 4;
  this.setState({ currentStepLength: tempStepLength });
  }

  componentDidUpdate() {
    //console.log(this.props, "props in general from App.js");
  }

  render() {
    return (
      <div className="App appContainer">
        <NavComponent
          onViewPanelSelect={this.panelViewHandler}
          panelState={this.state.viewBtnState}
          stepLength={this.state.currentStepLength}
          numberOfLoops={this.state.numberOfLoops}

          loopHandler={this.onLoopChange}
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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hihats: state.hihats,
  snare : state.snare,
  kick : state.kick,
  bass : state.bass,
  riff : state.riff
});

export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import "./App.css";
import NavComponent from "./NavComponent";
import InfoHolder from "./InfoHolder";
import PatternContainer from "./PatternContainer";
let appData = require("./DataFiles/PresetData");
let globalFunction = require("./gobalFunctions");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewBtnState: "drums",
      numberOfLoops: 3,
      currentTempo: 120,
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
    //console.log(loopValue, "from main App");
    let tempNumberOfLoops = this.state.numberOfLoops;
    tempNumberOfLoops = loopValue;
    this.setState({ numberOfLoops: tempNumberOfLoops });
  };

  onTempoChange = (selectedTempo) => {
    //console.log(loopValue, "from main App");
    let tempSelectedTempo = this.state.currentTempo;
    tempSelectedTempo = selectedTempo;
    this.setState({ currentTempo: tempSelectedTempo });
  };

  onClearPattern = () => {
    //window.confirm("do you really want to cearl All of the patterns?");
    globalFunction();
  };

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

  componentDidMount() {
  
  }

  componentDidUpdate() {
    //console.log(this.state.numberOfLoops, "number of Loops");
    //console.log(this.state.currentTempo, "selected Tempo after main did update");
    //console.log(this.state.snareData, "snareData main app did update");
    //console.log(this.state.kickData, "updated kick data");
    //console.log(this.state.bassData, "updated bassData");
    //console.log(this.state.riffData, "riffData updated from Main");
  }

  render() {
    return (
      <div className="App appContainer">
        <NavComponent
          onViewPanelSelect={this.panelViewHandler}
          panelState={this.state.viewBtnState}
          loopFunction={this.onLoopChange}
          tempoHandler={this.onTempoChange}
          clearPatternHandler={this.onClearPattern}
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

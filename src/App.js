import React, { Component } from "react";
import "./App.css";
import NavComponent from "./NavComponent";
import InfoHolder from "./InfoHolder";
import PatternContainer from "./PatternContainer";
import { hihats } from "./DataFiles/PresetData";
let appData = require("./DataFiles/PresetData");
let globalFunction = require("./gobalFunctions");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomOnj: "yehman",
      viewBtnState: "drums",
      numberOfLoops: 3,
      currentTempo: 120,
      guiDataObj : appData,
      hihatsData : appData.hihats
    };
  }

  panelViewHandler = (panelName) => {
    let tempPanelName = this.state.viewBtnState;
    tempPanelName = panelName;
    this.setState({ viewBtnState: tempPanelName });
    //console.log(this.state.viewBtnState, "panelState triggered from main App");
  };

  onLoopChange = (loopValue) => {
    console.log(loopValue, "from main App");
    let tempNumberOfLoops = this.state.numberOfLoops;
    tempNumberOfLoops = loopValue;
    this.setState({ numberOfLoops: tempNumberOfLoops });
  }

  onTempoChange = (selectedTempo) => {
    //console.log(loopValue, "from main App");
    let tempSelectedTempo = this.state.currentTempo;
    tempSelectedTempo = selectedTempo;
    this.setState({ currentTempo: tempSelectedTempo });
  }

  onclearPattern = () => {
    //window.confirm("do you really want to cearl All of the patterns?");
    globalFunction();
  }

  onHHChange = (e) => {
    //console.log("handleHH from main App", e.target);
    //console.log("data-roll is present?", e.target.getAttribute("data-roll"));
    //console.log("e dot target dot step", e.target.step);
    //console.log(e.target.checked, "e dot target dot checked");
    let arrayPos = e.target.step;
    let tempHihatsData = this.state.hihatsData;
    if(e.target.getAttribute("data-roll") === "yes" && e.target.checked === true){
      tempHihatsData[arrayPos]= "R";
    } else {
    tempHihatsData[arrayPos]= e.target.checked;
    }
    this.setState({hihatsData : tempHihatsData});
    //console.log(temphihatsdata);
  }

  componentDidMount() {
  //console.log(this.state.presetDataObj.bassNotes , "componentdidMount");
  //console.log(this.state.hihatsData , "hihatData componentdidMount");
  }

  componentDidUpdate() {
  //console.log(this.state.numberOfLoops, "number of Loops");
  //console.log(this.state.currentTempo, "selected Tempo after main did update");
  }

  render() {
    return (
      <div className="App appContainer">
      
        <NavComponent
          onViewPanelSelect={this.panelViewHandler}
          panelState={this.state.viewBtnState}
          loopFunction={this.onLoopChange}
          tempoHandler={this.onTempoChange}
          clearPatternHandler={this.onclearPattern}
        />
        {/* <p>  {this.state.presets}</p> */}
        {/* <p>{this.state.viewBtnState}</p> */}
        <InfoHolder />
        <PatternContainer
        viewPanelState={this.state.viewBtnState}
        bassNotes={this.state.guiDataObj.bassNotes}
        riffNotes={this.state.guiDataObj.bassNotes}
        hihatsData={this.state.hihatsData}
        handleHH={this.onHHChange}
        />
      </div>
    );
  }
}

export default App;

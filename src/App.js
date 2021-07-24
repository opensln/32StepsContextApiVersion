import React, { Component } from "react";
import "./App.css";
import NavComponent from "./NavComponent";
import InfoHolder from "./InfoHolder";
import PatternContainer from "./PatternContainer";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomOnj :"yehman",
      viewBtnState : "init"
    };
  }

  panelViewHandler = (panelName) => {
   
    let tempPanelName = this.state.viewBtnState;
    tempPanelName = panelName;
    this.setState({viewBtnState : tempPanelName});
    //console.log(this.state.viewBtnState, "panelState triggered from main App");
  }

  componentDidUpdate() {
  }

render() {
  return (
    <div className="App"id="appContainer" >
      <NavComponent
      onViewPanelSelect={this.panelViewHandler}
      panelState={this.state.viewBtnState}/>
      <p>{this.state.viewBtnState}</p>
      <InfoHolder/>
      <PatternContainer/>
    </div>
  );
}

}

export default App;

import React, { Component } from "react";

class NavComponent extends Component {

  panelViewHandler = (e) => {
    console.log(e.target);
    this.panelState = e.target.firstElementChild.name;
    //console.log(this.panelState, "panelState from this module");
    this.props.onViewPanelSelect(e.target.firstElementChild.name);
    //console.log(this.props.panelState, "panel state fetched from the App state and brought to this module's props always one behind"); // always one behind
  };

  render() {
    //   let viewPanelCollection = document.querySelectorAll(".viewBtn"); //This acts like a listener but is apparently bad practise
    //   viewPanelCollection.forEach(item =>{
    //       if(item.firstElementChild.name === this.props.panelState) {
    //           item.style.backgroundColor = "green";
    //       } else {
    //         item.style.backgroundColor = "slategrey";
    //       }
    //   });
    console.log(this.props.panelState, "after componenet re-render after click");

    let drumsGreen = "activePanel";
    let riffGreen;
    let bassGreen;
  
    let activeTextDrums ="Active";
    let activeTextRiff ="...";
    let activeTextBass ="...";

    switch(this.props.panelState) {
        case "drums":
            drumsGreen = "activePanel";
            activeTextDrums = "Active";
            riffGreen = " ";
            bassGreen = " ";
            break;
        case "riff":
            drumsGreen = " ";
            activeTextDrums = "...";
            riffGreen = "activePanel";
            activeTextRiff = "Active";
            bassGreen = " ";
            break;
        case "bass":
            drumsGreen = " ";
            activeTextDrums = "...";
            riffGreen = " ";
            bassGreen = "activePanel";
            activeTextBass = "Active";
            break;
            default:
            break;
    }
    return (
    <nav className="navBar">
        <div className="btnHolder dsLogoHolder">
          <button className="clearSteps controlBtn dsLogo">
            <p>DS</p>
            <p>LDN</p>
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
            ></select>
          </p>
        </div>
        <div className="btnHolder">
          <button className="controlBtn">LOOPS</button>
          <p id="loopSelectHolder">
            <select id="loopSelect" type="number" min="1" max="9" defaultValue="2">
              <option>1</option>
              <option>2</option>
            </select>
          </p>
        </div>
        <div onClick={this.panelViewHandler} className={drumsGreen +" controlsBtn btnHolder viewBtn"}>
          <button  className="underBtn controlsBtn" name="drums">DRUMS</button>
          <p className="activeText">{activeTextDrums}</p> 
        </div>
        <div  onClick={this.panelViewHandler} className={bassGreen +" controlsBtn btnHolder viewBtn"}>
          <button  className="underBtn controlsBtn"  name="bass">BASS</button>
          <p className="activeText">{activeTextBass}</p>
        </div>
        <div onClick={this.panelViewHandler} className={riffGreen +" controlsBtn btnHolder viewBtn"}>
          <button className="underBtn controlsBtn"  name="riff">RIFF</button>
          <p className="activeText">{activeTextRiff}</p>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
import React, { useContext } from "react";
import DropDownRiffSteps from "./DropDownRiffSteps";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function PatternContainerRightRiffReact(props) {

  console.log(props, "in riff Right");
 
  const {mainState} = useContext(GlobalContext);
  let riffStep = mainState.guiDataObj.riffNoteArray;
  let riffNotesDropDown = mainState.guiDataObj.riffNotesGui;

    return (
      <div
        className="patternContainerRightRiff viewPanel RIFFpanel"
        name="RIFFpanel"
      >
        <div className="bar1Holder">
          <div className="rowHolder b1bassSpacer"></div>

          <div className="rowHolder b1BassRowHolder">
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[0]}
                stepNumber="0"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[1]}
                stepNumber="1"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[2]}
                stepNumber="2"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[3]}
                stepNumber="3"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[4]}
                stepNumber="4"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[5]}
                stepNumber="5"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[6]}
                stepNumber="6"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[7]}
                stepNumber="7"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[8]}
                stepNumber="8"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[9]}
                stepNumber="9"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[10]}
                stepNumber="10"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[11]}
                stepNumber="11"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[12]}
                stepNumber="12"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[13]}
                stepNumber="13"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[14]}
                stepNumber="14"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[15]}
                stepNumber="15"
              />
            </div>
          </div>

          <div className="rowHolder b1RiffSpacer"></div>
        </div>

        <div className="bar2Holder">
          <div className="rowHolder b2RiffSpacer"></div>

          <div className="rowHolder b1RiffRowHolder">
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[16]}
                stepNumber="16"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[17]}
                stepNumber="17"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[18]}
                stepNumber="18"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[19]}
                stepNumber="19"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[20]}
                stepNumber="20"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[21]}
                stepNumber="21"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[22]}
                stepNumber="22"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[23]}
                stepNumber="23"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[24]}
                stepNumber="24"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[25]}
                stepNumber="25"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[26]}
                stepNumber="26"
              />
            </div>
            <div className="riffStep">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[27]}
                stepNumber="27"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[28]}
                stepNumber="28"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[29]}
                stepNumber="29"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[30]}
                stepNumber="30"
              />
            </div>
            <div className="riffStep even">
              <DropDownRiffSteps
                riffNotes={riffNotesDropDown}
                riffValue={riffStep[31]}
                stepNumber="31"
              />
            </div>
          </div>

          <div className="rowHolder b1RiffSpacer"></div>
        </div>
      </div>
    );

}

export default PatternContainerRightRiffReact;
import React, { useContext } from "react";
import DropDownBassSteps from "./DropDownBassSteps";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function PatternContainerRightBassReact(props) {

  const {mainState} = useContext(GlobalContext);
  let bassStep = mainState.guiDataObj.bassNoteArray;
    
    return (
      <div
        className="patternContainerRightBass viewPanel BASSpanel"
        name="BASSpanel"
      >
        <div className="bar1Holder">
          <div className="rowHolder b1bassSpacer"></div>

          <div className="rowHolder b1BassRowHolder">
            <div className="bassStep" >
              <DropDownBassSteps
                bassValue={bassStep[0]}
                stepNumber="0"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[1]}
                stepNumber="1"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[2]}
                stepNumber="2"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[3]}
                stepNumber="3"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[4]}
                stepNumber="4"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[5]}
                stepNumber="5"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[6]}
                stepNumber="6"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[7]}
                stepNumber="7"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[8]}
                stepNumber="8"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[9]}
                stepNumber="9"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[10]}
                stepNumber="10"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[11]}
                stepNumber="11"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[12]}
                stepNumber="12"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[13]}
                stepNumber="13"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[14]}
                stepNumber="14"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[15]}
                stepNumber="15"
              />
            </div>
          </div>

          <div className="rowHolder b1bassSpacer"></div>
        </div>

        <div className="bar2Holder">
          <div className="rowHolder b2bassSpacer"></div>

          <div className="rowHolder b2BassRowHolder">
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[16]}
                stepNumber="16"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[17]}
                stepNumber="17"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[18]}
                stepNumber="18"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[19]}
                stepNumber="19"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[20]}
                stepNumber="20"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[21]}
                stepNumber="21"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[22]}
                stepNumber="22"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[23]}
                stepNumber="23"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[24]}
                stepNumber="24"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[25]}
                stepNumber="25"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[26]}
                stepNumber="26"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[27]}
                stepNumber="27"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[28]}
                stepNumber="28"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[29]}
                stepNumber="29"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[30]}
                stepNumber="30"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[31]}
                stepNumber="31"
              />
            </div>
          </div>

          <div className="rowHolder b1bassSpacer"></div>
        </div>
      </div>
    );
  
}

export default PatternContainerRightBassReact;
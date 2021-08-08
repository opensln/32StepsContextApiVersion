import React, { useContext } from "react";
import DropDownBassSteps from "./DropDownBassSteps";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function PatternContainerRightBassReact(props) {

  const {mainState} = useContext(GlobalContext);
  let bassStep = mainState.guiDataObj.bassNoteArray;

  const onChangeBass = () => {

  }

  //console.log(mainState.guiDataObj.bassNoteArray, "from Right Bass React");
    
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
                handleBassChange={onChangeBass}
                stepNumber="0"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[1]}
                handleBassChange={onChangeBass}
                stepNumber="1"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[2]}
                handleBassChange={onChangeBass}
                stepNumber="2"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[3]}
                handleBassChange={onChangeBass}
                stepNumber="3"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[4]}
                handleBassChange={onChangeBass}
                stepNumber="4"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[5]}
                handleBassChange={onChangeBass}
                stepNumber="5"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[6]}
                handleBassChange={onChangeBass}
                stepNumber="6"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[7]}
                handleBassChange={onChangeBass}
                stepNumber="7"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[8]}
                handleBassChange={onChangeBass}
                stepNumber="8"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[9]}
                handleBassChange={onChangeBass}
                stepNumber="9"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[10]}
                handleBassChange={onChangeBass}
                stepNumber="10"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[11]}
                handleBassChange={onChangeBass}
                stepNumber="11"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[12]}
                handleBassChange={onChangeBass}
                stepNumber="12"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[13]}
                handleBassChange={onChangeBass}
                stepNumber="13"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[14]}
                handleBassChange={onChangeBass}
                stepNumber="14"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[15]}
                handleBassChange={onChangeBass}
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
                handleBassChange={onChangeBass}
                stepNumber="16"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[17]}
                handleBassChange={onChangeBass}
                stepNumber="17"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[18]}
                handleBassChange={onChangeBass}
                stepNumber="18"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[19]}
                handleBassChange={onChangeBass}
                stepNumber="19"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[20]}
                handleBassChange={onChangeBass}
                stepNumber="20"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[21]}
                handleBassChange={onChangeBass}
                stepNumber="21"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[22]}
                handleBassChange={onChangeBass}
                stepNumber="22"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[23]}
                handleBassChange={onChangeBass}
                stepNumber="23"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[24]}
                handleBassChange={onChangeBass}
                stepNumber="24"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[25]}
                handleBassChange={onChangeBass}
                stepNumber="25"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[26]}
                handleBassChange={onChangeBass}
                stepNumber="26"
              />
            </div>
            <div className="bassStep">
              <DropDownBassSteps
                bassValue={bassStep[27]}
                handleBassChange={onChangeBass}
                stepNumber="27"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[28]}
                handleBassChange={onChangeBass}
                stepNumber="28"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[29]}
                handleBassChange={onChangeBass}
                stepNumber="29"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[30]}
                handleBassChange={onChangeBass}
                stepNumber="30"
              />
            </div>
            <div className="bassStep even">
              <DropDownBassSteps
                bassValue={bassStep[31]}
                handleBassChange={onChangeBass}
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
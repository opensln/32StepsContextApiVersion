import React, {useContext} from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function DropDownBassSteps(props) {

  const {mainState, setMyState} = useContext(GlobalContext);
  let bassNotesDropDown = mainState.guiDataObj.bassNotesGui;

  const onBassChange = (e) => {
    let value = e.target.value;
    let index = e.target.getAttribute("data-step");
    let tempArray = {...mainState.guiDataObj.bassNoteArray}; // make a brand new array by ...copying the properties.

    tempArray[index] = value; // update the the new array with the value from the drop down at the stated index.

    let tempState = {...mainState, // copy the main state object.
    guiDataObj: {...mainState.guiDataObj} // create a new object in the tempstate and ..copy the properties of the guiDataObj.
    };

    tempState.guiDataObj.bassNoteArray = tempArray; //assign the tempArray to the new copy

    setMyState({...tempState}); //copy all of the properties from the tempState to the mainState via setMyState.
    }

    return (
      <>
        <select
          className="bassDropDown"
          data-step={props.stepNumber}
          defaultValue={props.bassValue}
          onChange={onBassChange}
        >
          {bassNotesDropDown.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </>
    );
}

export default DropDownBassSteps;

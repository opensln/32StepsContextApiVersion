import React, {useContext} from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function RiffStepDropDown(props) {

  const {mainState, setMyState} = useContext(GlobalContext);
  let riffNotesDropDown = mainState.guiDataObj.riffNotesGui;

  const onRiffChange = (e) => {
    let value = e.target.value;
    let index = e.target.getAttribute("data-step");

    let tempArray = {...mainState.guiDataObj.riffNoteArray};

    tempArray[index] = value;

    let tempState = {...mainState,
    guiDataObj: {...mainState.guiDataObj}
    };
    tempState.guiDataObj.riffNoteArray = tempArray;

    setMyState({...tempState});
    }

    return (
      <>
        <select
          className="riffDropDown"
          data-step={props.stepNumber}
          defaultValue={props.riffValue}
          onChange={onRiffChange}
        >
          {riffNotesDropDown.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </>
    );
}
export default RiffStepDropDown;

import React, {useContext} from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function RiffStepDropDown(props) {

  const {mainState, setMyState} = useContext(GlobalContext);
  let riffNotesDropDown = mainState.guiDataObj.riffNotesGui;

  //console.log(mainState.guiDataObj.riffNoteArray, "from DrumsRiffDropDown");

  //console.log(mainState, "main state after onRiffChange was added");

  const onRiffChange = (e) => {
    let value = e.target.value;
    let index = e.target.getAttribute("data-step");
    let tempArray = {...mainState.guiDataObj.riffNoteArray};

    tempArray[index] = value;

    let tempState = {...mainState,
    guiDataObj: {...mainState.guiDataObj}
    };
    //This log seems to be actually happenning after line 30???
                  console.log(tempState.guiDataObj, "after spread operator of whole guiData object");

                  console.log(tempState.guiDataObj.riffNoteArray, "riff Note Array only pre assignment");

    tempState.guiDataObj.riffNoteArray = tempArray;

                  console.log(tempState.guiDataObj.riffNoteArray, "riff Note Array only post assignment");

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

import React, { useContext} from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';
import PatternContainerLeft from "./PatternContainerLeft";
import PatternContainerRight from "./PatternContainerRight";

function PatternContainer(props) {

  const {mainState} = useContext(GlobalContext);

  // console.log(mainState.viewBtnState, "from Pattern Right");

    return (
       <div className="patternContainerHolder">
       <PatternContainerLeft/>
       <PatternContainerRight
       viewPanelState={mainState.viewBtnState}
       />
       </div>
    );
  
 }

export default PatternContainer;
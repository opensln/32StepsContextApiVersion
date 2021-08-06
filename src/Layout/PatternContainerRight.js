import React, { useContext } from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';

import PatternContainerRightDrumsReact from "./PatternContainerRightDrumsReact";
import PatternContainerRightBassReact from "./PatternContainerRightBassReact";
import PatternContainerRightRiffReact from "./PatternContainerRightRiffReact";

function PatternContainerRight(props) {

  const {mainState} = useContext(GlobalContext);

  // console.log(mainState.viewBtnState, "from Pattern Container Right");

    let currentPanel = mainState.viewBtnState;
    return (
        <div className="patternContainerRight" > 
            { currentPanel === "drums"? <PatternContainerRightDrumsReact
            /> : null}
            { currentPanel === "bass"? <PatternContainerRightBassReact
            /> : null}
            { currentPanel === "riff"? <PatternContainerRightRiffReact
            />: null}
       </div>
    );

}

export default PatternContainerRight;
import React, { useContext } from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function PatternContainerRightDrumsReact() {

    const {mainState, setMyState} = useContext(GlobalContext);
    let hihatsStep = mainState.guiDataObj.hihats;
    let snareStep = mainState.guiDataObj.kick;
    let kickStep = mainState.guiDataObj.snare;

    //console.log(mainState, "mainState from drumsRightReact");


    const onHiHatChange = (e) => {
        let value;
        let index = e.target.getAttribute("data-step");
        if (
          e.target.getAttribute("data-roll") === "yes" &&
          e.target.checked === true
        ) {
          value = "R";
        } else {
          value = e.target.checked;
        }
        // this.props.dispatch(partsActionsCreator(index,value, "hihats"));
      };

    const onSnareChange = (e) => {
        let value = e.target.checked;
        let index = e.target.getAttribute("data-step");
        // this.props.dispatch(partsActionsCreator(index,value, "snare"));
        }

    const onKickChange = (e) => {
        let value = e.target.checked;
        let index = e.target.getAttribute("data-step");
        // this.props.dispatch(partsActionsCreator(index,value, "kick"));
        }

        return (
            <div
                className="patternContainerRightDrums viewPanel DRUMSpanel"
                name="DRUMSpanel"
            >
                <div className="bar1Holder">
                    <div className="rowHolder b1hhRowHolder">
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh1"
                                checked={hihatsStep[0]}
                                onChange={onHiHatChange}
                                data-step="0"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh2"
                                checked={hihatsStep[1]}
                                onChange={onHiHatChange}
                                data-step="1"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh3"
                                checked={hihatsStep[2]}
                                onChange={onHiHatChange}
                                data-step="2"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh4"
                                checked={hihatsStep[3]}
                                onChange={onHiHatChange}
                                data-step="3"
                            />
                            {hihatsStep[3] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh4Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="3"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[3] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh4Roll"
                                        onChange={onHiHatChange}
                                        data-step="3"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>

                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh5"
                                checked={hihatsStep[4]}
                                onChange={onHiHatChange}
                                data-step="4"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh6"
                                checked={hihatsStep[5]}
                                onChange={onHiHatChange}
                                data-step="5"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh7"
                                checked={hihatsStep[6]}
                                onChange={onHiHatChange}
                                data-step="6"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh8"
                                checked={hihatsStep[7]}
                                onChange={onHiHatChange}
                                data-step="7"
                            />
                            {hihatsStep[7] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh8Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="7"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[7] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh8Roll"
                                        onChange={onHiHatChange}
                                        data-step="7"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh9"
                                checked={hihatsStep[8]}
                                onChange={onHiHatChange}
                                data-step="8"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh10"
                                checked={hihatsStep[9]}
                                onChange={onHiHatChange}
                                data-step="9"
                            />
                            {hihatsStep[9] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh10Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="9"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[9] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh10Roll"
                                        onChange={onHiHatChange}
                                        data-step="9"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh11"
                                checked={hihatsStep[10]}
                                onChange={onHiHatChange}
                                data-step="10"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh12"
                                checked={hihatsStep[11]}
                                onChange={onHiHatChange}
                                data-step="11"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh13"
                                checked={hihatsStep[12]}
                                onChange={onHiHatChange}
                                data-step="12"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh14"
                                checked={hihatsStep[13]}
                                onChange={onHiHatChange}
                                data-step="13"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh15"
                                checked={hihatsStep[14]}
                                onChange={onHiHatChange}
                                data-step="14"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh16"
                                checked={hihatsStep[15]}
                                onChange={onHiHatChange}
                                data-step="15"
                            />
                            {hihatsStep[15] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh16Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="15"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[15] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh16Roll"
                                        onChange={onHiHatChange}
                                        data-step="15"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <div className="rowHolder b1snRowHolder">
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn1" checked={snareStep[0]} onChange={onSnareChange} data-step="0" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn2" checked={snareStep[1]} onChange={onSnareChange} data-step="1" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn3" checked={snareStep[2]} onChange={onSnareChange} data-step="2" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn4" checked={snareStep[3]} onChange={onSnareChange} data-step="3" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn4" checked={snareStep[4]} onChange={onSnareChange} data-step="4" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn5" checked={snareStep[5]} onChange={onSnareChange} data-step="5" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn7" checked={snareStep[6]} onChange={onSnareChange} data-step="6" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn8" checked={snareStep[7]} onChange={onSnareChange} data-step="7" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn9" checked={snareStep[8]} onChange={onSnareChange} data-step="8" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn10" checked={snareStep[9]} onChange={onSnareChange} data-step="9" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn11" checked={snareStep[10]} onChange={onSnareChange} data-step="10" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn12" checked={snareStep[11]} onChange={onSnareChange} data-step="11" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn13" checked={snareStep[12]} onChange={onSnareChange} data-step="12" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn14" checked={snareStep[13]} onChange={onSnareChange} data-step="13" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn15" checked={snareStep[14]} onChange={onSnareChange} data-step="14" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn16" checked={snareStep[15]} onChange={onSnareChange} data-step="15" />
                        </div>
                    </div>

                    <div className="rowHolder b1kkRowHolder">
                    <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk1" checked={kickStep[0]} onChange={onKickChange} data-step="0" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk2" checked={kickStep[1]} onChange={onKickChange} data-step="1" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk3" checked={kickStep[2]} onChange={onKickChange} data-step="2" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk4" checked={kickStep[3]} onChange={onKickChange} data-step="3" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk4" checked={kickStep[4]} onChange={onKickChange} data-step="4" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk5" checked={kickStep[5]} onChange={onKickChange} data-step="5" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk7" checked={kickStep[6]} onChange={onKickChange} data-step="6" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk8" checked={kickStep[7]} onChange={onKickChange} data-step="7" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk9" checked={kickStep[8]} onChange={onKickChange} data-step="8" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk10" checked={kickStep[9]} onChange={onKickChange} data-step="9" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk11" checked={kickStep[10]} onChange={onKickChange} data-step="10" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk12" checked={kickStep[11]} onChange={onKickChange} data-step="11" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk13" checked={kickStep[12]} onChange={onKickChange} data-step="12" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk14" checked={kickStep[13]} onChange={onKickChange} data-step="13" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk15" checked={kickStep[14]} onChange={onKickChange} data-step="14" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk16" checked={kickStep[15]} onChange={onKickChange} data-step="15" />
                        </div>
                    </div>
                </div>

                <div className="bar2Holder">
                    <div className="rowHolder b2hhRowHolder">
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh1"
                                checked={hihatsStep[16]}
                                onChange={onHiHatChange}
                                data-step="16"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh2"
                                checked={hihatsStep[17]}
                                onChange={onHiHatChange}
                                data-step="17"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh3"
                                checked={hihatsStep[18]}
                                onChange={onHiHatChange}
                                data-step="18"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh4"
                                checked={hihatsStep[19]}
                                onChange={onHiHatChange}
                                data-step="19"
                            />
                            {hihatsStep[19] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh20Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="19"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[19] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh20Roll"
                                        onChange={onHiHatChange}
                                        data-step="19"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh5"
                                checked={hihatsStep[20]}
                                onChange={onHiHatChange}
                                data-step="20"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh6"
                                checked={hihatsStep[21]}
                                onChange={onHiHatChange}
                                data-step="21"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh7"
                                checked={hihatsStep[22]}
                                onChange={onHiHatChange}
                                data-step="22"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh8"
                                checked={hihatsStep[23]}
                                onChange={onHiHatChange}
                                data-step="23"
                            />
                            {hihatsStep[23] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh24Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="23"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[23] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh24Roll"
                                        onChange={onHiHatChange}
                                        data-step="23"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh9"
                                checked={hihatsStep[24]}
                                onChange={onHiHatChange}
                                data-step="24"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh10"
                                checked={hihatsStep[25]}
                                onChange={onHiHatChange}
                                data-step="25"
                            />
                            {hihatsStep[25] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh26Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="25"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[25] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh26Roll"
                                        onChange={onHiHatChange}
                                        data-step="25"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh11"
                                checked={hihatsStep[26]}
                                onChange={onHiHatChange}
                                data-step="26"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh12"
                                checked={hihatsStep[27]}
                                onChange={onHiHatChange}
                                data-step="27"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh13"
                                checked={hihatsStep[28]}
                                onChange={onHiHatChange}
                                data-step="28"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh14"
                                checked={hihatsStep[29]}
                                onChange={onHiHatChange}
                                data-step="29"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh15"
                                checked={hihatsStep[30]}
                                onChange={onHiHatChange}
                                data-step="30"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh16"
                                checked={hihatsStep[31]}
                                onChange={onHiHatChange}
                                data-step="31"
                            />
                            {hihatsStep[31] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh32Roll"
                                        checked="checked"
                                        onChange={onHiHatChange}
                                        data-step="31"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {hihatsStep[31] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh32Roll"
                                        onChange={onHiHatChange}
                                        data-step="31"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                    </div>

                    <div className="rowHolder b2snRowHolder">
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn17" checked={snareStep[16]} onChange={onSnareChange} data-step="16" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn18" checked={snareStep[17]} onChange={onSnareChange} data-step="17" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn19" checked={snareStep[18]} onChange={onSnareChange} data-step="18" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1S20" checked={snareStep[19]} onChange={onSnareChange} data-step="19" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn21" checked={snareStep[20]} onChange={onSnareChange} data-step="20" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn22" checked={snareStep[21]} onChange={onSnareChange} data-step="21" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn23" checked={snareStep[22]} onChange={onSnareChange} data-step="22" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn24" checked={snareStep[23]} onChange={onSnareChange} data-step="23" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn25" checked={snareStep[24]} onChange={onSnareChange} data-step="24" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn26" checked={snareStep[25]} onChange={onSnareChange} data-step="25" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn27" checked={snareStep[26]} onChange={onSnareChange} data-step="26" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn28" checked={snareStep[27]} onChange={onSnareChange} data-step="27" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn29" checked={snareStep[28]} onChange={onSnareChange} data-step="28" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn30" checked={snareStep[29]} onChange={onSnareChange} data-step="29" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn31" checked={snareStep[30]} onChange={onSnareChange} data-step="30" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn32" checked={snareStep[31]} onChange={onSnareChange} data-step="31" />
                        </div>
                    </div>

                    <div className="rowHolder b2kkRowHolder">
                    <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk17" checked={kickStep[16]} onChange={onKickChange} data-step="16" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk18" checked={kickStep[17]} onChange={onKickChange} data-step="17" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk19" checked={kickStep[18]} onChange={onKickChange} data-step="18" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kkS20" checked={kickStep[19]} onChange={onKickChange} data-step="19" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk21" checked={kickStep[20]} onChange={onKickChange} data-step="20" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk22" checked={kickStep[21]} onChange={onKickChange} data-step="21" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk23" checked={kickStep[22]} onChange={onKickChange} data-step="22" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk24" checked={kickStep[23]} onChange={onKickChange} data-step="23" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk25" checked={kickStep[24]} onChange={onKickChange} data-step="24" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk26" checked={kickStep[25]} onChange={onKickChange} data-step="25" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk27" checked={kickStep[26]} onChange={onKickChange} data-step="26" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk28" checked={kickStep[27]} onChange={onKickChange} data-step="27" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk29" checked={kickStep[28]} onChange={onKickChange} data-step="28" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk30" checked={kickStep[29]} onChange={onKickChange} data-step="29" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk31" checked={kickStep[30]} onChange={onKickChange} data-step="30" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk32" checked={kickStep[31]} onChange={onKickChange} data-step="31" />
                        </div>
                    </div>
                </div>
            </div>
        );
}
  
  export default PatternContainerRightDrumsReact;

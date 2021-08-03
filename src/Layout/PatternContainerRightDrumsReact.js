import React, { Component } from "react";
import {connect} from "react-redux";
import { partsActionsCreator } from "../Actions";

class PatternContainerRightDrumsReact extends Component {
  
    onHiHatChange = (e) => {
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
        this.props.dispatch(partsActionsCreator(index,value, "hihats"));
      };

    onSnareChange = (e) => {
        let value = e.target.checked;
        let index = e.target.getAttribute("data-step");
        this.props.dispatch(partsActionsCreator(index,value, "snare"));
        }

    onKickChange = (e) => {
        let value = e.target.checked;
        let index = e.target.getAttribute("data-step");
        this.props.dispatch(partsActionsCreator(index,value, "kick"));
        }

    componentDidMount() {
      }
    
    componentDidUpdate() {
      }

    render() {
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
                                checked={this.props.hihats[0]}
                                onChange={this.onHiHatChange}
                                data-step="0"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh2"
                                checked={this.props.hihats[1]}
                                onChange={this.onHiHatChange}
                                data-step="1"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh3"
                                checked={this.props.hihats[2]}
                                onChange={this.onHiHatChange}
                                data-step="2"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh4"
                                checked={this.props.hihats[3]}
                                onChange={this.onHiHatChange}
                                data-step="3"
                            />
                            {this.props.hihats[3] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh4Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="3"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[3] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh4Roll"
                                        onChange={this.onHiHatChange}
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
                                checked={this.props.hihats[4]}
                                onChange={this.onHiHatChange}
                                data-step="4"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh6"
                                checked={this.props.hihats[5]}
                                onChange={this.onHiHatChange}
                                data-step="5"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh7"
                                checked={this.props.hihats[6]}
                                onChange={this.onHiHatChange}
                                data-step="6"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh8"
                                checked={this.props.hihats[7]}
                                onChange={this.onHiHatChange}
                                data-step="7"
                            />
                            {this.props.hihats[7] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh8Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="7"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[7] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh8Roll"
                                        onChange={this.onHiHatChange}
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
                                checked={this.props.hihats[8]}
                                onChange={this.onHiHatChange}
                                data-step="8"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh10"
                                checked={this.props.hihats[9]}
                                onChange={this.onHiHatChange}
                                data-step="9"
                            />
                            {this.props.hihats[9] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh10Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="9"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[9] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh10Roll"
                                        onChange={this.onHiHatChange}
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
                                checked={this.props.hihats[10]}
                                onChange={this.onHiHatChange}
                                data-step="10"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh12"
                                checked={this.props.hihats[11]}
                                onChange={this.onHiHatChange}
                                data-step="11"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh13"
                                checked={this.props.hihats[12]}
                                onChange={this.onHiHatChange}
                                data-step="12"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh14"
                                checked={this.props.hihats[13]}
                                onChange={this.onHiHatChange}
                                data-step="13"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh15"
                                checked={this.props.hihats[14]}
                                onChange={this.onHiHatChange}
                                data-step="14"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh16"
                                checked={this.props.hihats[15]}
                                onChange={this.onHiHatChange}
                                data-step="15"
                            />
                            {this.props.hihats[15] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh16Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="15"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[15] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh16Roll"
                                        onChange={this.onHiHatChange}
                                        data-step="15"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <div className="rowHolder b1snRowHolder">
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn1" checked={this.props.snare[0]} onChange={this.onSnareChange} data-step="0" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn2" checked={this.props.snare[1]} onChange={this.onSnareChange} data-step="1" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn3" checked={this.props.snare[2]} onChange={this.onSnareChange} data-step="2" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn4" checked={this.props.snare[3]} onChange={this.onSnareChange} data-step="3" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn4" checked={this.props.snare[4]} onChange={this.onSnareChange} data-step="4" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn5" checked={this.props.snare[5]} onChange={this.onSnareChange} data-step="5" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn7" checked={this.props.snare[6]} onChange={this.onSnareChange} data-step="6" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn8" checked={this.props.snare[7]} onChange={this.onSnareChange} data-step="7" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn9" checked={this.props.snare[8]} onChange={this.onSnareChange} data-step="8" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn10" checked={this.props.snare[9]} onChange={this.onSnareChange} data-step="9" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn11" checked={this.props.snare[10]} onChange={this.onSnareChange} data-step="10" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn12" checked={this.props.snare[11]} onChange={this.onSnareChange} data-step="11" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn13" checked={this.props.snare[12]} onChange={this.onSnareChange} data-step="12" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn14" checked={this.props.snare[13]} onChange={this.onSnareChange} data-step="13" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn15" checked={this.props.snare[14]} onChange={this.onSnareChange} data-step="14" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn16" checked={this.props.snare[15]} onChange={this.onSnareChange} data-step="15" />
                        </div>
                    </div>

                    <div className="rowHolder b1kkRowHolder">
                    <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk1" checked={this.props.kick[0]} onChange={this.onKickChange} data-step="0" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk2" checked={this.props.kick[1]} onChange={this.onKickChange} data-step="1" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk3" checked={this.props.kick[2]} onChange={this.onKickChange} data-step="2" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk4" checked={this.props.kick[3]} onChange={this.onKickChange} data-step="3" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk4" checked={this.props.kick[4]} onChange={this.onKickChange} data-step="4" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk5" checked={this.props.kick[5]} onChange={this.onKickChange} data-step="5" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk7" checked={this.props.kick[6]} onChange={this.onKickChange} data-step="6" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk8" checked={this.props.kick[7]} onChange={this.onKickChange} data-step="7" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk9" checked={this.props.kick[8]} onChange={this.onKickChange} data-step="8" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk10" checked={this.props.kick[9]} onChange={this.onKickChange} data-step="9" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk11" checked={this.props.kick[10]} onChange={this.onKickChange} data-step="10" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk12" checked={this.props.kick[11]} onChange={this.onKickChange} data-step="11" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk13" checked={this.props.kick[12]} onChange={this.onKickChange} data-step="12" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk14" checked={this.props.kick[13]} onChange={this.onKickChange} data-step="13" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk15" checked={this.props.kick[14]} onChange={this.onKickChange} data-step="14" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk16" checked={this.props.kick[15]} onChange={this.onKickChange} data-step="15" />
                        </div>
                    </div>
                </div>

                <div className="bar2Holder">
                    <div className="rowHolder b2hhRowHolder">
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh1"
                                checked={this.props.hihats[16]}
                                onChange={this.onHiHatChange}
                                data-step="16"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh2"
                                checked={this.props.hihats[17]}
                                onChange={this.onHiHatChange}
                                data-step="17"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh3"
                                checked={this.props.hihats[18]}
                                onChange={this.onHiHatChange}
                                data-step="18"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh4"
                                checked={this.props.hihats[19]}
                                onChange={this.onHiHatChange}
                                data-step="19"
                            />
                            {this.props.hihats[19] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh20Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="19"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[19] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh20Roll"
                                        onChange={this.onHiHatChange}
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
                                checked={this.props.hihats[20]}
                                onChange={this.onHiHatChange}
                                data-step="20"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh6"
                                checked={this.props.hihats[21]}
                                onChange={this.onHiHatChange}
                                data-step="21"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh7"
                                checked={this.props.hihats[22]}
                                onChange={this.onHiHatChange}
                                data-step="22"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh8"
                                checked={this.props.hihats[23]}
                                onChange={this.onHiHatChange}
                                data-step="23"
                            />
                            {this.props.hihats[23] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh24Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="23"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[23] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh24Roll"
                                        onChange={this.onHiHatChange}
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
                                checked={this.props.hihats[24]}
                                onChange={this.onHiHatChange}
                                data-step="24"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh10"
                                checked={this.props.hihats[25]}
                                onChange={this.onHiHatChange}
                                data-step="25"
                            />
                            {this.props.hihats[25] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh26Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="25"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[25] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh26Roll"
                                        onChange={this.onHiHatChange}
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
                                checked={this.props.hihats[26]}
                                onChange={this.onHiHatChange}
                                data-step="26"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh12"
                                checked={this.props.hihats[27]}
                                onChange={this.onHiHatChange}
                                data-step="27"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh13"
                                checked={this.props.hihats[28]}
                                onChange={this.onHiHatChange}
                                data-step="28"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh14"
                                checked={this.props.hihats[29]}
                                onChange={this.onHiHatChange}
                                data-step="29"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh15"
                                checked={this.props.hihats[30]}
                                onChange={this.onHiHatChange}
                                data-step="30"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh16"
                                checked={this.props.hihats[31]}
                                onChange={this.onHiHatChange}
                                data-step="31"
                            />
                            {this.props.hihats[31] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh32Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        data-step="31"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihats[31] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh32Roll"
                                        onChange={this.onHiHatChange}
                                        data-step="31"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                    </div>

                    <div className="rowHolder b2snRowHolder">
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn17" checked={this.props.snare[16]} onChange={this.onSnareChange} data-step="16" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn18" checked={this.props.snare[17]} onChange={this.onSnareChange} data-step="17" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn19" checked={this.props.snare[18]} onChange={this.onSnareChange} data-step="18" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1S20" checked={this.props.snare[19]} onChange={this.onSnareChange} data-step="19" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn21" checked={this.props.snare[20]} onChange={this.onSnareChange} data-step="20" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn22" checked={this.props.snare[21]} onChange={this.onSnareChange} data-step="21" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn23" checked={this.props.snare[22]} onChange={this.onSnareChange} data-step="22" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn24" checked={this.props.snare[23]} onChange={this.onSnareChange} data-step="23" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn25" checked={this.props.snare[24]} onChange={this.onSnareChange} data-step="24" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn26" checked={this.props.snare[25]} onChange={this.onSnareChange} data-step="25" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn27" checked={this.props.snare[26]} onChange={this.onSnareChange} data-step="26" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn28" checked={this.props.snare[27]} onChange={this.onSnareChange} data-step="27" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn29" checked={this.props.snare[28]} onChange={this.onSnareChange} data-step="28" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn30" checked={this.props.snare[29]} onChange={this.onSnareChange} data-step="29" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn31" checked={this.props.snare[30]} onChange={this.onSnareChange} data-step="30" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn32" checked={this.props.snare[31]} onChange={this.onSnareChange} data-step="31" />
                        </div>
                    </div>

                    <div className="rowHolder b2kkRowHolder">
                    <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk17" checked={this.props.kick[16]} onChange={this.onKickChange} data-step="16" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk18" checked={this.props.kick[17]} onChange={this.onKickChange} data-step="17" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk19" checked={this.props.kick[18]} onChange={this.onKickChange} data-step="18" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kkS20" checked={this.props.kick[19]} onChange={this.onKickChange} data-step="19" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk21" checked={this.props.kick[20]} onChange={this.onKickChange} data-step="20" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk22" checked={this.props.kick[21]} onChange={this.onKickChange} data-step="21" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk23" checked={this.props.kick[22]} onChange={this.onKickChange} data-step="22" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk24" checked={this.props.kick[23]} onChange={this.onKickChange} data-step="23" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk25" checked={this.props.kick[24]} onChange={this.onKickChange} data-step="24" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk26" checked={this.props.kick[25]} onChange={this.onKickChange} data-step="25" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk27" checked={this.props.kick[26]} onChange={this.onKickChange} data-step="26" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk28" checked={this.props.kick[27]} onChange={this.onKickChange} data-step="27" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk29" checked={this.props.kick[28]} onChange={this.onKickChange} data-step="28" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk30" checked={this.props.kick[29]} onChange={this.onKickChange} data-step="29" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk31" checked={this.props.kick[30]} onChange={this.onKickChange} data-step="30" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk32" checked={this.props.kick[31]} onChange={this.onKickChange} data-step="31" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hihats: state.hihats,
    snare: state.snare,
    kick: state.kick,
    bass : state.bass,
    riff : state.riff
  });
  
  export default connect(mapStateToProps)(PatternContainerRightDrumsReact);

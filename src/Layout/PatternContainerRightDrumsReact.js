import React, { Component } from "react";

class PatternContainerRightDrumsReact extends Component {
    onHiHatChange = (e) => {
        this.props.handleHH(e);
    };

    onSnareChange = (e) => {
        this.props.handleSn(e);
    };

    onKickChange = (e) => {
        this.props.handleKk(e);
    };

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
                                checked={this.props.hihatsData[0]}
                                onChange={this.onHiHatChange}
                                step="0"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh2"
                                checked={this.props.hihatsData[1]}
                                onChange={this.onHiHatChange}
                                step="1"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh3"
                                checked={this.props.hihatsData[2]}
                                onChange={this.onHiHatChange}
                                step="2"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh4"
                                checked={this.props.hihatsData[3]}
                                onChange={this.onHiHatChange}
                                step="3"
                            />
                            {this.props.hihatsData[3] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh4Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="3"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[3] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh4Roll"
                                        onChange={this.onHiHatChange}
                                        step="3"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>

                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh5"
                                checked={this.props.hihatsData[4]}
                                onChange={this.onHiHatChange}
                                step="4"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh6"
                                checked={this.props.hihatsData[5]}
                                onChange={this.onHiHatChange}
                                step="5"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh7"
                                checked={this.props.hihatsData[6]}
                                onChange={this.onHiHatChange}
                                step="6"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh8"
                                checked={this.props.hihatsData[7]}
                                onChange={this.onHiHatChange}
                                step="7"
                            />
                            {this.props.hihatsData[7] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh8Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="7"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[7] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh8Roll"
                                        onChange={this.onHiHatChange}
                                        step="7"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh9"
                                checked={this.props.hihatsData[8]}
                                onChange={this.onHiHatChange}
                                step="8"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh10"
                                checked={this.props.hihatsData[9]}
                                onChange={this.onHiHatChange}
                                step="9"
                            />
                            {this.props.hihatsData[9] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh10Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="9"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[9] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh10Roll"
                                        onChange={this.onHiHatChange}
                                        step="9"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh11"
                                checked={this.props.hihatsData[10]}
                                onChange={this.onHiHatChange}
                                step="10"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b1hh12"
                                checked={this.props.hihatsData[11]}
                                onChange={this.onHiHatChange}
                                step="11"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh13"
                                checked={this.props.hihatsData[12]}
                                onChange={this.onHiHatChange}
                                step="12"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh14"
                                checked={this.props.hihatsData[13]}
                                onChange={this.onHiHatChange}
                                step="13"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh15"
                                checked={this.props.hihatsData[14]}
                                onChange={this.onHiHatChange}
                                step="14"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b1hh16"
                                checked={this.props.hihatsData[15]}
                                onChange={this.onHiHatChange}
                                step="15"
                            />
                            {this.props.hihatsData[15] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh16Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="15"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[15] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh16Roll"
                                        onChange={this.onHiHatChange}
                                        step="15"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <div className="rowHolder b1snRowHolder">
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn1" checked={this.props.snareData[0]} onChange={this.onSnareChange} step="0" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn2" checked={this.props.snareData[1]} onChange={this.onSnareChange} step="1" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn3" checked={this.props.snareData[2]} onChange={this.onSnareChange} step="2" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn4" checked={this.props.snareData[3]} onChange={this.onSnareChange} step="3" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn4" checked={this.props.snareData[4]} onChange={this.onSnareChange} step="4" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn5" checked={this.props.snareData[5]} onChange={this.onSnareChange} step="5" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn7" checked={this.props.snareData[6]} onChange={this.onSnareChange} step="6" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn8" checked={this.props.snareData[7]} onChange={this.onSnareChange} step="7" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn9" checked={this.props.snareData[8]} onChange={this.onSnareChange} step="8" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn10" checked={this.props.snareData[9]} onChange={this.onSnareChange} step="9" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn11" checked={this.props.snareData[10]} onChange={this.onSnareChange} step="10" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn12" checked={this.props.snareData[11]} onChange={this.onSnareChange} step="11" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn13" checked={this.props.snareData[12]} onChange={this.onSnareChange} step="12" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn14" checked={this.props.snareData[13]} onChange={this.onSnareChange} step="13" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn15" checked={this.props.snareData[14]} onChange={this.onSnareChange} step="14" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn16" checked={this.props.snareData[15]} onChange={this.onSnareChange} step="15" />
                        </div>
                    </div>

                    <div className="rowHolder b1kkRowHolder">
                    <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk1" checked={this.props.kickData[0]} onChange={this.onKickChange} step="0" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk2" checked={this.props.kickData[1]} onChange={this.onKickChange} step="1" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk3" checked={this.props.kickData[2]} onChange={this.onKickChange} step="2" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk4" checked={this.props.kickData[3]} onChange={this.onKickChange} step="3" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk4" checked={this.props.kickData[4]} onChange={this.onKickChange} step="4" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk5" checked={this.props.kickData[5]} onChange={this.onKickChange} step="5" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk7" checked={this.props.kickData[6]} onChange={this.onKickChange} step="6" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk8" checked={this.props.kickData[7]} onChange={this.onKickChange} step="7" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk9" checked={this.props.kickData[8]} onChange={this.onKickChange} step="8" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk10" checked={this.props.kickData[9]} onChange={this.onKickChange} step="9" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk11" checked={this.props.kickData[10]} onChange={this.onKickChange} step="10" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b1kk12" checked={this.props.kickData[11]} onChange={this.onKickChange} step="11" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk13" checked={this.props.kickData[12]} onChange={this.onKickChange} step="12" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk14" checked={this.props.kickData[13]} onChange={this.onKickChange} step="13" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk15" checked={this.props.kickData[14]} onChange={this.onKickChange} step="14" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b1kk16" checked={this.props.kickData[15]} onChange={this.onKickChange} step="15" />
                        </div>
                    </div>
                </div>

                <div className="bar2Holder">
                    <div className="rowHolder b2hhRowHolder">
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh1"
                                checked={this.props.hihatsData[16]}
                                onChange={this.onHiHatChange}
                                step="16"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh2"
                                checked={this.props.hihatsData[17]}
                                onChange={this.onHiHatChange}
                                step="17"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh3"
                                checked={this.props.hihatsData[18]}
                                onChange={this.onHiHatChange}
                                step="18"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh4"
                                checked={this.props.hihatsData[19]}
                                onChange={this.onHiHatChange}
                                step="19"
                            />
                            {this.props.hihatsData[19] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh20Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="19"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[19] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh20Roll"
                                        onChange={this.onHiHatChange}
                                        step="19"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh5"
                                checked={this.props.hihatsData[20]}
                                onChange={this.onHiHatChange}
                                step="20"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh6"
                                checked={this.props.hihatsData[21]}
                                onChange={this.onHiHatChange}
                                step="21"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh7"
                                checked={this.props.hihatsData[22]}
                                onChange={this.onHiHatChange}
                                step="22"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh8"
                                checked={this.props.hihatsData[23]}
                                onChange={this.onHiHatChange}
                                step="23"
                            />
                            {this.props.hihatsData[23] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh24Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="23"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[23] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh24Roll"
                                        onChange={this.onHiHatChange}
                                        step="23"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh9"
                                checked={this.props.hihatsData[24]}
                                onChange={this.onHiHatChange}
                                step="24"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh10"
                                checked={this.props.hihatsData[25]}
                                onChange={this.onHiHatChange}
                                step="25"
                            />
                            {this.props.hihatsData[25] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh26Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="25"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[25] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh26Roll"
                                        onChange={this.onHiHatChange}
                                        step="25"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh11"
                                checked={this.props.hihatsData[26]}
                                onChange={this.onHiHatChange}
                                step="26"
                            />
                        </div>
                        <div className="stepBtn hhStep">
                            <input
                                type="checkbox"
                                id="b2hh12"
                                checked={this.props.hihatsData[27]}
                                onChange={this.onHiHatChange}
                                step="27"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh13"
                                checked={this.props.hihatsData[28]}
                                onChange={this.onHiHatChange}
                                step="28"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh14"
                                checked={this.props.hihatsData[29]}
                                onChange={this.onHiHatChange}
                                step="29"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh15"
                                checked={this.props.hihatsData[30]}
                                onChange={this.onHiHatChange}
                                step="30"
                            />
                        </div>
                        <div className="stepBtn hhStep even">
                            <input
                                type="checkbox"
                                id="b2hh16"
                                checked={this.props.hihatsData[31]}
                                onChange={this.onHiHatChange}
                                step="31"
                            />
                            {this.props.hihatsData[31] === "R" ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh32Roll"
                                        checked="checked"
                                        onChange={this.onHiHatChange}
                                        step="31"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                            {this.props.hihatsData[31] === true ? (
                                <p>
                                    <input
                                        type="checkbox"
                                        id="b1hh32Roll"
                                        onChange={this.onHiHatChange}
                                        step="31"
                                        data-roll="yes"
                                    />
                                </p>
                            ) : null}
                        </div>
                    </div>

                    <div className="rowHolder b2snRowHolder">
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn17" checked={this.props.snareData[16]} onChange={this.onSnareChange} step="16" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn18" checked={this.props.snareData[17]} onChange={this.onSnareChange} step="17" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn19" checked={this.props.snareData[18]} onChange={this.onSnareChange} step="18" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1S20" checked={this.props.snareData[19]} onChange={this.onSnareChange} step="19" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn21" checked={this.props.snareData[20]} onChange={this.onSnareChange} step="20" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn22" checked={this.props.snareData[21]} onChange={this.onSnareChange} step="21" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn23" checked={this.props.snareData[22]} onChange={this.onSnareChange} step="22" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn24" checked={this.props.snareData[23]} onChange={this.onSnareChange} step="23" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn25" checked={this.props.snareData[24]} onChange={this.onSnareChange} step="24" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn26" checked={this.props.snareData[25]} onChange={this.onSnareChange} step="25" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn27" checked={this.props.snareData[26]} onChange={this.onSnareChange} step="26" />
                        </div>
                        <div className="stepBtn snStep">
                        <input type="checkbox" id="b1Sn28" checked={this.props.snareData[27]} onChange={this.onSnareChange} step="27" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn29" checked={this.props.snareData[28]} onChange={this.onSnareChange} step="28" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn30" checked={this.props.snareData[29]} onChange={this.onSnareChange} step="29" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn31" checked={this.props.snareData[30]} onChange={this.onSnareChange} step="30" />
                        </div>
                        <div className="stepBtn snStep even">
                        <input type="checkbox" id="b1Sn32" checked={this.props.snareData[31]} onChange={this.onSnareChange} step="31" />
                        </div>
                    </div>

                    <div className="rowHolder b2kkRowHolder">
                    <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk17" checked={this.props.kickData[16]} onChange={this.onKickChange} step="16" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk18" checked={this.props.kickData[17]} onChange={this.onKickChange} step="17" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk19" checked={this.props.kickData[18]} onChange={this.onKickChange} step="18" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kkS20" checked={this.props.kickData[19]} onChange={this.onKickChange} step="19" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk21" checked={this.props.kickData[20]} onChange={this.onKickChange} step="20" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk22" checked={this.props.kickData[21]} onChange={this.onKickChange} step="21" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk23" checked={this.props.kickData[22]} onChange={this.onKickChange} step="22" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk24" checked={this.props.kickData[23]} onChange={this.onKickChange} step="23" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk25" checked={this.props.kickData[24]} onChange={this.onKickChange} step="24" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk26" checked={this.props.kickData[25]} onChange={this.onKickChange} step="25" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk27" checked={this.props.kickData[26]} onChange={this.onKickChange} step="26" />
                        </div>
                        <div className="stepBtn kkStep">
                        <input type="checkbox" id="b2kk28" checked={this.props.kickData[27]} onChange={this.onKickChange} step="27" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk29" checked={this.props.kickData[28]} onChange={this.onKickChange} step="28" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk30" checked={this.props.kickData[29]} onChange={this.onKickChange} step="29" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk31" checked={this.props.kickData[30]} onChange={this.onKickChange} step="30" />
                        </div>
                        <div className="stepBtn kkStep even">
                        <input type="checkbox" id="b2kk32" checked={this.props.kickData[31]} onChange={this.onKickChange} step="31" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatternContainerRightDrumsReact;

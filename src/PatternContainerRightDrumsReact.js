import React, { Component } from "react";

class PatternContainerRightDrumsReact extends Component {
    onHiHatChange = (e) => {
        //console.log("Hi hat just changed");
        this.props.handleHH(e);
    };

    componentDidMount() {
        console.log(
            this.props.hihatsData,
            "hihatsData mounted Pattern Container Drums Right"
        );
    }

    componentDidUpdate() {
        console.log(
            this.props.hihatsData,
            "hihatsData updated - Pattern Container Drums Right"
        );
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
                                        checked="true"
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
                                        checked="true"
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
                                        checked="true"
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
                                        checked="true"
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
                            <input type="checkbox" id="b1sn1" value="1" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn2" value="2" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn3" value="3" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn4" value="4" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn5" value="5" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn6" value="6" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn7" value="7" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn8" value="8" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn9" value="9" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn10" value="10" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn11" value="11" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b1sn12" value="12" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn13" value="13" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn14" value="14" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn15" value="15" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b1sn16" value="16" />
                        </div>
                    </div>

                    <div className="rowHolder b1kkRowHolder">
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk1" value="1" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk2" value="2" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk3" value="3" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk4" value="4" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk5" value="5" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk6" value="6" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk7" value="7" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk8" value="8" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk9" value="9" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk10" value="10" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk11" value="11" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b1kk12" value="12" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk13" value="13" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk14" value="14" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk15" value="15" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b1kk16" value="16" />
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
                                        checked="true"
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
                                        checked="true"
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
                                        checked="true"
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
                                        checked="true"
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
                            <input type="checkbox" id="b2sn1" value="1" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn2" value="2" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn3" value="3" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn4" value="4" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn5" value="5" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn6" value="6" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn7" value="7" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn8" value="8" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn9" value="9" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn10" value="10" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn11" value="11" />
                        </div>
                        <div className="stepBtn snStep">
                            <input type="checkbox" id="b2sn12" value="12" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn13" value="13" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn14" value="14" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn15" value="15" />
                        </div>
                        <div className="stepBtn snStep even">
                            <input type="checkbox" id="b2sn16" value="16" />
                        </div>
                    </div>
                    <div className="rowHolder b2kkRowHolder">
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk1" value="1" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk2" value="2" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk3" value="3" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk4" value="4" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk5" value="5" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk6" value="6" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk7" value="7" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk8" value="8" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk9" value="9" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk10" value="10" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk11" value="11" />
                        </div>
                        <div className="stepBtn kkStep">
                            <input type="checkbox" id="b2kk12" value="12" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk13" value="13" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk14" value="14" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk15" value="15" />
                        </div>
                        <div className="stepBtn kkStep even">
                            <input type="checkbox" id="b2kk16" value="16" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatternContainerRightDrumsReact;

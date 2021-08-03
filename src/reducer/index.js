import {combineReducers} from "redux";

let appData = require("../DataFiles/PresetData"); 

    const hihatsReducer = (state = appData.hihats, action) => {
        if(action.type === 'hihats') {
            let tempState = [...state];
            tempState[action.payload.index] = action.payload.value;
            return tempState;
        } else {
        return state;
        }
        }

    const snareReducer = (state = appData.snare, action) => {
        if(action.type === 'snare') {
            let tempState = [...state];
            tempState[action.payload.index] = action.payload.value;
            return tempState;
        } else {
        return state;
        }
        }

    const kickReducer = (state = appData.kick, action) => {
        if(action.type === 'kick') {
            let tempState = [...state];
            tempState[action.payload.index] = action.payload.value;
            return tempState;
        } else {
        return state;
        }
        }

    const riffReducer = (state = appData.riffNoteArray, action) => {
        if(action.type === 'riff') {
            let tempState = [...state];
            tempState[action.payload.index] = action.payload.value;
            return tempState;
        } else {
        return state;
        }
        }

    const bassReducer = (state = appData.bassNoteArray, action) => {
        if(action.type === 'bass') {
            let tempState = [...state];
            tempState[action.payload.index] = action.payload.value;
            return tempState;
        } else {
        return state;
        }
        }

    const allReducers = combineReducers({
        hihats: hihatsReducer,
        snare : snareReducer,
        kick : kickReducer,
        bass : bassReducer,
        riff : riffReducer
        });

    export default allReducers;
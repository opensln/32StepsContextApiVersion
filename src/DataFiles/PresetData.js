let appDataStore = {
    hihats :
    [true,true,true,"R",
    true,true,true,"R",
    true,"R",true,true,
    true,true,true,"R",
    true, true, true, true,
    true, true, true, "R",
    true, "R", true, true,
    true, true, true, "R"],

    snare :
    [false,false,false,false,
    true,false,false,true,
    false,true,false,false,
    true,false,false,false,
    false,false,false,false,
    true,false,false,true,
    false,true,false,false,
    true,false,false,false],
    kick :
    [true,false,false,false,
    false,false,false,false,
    false,false,true,false,
    false,false,false,false,
    true,false,false,false,
    false,false,false,false,
    false,true,true,false,
    false,false,false,false,],
    bassNoteArray :[
    "Mi_","--","--","Fa_","--","--","Mi_","--",
    "--","Mi_","Mi_","--","--","Mi","--","Mi_",
    "Mi_","--","--","Fa_","--","--","Mi_","--",
    "--","Mi_","Mi_","--","Mi","Mi_","Mi","--",
    ],
    riffNoteArray :[
    "Mi","--","--","Re","Ti_","--","Ti_","--",
    "Mi","Mi","Re","--","Mi","--","Ti_","--",
    "Mi","So","Mi","--","Re","--","Ti_","--",
    "La_","Ti_","La_","--","So_","--","Mi_","--",
    ],
    bassNotesGui: ["--","Re_","Mi_","Fa_","So_","La_","Ti_","Do_","Re","Mi","Fa","So","La"],
    riffNotesGui: ["--","Re_","Mi_","Fa_","So_","La_","Ti_","Do_","Re","Mi","Fa","So","La"]
    };

module.exports = appDataStore;

let blankSlate = function() {

let tempArray;

let hihatsData = [];
let snareData = [];
let kickData = [];
let bassData = [];
let riffData = [];

//hihats   
for(let i = 0; i < 32; i++) {
    hihatsData.push(false);
}

//snare   
for(let i = 0; i < 32; i++) {
    snareData.push(false);
}

//kick  
for(let i = 0; i < 32; i++) {
    kickData.push(false);
}

//bass   
for(let i = 0; i < 32; i++) {
    bassData.push(false);
}

//riff   
for(let i = 0; i < 32; i++) {
    riffData.push(false);
}

tempArray = {
    hihatsDataObj : hihatsData,
    snareDataObj : snareData,
    kickDataObj : kickData,
    bassDataObj : bassData,
    riffDataObj : riffData
}

return tempArray;

}


module.exports.blankSlate = blankSlate;
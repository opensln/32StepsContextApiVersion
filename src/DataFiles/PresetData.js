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
    "Ti_","--","--","Fa_","--","--","Mi_","--",
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

let blankData =[];

for(let i = 0; i < 32; i++) {
    blankData.push(false);
}
return blankData;
}

module.exports.blankSlate = blankSlate;
let viewBtnCollection = document.querySelectorAll(".viewBtn");
let viewPanelCollection = document.querySelectorAll(".viewPanel");
let stepBtnCollection = document.querySelectorAll(".stepBtn");
let hhCollection = document.querySelectorAll(".hhStep");
let snCollection = document.querySelectorAll(".snStep");
let kkCollection = document.querySelectorAll(".kkStep");
let hhArray = [];
let snArray = [];
let kkArray = [];
// Steps Arrays for Testing
hhArray = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  "R",
  true,
  "R",
  true,
  true,
  true,
  true,
  true,
  "R",
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
]; //Test Pattern
snArray = [
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
]; //Test Pattern
kkArray = [
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
]; //Test Pattern
// End Steps Test Arrays
let bassNoteArray = [];
let bassNoteFreq = 220;
let riffNoteArray = [];
let riffNoteFreq = 440;

//--Decalre buffers
let hhBuffer;
let snBuffer;
let kkBuffer;

//--init Tempo
let chosenTempo = 70;
let beatLength = 60 / chosenTempo;
let stepLength = beatLength / 4;

let numberOfLoops = document.getElementById("loopSelect").value;

let time;
let noteLength = 0.25; //the decay of the note NOT the stepLength itself

let currentView = "DRUMS";
let currentQuerySelector;

let playBtnTimeOut;

//--Set Tempo
document.getElementById("tempoSelect").onchange = function () {
  chosenTempo = document.getElementById("tempoSelect").value;
  beatLength = 60 / chosenTempo;
  stepLength = beatLength / 4;
};

//---requestsamples onload
let audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //each click re-instantiates the audioCtx
getSamples();
function getSamples() {
  var bufferLoader;

  function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }

  BufferLoader.prototype.loadBuffer = function (url, currentIndex) {
    // Load buffer asynchronously
    //console.log(url, index);
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    var loader = this;

    request.onload = function () {
      // Asynchronously decode the audio file data in request.response
      loader.context.decodeAudioData(
        request.response,
        function (decodedresponse) {
          if (!decodedresponse) {
            alert("error decoding file data: " + url);
            return;
          }
          loader.bufferList[currentIndex] = decodedresponse;
          if (++loader.loadCount == loader.urlList.length)
            loader.onload(loader.bufferList);
        },
        function (error) {
          console.error("decodeAudioData error", error);
        }
      );
    };

    request.onerror = function () {
      alert("BufferLoader: XHR error");
    };

    request.send();
  };

  BufferLoader.prototype.load = function () {
    for (var i = 0; i < this.urlList.length; ++i)
      this.loadBuffer(this.urlList[i], i);
  };

  bufferLoader = new BufferLoader(
    audioCtx,
    ["./sounds/bmpHiHat.wav", "./sounds/snare-cvw_2.wav", "./sounds/kick50-cvw.wav"],
    finishedLoading
  );
  bufferLoader.load();

  function finishedLoading(bufferList) {
    // Create sample sources
    var source1 = audioCtx.createBufferSource();
    var source2 = audioCtx.createBufferSource();
    var source3 = audioCtx.createBufferSource();
    hhBuffer = bufferList[0];
    snBuffer = bufferList[1];
    kkBuffer = bufferList[2];

    console.log("Samples loaded");
  }
} //-----------------------------------------------------------End Request Samples

// listen for steps change
stepBtnCollection.forEach((item) => {
  item.onchange = () => {
    hhArray = [];
    snArray = [];
    kkArray = [];

    //       console.log("triggerChange");
    hhCollection.forEach((item) => {
      if (
        item.firstElementChild.nextElementSibling != null &&
        item.firstElementChild.nextElementSibling.firstElementChild
          .checked == true
      ) {
        hhArray.push("R");
      } else {
        hhArray.push(item.firstElementChild.checked);
      }
    });

    // snares
    snCollection.forEach((item) => {
      snArray.push(item.firstElementChild.checked);
    });

    // kicks
    kkCollection.forEach((item) => {
      kkArray.push(item.firstElementChild.checked);
    });

    // console.log(hhArray);
    // console.log(snArray);
    // console.log(kkArray);
  };
});

document.getElementById("playSequence").onclick = function () {
  document.getElementById("playSequence").disabled = true;

  let audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //each click re-instantiates the audioCtx
  audioCtx.resume();
  //console.log("audioCtx", audioCtx.state);

  time = audioCtx.currentTime + 0.05; //this is zero each time
  noteLength = 0.25;

  let masterGain = audioCtx.createGain();

  //---------------------------Distortion--------------------

  let distortion = audioCtx.createWaveShaper();

  function makeDistortionCurve(amount) {
    var k = typeof amount === "number" ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
    for (; i < n_samples; ++i) {
      x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  distortion.curve = makeDistortionCurve(50);
  distortion.oversample = "4x";

  //---------------------------End Distortion-----------------

  //---------------------------Filter------------------------

  let biquadFilter = audioCtx.createBiquadFilter();
  biquadFilter.type = "lowpass";
  biquadFilter.frequency.value = 120;

  //--------------------------------------------------------

  //Sample Source
  function sampleSource(currentBuffer, currentGain) {
    let source = audioCtx.createBufferSource(); //Audio Buffer Source Node can only be played once

    source.buffer = currentBuffer;
    let envelope = audioCtx.createGain();

    envelope.gain.exponentialRampToValueAtTime(currentGain, time + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    source.connect(envelope);
    envelope.connect(masterGain);

    source.start(time);
    source.stop(time + 0.215);
  }

  //Sample Roll Source
  function sampleRollSource(currentBuffer, currentGain) {
    let source = audioCtx.createBufferSource(); //Audio Buffer Source Node can only be played once

    source.buffer = currentBuffer;
    let envelope = audioCtx.createGain();

    envelope.gain.value = currentGain;

    source.connect(envelope);
    envelope.connect(masterGain);

    source.start(time);
    source.stop(time + 0.2);

    let source2 = audioCtx.createBufferSource(); //Audio Buffer Source Node can only be played once

    source2.buffer = currentBuffer;
    let envelope2 = audioCtx.createGain();

    envelope2.gain.value = currentGain;

    source2.connect(envelope2);
    envelope2.connect(masterGain);

    source2.start(time + stepLength / 3);
    source2.stop(time + (stepLength / 3 + 0.2));
    //--------------------------

    let source3 = audioCtx.createBufferSource(); //Audio Buffer Source Node can only be played once

    source3.buffer = currentBuffer;
    let envelope3 = audioCtx.createGain();

    envelope3.gain.value = currentGain;

    source3.connect(envelope3);
    envelope3.connect(masterGain);

    source3.start(time + stepLength / 3 + stepLength / 3);
    source3.stop(time + (stepLength / 3 + stepLength / 3 + 0.2));
  }

  //--Sine Source
  function sineSource(currentFrequency, currentGain, decayTime, isBass) {
    //create Oscillator node
    let osc = audioCtx.createOscillator();

    let envelope = audioCtx.createGain();

    osc.frequency.value = currentFrequency;

    //envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(currentGain, time + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + decayTime);

    if (isBass) {
      osc.connect(envelope);
      envelope.connect(distortion);
      distortion.connect(biquadFilter)
      biquadFilter.connect(masterGain);
    } else {
      osc.connect(envelope);
      envelope.connect(masterGain);
    }

    osc.start(time);
    osc.stop(time + decayTime);
  }

  masterGain.gain.value = 1;
  masterGain.connect(audioCtx.destination);

  //--trigger loop starts here

  for (let j = 0; j < numberOfLoops; j++) {
    for (let i = 0; i <= 31; i++) {
      //---32 teps---

      //---Drum Triggers--

      if (hhArray[i] == true) {
        sampleSource(hhBuffer, 0.6);
      } else if (hhArray[i] == "R") {
        sampleRollSource(hhBuffer, 0.6);
      }

      if (snArray[i] == true) {
        sampleSource(snBuffer, 0.5);
      }

      if (kkArray[i] == true) {
        sampleSource(kkBuffer, 0.8);
      }

      //--Bass Note Solfege to Frequency Converter--

      switch (bassNoteArray[i]) {
        case "Re_":
          bassNoteFreq = 36.71;
          break;
        case "Mi_":
          bassNoteFreq = 41.2;
          break;
        case "Fa_":
          bassNoteFreq = 43.65;
          break;
        case "So_":
          bassNoteFreq = 49.0;
          break;
        case "La_":
          bassNoteFreq = 55.0;
          break;
        case "Ti_":
          bassNoteFreq = 61.74;
          break;
        case "Do_":
          bassNoteFreq = 65.41;
          break;
        case "Re":
          bassNoteFreq = 73.42;
          break;
        case "Mi":
          bassNoteFreq = 82.41;
          break;
        case "Fa":
          bassNoteFreq = 87.31;
          break;
        case "So":
          bassNoteFreq = 98.0;
          break;
        case "La":
          bassNoteFreq = 110.0;
          break;
        default:
          bassNoteFreq = 0;
          break;
      }

      //---Bass Note Triggers

      if (bassNoteArray[i] !== "--") {
        sineSource(bassNoteFreq, 0.8, 0.7, "bass");
      }

      //--Riff Note Solfege to Frequency Converter--

      switch (riffNoteArray[i]) {
        case "Re_":
          riffNoteFreq = 146.83;
          break;
        case "Mi_":
          riffNoteFreq = 164.81;
          break;
        case "Fa_":
          riffNoteFreq = 174.61;
          break;
        case "So_":
          riffNoteFreq = 196.0;
          break;
        case "La_":
          riffNoteFreq = 220;
          break;
        case "Ti_":
          riffNoteFreq = 246.94;
          break;
        case "Do_":
          riffNoteFreq = 261.63;
          break;
        case "Re":
          riffNoteFreq = 293.66;
          break;
        case "Mi":
          riffNoteFreq = 329.63;
          break;
        case "Fa":
          riffNoteFreq = 349.23;
          break;
        case "So":
          riffNoteFreq = 392.0;
          break;
        case "La":
          riffNoteFreq = 440.0;
          break;
        default:
          riffNoteFreq = 0;
          break;
      }

      //---Riff Note Triggers
      if (riffNoteArray[i] !== "--") {
        sineSource(riffNoteFreq, 0.2, 0.4);
      }

      //Set time for next beat
      time = time + stepLength;
    }
  } //--trigger loop ends here

  //--Stop Button
  document.getElementById("stopLoop").onclick = function () {
    if(audioCtx.state === "running"){
    audioCtx.close();
    //console.log("audioCtx", audioCtx.state);
    document.getElementById("playSequence").disabled = false;
    clearInterval(playBtnTimeOut);
  }
  };

  playBtnTimeOut = setTimeout(function () {
    document.getElementById(
      "playSequenceHolder"
    ).firstElementChild.disabled = false;
  }, stepLength * 32 * 1000 * numberOfLoops);
};

//-------------------------viewBtn Helper------------------------------

viewBtnCollection.forEach((item) => {
  item.onclick = () => {
    item.style.backgroundColor = "green";
    item.firstElementChild.nextElementSibling.innerHTML = "Active"; //double next element

    currentView = item.firstElementChild.innerHTML;
    currentQuerySelector = currentView + "panel";
    document.querySelector("." + currentQuerySelector).style.display =
      "block";

    viewBtnCollection.forEach((item) => {
      if (item.firstElementChild.innerHTML != currentView) {
        item.style.backgroundColor = "slategrey";
        item.firstElementChild.nextElementSibling.innerHTML = "..."; // Clear active text
      }
    });

    viewPanelCollection.forEach((item) => {
      //console.log(item.getAttribute("name"), "item.name");

      if (item.getAttribute("name") != currentQuerySelector) {
        item.style.display = "none";
      }
    });
  };
});

//--print tempo SelectList
let tempoList = ["60", "70", "80", "90", "100", "110", "120"];
tempoList.forEach((item) => {
  document.getElementById("tempoSelect").innerHTML +=
    "<option>" + item + "</option>";
});
document.getElementById("tempoSelect").value = 70;

//--------------------Print Bass Notes Dropdown-----------------------

let bassNotes = [
  "--",
  "Re_",
  "Mi_",
  "Fa_",
  "So_",
  "La_",
  "Ti_",
  "Do_",
  "Re",
  "Mi",
  "Fa",
  "So",
  "La",
];
let bassNotesInputCollection = document.querySelectorAll(".bassDropDown");
bassNoteArray = [
  "Mi_",
  "--",
  "--",
  "Fa_",
  "--",
  "--",
  "Mi_",
  "--",
  "--",
  "Mi_",
  "Mi_",
  "--",
  "--",
  "Mi",
  "--",
  "Mi_",
  "Mi_",
  "--",
  "--",
  "Fa_",
  "--",
  "--",
  "Mi_",
  "--",
  "--",
  "Mi_",
  "Mi_",
  "--",
  "Mi",
  "Mi_",
  "Mi",
  "--",
];

bassNotesInputCollection.forEach((item) => {
  bassNotes.forEach((item2) => {
    item.innerHTML += "<option>" + item2 + "</option>";
  });
});

// Bass Notes onChange Listener
bassNotesInputCollection.forEach((item) => {
  item.onchange = () => {
    //console.log(item.value, "item.value from update bassNotes");
    bassNoteArray = [];
    bassNotesInputCollection.forEach((item2) => {
      bassNoteArray.push(item2.value);
    });
    //console.log(bassNoteArray, "bassNoteArray");
  };
});

//--------------------Print Riff Notes Dropdown -----------------------

let riffNotes = [
  "--",
  "Re_",
  "Mi_",
  "Fa_",
  "So_",
  "La_",
  "Ti_",
  "Do_",
  "Re",
  "Mi",
  "Fa",
  "So",
  "La",
];
let riffNotesInputCollection = document.querySelectorAll(".riffDropDown");
riffNoteArray = [
  "Mi",
  "--",
  "--",
  "Re",
  "Ti_",
  "--",
  "Ti_",
  "--",
  "Mi",
  "Mi",
  "Re",
  "--",
  "Mi",
  "--",
  "Ti_",
  "--",
  "Mi",
  "So",
  "Mi",
  "--",
  "Re",
  "--",
  "Ti_",
  "--",
  "La_",
  "Ti_",
  "La_",
  "--",
  "So_",
  "--",
  "Mi_",
  "--",
];

riffNotesInputCollection.forEach((item) => {
  riffNotes.forEach((item2) => {
    item.innerHTML += "<option>" + item2 + "</option>";
  });
});

// Riff Notes onChange Listener
riffNotesInputCollection.forEach((item) => {
  item.onchange = () => {
    riffNoteArray = [];
    riffNotesInputCollection.forEach((item2) => {
      riffNoteArray.push(item2.value);
    });
  };
});

//--Close info Warning
document.getElementById("closeInfoWarning").onclick = function () {
  document.getElementById("infoHolder").style.display = "none";
};

//-- numberOfLoops Listener
document.getElementById("loopSelect").onchange = function () {
  numberOfLoops = document.getElementById("loopSelect").value;
};

//--Load visual input for demo - use this later as load presets
setvisualsFromArrays(); // onpage Load/Refresh
function setvisualsFromArrays() {
  hhArray.forEach(function (item, index) {
    if (item == true) {
      hhCollection[index].firstElementChild.checked = true;
    }
    if (item == "R") {
      hhCollection[
        index
      ].firstElementChild.nextElementSibling.firstElementChild.checked = true;
    }
  });

  snArray.forEach(function (item, index) {
    if (item == true) {
      snCollection[index].firstElementChild.checked = true;
    }
  });

  kkArray.forEach(function (item, index) {
    if (item == true) {
      kkCollection[index].firstElementChild.checked = true;
    }
  });

  riffNoteArray.forEach(function (item, index) {
    riffNotesInputCollection[index].value = item;
  });

  bassNoteArray.forEach((item, index) => {
    bassNotesInputCollection[index].value = item;
  });
}

document.getElementById("clearSteps").onclick = function () {
  clearPatternVisuals();
};

function clearPatternVisuals() {
  let answer = confirm(
    "Are you sure you want to clear all of the steps?"
  );
  if (answer) {
    hhArray = [];
    snArray = [];
    kkArray = [];
    riffNoteArray = [];
    bassNoteArray = [];

    // hihats
    hhCollection.forEach((item) => {
      item.firstElementChild.checked = false;
      if (item.firstElementChild.nextElementSibling != null) {
        item.firstElementChild.nextElementSibling.firstElementChild.checked = false;
      }
    });

    // snares
    snCollection.forEach((item) => {
      item.firstElementChild.checked = false;
    });

    // kicks
    kkCollection.forEach((item) => {
      item.firstElementChild.checked = false;
    });

    // bass
    bassNotesInputCollection.forEach((item) => {
      item.value = "--";
    });

    // riff
    riffNotesInputCollection.forEach((item) => {
      item.value = "--";
    });
  }
}
let audioCtx2;
let stopNotes = function () {
  audioCtx2.close();
  //clearInterval(playBtnTimeOut);
};

module.exports.stopNotes = stopNotes;

//---play notes---
let playNotes = function(samplesObj, info, pattern) {
  console.log(samplesObj, "from soundmodule");

  audioCtx2 = new (window.AudioContext || window.webkitAudioContext)(); //each click re-instantiates the audioCtx
  //console.log(audioCtx2.state, "audioCtx2.state");
  let time = audioCtx2.currentTime + 0.05; //this is zero each time
  let masterGain = audioCtx2.createGain();
  let stepLength = info.currentStepLength;
  let numberOfLoops = info.numberOfLoops;
  let bassNoteFreq;
  let riffNoteFreq;

  //---------------------------Distortion--------------------

  let distortion = audioCtx2.createWaveShaper();

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

  let biquadFilter = audioCtx2.createBiquadFilter();
  biquadFilter.type = "lowpass";
  biquadFilter.frequency.value = 120;

  //--------------------------------------------------------

  //Sample Source
  function sampleSource(currentBuffer, currentGain) {
    let source = audioCtx2.createBufferSource(); //Audio Buffer Source Node can only be played once

    source.buffer = currentBuffer;
    let envelope = audioCtx2.createGain();

    envelope.gain.exponentialRampToValueAtTime(currentGain, time + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    source.connect(envelope);
    envelope.connect(masterGain);

    source.start(time);
    source.stop(time + 0.215);
  }

  //Sample Roll Source
  function sampleRollSource(currentBuffer, currentGain) {
    let source = audioCtx2.createBufferSource(); //Audio Buffer Source Node can only be played once

    source.buffer = currentBuffer;
    let envelope = audioCtx2.createGain();

    envelope.gain.value = currentGain;

    source.connect(envelope);
    envelope.connect(masterGain);

    source.start(time);
    source.stop(time + 0.2);

    let source2 = audioCtx2.createBufferSource(); //Audio Buffer Source Node can only be played once

    source2.buffer = currentBuffer;
    let envelope2 = audioCtx2.createGain();

    envelope2.gain.value = currentGain;

    source2.connect(envelope2);
    envelope2.connect(masterGain);

    source2.start(time + stepLength / 3);
    source2.stop(time + (stepLength / 3 + 0.2));
    //--------------------------

    let source3 = audioCtx2.createBufferSource(); //Audio Buffer Source Node can only be played once

    source3.buffer = currentBuffer;
    let envelope3 = audioCtx2.createGain();

    envelope3.gain.value = currentGain;

    source3.connect(envelope3);
    envelope3.connect(masterGain);

    source3.start(time + stepLength / 3 + stepLength / 3);
    source3.stop(time + (stepLength / 3 + stepLength / 3 + 0.2));
  }

  //--Sine Source
  function sineSource(currentFrequency, currentGain, decayTime, isBass) {
    //create Oscillator node
    let osc = audioCtx2.createOscillator();

    let envelope = audioCtx2.createGain();

    osc.frequency.value = currentFrequency;

    //envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(currentGain, time + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + decayTime);

    if (isBass) {
      osc.connect(envelope);
      envelope.connect(distortion);
      distortion.connect(biquadFilter);
      biquadFilter.connect(masterGain);
    } else {
      osc.connect(envelope);
      envelope.connect(masterGain);
    }

    osc.start(time);
    osc.stop(time + decayTime);
  }

  masterGain.gain.value = 1;
  masterGain.connect(audioCtx2.destination);

  //--trigger loop starts here

  for (let j = 0; j < numberOfLoops; j++) {
  //---32 steps---
    for (let i = 0; i <= 31; i++) {
      
      //---Drum Triggers--

      //---hihats---
      if (pattern.hihats[i] === true) {
        sampleSource(samplesObj.hh, 0.6);
      } else if (pattern.hihats[i] === "R") {
        sampleRollSource(samplesObj.hh, 0.6, "R");
      }

      //---snare---
      if (pattern.snare[i] === true) {
        sampleSource(samplesObj.snare, 0.5);
      }

      //---kick---
      if (pattern.kick[i] === true) {
        sampleSource(samplesObj.kk, 0.8);
      }

      //--Bass Note Solfege to Frequency Converter--

      switch (pattern.bassNoteArray[i]) {
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

      if (pattern.bassNoteArray[i] !== "--") {
        sineSource(bassNoteFreq, 0.8, 0.7, "bass");
      }

      //--Riff Note Solfege to Frequency Converter--

      switch (pattern.riffNoteArray[i]) {
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
      if (pattern.riffNoteArray[i] !== "--") {
        sineSource(riffNoteFreq, 0.2, 0.4);
      }

      //Set time for next beat
      time = time + stepLength;
    }
  } //End Trigger Loop Here

};

module.exports.playNotes = playNotes;
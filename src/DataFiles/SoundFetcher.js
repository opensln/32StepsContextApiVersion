//--Declare buffers
let hhBuffer;
let snBuffer;
let kkBuffer;

let fetchedSamplesObj;

export const getSamples = function() {

  //console.log("get Samples called from Soundfetcher.js");
     
      //---requestsamples onload
      let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        let bufferLoader;

        function BufferLoader(context, urlList, callback) {
          this.context = context;
          this.urlList = urlList;
          this.onload = callback;
          this.bufferList = [];
          this.loadCount = 0;
        }

        BufferLoader.prototype.loadBuffer = function (url, currentIndex) {
          // Load buffer asynchronously
          //console.log(url, index);
          let request = new XMLHttpRequest();
          request.open("GET", url, true);
          request.responseType = "arraybuffer";

          let loader = this;

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
                if (++loader.loadCount === loader.urlList.length)
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
          for (let i = 0; i < this.urlList.length; ++i)
            this.loadBuffer(this.urlList[i], i);
        };

        bufferLoader = new BufferLoader(
          audioCtx,
          ["./sounds/bmpHiHat.wav", "./sounds/snare-cvw_2.wav", "./sounds/kick50-cvw.wav"],
          finishedLoading
        );
        bufferLoader.load();

        function finishedLoading(bufferList) {
      
          hhBuffer = bufferList[0];
          snBuffer = bufferList[1];
          kkBuffer = bufferList[2];

          console.log("1. Samples loaded");
          audioCtx.close();

            fetchedSamplesObj = {
            hh : hhBuffer,
            snare : snBuffer,
            kk: kkBuffer
            }
            //console.log(fetchedSamplesObj, "3. fetchedSamplesObj from SoundFetcher");
        }
    }

  export const sampleGetter = function() {
      return fetchedSamplesObj;
  };
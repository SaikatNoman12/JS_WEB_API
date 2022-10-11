# JavaScript Web Worker API



## How To use Worker API: 

    // worker file;
    postMessage(workerValue);

    // main file;
    let varName;

    // defined worker;
    varName = new Worker('./worker.js');

    // get worker data;
    varName.onmessage = function(event){

        console.log(event.data);

    }




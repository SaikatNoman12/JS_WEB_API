/* ==== JavaScript Web Worker API ==== */


// use Worker:---------
let work;

// onStartWorker function;
function onStartWorker() {
    if (typeof (Worker) !== 'undefined') {

        if (typeof (work) === 'undefined') {

            work = new Worker('./worker.js');

        }

        work.onmessage = function (event) {

            document.getElementById('showWorkerData').innerHTML = event.data;

        }

    }
    else {

        alert('Worker is already defined!');

    }
}

// onStopWorker function;
function onStopWorker() {

    work.terminate();

    work = undefined;

}


// showAlert function
function showAlert() {

    alert('Yes your alert is work!');

}
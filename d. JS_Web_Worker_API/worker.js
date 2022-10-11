/* ==== JavaScript Web Worker API ==== */

// initial value;
let data = 0;

// looping use while loop;
while (data < 1000000000) {

    data++;

}

// post data;
postMessage(data);
/* ==== JavaScript Web geolocation API ==== */


// use navigator.geolocation.getCurrentLocation(showLocationFunc, showErrorFunc) method:---------
const demo1 = document.querySelector('.demo1');

// get location;
function onShowLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionFunc, showErrorFunc);
    }
    else {
        demo1.innerHTML = 'Geo location is do not support in your browser!';
    }
}


// show geolocation position;
function showPositionFunc(position) {
    demo1.innerHTML = 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude;
}


// show geolocation error;
function showErrorFunc(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            demo1.innerHTML = 'You do not allow your location access!';
            break;

        case error.POSITION_UNAVAILABLE:
            demo1.innerHTML = 'Location information unavailable!';
            break;

        case error.TIMEOUT:
            demo1.innerHTML = 'Your time is out!';
            break;

        case error.UNKNOWN_ERROR:
            demo1.innerHTML = 'An unknown error occurred!';
            break;
    }

}



// use navigator.geolocation.getCurrentLocation(showLocationFunc, showErrorFunc) method:---------
const demo2 = document.querySelector('.demo2');

// get location;
function onShowLocationTwo() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPositionFuncTwo, showErrorFuncTwo);
    }
    else {
        demo2.innerHTML = 'Geo location is do not support in your browser!';
    }
}


// show geolocation position;
function showPositionFuncTwo(position) {
    demo2.innerHTML = 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude;
}


// show geolocation error;
function showErrorFuncTwo(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            demo2.innerHTML = 'You do not allow your location access!';
            break;

        case error.POSITION_UNAVAILABLE:
            demo2.innerHTML = 'Location information unavailable!';
            break;

        case error.TIMEOUT:
            demo2.innerHTML = 'Your time is out!';
            break;

        case error.UNKNOWN_ERROR:
            demo2.innerHTML = 'An unknown error occurred!';
            break;
    }

}
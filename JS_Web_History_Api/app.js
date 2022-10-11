/* ==== JavaScript Window History API ==== */


// use window.history.back() method:---------
function goBack() {
    window.history.back();
}

// use window.history.go() method. Use negative number:---------
function goBack2Page(n) {
    window.history.go(n);
}


// use window.history.length:---------
function showAllHistory() {
    alert(window.history.length);
}


// use window.history.forward() method:---------
function gorForward() {
    window.history.forward();
}


/* -------------- X ---------- */


// use window.location.assign() method. Use positive number:---------
function goThirdPage() {
    window.location.assign('./third.html');
}







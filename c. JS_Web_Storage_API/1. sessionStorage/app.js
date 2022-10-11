/* === JavaScript web API sessionStorage === */


// use window.sessionStorage.setItem(key, value) method:---------
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}


// use window.sessionStorage.getItem(key) method:--------- 
function getSessionStorage(key) {
    alert('The ' + key + ' is: ' + window.sessionStorage.getItem(key));
}


// use window.sessionStorage.removeItem(key) method:---------
function removeSessionStorage(key) {
    window.sessionStorage.removeItem(key);
}


// use window.sessionStorage.clear() method:---------
function clearSessionStorage() {
    sessionStorage.clear();
}


// use window.sessionStorage.key(index) method:---------
function sessionStorageKey(index) {
    alert('This index key is: ' + window.sessionStorage.key(index));
}
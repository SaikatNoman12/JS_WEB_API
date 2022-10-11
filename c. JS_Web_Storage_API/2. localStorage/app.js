/* === JavaScript web API localStorage === */


// use window.localStorage.setItem(key, value) method:---------
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}


// use window.localStorage.getItem(key) method:--------- 
function getLocalStorage(key) {
    alert('The ' + key + ' is: ' + window.localStorage.getItem(key));
}


// use window.localStorage.removeItem(key) method:---------
function removeLocalStorage(key) {
    window.localStorage.removeItem(key);
}


// use window.localStorage.clear() method:---------
function clearLocalStorage() {
    localStorage.clear();
}


// use window.localStorage.key(index) method:---------
function localStorageKey(index) {
    alert('This index key is: ' + window.localStorage.key(index));
}
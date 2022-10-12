
/* ==== JavaScript Web Fetch API ==== */


// use promise and fetch web api:---------
function getDataOne() {

    fetch('http://127.0.0.1:5500/e.%20JS_Web_Fetch_API/1.%20Use_Promise/data.txt')
        .then(res => res.text())
        .then(data => onShowText(data));
}

function onShowText(data) {
    const text = document.querySelector('.demo1');
    text.innerText = data;
}



// use url for fetch data:---------
function getDataTwo() {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then(data => showAllData(data.drinks))
        .catch(err => {
            document.getElementById('demo2').innerHTML = 'Your internet connection is not stable! Check your internet connection.';
        });
}

function showAllData(data) {
    let demo2 = document.querySelector('#demo2');

    let text = '';

    data.forEach((element, index) => {

        text += (index + 1) + ': ' + element.strDrink + '<br>';

    });

    demo2.innerHTML = text;

}


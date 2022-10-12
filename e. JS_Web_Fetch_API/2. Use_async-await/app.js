/* ==== JavaScript Web Fetch API ==== */


// use async-await:---------
async function getDataOne() {

    try {

        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        const data = await res.json();
        showData(data.drinks);

    } catch (err) {

        document.querySelector('.demo1').innerHTML = 'your internet is filed!';

    }

}

function showDataOne(data) {
    let demo1 = document.querySelector('.demo1');

    let text = '';

    data.forEach((element, index) => {

        text += (index + 1) + ': ' + element.strDrink + '<br>';

    });

    demo1.innerHTML = text;

}



// 
async function getDataTow() {

    const res = await fetch('http://127.0.0.1:5500/e.%20JS_Web_Fetch_API/2.%20Use_async-await/data.txt');
    const data = await res.text();

    showTextTwo(data);

}


function showTextTwo(data) {
    const demo2 = document.querySelector('.demo2');

    demo2.innerHTML = data;

}
/* ==== JavaScript Web Form API ==== */


// use checkValidity() method:---------
let validationText = document.getElementById('demo1')

function validation() {
    const inputValue = document.getElementById('input1');

    if (!inputValue.checkValidity()) {

        validationText.innerHTML = inputValue.validationMessage;

    }
    else {
        validationText.innerHTML = '';
    }

}


// use setCustomValidity() & checkValidity():---------
let validationTextTwo = document.getElementById('demo2');

function validationTwo() {
    const input = document.getElementById('input2');

    // setCustomValidity() method
    if (input.validity.rangeOverflow) {
        input.setCustomValidity('Number is very high!')
    }
    else if (input.validity.rangeUnderflow) {
        input.setCustomValidity('Your number is vary low!');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Please enter your value!');
    }

    // checkValidity() method
    if (!input.checkValidity()) {
        validationTextTwo.innerHTML = input.validationMessage;
    }
}




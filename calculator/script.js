
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', handleClick);
});

function handleClick(e) {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
        calculateResult();
    } else if (buttonValue === 'AC') {
        clearInput();
    } else if (buttonValue === 'DEL') {
        deleteLastCharacter();
    } else {
        appendString(buttonValue);
    }
}

function calculateResult() {
    string = eval(string);
    input.value = string;
}

function clearInput() {
    string = "";
    input.value = string;
}

function deleteLastCharacter() {
    string = string.substring(0, string.length - 1);
    input.value = string;
}

function appendString(value) {
    string += value;
    input.value = string;
}

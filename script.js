let displayElement = document.getElementById('display');
let displayValue = '';

function clearDisplay() {
    displayValue = '';
    displayElement.textContent = displayValue;
}

function appendToDisplay(value) {
    displayValue += value;
    displayElement.textContent = displayValue;
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        if (result === Infinity || isNaN(result)) {
            throw new Error('Math Error');
        }
        displayValue = result.toString();
    } catch (error) {
        displayValue = 'Error';
    }
    displayElement.textContent = displayValue;
}

document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === '.') {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        event.preventDefault();
        calculateResult();
    } else if (event.key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        displayElement.textContent = displayValue;
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

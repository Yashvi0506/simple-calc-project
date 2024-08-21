document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button')
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let buttonText = this.textContent;

            if (buttonText === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';

            }
            else if (buttonText === '=') {
                if (currentInput && operator && previousInput) {
                    display.value = eval(previousInput + operator + currentInput);
                    currentInput = '';
                    operator = '';
                    previousInput = '';
                }
            }

            else if (['+', '-', '*', '/'].includes(buttonText)) {
                if (currentInput) {
                    previousInput = currentInput;
                    operator = buttonText;
                    currentInput = '';
                }

            }
            else {
                currentInput += buttonText;
                display.value = currentInput;
            }
        });
    });
});
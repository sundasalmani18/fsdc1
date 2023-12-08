// object
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}


function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand == true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit
    }
}


function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0."
        calculator.waitingForSecondOperand = false
        return
    }

    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot
    }
}


function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator

    const inputValue = parseFloat(displayValue)


    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return
    }

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = result
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator
}


function calculate(firstOperand, secondOperand, operator){

}
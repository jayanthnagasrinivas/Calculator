const resultInput = document.getElementById("result");
let currentInput = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1); // Remove the last character
        } else if (value === '√') {
            currentInput += 'Math.sqrt(';
        } else if (value === 'x²') {
            currentInput += '**2';
        } else if (value === 'x³') {
            currentInput += '**3';
        } else if (value === '∛') {
            currentInput += 'Math.cbrt(';
        } else if (value === '^') {
            currentInput += '**';
        } else if (value === 'log') {
            currentInput += 'Math.log10(';
        } else if (value === '!') {
            currentInput = factorial(currentInput);
        } else if (value === '±') {
            currentInput = currentInput ? (-1 * parseFloat(currentInput)).toString() : '';
        } else {
            currentInput += value;
        }

        resultInput.value = currentInput;
    });
});

function factorial(n) {
    const number = parseInt(n);
    if (isNaN(number)) return '';
    if (number === 0) return '1';
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result.toString();
}

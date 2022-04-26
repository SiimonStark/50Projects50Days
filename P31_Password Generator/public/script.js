const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generatePasswordEl = document.getElementById('generate');
const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const messageEl = document.getElementById('message')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generatePasswordEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

clipboardEl.addEventListener('click', () => {

    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    // alert('Password copied to clipboard')

    hideMessage()
});

function hideMessage() {
    messageEl.style.display = 'block';
    clipboardEl.disabled = true;

    setTimeout(function () {
        messageEl.style.display = 'none';
        resultEl.style.animation = 'none'
        clipboardEl.disabled = false;
    }, 1000);
}

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }]
        .filter(item => Object.values(item)[0]); // filter out false values

    if (typesCount === 0) return ''; // if nothing checked, return empty

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    // Use string object methods to randomize character code within limits
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    // Use string object methods to randomize character code within limits
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    // Use string object methods to randomize character code within limits
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
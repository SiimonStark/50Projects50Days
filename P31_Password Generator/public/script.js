const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('length');
const generatePasswordEl = document.getElementById('generate');
let password: '';

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '~!@#$%^&*()_-+=?.,;:<>[]{}';

generatePasswordEl.addEventListener('click', generatePassword);

function generatePassword() {

}
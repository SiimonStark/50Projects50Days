const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = 'black';
let points = [];
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;

        // Command pattern stuff: Save the mouse position and 
        // the size/color of the brush to the "undo" array
        points.push({
            x: mouseX,
            y: mouseY,
            size: brushSize,
            color: brushColor,
            mode: "draw"
        });
    }
});

function drawCircle(x, y) {
    // default canvas circle pulled from docs
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    // default canvas line pulled from docs
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2; // *2 so that it === diameter, !== radius
    ctx.stroke();
}

function updateSizeInput() {
    sizeEl.innerText = size;
}

colorEl.addEventListener('change', (e) => color = e.target.value);

increaseBtn.addEventListener('click', (e) => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeInput();
});

decreaseBtn.addEventListener('click', (e) => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSizeInput();
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
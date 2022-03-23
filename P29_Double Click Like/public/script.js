const cards = document.querySelectorAll('.card');
const times = document.getElementById('times');

let clickTime = 0;
let heartStyle = '';

cards.forEach(post => post.addEventListener('dblclick', (e) => createHeart(e, post)));

const createHeart = (e, post) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    heart.classList.add('active');

    const x = e.clientX;
    const y = e.clientY;

    console.log(e);
    const offsetLeft = e.offsetX;
    const offsetTop = e.offsetY;
    console.log(x, y);
    console.log(offsetLeft, offsetTop);

    const xInside = x - offsetLeft;
    const yInside = y - offsetTop;
    console.log('Click => ', xInside, yInside);

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    post.appendChild(heart);
};

// Broken heart fontawesome
// <i class="fa-solid fa-heart-crack"></i>
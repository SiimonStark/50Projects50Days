const post = document.querySelector('.post');
const times = document.getElementById('times');

let clickTime = 0;
let heartStyle = '';

// Could have instead used "dblclick"
post.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
        console.log(clickTime);
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);

        } else {
            clickTime = new Date().getTime();
        }
    }

});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    heart.classList.add('active');

    const x = e.clientX;
    const y = e.clientY;

    const { offsetLeft, offsetTop } = e.target;

    const xInside = x - offsetLeft;
    const yInside = y - offsetTop;
    console.log('Click => ', xInside, yInside);

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    post.appendChild(heart);
};

// Broken heart fontawesome
// <i class="fa-solid fa-heart-crack"></i>
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length)
        currentActive = circles.length;

    update();
    console.log('Next')
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1)
        currentActive = 1;

    update();
});

const update = () => {
    circles.forEach((circle, ind) => ind < currentActive ? toggleActive(circle, 'add') : toggleActive(circle, 'remove'))
}

toggleActive = (circle, method) => circle.classList[method]('active');
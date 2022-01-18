const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((b) => {
        const boxTop = b.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            b.classList.add('show');
        } else {
            b.classList.remove('show');
        }
    });
}
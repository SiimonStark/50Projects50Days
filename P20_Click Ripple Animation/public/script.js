const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Value for x,y click within window
        const x = e.clientX;
        const y = e.clientY;

        // Value for x,y startpoint of element
        const buttonLeft = e.target.offsetLeft;
        const buttonTop = e.target.offsetTop;

        // Calc value of click in relation to element
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = `${xInside}px`;
        circle.style.top = `${yInside}px`;

        this.appendChild(circle);

        // Prevent multiple circles existing in HTML
        setTimeout(() => circle.remove(), 500);
    });
});
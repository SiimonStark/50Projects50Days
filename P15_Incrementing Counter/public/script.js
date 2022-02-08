const counters = document.querySelectorAll('.counter');

window.addEventListener('keydown', (e) => {
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 700;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            }
        }

        updateCounter();
    });
});
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, ind) => {
    cup.addEventListener('click', () => {
        highlightCups(ind);
    });
});

function highlightCups(ind) {
    if (smallCups[ind].classList.contains('full') && !smallCups.nextElementSibling.classList.contains('full')) {
        ind--;
    }

    smallCups.forEach((cup, ind2) => {
        if (ind2 <= ind) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
}
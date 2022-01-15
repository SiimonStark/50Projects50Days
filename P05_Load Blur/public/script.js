const loadText = document.querySelector('.loading-text');
const percent = document.querySelector('.percent');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  percent.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/* 
  Stack Overflow Link for scale func: ⤴️
    https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers#:~:text=function%20scale%20(number%2C%20inMin%2C%20inMax%2C%20outMin%2C%20outMax)%20%7B%0A%20%20%20%20return%20(number%20%2D%20inMin)%20*%20(outMax%20%2D%20outMin)%20/%20(inMax%20%2D%20inMin)%20%2B%20outMin%3B%0A%7D
*/
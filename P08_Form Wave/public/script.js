const labels = document.querySelectorAll('.form-control label');

const targetEvents = () => {
  labels.forEach(label => {
    label.addEventListener('click', () => setFocus(label));
    label.addEventListener('mouseenter', () => setFocus(label));
  });
}

const setFocus = (label) => {
  let text = label.innerText.split(' ').join('').toLowerCase();
  let input = document.getElementById(text);
  if (input.value.length <= 0) {
    input.focus();
  }
}

const moveTextUp = () => {
  labels.forEach(label => {
    label.innerHTML = label.innerText
      .split(``)
      .map((letter, ind) => {
        return `<span style="transition-delay:${ind * .50}" > ${letter}</span > `
      })
      .join(``);
  });
}

targetEvents();
moveTextUp();
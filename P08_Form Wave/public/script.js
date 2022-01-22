const labels = document.querySelectorAll('.form-control label');

let targetEvents = () => {
  labels.forEach(label =>
    label.addEventListener('click', () => {
      let text = label.innerText.split(' ').join('').toLowerCase();
      let input = document.getElementById(text);
      input.focus();
    })
  );
}

targetEvents();

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

moveTextUp();
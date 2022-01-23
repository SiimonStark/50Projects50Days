const sounds = ['slide', 'stroke-down', 'stroke-up', 'chords', 'riff', 'strum'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  document.getElementById('buttons').appendChild(btn);
})
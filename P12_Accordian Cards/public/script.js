const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(togg => {
  togg.addEventListener('click', () => {
    togg.parentNode.classList.toggle('active');
  })
})
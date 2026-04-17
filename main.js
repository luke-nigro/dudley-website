const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav.main');

toggle.addEventListener('click', function () {
  const open = nav.classList.toggle('nav-open');
  this.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

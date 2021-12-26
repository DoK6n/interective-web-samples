let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.009;
let scrollTop = 0;
let progressBar;
let imageWrap;
let parallax_0;
let parallax_1;
let parallax_2;
let parallax_3;
let parallax_4;
let parallax_5;

window.onload = function () {
  progressBar = document.getElementsByClassName('progressBar')[0];
  imageWrap = document.getElementsByClassName('imageWrap')[0];
  parallax_0 = document.getElementById('parallax_0');
  parallax_1 = document.getElementById('parallax_1');
  parallax_2 = document.getElementById('parallax_2');
  parallax_3 = document.getElementById('parallax_3');
  parallax_4 = document.getElementById('parallax_4');
  parallax_5 = document.getElementById('parallax_5');

  window.addEventListener('mousemove', mouseMove, false);
  window.addEventListener('scroll', scrollFunc, false);

  loop();
};

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;
  let per = Math.round((scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100);
  progressBar.style.width = `${per}%`;

  parallax_0.style.transform = `translate3d(0px, ${scrollTop * 0.03}px, 0px)`;
  parallax_1.style.transform = `translate3d(0px, ${-scrollTop * 0.03}px, 0px)`;
  parallax_2.style.transform = `translate3d(0px, ${-scrollTop * 0.12}px, 0px)`;
  parallax_3.style.transform = `translate3d(0px, ${-scrollTop * 0.16}px, 0px)`;
}

function loop() {
  mouseX += (x - mouseX) * speed;
  mouseY += (y - mouseY) * speed;

  parallax_4.style.transform = `translate3d(${mouseX / 140}px, ${-scrollTop * 0.22}px, 0px)`;
  parallax_5.style.transform = `scale(1.1) translate(${mouseX / 50}px, ${-scrollTop * 0.25}px)`;
  parallax_6.style.transform = `scale(1.2) translate(${-mouseX / 20}px, ${-mouseY / 20}px)`;

  window.requestAnimationFrame(loop);
}

function mouseMove(e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerWidth / 2;
}

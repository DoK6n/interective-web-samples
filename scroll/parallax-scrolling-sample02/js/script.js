let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.009;
let scrollTop = 0;
let progressBar;

window.onload = function () {
  progressBar = document.getElementsByClassName('progressBar')[0];

  window.addEventListener('resize', stageResize, false);
  window.addEventListener('mousemove', mouseMove, false);
  window.addEventListener('scroll', scrollFunc, false);

  stageResize();
  loop();
};

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;
  let per = Math.round((scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100);
  progressBar.style.width = `${per}%`;
}

function stageResize() {}

function loop() {
  window.requestAnimationFrame(loop);
}

function mouseMove(e) {}

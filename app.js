window.onload = function () {
  Particles.init({
    selector: '.background',
    maxParticles: 50,
    sizeVariations: 2,
    speed: 1,
    color: ['#ffffff'],
    minDistance: 200,

    //    connectParticles:true
  });
};

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In';

  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

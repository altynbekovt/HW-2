const box = document.querySelector('.box');
const inner = document.querySelector('.inner');

let angle = 0;
let radius = 210;
let centerX = box.clientWidth / 2;
let centerY = box.clientHeight / 2;
let positionX = centerX + radius * Math.cos(angle);
let positionY = centerY + radius * Math.sin(angle);

const handleBoxMove = () => {
  angle += Math.PI / 180; 
  positionX = centerX + radius * Math.cos(angle);
  positionY = centerY + radius * Math.sin(angle);
  inner.style.left = `${positionX}px`;
  inner.style.top = `${positionY}px`;
  

  if (angle >= 2 * Math.PI) {
    angle = 0;
  }
  
  setTimeout(handleBoxMove, 1);
};

handleBoxMove();


// таймер

const timerEl = document.getElementById('timer');
const messageEl = document.getElementById('message');
let time = 0;
let intervalId;

const startTimer = () => {
  intervalId = setInterval(() => {
    time++;
    if (time <= 60 * 5) {
      timerEl.textContent = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
      if (time % 60 === 0) {
        messageEl.textContent = 'Прошла 1 минута';
      }if (time % 120 === 0) {
        messageEl.textContent = 'Прошла 2 минута';
      }if (time % 180 === 0) {
        messageEl.textContent = 'Прошла 3 минута';
      }if (time % 240 === 0) {
        messageEl.textContent = 'Прошла 4 минута';
      }
    } else {
      messageEl.textContent = 'Время вышло!';
      clearInterval(intervalId);
    }
  }, 100);
};

startTimer();

const dino = document.querySelector('.dino');
const body = document.querySelector('.body');
let isJumping = false;
let isGameOver = false;

let position = 0;
function jump()
{
  let timerId = setInterval(function () {
    //move down
    if (position === 150) {
      clearInterval(timerId);
      let downTimerId = setInterval(function () {
        if (position === 0) {
          clearInterval(downTimerId);
          isJumping = false;
        }
        position -=30;
        dino.style.bottom = position + 'px';
      },20)

    }
    //move up
    position +=30;
    dino.style.bottom = position + 'px';
  },20)
}

function generateObstacles() {
  let randomTime = Math.random() * 4000;
  let obstaclePosition = 1000;
  const obstacle = document.createElement('div');
  if (!isGameOver) obstacle.classList.add('obstacle');
  grid.appendChild(obstacle);
  obstacle.style.left = obstaclePosition + 'px';
  let timerId = setInterval(function() {
    if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
      clearInterval(timerId)
      alert('Game over');
      isGameOver = true
      //removing all  games children
      while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
      }
      
    }
    obstaclePosition -=10
    obstacle.style.left = obstaclePosition + 'px'
  },20)
  if (!isGameOver) setTimeout(generateObstacles, randomTime)
}
generateObstacles()
document.addEventListener('keyup', function(event){

    jump();
})

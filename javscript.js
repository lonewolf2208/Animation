
let dino = document.querySelector(".DINO");
let cactus = document.querySelector(".CACTUS");

// var x=0;
// function jump()
// {
//     if(x==0)
//     {
//         x=1;
//         dino.style.transform=`transition3d(0,-30px,0)`;
//     }
//     else
//     {
//         dino.style.transform=`transition3d(0,0,0)`;
//     }
//     requestAnimationFrame(jump);
// }

function jump()
{
    let position =0;
    let timerId = setInterval(function()
    {
        //move down;
        if ( position === 200)
        {
            clearInterval(timerId);
            let downTimerId=setInterval(function(){
                if (position === 380)
                {
                  clearInterval(downTimerId); 
                }
                position +=20;
                dino.style.top = position + "px";
            },20)
        }

        //move up
        position+=20;
        dino.style.top= position - "px"; 
    },20)
}
// var y = 200; 
// function movingCactus()
// {
//     y=y+10;
//     cactus.style.transform = `transition3d(-${y*0.1},0,0)`;
//     if(y==500)
//     {
//         y=200;
//     }
//     requestAnimationFrame(movingCactus);
// }
// movingCactus();

function movingCactus()
{
    let randomTime = Math.random()*4000;
    let obstacleposition=750;
    cactus.style.left = obstacleposition + 'px';
    let timerId = setInterval(function()
    {
        if(obstacleposition > 0 && position < 390 && obstacleposition<60)
        {
            clearInterval(timerId);
            alert("Game Over");
        }
    
    obstacleposition -=10;
    cactus.style.left = obstacleposition + 'px';
    },20)
    setTimeout(movingCactus,randomTIme);
}


document.addEventListener("keydown", function (event) {
    jump();}
);

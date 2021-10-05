
let dino = document.querySelector(".DINO");
let cactus = document.querySelector(".CACTUS");

var x=0;
function jump()
{
    if(x==0)
    {
        x++;
        dino.style.transform = `translate3d(0,-30px,0)`;
        jump();
    }
    else 
    {    
        x=0;
        dino.style.transform=`translate3d(0,0,0)`;
        return 0;
    }

}

document.addEventListener("keydown", function (event) {
    jump();}
);

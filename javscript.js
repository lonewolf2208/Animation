const elem = document.querySelector(".container")
var x = 100;
function backgroundFunction()
{
    while(x!=500)
    {
    x+=1;
    elem.style.transform = `translate3d(${0.1*x}vw,0,0)`;
    requestAnimationFrame(backgroundFunction);
    }
}
backgroundFunction();

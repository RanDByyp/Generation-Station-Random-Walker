//You can adjust the canvas size to your liking, but it's adviced to have it be divisible by 'cellSize'
const canvasWidth = 1024;
const canvasHeight = 640;
//Define amount of paths to be created here:
const pathsAmount = 25;
var myPaths = new Array();

function setup() 
{    
    createCanvas(canvasWidth,canvasHeight);

    //Define your initialize variables+method here:
    for(let i = 0; i < pathsAmount; i++)
    {
        let color = Math.floor(Math.random() * 255) + 55;
        let cellSize = Math.ceil(Math.random() * 4) * 4;
        let steps = Math.floor(Math.random() * (4000 / cellSize) + 10);
        myPaths.push (metroInitialize(canvasWidth,canvasHeight,cellSize,steps,4,color));
    }
}

function draw()
{
    //Feel free to change the background color:
    background(35);

    //Define your drawing variables+method here:
    for(let i = 0; i < pathsAmount; i++)
    {
        metroDrawAnimate(i,myPaths[i].color);
    }
}
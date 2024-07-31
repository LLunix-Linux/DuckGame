let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//variables
let offsetX = 0;
let offsetY = 0;
let speedX = 0;
let speedY = 0;
let speedx = 0;
let speedy = 0;



//the DUCK variabes

let DuckSheet = new Image();
DuckSheet.src = "SpriteSheeeet.png";



let cols = 4;
let rows = 4;

let spriteWidth = DuckSheet.width / cols;
let spriteHeight = DuckSheet.height / rows;

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

let totalFrames = 4; 
let currentFrame = 0;

let srcX = 0;
let srcY = 0;

let framesDrawn = 0;









//load the images
let map = new Image();
map.src = 'Map.png';



function draw() {
    offsetX = offsetX + speedX;
    offsetX = offsetX - speedx;
    offsetY = offsetY + speedY;
    offsetY = offsetY - speedy;

    ctx.clearRect(0,0, canvas.height,canvas.width);
    ctx.drawImage(map, offsetX, offsetY);


    //The DUCK
    
    currentFrame = currentFrame % totalFrames; 
    srcX = currentFrame * spriteWidth; 

    ctx.save();
    ctx.drawImage(DuckSheet, srcX, srcY, spriteWidth, spriteHeight, 300, 300, spriteWidth, spriteHeight);
    ctx.restore();

    framesDrawn++;
    if(framesDrawn >= 20){
        currentFrame++;
        framesDrawn = 0;
    }








    requestAnimationFrame(draw);
}

window.onload = () => {
    requestAnimationFrame(draw);
}




window.addEventListener("keydown", ev => {
    if(ev.key == 'ArrowRight') {srcY = 2 * spriteHeight; speedx = 10;}
    if(ev.key == 'ArrowLeft') {srcY = 1 * spriteHeight; speedX= 10;}
    if(ev.key == 'ArrowUp') {srcY = 0 * spriteHeight; speedY = 10;}
    if(ev.key == 'ArrowDown') {srcY = 3 * spriteHeight; speedy = 10;}
});

window.addEventListener("keyup", ev => {
    if(ev.key == 'ArrowRight') {speedx = 0;}
    if(ev.key == 'ArrowLeft') {speedX = 0;}
    if(ev.key == 'ArrowUp') {speedY = 0;}
    if(ev.key == 'ArrowDown') {speedy = 0;}
});










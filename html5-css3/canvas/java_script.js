let can = document.querySelector('canvas');
let ctx = can.getContext('2d');
let x;
let y;
let color = document.querySelector('input[type=color]');
let button = document.querySelectorAll('button');
let z;

color.addEventListener('change',()=>{
    z = color.value;
});
button[0].addEventListener('click',()=>{
     ctx.clearRect(0,0,500,200);
for(let i = 0; i < 50; i++){
    x = parseInt(Math.random() * 500);
    y = parseInt(Math.random() * 200);
    ctx.arc(x,y,30,0,Math.PI*2,true);
    ctx.strokeStyle = z;
    ctx.stroke();
    ctx.beginPath();
}
});
button[1].addEventListener('click',()=>{
    ctx.clearRect(0,0,500,200);
});

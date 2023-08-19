let counter = 1;
let btn3 = document.querySelectorAll("button")[2];
btn3.onclick = function(){
    slide_show(counter);
}
let btn1 = document.querySelectorAll("button")[0];
btn1.onclick = function(){
    counter = counter +1;
    counter = next(counter);
}
let btn2 = document.querySelectorAll("button")[1];
btn2.onclick = function(){
    counter = counter-1;
    counter = prev(counter);
}
let btn4 = document.querySelectorAll("button")[3];
btn4.onclick = function(){
    stop();
}

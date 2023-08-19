let h1 = document.querySelector('h1');
let elements = document.querySelectorAll('input');
function change(){
h1.style.color = `rgb(${elements[0].value},${elements[1].value},${elements[2].value})`;
}
for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('input',change);
}

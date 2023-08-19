let img_obj1 = document.querySelector("#egg");
let img_obj2 = document.querySelector("#basket");
let counter = 0;

/*----------------------------------------------------------------*/
let left = 0;
const move_right = function(){
    left += 40;
    if(left < innerWidth - img_obj2.width ){
        img_obj2.style.left = left+'px';
    }else {
        move_left();
    }
    return left;
}
function move_left() {
    left -= 40;
    if (left > 0)
        img_obj2.style.left = left + "px";
    else {
        move_right();
    }
    return left;
}
/*--------------------------------------------------------------------------*/
window.addEventListener("keydown",function(e){
    if(e.key == 'ArrowRight'){
        move_right();
    }else if(e.key == 'ArrowLeft'){
        move_left()
    }
});
/*--------------------------------------------------------------------------*/
let x = 5;
const drop_egg = function(){
    img_obj1.classList.remove("hidden");
let rand = Math.floor(Math.random()*(innerWidth-img_obj1.width));
let flag1 = 0;
    img_obj1.style.left = rand + 'px';
    
    let topp = 0;
    let id = setInterval(()=>{
        topp +=10;
        img_obj1.style.top = topp+'px';
        if(topp < innerHeight-img_obj1.height){
            if(Math.abs(parseInt(img_obj2.style.left)-parseInt(img_obj1.style.left)) < 100 && parseInt(img_obj1.style.top) == 666)
            {
                flag1 = 1;
                counter++;
                img_obj1.classList.add("hidden");
                drop_egg();
            }
        
        }else{

            clearInterval(id);
            if(flag1 == 0){
            img_obj1.src = "./img/proken.png";
            
            }
            
        }

    },50);
}
const move_busket = function(){
    document.onmousemove = function(e){
        let x = e.x;
        if(x < innerWidth-img_obj2.width){
            img_obj2.style.left = x+"px";
        }
    };

}
drop_egg();
move_busket(img_obj2);
/*-------------------------------------------------------*/



const slide_show = function(counter=1){
    let ImgObject = document.images[0];
    let id = setInterval(()=>{
        counter++;
        ImgObject.src = `images/${counter}.jpg`;
        if(counter == 8){
            counter = 1;
        }
        ImgObject.setAttribute("max",id);
    },1000);


}
const next = function(counter){
    let ImgObject = document.images[0];
    if(counter == 9){
        counter = 1;
    }
    ImgObject.src = `images/${counter}.jpg`;
       
    return counter;
}
const prev = function(counter){
    let ImgObject = document.images[0];
    if(counter == 0){
        counter = 8;
    }
    ImgObject.src = `images/${counter}.jpg`;
        
    return counter;
}
const stop = function(){
    clearInterval(Number(document.images[0].getAttribute("max")));

}
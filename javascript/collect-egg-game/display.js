let dev1 = document.querySelector(".color1");
let dev2 = document.querySelector(".color2");
let dev3 = document.querySelector(".color3");
let parent = document.querySelector(".container");

dev1.onclick = function(){
    add_element(dev1,parent);
    dev1.onclick = "";
};
dev2.onclick = function(){
    add_element(dev2,parent);
    dev2.onclick = "";
};
dev3.onclick = function(){
    add_element(dev3,parent);
    dev3.onclick = "";
};




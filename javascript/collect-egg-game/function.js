const add_element = function(obj,parent){
    let copy = obj.cloneNode(true);
    copy.onclick = function(){
        add_element(copy,parent);
        copy.onclick= "";
    };
    parent.append(copy); 
}

const get_date_from_url = function(){
    let values = [];
    
    let search1 = location.search.substring(1);
    let  pairs = search1.split("&");
    for (let i = 0; i < pairs.length; i++){
        let position = pairs[i].indexOf('=');
        values.push(pairs[i].substring(position+1,pairs[i].length));
    }
    mywindow = open();
    mywindow.document.write(`<h1>${values[0]}</h1><br><h2>${values[1]}</h2>`);
}
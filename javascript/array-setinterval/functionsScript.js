/*-------------task1-----------------*/
const array_number = function(array){
console.log("array asc",array.sort((a,b)=>a-b));
console.log("array desc",array.sort((a,b)=>b-a));
let position = array[0];
for(let index in array){
    if (array[index] > position){
        position = array[index];
    }
}
console.log("the max number is ", position);
console.log("filter nuber > 5", array.filter((a)=>a>5))

}

const minimum_number = function(array, condition){
    let pos;
    for(let item in array){
        if(condition){
            pos = item;
        }
    }
    return array[pos];
}

const remove_repetion = function(array2){
    let array_modifed = [];
    for(let item3 in array2){
        if(!array_modifed.includes(array2[item3])){
            array_modifed.push(array2[item3])
        }
    }
    return array_modifed;

}

/*-----------------------------task2-------------------------*/
const display_date = function(){
    let numaric_date = [];
    let today = new Date();
    let today_string = today.toLocaleString('en',Option);
    let today_array = today_string.split(" ");
    let number1 = today_array[1].split(":");
    for(let item2 in number1){
        numaric_date.push(Number(number1[item2]));
    }
    return numaric_date;
}


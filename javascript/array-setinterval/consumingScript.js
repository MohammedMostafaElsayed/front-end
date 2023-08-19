/*----------------task1------------------*/
let numbers = [2,1,3,2,7,2,8,4,3,6,10,9,12];
let numbers2 = Array.from(numbers, a=>a*5);
array_number(numbers);
console.log("the minimum nuber is",minimum_number(numbers,(a,b)=>{a-b}));
console.log("non repition array is ", remove_repetion(numbers));
console.table(numbers2);

/*----------------task2---------------------*/
let today_date = display_date();

let id = setInterval(()=>{
    document.title = `${today_date[0]} : ${today_date[1]} : ${today_date[2]}`;
    today_date[2]++;
    if(today_date[2] == 60){
        today_date[2] = 0;
        today_date[1]++;
        if (today_date[1] == 60){
            today_date[1] = 0;
            today_date[0]++;
            if (today_date[0] == 13){
                today_date[0] = 1;

            }
        }
    }
},1000);


let btn_add = document.querySelector("input[value=Add]");
let student_name = document.querySelector("input[name=studentName]");
let student_grade = document.querySelector("input[name=studentGrade]");
let std_table = document.querySelector("#studentsData");
let std_sort = document.querySelector("#sort");
let std_filter = document.querySelector("#filter")
let array_name = [];
let flag = 0;

/*------------------------------------------------------*/

btn_add.onclick = function(){
    let name = captalize_first_char(student_name.value);
    flag = check_validaty_name(name,array_name);
    flag += check_validaty_number(student_grade.value);
    if(flag){
        console.log("hi from error");

    }else{
        array_name.push(right_valid(student_name, student_grade, std_table,name));
    }  
};
/*--------------------------------------------*/
std_sort.addEventListener("change",()=>{
let rows = Array.from(std_table.rows); 

    if(std_sort.value == 'name'){
        rows.sort((a, b) => {
            const nameA = a.childNodes[0].textContent;
            const nameB = b.childNodes[0].textContent;
            if (nameA > nameB) {
              return 1;
            }
            if (nameA < nameB) {
              return -1;
            }
            return 0;
          });
          std_table.append(...rows);
    }
    if(std_sort.value == 'grade'){
        rows.sort((a,b)=>{
           let a1 = Number(a.childNodes[1].textContent);
           let b1 = Number(b.childNodes[1].textContent);
           return b1-a1;
        });
        std_table.append(...rows);
    }
    

});
/*--------------------------------------------------------------*/
std_filter.addEventListener('change',()=>{
let rows1 = Array.from(std_table.rows); 
    new_rows_less = [];
    new_rows_most = [];

    for(let i = 0; i <rows1.length;i++){
        if(Number(rows1[i].childNodes[1].textContent) < 60){
            new_rows_less.push(rows1[i]);
        }else{
            new_rows_most.push(rows1[i]);
        }
    }
    if(std_filter.value == 'success'){
        std_table.remove(...new_rows_most);
        std_table.append(...new_rows_most);
    }
    if(std_filter.value == 'fail'){
        std_table.append(...new_rows_less);
    }
});

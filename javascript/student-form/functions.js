
const captalize_first_char = function(full_name)
{
    let sitnces = "";
    let arrey_of_names = full_name.split(" ");
    for(let i = 0; i < arrey_of_names.length ; i++){
        sitnces += arrey_of_names[i][0].toUpperCase();
        for(let j = 1; j < arrey_of_names[i].length; j++){ 
            sitnces += arrey_of_names[i][j].toLowerCase();
        }
    }
    return sitnces;
}
/*--------------------------------------------------------------------------*/
const check_validaty_name = function(name, array_name){
    let nameError = document.getElementById("nameError");
    let flag = 0;
    
    if(!name){
        nameError.innerText = "required";
        nameError.classList.add("nameError");
        flag = 1;
    }
    if(array_name.includes(name)){
        nameError.innerText = "this name founded";
        nameError.classList.add("nameError");
        flag = 1
    }
    return flag;
}
/*-----------------------------------------------------------------------*/
const check_validaty_number = function(number){
    let gradeError = document.querySelector("#gardeError");
    let flag = 0;
    if(number < 0 || number > 100){
        gradeError.innerText = "nuber grater than 0 and less than 100";
        gradeError.classList.add("nameError");
        flag = 1; 
    }

    if (isNaN(number)){
        gradeError.innerText = "shoud be number";
        gradeError.classList.add("nameError");
        flag = 1;
    }
    if(!number){
        gradeError.innerText = "reqired";
        gradeError.classList.add("nameError");
        flag = 1;

    }
    return flag;
}

/*---------------------------------------------------*/
const right_valid = function(student_name, student_grade, std_table,name){

    let student_department = document.querySelector("input[name=Department]:checked");
    
    //create tr in table
    let tr_table = document.createElement("tr");
    tr_table.classList.add(student_department.value);
    //create td for name
    let td_table = document.createElement("td"); //<td></td>
    td_table.innerText = name;
    tr_table.append(td_table);

    //create td for grade
    td_table = document.createElement("td");
    td_table.innerText = student_grade.value;

    tr_table.append(td_table);
    //craete td for delet button
    let delet_btn = document.createElement("button");
    delet_btn.innerHTML = `<i class='bx bx-trash'></i>`;
    td_table = document.createElement("td");
    td_table.append(delet_btn);


    tr_table.append(td_table);

    std_table.append(tr_table);

    delet_btn.onclick = function(){
        
        this.parentElement.parentElement.remove();
    }
    return captalize_first_char(student_name.value);
}
/*------------------------------------------------------------------------------------*/

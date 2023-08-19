let usr = document.getElementById('usr');
let email = document.getElementById('mail');
let button = document.querySelector('button[type=submit');

function save_data(usr,email){
    localStorage.setItem(usr.name , usr.value);
    localStorage.setItem(email.name , email.value);

}
function clearall(){
    localStorage.clear();
}
function get_data(user,email){
    user.value = localStorage.getItem('user_name');
    email.value = localStorage.getItem('email');

}
button.addEventListener('click',()=>{
let check = document.querySelector('input[type=checkbox]').checked;
    if(check){
        save_data(usr,email);
    }else{
        clearall();
    }

});
addEventListener('load',()=>{
    get_data(usr,email);

});

const password = document.getElementById("password").value;
const cpassword = document.getElementById("cpassword").value;
const pdm = document.getElementById("pdm");
function validate(){
if(password === cpassword){
pdm.innerHTML = "Password Matched"
}else{
    pdm.innerHTML="Password Doesn't match"
}
}

const things = document.getElementById("things");
const thingsName = document.getElementById("thingsName");

function change(){
    thingsName.innerHTML = "You have Selected" + " " + things.value;
}


// -----------------------------------
let cvc = document.getElementById("cvc");
let num = document.getElementById("num");
let nameD = document.getElementById("name");
let date= document.getElementById("date");
//-----------------------------------------
let input_cvc = document.getElementById("cvcF");
let input_num = document.getElementById("numF");
let input_name = document.getElementById("nameF");
let input_month= document.getElementById("monthF");
let input_year= document.getElementById("yearF");
//-------------------------------------------
let btn= document.getElementById("confirm");
//---------------------------------------
cvc.innerHTML="000";
num.innerHTML="0000 0000 0000 0000";
nameD.innerHTML= "Jane Appleseed";
date.innerHTML="00/00";
//-----------------------------------------
btn.addEventListener("click", ()=>{
    console.log("hey button");
    if (input_cvc.value.length == 3 && input_num.value.length == 16 && input_month.value.length == 2 && input_year.value.length == 2 && input_month.value <=12) {
        cvc.innerHTML=input_cvc.value;
        num.innerHTML=input_num.value;
        nameD.innerHTML= input_name.value;
        date.innerHTML= input_year.value+"/"+input_month.value;

        document.querySelector(".form").style.display="none";
        document.querySelector(".confirmation").style.display="flex";
    }
    else if (input_cvc.value.length < 3 || input_cvc.value.length > 3) {
        input_cvc.style.border="2px solid #ff3a3a"
        document.querySelector(".infoC").innerHTML="Enter 3 digits !"
    }else if (input_num.value.length <16 || input_num.value.length >16){
        input_num.style.border="2px solid #ff3a3a"
        document.querySelector(".infoU").innerHTML="Enter 16 digits !"
    }else if (input_month.value.length > 2 || input_month.value.length < 2 || input_month.value > 12) {
        input_month.style.border="2px solid #ff3a3a"
        document.querySelector(".infoD").innerHTML="Enter 2 digits between(0 - 12) !"
    }
    else if (input_year.value.length > 2 || input_year.value.length < 2) {
        input_year.style.border="2px solid #ff3a3a"
        document.querySelector(".infoD").innerHTML="Enter 2 digits !"
    }
})

document.getElementById("btn-hide-eye").style.display=None;

let getBtn=document.getElementById("btn-eye");
getBtn.addEventListener("click",function(){
    document.getElementById("show-pass").type="text";
    document.getElementById("btn-eye").style.display="None";
    document.getElementById("btn-hide-eye").style.display="block";
});

let getBtn=document.getElementById("btn-hide-eye");
getBtn.addEventListener("click",function(){
    document.getElementById("show-pass").type="password";
    document.getElementById("btn-eye").style.display="block";
    document.getElementById("btn-hide-eye").style.display="None";
});

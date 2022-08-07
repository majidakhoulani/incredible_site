function show(){
    document.getElementById("textare").style.display="block";
}
function hide(){
    document.getElementById("textare").style.display="none";
}
function register(){
    let x =document.forms["myForm"]["email"].value;
    let y =document.forms["myForm"]["password"].value;
    if (x == ""){
    alert("you should enter vaild email");
    document.getElementById("floatingInput").style.background="pink";
    return false;
    
}
    else if (y == ""){
        alert("you should enter valid password");
        document.getElementById("floatingPassword").style.background="pink";
    return false;
    }
    else {
        //  alert("you are registered");
        return true;
    }
} 
 document.getElementById("one").addEventListener("mouseover",changecolor1);
 document.getElementById("one").addEventListener("mouseleave",changecolor2);

function changecolor1(){
    document.getElementById("one").style.background="#E9CFEC";
}
function changecolor2(){
    document.getElementById("one").style.background="white";
}
document.getElementById("two").addEventListener("mouseover",changecolor3);
document.getElementById("two").addEventListener("mouseleave",changecolor4);

function changecolor3(){
   document.getElementById("two").style.background="rgba(192, 192, 79, 0.945)";
}
function changecolor4(){
   document.getElementById("two").style.background="white";
}
document.getElementById("three").addEventListener("mouseover",changecolor5);
document.getElementById("three").addEventListener("mouseleave",changecolor6);

function changecolor5(){
   document.getElementById("three").style.background="rgb(104 88 88 / 33%)";
   

}
function changecolor6(){
   document.getElementById("three").style.background="white";
}
document.getElementById("four").addEventListener("mouseover",changecolor7);
document.getElementById("four").addEventListener("mouseleave",changecolor8);

function changecolor7(){
   document.getElementById("four").style.background="yellowgreen";
}
function changecolor8(){
   document.getElementById("four").style.background="white";
}
document.getElementById("spa").addEventListener("mouseover",changesize1);
document.getElementById("spa").addEventListener("mouseleave",changesize2);

function changesize1(){
   document.getElementById("spa").style.fontSize="50px";
   document.getElementById("spa").style.color="#189754";
}
function changesize2(){
   document.getElementById("spa").style.fontSize="29.57px";
   document.getElementById("spa").style.color="red";
}

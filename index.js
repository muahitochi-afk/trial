let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2")
let bdy=document.querySelector("body");
// night to day mode
btn1.addEventListener("click",function(){
       bdy.style.background="white";
})
// day to night mode
btn2.addEventListener("click",function(){
       bdy.style.background="black";
})

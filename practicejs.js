// let content =document.getElementById("content");
// console.log(content);//selecting element by id
// let heading=document.getElementsByTagName("h1");//selecting ele by tag name
// console.log(heading);
// let msg =document.getElementsByClassName("message");
// console.log(message);//selecting ele by class name
//let gsg=document.querySelectorAll(".gessage ");
//console.log(gsg);
//let parent = document.querySelector(".title");
//console.log(parent.firstChild);
// let modeBtn =document.querySelector("#mode");
// let currMode="Light";
// modeBtn.addEventListener("click",()=>{ 
//     if(currMode === "Light"){
//         currMode = "dark";
//         document.querySelector("body").classList.add("dark");
//     }
//     else{
//         currMode = "Light";
//         document.querySelector("body").style.backgroundColor ="white";
//     }
    
//     console.log("currMode");
// });
function reverse(num){
   var rev=0;
   while(num>0){
    var rem= num%10;
    revrev*10+rem;
    num=Math.floor(num/10);
   }
}
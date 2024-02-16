//EVENT HANDLER
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,evt.clientY);

// };
// let box=document.querySelector("div");
// box.onmouseover = () =>{
//     console.log("you are inside div");
// };
//

//EVENT LISTENER
//node.addEventListener(event,callback)
//node.removeEventListener(event,callback)
// btn1.addEventListener("click", ()=>{//evt listeners can perform various tasks at once
//     console.log("button was clicked");
// });

// let modeBtn=document.querySelector("#change-mode");
// let currMode = "Light";
// modeBtn.addEventListener("click",()=>{
//     if(currMode==="Light"){
//         currMode = "Dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode="Light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// });

let modeBtn =document.querySelector("#change-mode");
let currmode="Light";
let body =document.querySelector("body");

modeBtn.addEventListener("click",()=>{
    if(currmode==="Light"){
        currmode="Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
else{
    currmode="Light";
   body.classList.add("light");
   body.classList.remove("dark");
}
    
})
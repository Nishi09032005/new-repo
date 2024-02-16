//all the HTML code can be acces in javascript code int the form of an object

//creating a new element
let newButton =document.createElement("button");
newButton.innerText ="click me";
console.log(newButton);

let div = document.querySelector("div");
div.append(newButton);//adds at the end of node(inside)
div.prepend(newButton);//adds at the start of node(inside)
div.before(newButton);//adds just before the element(like here is div)
div.after(newButton);//add just after the element
div.remove();//it will remove the node element
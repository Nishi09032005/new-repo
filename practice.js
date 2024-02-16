// let no =prompt("Enter Number");
// console.log(no);
// let correctno=25;
// if(no==25){
//     console.log("correct ans");
// }
// else{
//     console.log("wrong ans");
// }

//strings
// let str="My friends";
// let newstr= str.toUpperCase();//it creates a new string and original remains intact
// console.log(newstr);

// //use str.length to find string length
// console.log(str[0]);//print value at that idx
// //Templet literals
// let obj={
//     item:"pen",
//     price:10,
// };
// let output = `The cost of ${obj.item}is ${obj.price}rupees`;
// console.log(output);
// //output will be same as-
// console.log("the cost of",obj.item,"is",obj.price,"rupees");

 let marks = [85,97,44,37,76,60];
 let sum=0;
 for(let val of marks){//iterating in whole array
    sum+=val;
    
 }
 console.log(sum);
 let avg =sum/6;
 console.log(sum);
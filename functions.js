// function myFunction(){
//     console.log("welcome to apna college");
// }
// myFunction();
// function sum(a,b){
//     return a+b;
// }//you can also call it in console-as sum(2,4)

// //arrow function
// const arrowsum = (a,b) =>{
//     return a+b;
// }

// function countVowels(str){
//     let count =0;
//     for(const char of str){
//         if(char==="a "|| char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//           }
//         }
//         console.log(count);
//     }
// // for each
// let arr = ["pune","delhi","mumbai"];
// arr.forEach((val,idx,arr)=> {
//     console.log(val.toUpperCase());
// });

// let nums = [2,3,4,5];
// nums.forEach((num)=>{//for each is used to travel in whole array
//     console.log(num **2);
// });

// //map-creates a new array with the results of some operation.
// let nu=[38,48,56];
// nu.map((val)=>{
//     console.log(val);
// }) ;

// //reduce-performs some operations and reduces the array to a single value
// let brr = [1,2,3,4];
// const output=arr.reduce((res,curr)=>{
//    return  res+curr;
// });
// console.log(output);

// let fact=crr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log("fac= ",fact);
// let sum = function(num1,num2){
//     return num1+num2;
// }
// console.log(sum(6,8));
// let sum1 = (n1,n2) =>{//in arrow func. function keyword is not used
//     return n1+n2;
// }
// console.log(sum1(4,5));
// let alarm = ()=> {
//     console.log('good morning');
// };
// setTimeout(alarm,3000);
// console.log('Set alarm');
let buttonele = document.querySelector('#btn');
let beh=event=>console.log('clicked');
 buttonele.addEventListener('click',beh);


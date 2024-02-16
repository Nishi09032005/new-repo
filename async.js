// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000)//it is a fun. that executes the code after a certain time
// function sum(a,b){
//     console.log(a+b);
// }
//     function cal(a,b ,sumCallback){
//         sumCallback(a,b);
//     }
//     calculator(1,2,(a,b) => {
//         console.log(a+b);
//     });
function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data",dataId);
            if(getNextData){
                getNextData();
            }
        },2000);
    });
}
// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     reject("some error accured");
// });
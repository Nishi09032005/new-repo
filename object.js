//oject is an entity that have properties and methods
// const student={
// Name :"Nishi Shukla",
// marks :94.4,
// printMarks:function(){//creating a function for printing marks
//          console.log("marks=",this.marks);//this-student.marks
//   },
// };

// const employee = {
//     calTax(){
//         console.log("tax rate is 10%");//we have created a function for employee
//     },
// };                          
// const Ram = {
//   salary:50000,
// };
// Ram.__proto__=employee;//functions of this object can be avail into previous object
//  //if an object have its own func then it will have more prominance
 
//  //a class is a progam-code templet for creating objects
//  class  Car{
//     constructor(){//arguements can also be passed
//         console.log("creating new object");//when object is made,constructor is called firstly
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;//this.brand refers to the object property
//     }                     //brand refers to arguement
//  }

//  let fortuner = new Car();//creating objects from a class,it will avail functions of class
// fortuner.setBrand("Maruti");
// //inheritance=passing of properties from parent to child class

// class person{       //parent class
//     constructor(){
//         console.log("entering parent constructor ")
//         this.species = "homosapiens";
//     }
//     eat(){ //method
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class engeneer extends person{//now it will acquire proprties of person also
//     constructor(branch){
//         console.log("entering in child constructor");
//         super();//to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor")
       
//     }
//     work(){
//         console.log("solve problems");
//     }  
// }
// class doctor extends person{
//     work(){
//         console.log("treat patients");
//     }
// }
// let nishi = new engeneer("chemical eng");//creating a new object
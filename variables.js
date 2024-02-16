name="Nishi";
age=18;
x=null;//it means variable x contains a null value
y=undefined;//means value of y cannot be depicted
console.log(x);
isfollow=false;

//var can be re-declared and updated;
//let var cannot be re-declared but can be updated
//const var cannot be re-declared or updated .
let fname="tony stark";//always use keyword let to declare a variable
console.log(fname);
const pi=3.14;

//datatypes
//number,string,null,booolean,undefined,bigint,symbol

//object->sollection of values
const student={
    fullname:"Nishi Shukla",//string
    age:20,//number
    pass:true,//boolean
};
student["newname"]="Nishi";
console.log(student["newname"]);//making changes in a given key of an object
console.log(student.age);
//to access a prticular property of an object
//use student["fullname"] in console
//for-of Loop->travels on every single alphabet of the string
let str = "ApnaCollege";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log(size);

//for in loop->used for objects
let student={
    name:"Gaurav Shukla",
    age:17,
    pass:true,
};
for(let i in student){
    console.log(i);
}

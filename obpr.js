class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("website data")
    }
}
class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new data";
    }
}
let student1 = new User("nishi","abc.com");
let student2 = new User("ayusi","ghi.com");
let admin1=new admin();


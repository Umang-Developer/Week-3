function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ", Your monthly salary is " + Salary);
}

console.log("This is my first programme");

var EmpName = "John";
var EmpSalary = 50000;

// calling of the function Employee 
EmployeeInfo(EmpName, EmpSalary);

// Arrow function
const EmpSkills = (skills) => {
    console.log("Expert in", skills);
};
EmpSkills("Java");

// Calling studentIFO
const student = require('./StudentInfo');
const person = require('./Person');

// Because getName is the function, so we can use ()
console.log("Student Name: " + student.getName());
console.log("Location:" ,student.Location());
console.log(student.dob); // dob is a variable
console.log(student.Studentgrade());
console.log("Grade is", student.Studentgrade(80));

// Creating new person
let Person1 = new person("Jim", "USA", "myemail@gmail.com");
console.log("using Person Module", Person1.getPersonInfo());

console.log("Programme ended");






os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")

// Object initialization
const obj=new Object();
console.log(obj);// print the empty object
obj.name="Aldrik"
console.log(obj);
const obj1=new Object({
    name:"Pawan"
})
console.log(obj1);
// another method to initialize the object
let anotherObj=Object({
    company:"ABC"
})
console.log(anotherObj);

// initialize and print object method

const school={
    name:"CPS",
    established: 2010,
    schoolInfo: function(){
        console.log(`${school.name} was established in ${school.established}`)
    }
}
school.schoolInfo();

// Check the object properties
console.log(school.hasOwnProperty("name"));
console.log(school.hasOwnProperty("year"));

// Create an object taking the reference from another object and iterate all properties
const person={
    gender:"Male"
}
const student=Object.create(person)
student.name="Pawan",
student.company="ABC",
student.salary=15000

for(let key in student){
    console.log(`${key}:`, student[key]);
}

// Deleteing the name from obj object
console.log(delete obj.name);
console.log(obj.name);

// we cant delete the inherited properties of an object
console.log(student.gender);
console.log(delete student.gender);
console.log(student.gender);

// There are 3 ways to create an Object 
// 1. Creating Object with class

class vehicle {
    constructor(name, maker) {
        this.name = name,
        this.maker = maker;
    }
}
const car=new vehicle("Audi Q8", "Audi")
car.start=function(){
    console.log("Car has started....");
}
car.start();

// 2. Using the object literal
const hostel={
    location:"Pune",
    rent:20000
}
console.log(hostel.location);

// 3. Using Object.create method

const coder={
    reading:false,
    info:function(){
        console.log(`My name is ${this.n}. Is he reading? ${this.reading}`);
    }
}
const me =Object.create(coder);
me.n="Pawan"
me.reading=true
me.info();
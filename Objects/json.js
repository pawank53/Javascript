const car={
    "name":"Audi",
    "model":"Q8",
    "price":12400000
}
console.log(car.name);
for(let i in car){
    console.log(`${i}:`,car[i]);
}

const student='{"name":"Pawan", "age":24,"salary":15000}';
console.log(student);
console.log(JSON.parse(student));

const dog={
    name:"seru",
    age:1,
    color:"black"
}
console.log(JSON.stringify(dog));
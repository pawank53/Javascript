// There are two way to create an array
// 1. By using literals
const literalArray=[1, 2 ,3, 4, 5];
console.log("Literal Array:", literalArray);
// 2. By usng constructor
const constructorArray= new Array(1, 2, 3, 4, 32 ,43 ,54 ,65, 76, 12);
console.log("constructor Array:", constructorArray);

// How to check the array length
console.log("Literal array length:",literalArray.length)
console.log("constructor Array length:", constructorArray.length)

console.log(literalArray.join('|', '-'));
console.log("Literal array as string:", literalArray.toString());
console.log("Type of literal array now:", typeof literalArray);
console.log(literalArray.slice(2 ,4));

// Array methods

const arr=[43, 23 ,43, 54, 654 ,43, 23, 23, 43 ,54];
// push method
arr.push(100)
console.log(arr);
// pop method
arr.pop();
console.log(arr);
console.log("unshift method ");
arr.unshift(100);
console.log(arr);
console.log("shift method");
arr.shift(100);
console.log(arr);
console.log("join method");
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log(courses.join('|'));
console.log(arr.join('--'));
console.log("splice method");
arr.splice(1, 1);
console.log(arr);
console.log("slice method");
console.log(arr.slice(3, 5));
console.log("find index method");
console.log(arr.findIndex(ele=> ele>50));
console.log(arr.findIndex(ele=> ele>600));
console.log("Map method");
let mapArra=arr.map(ele=>{
    return ele*10;
})
console.log(mapArra);

console.log("Array Reduce method");
let numbers = [2, 4, 5, 2, 1];
let reVar=numbers.reduce((pre, curr)=>{
    console.log("pre:", pre);
    console.log("curr:", curr);
    console.log(`${pre} + ${curr}:`, pre+curr);
    return (pre - curr);
}, [])
console.log(reVar);

// function declaration

function functionName(param1 , param2){
    // Statements
}

// function expression
const functionExpression= function(param1, param2){
    // statements
}

// calculate square 

const square=function(num){
    return num*num;
}
console.log("Square is :", square(4));

// greetings from functions
const greeting=function(name){
    return `Hello Mr. ${name}.` // return 
}
console.log(greeting("Pawan")); // caling a function

// There are 4 type of functions
// 1 Named function
function namedFunction(){
     console.log("This is named function");
}
namedFunction();

// 2 Anonymous function
let anonymousFunction=function(){
    console.log("This is anonymous function");
}
anonymousFunction();

// 3  Nested function
function my(name){
    function call(){
        console.log("My name is", name);
    }
    return call();
}
my("Pawan");

// 4 Immediate invoked function

let immediateInvokedFunction=function() {
    console.log("This is immediate Invoked Function");
}();


const he=function h() {
    console.log("not a immediate Invoked Function"); // it will not invoked 
};
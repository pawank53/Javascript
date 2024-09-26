// There are two way to create a string 
// 1 By literal
const literalString="String"
console.log(literalString);
// 2 By using Constructor
const constString=new String("String using constructor");
console.log(constString);
// Multiuline String
// By using template literal
const multilineString=`Hi My name is 
Pawan Kumar`;
console.log(multilineString);
// Basic operations on string
// length
console.log("Length:", literalString.length);
// concatination
const s1="java"
const s2="script"
console.log("Concatination:", s1.concat(s2));
// Escape character

const name1="\'name\'"
console.log(name1);
const name2="\"name2\""
console.log(name2);

// Substring method
const substr="Javascript";
console.log("Substring:", substr.substring(0, 2));
// Upper case
console.log(substr.toUpperCase());
// Lower case
console.log(substr.toLowerCase());
// index of 
console.log(substr.indexOf('s'));
// replace
console.log(substr.replace("Java","coffee" ));
// trim
const sp="    JavaScript   "
console.log(sp.trim());
// access character from string 
console.log("Char at 4:", substr.charAt(4));
// comparison
const js="javascript"
const js1="Javascript"
console.log(substr==sp);
console.log(js==substr);
console.log(js1==substr);
// trim start
console.log(sp.trimStart());
// trim end
console.log(sp.trimEnd());
console.log("For of on Array");
let arr=[34, 23, 45, 43, 67 ,54 ,12]
for(let i of arr){
    console.log(`${i}`);
}
console.log("For of on String");
const str="Pawan"
for (const iterator of str) {
    console.log(iterator);
}
console.log("For of on Map");
const mp=new Map([
    ["Name", "Pawan"],
    ["age", 24],
    ["address", "Bihar"]
])

for(let [key, value] of mp){
    console.log(`${key}: ${value}`);
}
console.log("For of on Set")
const set=new Set([12, 22 ,43 ,14, 54 ,22 ,43])
for(let value of set){
    console.log(`${value}`);
}
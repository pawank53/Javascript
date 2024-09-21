const student={
    name:"Pawan",
    age:24,
    salary:15000,
    gender:"Male",
    address: {
        po:"Sonwal",
        dist:"E. Champaran",
        state:"Bihar",
        pincode:845425
    }
}
// sort the keys of an object
const sortedKeys=Object.keys(student).sort();
sortedKeys.forEach(key=>{
    console.log(`${key}:`, student[key]);
})
for(let key in student){
    console.log(student[key]);
}
// Array Object
console.log('Array Object');
const arr=[2, 3, 4 ,65, 34, 13 ,32]
for(let index in arr){
    console.log(`${arr[index]}`);
}
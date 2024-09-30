// Creating map using the constructor
const map1=new Map([
    [1, 2],
    ["name", "pawan"],
    ["class", 10]
])
console.log(map1);
map1.set("address", "Bihar")
console.log(map1);

// Iterate the map usng for each loop
function iterate(key, value){
    console.log(value+" " +key);
}

map1.forEach(iterate);
// Methods of JavaScript Map

// set(key, value): Adds or updates an element with a specified key and value.
// get(key): Returns the value associated with the specified key.
// has(key): Returns a boolean indicating whether an element with the specified key exists.
// delete(key): Removes the element with the specified key.
// clear(): Removes all elements from the Map.
// size: Returns the number of key-value pairs in the Map.
console.log(map1.get("class"));
console.log(map1.has("name"));
console.log(map1.has("salary"));
console.log(map1.delete("address"));
console.log(map1);
console.log(map1.size);
map1.clear();
console.log(map1);
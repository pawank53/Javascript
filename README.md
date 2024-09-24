# Javascript Questions

                                                                   FOR LOOPS QUESTIONS

1. What is a for loop in JavaScript?

    A for loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. It is often used when the number of iterations is known beforehand.

2. What is the basic syntax of a for loop?

    The basic syntax of a for loop consists of three parts: initialization, condition, and increment/decrement.

    Example: for (initialization; condition; increment/decrement) { // code to be executed }

3. How does the initialization part work?

    The initialization part is executed only once before the loop starts. It is typically used to initialize a counter variable.

    Example: for (let i = 0; i < 5; i++) { console.log(i); } Here, let i = 0 is the initialization.

4. What is the purpose of the condition part?

    The condition part is evaluated before each iteration of the loop. If the condition evaluates to true, the loop body is executed. If it evaluates to false, the loop terminates.

    Example: for (let i = 0; i < 5; i++) { console.log(i); } Here, i < 5 is the condition.

5. How does the increment/decrement part work?

    ement/decrement part is executed after each iteration of the loop. It is typically used to update the loop counter variable.




                                                    WHILE LOOP QUESTIONS


1. What is a while loop in JavaScript?

    A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The loop continues to execute as long as the specified condition evaluates to true.

2. What is the basic syntax of a while loop?

    The basic syntax of a while loop includes the while keyword followed by a condition in parentheses and the code block to be executed in curly braces.

3. How does the condition part work?

    The condition part is evaluated before each iteration of the loop. If the condition evaluates to true, the loop body is executed. If it evaluates to false, the loop terminates.

4. What happens if the condition is always true?

    If the condition is always true, the loop will run indefinitely, creating an infinite loop. This can crash your program or browser.

5. How can you break out of a while loop early?

    You can use the break statement to exit a while loop before it completes all its iterations. This is useful if you want to stop the loop based on a condition inside the loop body.

6. How can you skip an iteration in a while loop?

    You can use the continue statement to skip the current iteration and proceed to the next iteration of the loop. This is useful if you want to skip certain iterations based on a condition.

7. Can you nest while loops in JavaScript?

    an nest while loops, meaning you can place one while loop inside another while loop. This allows for more complex iterations and conditions.




                                                                                FOR IN LOOP QUESTIONS


1. What is a for-in loop in JavaScript?

    A for-in loop is a control structure that allows you to iterate over the enumerable properties of an object. This loop is used to access the keys of an object one by one.

2. What is the basic syntax of a for-in loop?

    The basic syntax of a for-in loop includes the for keyword, followed by a variable to hold each key, the in keyword, and the object to iterate over. The code block to be executed for each key is placed inside curly braces.

3. How does the for-in loop work?

    The for-in loop iterates over the enumerable properties of an object. For each property, the loop assigns the property key to the specified variable and executes the code block.

4. What is the difference between for-in and for-of loops?

    for-in loop: Iterates over the enumerable properties (keys) of an object.
    for-of loop: Iterates over the values of an iterable object (such as arrays, strings, maps, etc.).

5. Can a for-in loop be used with arrays?

    Yes, a for-in loop can be used with arrays, but it is not recommended because it iterates over all enumerable properties, including inherited properties. It is better to use a for-of loop or a traditional for loop for arrays.



                                                                        FOR OF LOOP QUESTIONS


1. What is a for-of loop in JavaScript?

    A for-of loop is a control structure that allows you to iterate over the values of an iterable object, such as arrays, strings, maps, sets, and more. This loop is designed to traverse the values directly rather than the keys or indices.

2. What is the basic syntax of a for-of loop?

    The basic syntax of a for-of loop includes the for keyword, followed by a variable to hold each value, the of keyword, and the iterable object to iterate over. The code block to be executed for each value is placed inside curly braces.

3. How does the for-of loop work?

    The for-of loop iterates over the values of an iterable object. For each value, the loop assigns the value to the specified variable and executes the code block.

4. What is the difference between for-of and for-in loops?

    for-of loop: Iterates over the values of an iterable object (such as arrays, strings, maps, etc.).

    for-in loop: Iterates over the enumerable properties (keys) of an object.

5. Can a for-of loop be used with objects?

    A for-of loop cannot be used directly with objects because objects are not inherently iterable. However, you can use a for-of loop in conjunction with Object.keys(), Object.values(), or Object.entries() to iterate over an object’s keys, values, or key-value pairs.



                                            OBJECT



1. What is an object in JavaScript?

    An object is a complex data structure that allows you to store collections of data. It is used to group related data and functionality together, consisting of properties (key-value pairs) and methods (functions).

2. How do you create an object in JavaScript?

    You can create an object using object literals, the new Object() syntax, or by using constructor functions and classes.

3. What is an object literal?

    An object literal is a comma-separated list of key-value pairs wrapped in curly braces. It is the most common way to create objects.

4. How do you access object properties?

    You can access object properties using dot notation or bracket notation. Dot notation is typically used when you know the exact name of the property, while bracket notation is useful when the property name is dynamic or not a valid identifier.

5. How do you add or modify properties in an object?

    You can add or modify properties using dot notation or bracket notation. Assign the new value to the property, whether it exists or not.

6. How do you delete properties from an object?

    You can delete properties using the delete operator, which removes the property from the object.

7. How do objects in JavaScript differ from primitive data types?

    Objects in JavaScript are mutable and can store multiple values as properties and methods, while primitive data types (like numbers, strings, and booleans) are immutable and represent a single value.

8. What is the role of constructors in JavaScript object creation?

    Constructors are functions used to create and initialize objects. When called with the new keyword, a constructor function creates a new object and assigns properties and methods to it based on the parameters passed.

9. What is prototype inheritance in JavaScript?

    Prototype inheritance allows JavaScript objects to inherit properties and methods from another object. Every JavaScript object has a prototype, and objects can access properties and methods defined on their prototype chain.

10. How does the this keyword function in JavaScript objects?

    The this keyword refers to the object on which a method is called. It dynamically binds to the context of the current execution, allowing methods to access and manipulate the object’s properties.

11. How does object destructuring work in JavaScript?

    Object destructuring is a syntax that allows you to extract properties from an object and assign them to variables in a single statement. It provides a concise way to unpack values from objects and can improve code readability.



                                                    JSON


1. What is JSON and why is it used?

    JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is widely used for transmitting data between a server and web application as a text string.

2. How do you create a JSON object?

    You create a JSON object by enclosing key-value pairs within curly braces {}, where keys are always strings and values can be any valid JSON data type (string, number, object, array, boolean, or null).

3. How do you access values in a JSON object?

    You can access values in a JSON object using either dot notation (jsonData.key) or bracket notation (jsonData['key']). Dot notation is used when you know the key beforehand, while bracket notation is useful when the key is dynamic or stored in a variable.

4. How do you loop through a JSON object in JavaScript?

    You can loop through a JSON object using a for...in loop in JavaScript. This allows you to iterate over the keys of the object and access each corresponding value.

    Example:

        for (let key in jsonData) {
            console.log(key + ": " + jsonData[key]);
        }
5. How do you convert a JSON string to a JavaScript object?

    To convert a JSON-formatted string into a JavaScript object, you use the JSON.parse() method. This method takes a JSON string as input and returns a JavaScript object.

    Example:

        let jsonString = '{"name": "John", "age": 30}';
        let jsonObject = JSON.parse(jsonString);
        console.log(jsonObject.name); 

6. What is the difference between primitive data types and objects in JavaScript?

    Primitive data types (Number, String, Boolean, null, undefined, and Symbol) are immutable and store single values, while objects are mutable and can store collections of key-value pairs. Primitives are compared by value, whereas objects are compared by reference.

7. How do you clone an object in JavaScript?

    To clone an object in JavaScript, you can use various methods such as the spread operator {…obj}, Object.assign({}, obj), or for a deep copy, JSON.parse(JSON.stringify(obj)). Each method has different implications based on the depth and complexity of the object.




                                                    Functions


1. What is a function in JavaScript?

    A function is a reusable block of code designed to perform a particular task. Functions can take inputs, process them, and return a result.

2. How do you define a function?

    Functions can be defined using function declarations or function expressions.

3. What is a function declaration?

    A function declaration defines a function with the specified parameters and code block. The function can be called before it is defined due to hoisting.

4. What is a function expression?

    A function expression defines a function inside an expression. The function can be anonymous and is not hoisted, so it cannot be called before it is defined.

5. What are arrow functions?

    Arrow functions provide a shorter syntax for writing functions. They do not have their own this context and are not hoisted.

    Example: const name = (parameters) => { // code to be executed };

6. How do you call a function?

    You call a function by using its name followed by parentheses, which may include arguments.
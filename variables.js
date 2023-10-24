//declaring variables using var. Variables are memory spaces used to store a value'
//variables can be declared in two ways in javascript.

/*the first is declaring variables using the var keyword. variables declared with the var keyword can have their values 
changed in the course and running and running of our application. Let's look at an example below
*/

var name = "Kweku";  //the variable name has value "Kweku initially";
name = "Nana Kweku";
console.log(name) //"the output will be Nana Kwkeu since we have reassigned the value to name";

/*the second way of declaring variable is using the const key word
when you declare a variable using the const keyword the value is fixed and cannot change during the flow of the program.
Let's look at an example 
*/
const fruit = "Apple";
//fruit = "Orange"; 
/**
 Result of our output
 fruit = "Orange";
      ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/test/Desktop/Codebase/90days Backend Portfolio./Nodejs_Fundamentals/variables.js:17:7)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47.

    This is because 
*/
console.log(fruit); 

/**Another way of declaring variables is also using the "let" keyword . this keyword works similarly to var however
 * : Variables declared by let are only available inside the block where they're defined. 
 * Variables declared by var are available throughout the function in which they're declared.
 * Let try an example
*/
let age = 0;
age = 10;
console.log(age) // our output will be 10




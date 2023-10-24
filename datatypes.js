/**Datatypes in Javascript */
/**In Javascript datatypes are assigned to a variable based on the value assigned to the particular variable
 * Unlike other programming languages where the data types are stated during declaration for example int amount = 300 jvascript doesn't make use of such notations
 * Rather it automatically assigns the datatype based on the value store ther in.
 * Below is an example.
 */

const fruit = "Apple";
console.log(typeof(fruit)); // typeof is a an inbuilt variable type checking function which returns the data-type of the variable passed as a parameter.
/**Our output for the above will be a string because the value we assigned to it was a string  */

//let's try creating other types of variables 

const age = 10
console.log(typeof(age));// this would return type array.


const list = [1,"r", 8 ,"youth"];
console.log(typeof(list)); //In javascript arrays are called objects

const date = new  Date();
console.log(typeof(date)); // date is an object so this returns type object 

const addUser = ()=>{
    return 0;
};

console.log(typeof(addUser)); // this returns type function


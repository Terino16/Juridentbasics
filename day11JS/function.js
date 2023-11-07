// Function parameters and arguments
// Parameters are variables used to accept inputs given when the function is called.

// You can specify parameters in the function header, inside the parentheses.

// The following example shows a function that has one parameter called name:

// function greet(name) {
//   // function body
// }
// How you use that name parameter inside the function is up to you.

// You can use the parameter inside the print() function as follows:

// function greet(name) {
//   console.log(`Hello, ${name}!`);
//   console.log("Nice weather today, right?");
// }
// Now whenever you need to call the greet() function, you need to pass an input to fill for the name parameter.

// The input you passed to fill a parameter is called an argument, and here's how to do it:

// greet("Peter");
// The 'Peter' string inside the parentheses when calling the greet() function will be passed as the name parameter.


// function greet(name, weather) {
//   console.log(`Hello, ${name}!`);
//   console.log(`It's ${weather} today, right?`);
// }

// greet("Nathan", "rainy");



// Default parameters
// When defining a function, you can set a default value for any parameter in that function.

// For example, the name parameter in the function below is a default parameter:

// function greet(name = "Nathan") {
//   console.log(`Hello, ${name}!`);
//   console.log("Nice weather today, right?");
// }


// function greet(name = "Nathan", weather) {
//     console.log(`Hello, ${name}!`);
//     console.log(`It's ${weather} today, right?`);
//   }
  
//   greet(undefined, "sunny");


// function greet(name = "John"){
//     console.log(name);
//   }
  
//   greet(null); // null
//   This is one of the common mistakes that beginners make when learning JavaScript. When you use the value null, JavaScript will think you want that value to be empty, so it doesn't replace the value with the default parameter.



///return in functions
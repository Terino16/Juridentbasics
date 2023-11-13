// setInterval:
// The setInterval function is used to repeatedly execute a function or code snippet at a specified time interval. It takes two parameters: the function to be executed and the interval (in milliseconds) at which the function should be called.




// setTimeout function is used to execute a function or code snippet after a specified delay. It takes two parameters: the function to be executed and the delay time in milliseconds.




// In this example, the showAlert function displays an alert, and setTimeout is used to call this function after a delay of 3000 milliseconds (3 seconds).

// Combining setInterval and setTimeout can be powerful for creating time-based behaviors in your JavaScript applications. setInterval is useful for repeatedly executing a function at regular intervals, while setTimeout is used for executing a function once after a specified delay.



// The try and catch blocks in JavaScript are used for error handling. They provide a way to handle potential errors or exceptions that might occur during the execution of your code.

// Here's a simple explanation:

// The try block contains the code that might potentially throw an exception.
// If an exception occurs in the try block, the control is transferred to the catch block.
// The catch block contains the code that should be executed if an exception is thrown.
// The catch block receives an error object, which can be used to get information about the type and details of the error.

// In this example:

// The divide function takes two parameters (a and b) and attempts to perform the division a / b.
// Inside the try block, there's a check to see if b is equal to zero. If it is, an Error object is explicitly thrown with the message "Cannot divide by zero."
// If no exception occurs in the try block, the result of the division is returned.
// If an exception occurs, the control is transferred to the catch block, where the error object is caught and an error message is logged to the console.
// This mechanism allows you to gracefully handle errors in your code, preventing them from crashing the entire application and providing a way to respond to unexpected situations. It's especially useful when dealing with external data, network requests, or any other scenarios where errors might occur.


function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  console.log(divide(10, 2)); 
  console.log(divide(10, 0));
  

  

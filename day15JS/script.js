// 1. function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();
  
//   A: Lydia and undefined
//   B: Lydia and ReferenceError
//   C: ReferenceError and 21
//   D: undefined and ReferenceError
  
//   Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.


//  2.  for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }
// i=3;
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// A: 0 1 2 and 0 1 2
// B: 0 1 2 and 3 3 3
// C: 3 3 3 and 0 1 2

// Callstack: 1stforloop 2ndfoorloop

// task queue: ST(i) ,ST(i),ST(i), ST(i) ,ST(i),ST(i)


// output:  3,3,3 0,1,2

//Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.


// 3. function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';
 

//   This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

// A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.


// 4. function sum(a, b) {
//     return a + b;
//   }
  
//   console.log(sum(1, '2'));


//  let number = 0;
//   console.log(number++);
//   console.log(++number);
//   console.log(number);



// Answer: C
// The postfix unary operator ++:

// Returns the value (this returns 0)
// Increments the value (number is now 1)
// The prefix unary operator ++:

// Increments the value (number is now 2)
// Returns the value (this returns 2)
// This returns 0 2 2.
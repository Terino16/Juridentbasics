// So what happens when you define a function and then invoke it? The JavaScript engine maintains a stack data structure called function execution stack. The purpose of the stack is to track the current function in execution. It does the following:

// When the JavaScript engine invokes a function, it adds it to the stack, and the execution starts.
// If the currently executed function calls another function, the engine adds the second function to the stack and starts executing it.
// Once it finishes executing the second function, the engine takes it out from the stack.
// The control goes back to resume the execution of the first function from the point it left it last time.
// Once the execution of the first function is over, the engine takes it out of the stack.
// Continue the same way until there is nothing to put into the stack.
// The function execution stack is also known as the Call Stack.



// function f1() {
//   // some code
// }
// function f2() {
//   // some code
// }
// function f3() {
//   // some code
// }

// // Invoke the functions one by one
// f1();
// f2();
// f3();


// First, f1() goes into the stack, executes, and pops out. Then f2() does the same, and finally f3(). After that, the stack is empty, with nothing else to execute.

// Ok, let's now work through a more complex example. Here is a function f3() that invokes another function f2() that in turn invokes another function f1().

// function f1() {
//   // Some code
// }
// function f2() {
//   f1();
// }
// function f3() {
//   f2();
// }
// f3();


// Notice that first f3() gets into the stack, invoking another function, f2(). So now f2() gets inside while f3() remains in the stack. The f2() function invokes f1(). So, time for f1() to go inside the stack with both f2() and f3() remaining inside.

// First, f1() finishes executing and comes out of the stack. Right after that f2() finishes, and finally f3().

// The bottom line is that everything that happens inside the function execution stack is sequential. This is the Synchronous part of JavaScript. JavaScript's main thread makes sure that it takes care of everything in the stack before it starts looking into anything elsewhere.

// Great! Now that we understand how synchronous operations work in JavaScript, let's now flip the coin and see its asynchronous side. Are you ready?


// Asynchronous JavaScript – How Browser APIs and Promises Work
// The word asynchronous means not occurring at the same time. What does it mean in the context of JavaScript?

// Typically, executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring NOW. So, you want the code to execute asynchronously.

// In these circumstances, you may not want the JavaScript engine to halt the execution of the other sequential code. So, the JavaScript engine needs to manage things a bit more efficiently in this case.

// We can classify most asynchronous JavaScript operations with two primary triggers:

// Browser API/Web API events or functions. These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more.
// Promises. A unique JavaScript object that allows us to perform asynchronous operations.
// Don't worry if you are new to promises. You do not need to know more than this to follow this article. At the end of the article, I have provided some links so you can start learning promises in the most beginner-friendly way.

// How to Handle Browser APIs/Web APIs
// Browser APIs like setTimeout and event handlers rely on callback functions. A callback function executes when an asynchronous operation completes. Here is an example of how a setTimeout function works:

// function printMe() {
//   console.log('print me');
// }

// setTimeout(printMe, 2000);
// The setTimeout function executes a function after a certain amount of time has elapsed. In the code above, the text print me logs into the console after a delay of 2 seconds.

// Now assume we have a few more lines of code right after the setTimeout function like this:

// function printMe() {
//   console.log('print me');
// }

// function test() {
//   console.log('test');
// }

// setTimeout(printMe, 2000);
// test();
// So, what do we expect to happen here? What do you think the output will be?

// Will the JavaScript engine wait for 2 seconds to go to the invocation of the test() function and output this:

// printMe
// test
// Or will it manage to keep the callback function of setTimeout aside and continue its other executions? So the output could be this, perhaps:

// test
// printMe
// If you guessed the latter, you're right. That's where the asynchronous mechanism kicks in.

// How the JavaScript Callback Queue Works (aka Task Queue)
// JavaScript maintains a queue of callback functions. It is called a callback queue or task queue. A queue data structure is First-In-First-Out(FIFO). So, the callback function that first gets into the queue has the opportunity to go out first. But the question is:

// When does the JavaScript engine put it in the queue?
// When does the JavaScript engine take it out of the queue?
// Where does it go when it comes out of the queue?
// Most importantly, how do all these things relate to the asynchronous part of JavaScript?

// The above image shows the regular call stack we have seen already. There are two additional sections to track if a browser API (like setTimeout) kicks in and queues the callback function from that API.

// The JavaScript engine keeps executing the functions in the call stack. As it doesn't put the callback function straight into the stack, there is no question of any code waiting for/blocking execution in the stack.

// The engine creates a loop to look into the queue periodically to find what it needs to pull from there. It pulls a callback function from the queue to the call stack when the stack is empty. Now the callback function executes generally as any other function in the stack. The loop continues. This loop is famously known as the Event Loop.

// So, the moral of the story is:

// When a Browser API occurs, park the callback functions in a queue.
// Keep executing code as usual in the stack.
// The event loop checks if there is a callback function in the queue.
// If so, pull the callback function from the queue to the stack and execute.
// Continue the loop.
// Alright, let's see how it works with the code below:

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');
    
//     setTimeout(f1, 0);
    
//     f2();
// }

// main();
// The code executes a setTimeout function with a callback function f1(). Note that we have given zero delays to it. This means that we expect the function f1() to execute immediately. Right after setTimeout, we execute another function, f2().

// So, what do you think the output will be? Here it is:

// main
// f2
// f1
// But, you may think that f1 should print before f2 as we do not delay f1 to execute. But no, that's not the case. Remember the event loop mechanism we discussed above? Now, let's see it in a step-by-step flow for the above code.


// **Title: Adding Event Listeners in JavaScript**

// **Introduction:**

// In JavaScript, event listeners are like little "listeners" that you can attach to HTML elements, such as buttons, input fields, or any part of a webpage. These listeners "listen" for specific events, like clicks, keypresses, or mouse movements. When the event occurs, the listener triggers a function that you define. This allows you to make your web pages interactive and respond to user actions.

// **Why Do We Need Event Listeners:**

// Event listeners are essential for creating dynamic and interactive web pages. They enable you to:

// 1. Respond to User Interactions: You can make your webpage respond to user actions like clicks, hover, or key presses.

// 2. Perform Actions: When an event occurs, you can execute specific actions or functions, like changing content, showing pop-ups, or submitting forms.

// **Adding an Event Listener:**

// To add an event listener to an HTML element, you'll need to follow these steps:

// 1. Identify the HTML element you want to listen to, for example, a button.

// 2. Use JavaScript to select that element using its ID, class, or tag name.

// 3. Attach an event listener to the selected element.

// 4. Define a function that will be called when the event occurs.

// **Example 1: Adding a Click Event Listener**

// Let's create a simple example that adds a click event listener to a button. When the button is clicked, an alert message will appear.

// HTML:
// ```html
// <button id="myButton">Click Me</button>
// ```

// JavaScript:
// ```javascript
// // Step 1: Select the button by its ID
// const button = document.getElementById("myButton");

// // Step 3: Attach a click event listener


// button.addEventListener("click", function () {
 
//   alert("Button Clicked!");
// });


// **Example 2: Adding an Input Event Listener**

// In this example, we'll add an input event listener to an input field. As the user types, the input will be displayed in real-time below the input field.

// HTML:
// ```html
// <input id="myInput" type="text">
// <div id="output"></div>
// ```

// JavaScript:
// ```javascript
// const input = document.getElementById("myInput");
// const output = document.getElementById("output");

// input.addEventListener("input", function () {
//   output.textContent = "You typed: " + input.value;
// });
// ```

// **Conclusion:**




{/* <div id="mylinks">
This is my <b>link collection</b>:
<ul>
  <li><a href="www.borland.com">Bye bye <b>Borland</b> </a></li>
  <li><a href="www.microfocus.com">Welcome to <b>Micro Focus</b></a></li>
</ul>
</div> */}

// browser.DomElement("//div[@id='mylinks']").GetProperty("textContent")	
// This is my link collection:


// browser.DomElement("//div[@id='mylinks']").GetProperty("innerText")	
// This is my link collection:Bye bye Borland Welcome to Micro Focus



// browser.DomElement("//div[@id='mylinks']").GetProperty("innerHtml")	
// This is my <b>link collection</b>:
// <ul> 
//   <li><a href="www.borland.com">Bye bye <b>Borland</b></a></li>
//   <li><a href="www.microfocus.com">Welcome to <b>Micro Focus</b></a></li> 
// </ul>
// ### Code Block 2: Nested Async


// ```javascript
console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");
// ```


// **Your Prediction (order):**
// ```
// Start > End > Promise 2 > Timeout 1 > Promise 1 > Timeout 2
// ```


// **Actual Output:**
// ```
// Start
// End
// Promise 2
// Timeout 1
// Promise 1
// Timeout 2
// ```


// **Explanation:**
// ```
// So, as per the previous code, Synchronous runs first, which is 'Start' and 'End'.
// After that, setTimeout and Promise are shifted to MACRO and MICRO tasks successfully. 
// Firstly, due to priority, 'Promise 2' is executed, but after that, as the compiler would not know about 'Promise 1' until it runs 'setTimeout' , 'Timeout 1' is executed.
// Subsequently, 'Promise 1' is executed, followed by 'Timeout 2'. 
// ```



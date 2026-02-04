// ## Task 1: Predict Output of Async Code


// ### Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop


// ### Code Block 1: Basic Async


// ```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");
// ```


// **Your Prediction (order):
// ```
// // Write the order you expect: 1, 4, 3, 2
// ```


// **Actual Output:**
// ```
// 1
// 4
// 3
// 2
// ```


// **Explanation:**
// ```


// So, the synchronous code runs first, which is '1' , followed by setTimeout('2'), which is placed in MACROTASK queue, and the compiler goes further. 
// It then notices Promise, which is then immediately shifted to MICROTASK queue (VIP Lane) , and lastly '4' is executed instantly via call stack. 
// After this, '3' is executed (first priority given to MICROTASK), and eventually '2' is executed.
// ```



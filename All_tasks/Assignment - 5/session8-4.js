// ### Code Block 4: Complex Async Chain


// ```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");
// ```


// **Your Prediction (order):**
// ```
// 1 > 7 > 3 > 4 > 5 > 2 > 6
// ```


// **Actual Output:**
// ```
// 1
// 7
// 3
// 4
// 5
// 2
// 6
// ```


// **Explanation:**
// ```
// '1' and '7' runs first synchronously. This code introduces queueMicrotask, which allows you to manually add a task to the Microtask Queue. It behaves exactly like a Promise callback.
// After '3', '4' and '5' runs (Priority tasks) and then setTimeout callbacks executes '2' and '6'.
// ```

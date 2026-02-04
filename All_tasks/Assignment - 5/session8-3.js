// ### Code Block 3: Multiple Microtasks


// ```javascript
console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");
// ```


// **Your Prediction (order):**
// ```
// A > G > B > D > E > C > F 
// ```


// **Actual Output:**
// ```
// A
// G
// B
// D
// E
// C
// F
// ```


// **Explanation:**
// ```
// In the beignning, 'A' and 'G' runs synchronously.
// Then, Promise function runs, which produces 'B' and 'D', as outer function executes before the nested fucntion, which contains 'C'.
// Before 'C', the next Promise is executed, which contains 'E', as it is a seperate function and not a nested one.
// Lastly, the low-priority setTimeout executes 'F'.
// ```



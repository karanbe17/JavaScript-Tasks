// ### Code Block 5: Async/Await


// ```javascript
console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");
// ```


// **Your Prediction (order):**
// ```
// Start > Async 1 > End > Async 2 > Promise 1 > Timeout
// ```


// **Actual Output:**
// ```
// Start
// Async 1
// End
// Async 2
// Promise 1
// Timeout
// ```


// **Explanation:**
// ```
// Firstly, 'Start' executes. But, after that many would have thought that 'End' would come as rest are async and promise functions. 
// But, async function is synchronous until it hits the await function. So, 'Async 1' runs and then it jumps to 'End'.
// Then, await function runs, which gives birth to 'Async 2', then it jumps to Promise, generates 'Promise 1' and lastly, setTimeout executes 'Timeout 1'.
// ```

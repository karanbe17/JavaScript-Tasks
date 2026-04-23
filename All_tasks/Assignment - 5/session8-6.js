// ## Task 2: setTimeout Examples


// ### Objective
// Complete and understand various setTimeout scenarios.


// ### Exercise 1: Basic setTimeout


// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.


// ```javascript
// // TODO: Implement countWithDelay function
function countWithDelay() {
    setTimeout(() => {
        console.log("1");
    }, 1000);
    setTimeout(() => {
        console.log("2");
    }, 2000);
    setTimeout(() => {
        console.log("3");
    }, 3000);
    setTimeout(() => {
        console.log("4");
    }, 4000);
    setTimeout(() => {
        console.log("5");
    }, 5000);
}

countWithDelay();
// ```


// **Expected Output:**
// ```
// 1  // after 1 second
// 2  // after 2 seconds
// 3  // after 3 seconds
// 4  // after 4 seconds
// 5  // after 5 seconds
// ```

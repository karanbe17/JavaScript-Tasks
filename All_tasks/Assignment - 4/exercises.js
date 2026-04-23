// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

// Output: The answer will be 'Dell', as 'this' keyword refers to brand 'Dell', and 'myBrand' acts as a variable, which logs 'Dell'.

// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

// Output: 1 3 2 - as the promise would push the task to micro queue, and until then '1' an '3' would have been executed.


// Q3. The Broken Chain
Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

// Output: It would return "Error Occured" due to the 'reject' method, and '.catch()' would catch the error.

// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());

// Output: It would return 'Online', as 'this' refers to server, and does not care about the global var Offline.

// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

// Output: The result would be 20. 

// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

// Output: undefined.

// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output: Start > End > Promise > Timeout.

// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

// Output: Undefined, as the arrow function is not inside another function, it is inside an object.

// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

// Output: '5' first, then '10'.

// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

// Output: It would return "Fail" and then the "Recovered" would be passed to '.then(), as the '.catch()' has successfully solved the error.

// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// Output: A > E > C > D > B

// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// Output: 101 and undefined => as null points to global window object and window.id = undefined.

// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

// Output: Caught: Error 1

// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

// Output: undefined.

// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// Output: Caught Error, 10 => .then() block finds error, which jumps to .catch() which returns 'Caught Error' and '10'.


// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// Output: C > A > D > B    

// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

// Output: Cleanup, Done => the .finally() callback is not meant to return data as JS ignores it, and the original result runs.

// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

// Output: Undefined, 10.

// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// Output: End > P1 > P2 > T1 > T2

// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

// Output: Sarah.
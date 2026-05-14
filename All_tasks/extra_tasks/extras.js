// The Challenge
// We are going to build a Robust Fetcher.

// Create a function unreliableFetch() that simulates a request. It should fail 80% of the time (randomly).

// Create a main function getDataWithRetry() that calls this fetcher.

// The Rule: If it fails, wait 1 second, then try again.

// The Limit: Give up after 3 failed attempts.

function unreliableFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.8) {
                resolve("Success!");
            } else {
                reject (new Error ("Failed!"));
            }
        })
    })
}

async function getDataWithRetry(maxRetries) {
    const func = (ms) => new Promise(r => setTimeout(() => (r, ms)) );
    for (let i=0; i<maxRetries; i++) {
        try {
            const res = await unreliableFetch();
            
            console.log(res);
        } catch (error){
            console.error("Error!", error);

            if (i === maxRetries-1) {
                console.log("Max limit Reached! Better luck next time!");
            }

            console.log("Wating 1s to Retry!");
            func(1000);
            
        }
    }
}
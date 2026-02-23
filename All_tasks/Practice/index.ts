const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry<T> (
    asyncfn: () => Promise<T>,
    maxRetries: number = 3,
    delayms: number = 1000
): Promise<T> {
    for (let attempt=1; attempt<=maxRetries; attempt++) {
        try {
            const result = await asyncfn();
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            if (attempt === maxRetries) {
                throw new Error("Limit Reached!");
            }
        }
        await sleep(delayms);
    }
    throw new Error ("Unexpected Error");
}
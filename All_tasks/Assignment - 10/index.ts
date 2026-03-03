// Assignment 

// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.

type User = {
    id: number,
    email: string
}


// 1.
type PaymentState = 
    | {state: "loading"}
    | {state: "success", data: "Success!"}
    | {state: "failed", error: string}


// 2.
function exhauc (state: PaymentState) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        
        case "success":
            return state.data;
        
        case "failed":
            return state.error;

        default:
            const exhaustive: never = state;
            return exhaustive;
    }
}

// 3.
type ApiResponse<T> = 
    | {success: true, data: T}
    | {success: false, error: string, errorCode: number}


// 4.

function isSuccess<T>(res: ApiResponse<T>): res is {success: true, data: T} {
    return res.success;
}

function checkRes(res: ApiResponse<User>) {
    if (isSuccess(res)) {
        return res.data.id;
    } else {
        return `Error: ${res.error}`;
    }
}
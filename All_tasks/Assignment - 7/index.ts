export {};

// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers


let course = 'TypeScript';
const pi = 3.14;

// course = 10;   - Will provide an error, as type number cannot be assigned to type string.


function add(a: number, b: number) {
    return a + b;                               /* automatically returns ':number' */
}



// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

function LengthAny(value: any) {
    console.log(value.length); 
}

LengthAny("Hello"); // (prints 5)
LengthAny(123);     // CRASH! Numbers don't have .length.


function LengthUnknown(value: unknown) {

    // The Fix (Type Guard):
    if (typeof value === 'string') {
        console.log(value.length); // Safe! TS knows it's a string now.
    } else {
        console.log("Not a string, cannot check length.");
    }
}

let myAny: any = 10;
// No error shown, but this will crash the app because numbers don't have .toLowerCase()
// myAny.toLowerCase(); 

let myUnknown: unknown = 10;
// myUnknown.toLowerCase(); // ERROR: TypeScript catches this! 
// "Property 'toLowerCase' does not exist on type 'unknown'."

LengthUnknown("Hello"); // Works
LengthUnknown(123);     // Works safely 


// Assignment 3: Union Types
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely


type Admin = {
    role: 'admin';
    permissions: string[]; // Only Admins have permissions
};

type Customer = {
    role: 'customer';
    loyaltyPoints: number; // Only Customers have loyalty points
};

// Added guest
type Guest = {
    role: 'guest';
    visitCount: number;
};

// Union type
type AppUser = Admin | Customer | Guest; 

// Narrowing function
function handleUser(user: AppUser) {
    switch (user.role) {
        case 'admin':
            console.log(`Admin Permissions: ${user.permissions}`); 
            break;
            
        case 'customer':
            console.log(`Customer Points: ${user.loyaltyPoints}`);
            // console.log(user.permissions); // ERROR! Customers don't have permissions.
            break;

        case 'guest':
            console.log(`Guest visited ${user.visitCount} times.`);
            break;
    }
}

// Testing
const myAdmin: AppUser = { role: 'admin', permissions: ['read', 'write'] };
const myGuest: AppUser = { role: 'guest', visitCount: 1 };

handleUser(myAdmin); // Works
handleUser(myGuest); // Works


// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union


// TYPE

type Orderbase = {
    orderId: string;
    amount: number;
}

type AuditableBase = {
    createdAt: Date;
    createdBy: string;
}

type Order = Orderbase & AuditableBase;

const myOrder: Order = {
    orderId: "ORD-123",
    amount: 500,           /* // Tried commenting out 'amount: 500' above. Error: "Property 'amount' is missing..." because Intersection requires EVERYTHING. */
    createdAt: new Date(),
    createdBy: "Admin_User"
};

// INTERFACE

interface IOrderbase {
    orderId: string;
    amount: number;
}
interface IAuditablebase extends IOrderbase {
    createdAt: Date;
    createdBy: string;
}

const myInterfaceOrder: IAuditablebase = {
    orderId: "ORD-456",
    amount: 1200,
    createdAt: new Date(),
    createdBy: "System"
};

// In my opinion, Interface feels clearer and convenient to use.




// Assignment 5: Type Aliases
// Create reusable aliases for union and intersection types
// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables


type ID = string | number;

let userID: ID = 101;   /* Works */
let orderID: ID = "abc";   /* Works */




// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function
// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
// Create an interface for a Product
// Create a variable that follows this interface


interface BaseUser {
    id: string;
    email: string;
} 

interface ADMINN extends BaseUser {
    role: string;
    permissions: string[];
}

interface CUSTOMER extends BaseUser {
    role: string;
    loyaltyPoints: number;
}

function sendEmail (user: BaseUser) {
    console.log(`Sending mail to ${user.email}`);
}

const adminUser: ADMINN = {
    id: '101',
    email: 'admin@gmail.com',
    role: 'admin',
    permissions: ['read', 'write']
};

const customerUser: CUSTOMER = {
    id: '110',
    email: "customer@gmail,com",
    role: 'customer',
    loyaltyPoints: 100
}

sendEmail(adminUser);
sendEmail(customerUser);



// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum PaymentStates {
    Initiated = "INITIATED",
    Success = "SUCCESS",
    Failed = "FAILED"
}

function pay(state: PaymentStates) {
    console.log(`Payment Status: ${state}`);
}

pay(PaymentStates.Success);


// Assignment 8: Typed Functions
// Write a function with required and optional parameters
// Define return types explicitly
// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter
// Call it with and without the optional argument


// TYPED FUNCTION
function sum (a: number, b: number): number {
    return a + b;
}


// OPTIONAL PARAMETERS

function greet(name: string, title?: string): string {
    if (title) {
        return `${title} ${name}`
    }
    return `${name}`;
}

console.log(greet("Karan"));
console.log(greet("Karan", "Mr."));



// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class


class Employee {
    public name: string;
    
    private salary: number;
    
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public getSalarySlip(): string {
        return `${this.name} earns $${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, "Management");
    }

    public getDepartment(): string {
        return `Manager of ${this.department}`;
    }

}

const emp = new Employee("Alice", 50000, "IT");

console.log(emp.name); // Works

console.log(emp.getSalarySlip()); // Works (Public method accessing private data)
// Assignment - 1

// 1.
type IsNumber<T> = T extends number ? true : false; 

type num = IsNumber<number>;  /* Returns TRUE! */
type str = IsNumber<string>   /* Returns FALSE! */

// 2.

type User = {
    id: number,
    email: string
}
type ExtractEmail<T> = T extends {email: infer X} ? X : never;

type email = ExtractEmail<User>;


// Assignment - 2

type FirstArgument<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;

function getUser(id: string, active: boolean) {};

type Return = FirstArgument<typeof getUser>;

// Assignment - 3

function format (value: number): string;
function format (value: Date): string;

function format (value: number | Date): string {
    if (value instanceof Date) {
        return value.toLocaleDateString();
    } else {
        return value.toFixed(2);
    }
}

console.log(typeof(format(101)));  /* string */
console.log(typeof(format(new Date))); /* string */


// Assignment - 4

abstract class Service<T> {
    abstract execute (id: number): T
}

class UserService extends Service<User> {
    execute (id: number): User {
        return {
            id,
            email: "abc@gmail.com"
        }
    }
}


// Assignment - 5
// 1.

type User20 = {
    id: number,
    name: string
}

type UserRepoConstructor = new (data: string) => UserRepository;  /* The Constructor Type */

class UserRepository {
    constructor(public data: string) {}

    getData(id: number): User20 {
        return { id, name: "Karan"};
    }
}

// 2.

type User1 = {
    id: number,
    name: string
}


type UserFormatter = { 
    (user: User1): string;
}

const username: UserFormatter = (user) => {
    return `User: ${user.name.toUpperCase()}`
}

const userObj: User1 = { id: 101, name: "Karan"};
console.log(username(userObj));   /* User: KARAN */
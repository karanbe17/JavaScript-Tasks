// Assignment - 1

function wrapInArray<T> (value: T): T[] {
    return [value];
}

interface PaginatedResponse<T> {
    items: T[];
    total: number;
}

// Assignment - 2

function activateUser<T extends { isActive: boolean }> (obj: T) {
    console.log(obj.isActive);
}

function user<T extends { id: string , email: string }> (obj1: T) {
    console.log(obj1.id);
    console.log(obj1.email);

    // console.log(obj1.isActive);   - Produces Error!
}


// Assignment - 3

function updateField<T, K extends keyof T> (obj2: T, key: K, value: T[K]) {
    obj2[key] = value;
}

interface User1 {
  id: number;
  name: string;
  isActive: boolean;
}

const myUser: User1 = {
  id: 1,
  name: "Alice",
  isActive: true
};

updateField(myUser, "name", "Bob");       
updateField(myUser, "isActive", false);


// updateField(myUser, "isActive", 2);  - Generates Error!


// Assignment - 4

const adminUser = {
    id: "0",
    name: "Guest",
    email: "guest@test.com"
}

type adminUserType = typeof adminUser;

// const adminUser = {
//     id: "0",
//     name: "Guest",
//     email: "guest@test.com",          
//     role: "ADMIN"
// }                            

// type adminUserType = typeof adminUser;     - Here, when I added a new property, the type changed. 


// Assignment - 5

// 1.
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type ReadOnlyUser = Readonly<User>;


// 2.
type StringifiedUser = {
    [K in keyof User]: string;
}


// 3.
type OptionalAndNullableUser = {
    [K in keyof User]: User[K] | null;
}


// Assignment - 6

type User10 = {
    email: string;
    isActive: boolean;
    name: string;
    id: string;
}

// 1.
type UserPublicProfile = Omit<User10, "email" | "isActive">;

// 2.
type UserDictionary = Record<string, User10>;


// Assignment - 7

type User2 = {
    id: string | null
    name: string | null
    email: string | null
    role: "ADMIN" | "CUSTOMER" | null
    isActive: boolean | null
}
// 1.
type ReadonlyByKeys<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;

// 2.
type NonNullableFields<T> = {
    [K in keyof T]: NonNullable<T[K]>;
}

type User2Readonly = ReadonlyByKeys<User2, "id">;  /* DONE! */
type User2NonNullable = NonNullableFields<User2>;  /* Success! */
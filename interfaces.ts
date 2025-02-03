// creating your own user-defined data types

export interface User {
    name: string;
    age: number;
    id: number;
    email: string;
    member_since?: number;
}


interface Owner extends User {
    admin_id: number;
}

// interfaces can have methods
export interface Login {
    login(): User;
}


let paul: User = {name: 'Pual', age: 21, id: 5, email: 'paul@comp.com'};
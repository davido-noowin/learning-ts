// `npx tsc` creates a js file based on the ts file (compile the typescript file)

// first_name = 10; -> unable to change type of first_name into int


/* STRINGS */
// type inference
let first_name = 'John';

// type declaration
let lname : string = 'Smith';
let new_name = lname.toLowerCase();
console.log(new_name);


/* NUMBERS */
let age : number;

age = 25;
age = 25.5;

let dob : string = "25";

let result = parseInt(dob);


/* BOOLEANS */
// let is_valid : boolean -> boolean declarations are undefined
let is_valid : boolean = true;


/* ARRAYS */
let string_list : string[];
let another_string_list : Array<string>;

let number_list : Array<number>;
number_list = [1, 2, 3, 4, 5];
number_list.push(10);
// number_list.push("y"); -> only numbers are allowed to be appended
let filtered_result = number_list.filter((num)=> num > 2);
console.log(filtered_result);


/* ENUM */
const enum Color {
    Red,
    Green,
    Blue,
}

let c : Color = Color.Blue;


/* TUPLE */
let swap_numbers : [number, number];

function swap(num1 : number, num2 : number) : [number, number] {
    return [num2, num1];
}

swap_numbers = swap(10, 20);
console.log(swap_numbers);


/* ANY */
// no exceptions thrown, it accepts any datatypes
let department : any;
department = "Number1";
department = 10;

/* VOID */
// returns nothing
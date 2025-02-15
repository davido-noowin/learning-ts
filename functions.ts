/* NAMED FUNCTIONS */
function add(num1:number, num2:number): number {
    return num1 + num2;
}

console.log(add(2, 3));


/* ARROW FUNCTIONS */
const sub = (num1:number, num2:number): number => {
    return num1 - num2;
}

console.log(sub(2, 3));


/* OPTIONAL PARAMETERS */
// put a question mark (?) after the parameter
function add2(num1:number, num2:number, num3?:number): number {
    return num3? num1 + num2 + num3 : num1 + num2;
}


/* DEFAULT PARAMETERS */
function add3(num1:number, num2:number, num3:number = 10): number {
    return num1 + num2 + num3;
}


/* REST PARAMETERS */
// ... -> rest operator
function add4(num1:number, num2:number, ...num3:Array<number>): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log((add4(2, 3, ...[6, 7, 8, 9])));
console.log((add4(2, 3, 5, 6, 7, 8, 9, 10)));


/* GENERIC FUNCTION */
function getItems<T>(items:T[]): T[] {
    return new Array<T>().concat(items);
}

// OR
function getItems2<Type>(items:Array<Type>): Array<Type> {
    return new Array<Type>().concat(items);
}

let concat_num = getItems([1, 2, 3, 4, 5]);
console.log('concat_num:', concat_num);

let concat_string = getItems(['t', 'w', 'i', 'c', 'e']);
console.log('concat_string', concat_string)

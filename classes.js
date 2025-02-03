"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        // ! = this expression cannot be null or undefined here, so don't complain about the possibility of it being null or undefined
        // private or #
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    // getters and setters
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // class method
    getNameWithAddress() {
        return `${this.name}, ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// inheritance
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager that stays at ${this.address}`;
    }
}
let john = new Employee(1, 'John', '4420 Beach BLVD');
let mike = new Manager(2, 'Mike', '123 Sesame Street');
// john.id = 1;
// john.name = 'John';
// john.address = '4420 Beach BLVD'
console.log(john);
console.log(john.getNameWithAddress());
console.log(mike.getNameWithAddress());
console.log(mike.empId);
mike.empId = 100;
console.log(mike.empId);

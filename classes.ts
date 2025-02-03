class Employee {
    // ! = this expression cannot be null or undefined here, so don't complain about the possibility of it being null or undefined
    // private or #
    #id: number;

    protected name: string;
    
    protected address: string;

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name:string, address: string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    // getters and setters
    get empId(): number {
        return this.#id;
    }

    set empId(id: number){
        this.#id = id;
    }
    
    // class method
    getNameWithAddress(): string {
        return `${this.name}, ${this.address}`
    }
}

// inheritance
class Manager extends Employee {
    constructor(id: number, name:string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager that stays at ${this.address}`
    }
}

let john = new Employee(1, 'John', '4420 Beach BLVD');
let mike = new Manager(2, 'Mike', '123 Sesame Street')
// john.id = 1;
// john.name = 'John';
// john.address = '4420 Beach BLVD'
console.log(john);
console.log(john.getNameWithAddress());
console.log(mike.getNameWithAddress());
console.log(mike.empId);
mike.empId = 100;
console.log(mike.empId);

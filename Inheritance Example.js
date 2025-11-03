


class Person {
    name;
    age;
    email;

    constructor(name, age, email) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    gerPersonInfo() {
        return `${this.name} ${this.age} ${this.email}`
    }

    introduce() {
        return `My name is ${this.name}`
    }
}

class Employee extends Person {
    employeeId;
    department;
    #salary; // private field

    constructor(name, age, email, employeeId, department, salary) {
        super(name, age, email);
        this.employeeId = employeeId;
        this.department = department;
        this.#salary;
    }

    // Encapsulated access to salary
    setSalary(sal) {
        this.#salary = sal;
    }

    getSalary() {
        return this.#salary;
    }

    work() {
        return `Working in ${this.department}`;
    }

    // Overriding parent method and including Employee info
    getPersonInfo() {
        return `${super.gerPersonInfo()} | Dept: ${this.department} | ID: ${this.employeeId} | Salary: ${this.getSalary()}`;
    }
}



const emp1 = new Employee("Alice", 30, "alice@email.com", 101, "HR", 50000);

console.log(emp1.getPersonInfo());
// Alice 30 alice@email.com | Dept: HR | ID: 101 | Salary: 50000

console.log(emp1.work());
// Working in HR

console.log(emp1.getSalary());
// 50000

emp1.setSalary(55000);
console.log(emp1.getSalary());
// 55000




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



class Manager extends Employee {
    #bonus; // Private field, encapsulated
    team;   // Public field

    constructor(name, age, email, employeeId, department, salary, bonus, team = []) {
        super(name, age, email, employeeId, department, salary);
        this.#bonus = bonus;   // Private: only accessible via getter/setter
        this.team = team;      // Public: list of employees the manager manages
    }

    // Encapsulation: controlled access to private bonus
    setBonus(amount) {
        this.#bonus = amount;
    }

    getBonus() {
        return this.#bonus;
    }

    // Add an employee to the manager's team
    addTeamMember(employee) {
        this.team.push(employee);
    }

    // Override getPersonInfo to include bonus and team size
    getPersonInfo() {
        return `${super.getPersonInfo()} | Bonus: ${this.getBonus()} | Team Size: ${this.team.length}`;
    }

    manage() {
        return `Managing a team of ${this.team.length} employees in ${this.department} department.`;
    }
}


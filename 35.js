class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}

class Employee extends User{
    getFull() {
        return this.#name + ' ' + this.#surn;
    }
}

let employee = new Employee;

employee.setName("dima");
console.log(employee.getName());
employee.setSurn('test');
console.log(employee.getSurn())

console.log(employee.getFull()) //error

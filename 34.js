class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	
	getName() {
		return this.name;
	}
	getSurn() {
		return this.surn;
	}

    sayHello(){
        alert(this.#helloMsg());
    }

    #helloMsg(){
        return "hi";
    }
}

class Employee extends User{
    constructor(name, surn, age, salary){
        super(name, surn);
        this.age = age;
        this.salary = salary;
    }

    getAge(){
        return this.age;
    }

    getSalary(){
        return this.salary;
    }

    sayHello(){
        alert(this.#helloMsg());
    }
}
class User {
    setName(name){
        this.name = name 
    }

    getName(){
        return this.name;
    }

    setAge(age){
        this.age = age;
    }

    getAge(){
        return this.age
    }
}

class Employee extends User{
    setSalary(salary){
        this.salary = salary
    }

    getSalary(){
        return this.salary;
    }

    setAge(age){
        if(age >= 18 && age <= 65){
            this.age = age;
        } else {
            throw new Error("age error");
        }
    }

}

let employee = new Employee;

employee.setAge(15);

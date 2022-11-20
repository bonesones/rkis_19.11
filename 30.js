class User {
    setName(name){
        this.name = name 
    }

    getName(){
        return this.name;
    }

    
}

class Employee extends User{
    setSalary(salary){
        this.salary = salary
    }

    getSalary(){
        return this.salary;
    }

}

let employee = new Employee;
employee.setName('dima')
employee.setSalary(1400);

console.log(employee.getName(), employee.getSalary());
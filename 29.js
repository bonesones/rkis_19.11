class User {
    setName(name){
        this.name = name 
    }

    getName(){
        return this.name;
    }
}

class Employee extends User{

}

let employee = new Employee;
employee.setName('dima')

console.log(employee.getName());
class User {
    setName(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

class Employee extends User {
    setName(name) {
        if (name.length > 0) {
            this._name = name;
        }
    }
}
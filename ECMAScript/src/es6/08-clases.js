class user {
    // métodos
    greetion() {
        return 'hello';
    }
}
const gndx = new user();
gndx.greetion();

// constructor

class User {
    constructor() {
        console.log('nuevo usuario');
    }
    greetion() {
        return 'hello';
    }
}

const david = new User();

// this

class user {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // métodos
    speak() {
        return 'Hello'
    }
    greetion() {
        return `${this.speak()} ${this.name}, ${this.age} y ${this.country}`;
    }

}

const andres = new user('andres', 27, 'Colombia');
console.log(andres.greetion())

// setters and getters

class user {
    
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // métodos
    speak() {
        return 'Hello'
    }
    greetion() {
        return `${this.speak()} ${this.name}, ${this.age} y ${this.country}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
    get uCountry() {
        return this.country;
    }
    set uCountry(n) {
        this.country = n;
    }
}

const admin = new user('Andrés', 27, 'Colombia');
console.log(admin.uAge);
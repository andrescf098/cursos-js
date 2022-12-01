class user {
    
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // métodos
    #speak() {
        return 'Hello'
    }
    greetion() {
        return `${this.speak()} ${this.name}, ${this.age} y ${this.country}`;
    }
    get uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
    get #uCountry() {
        return this.country;
    }
    set uCountry(n) {
        this.country = n;
    }
}

const admin = new user('Andrés', 27, 'Colombia');
console.log(admin.uAge);
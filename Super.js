class Animal {
    #isAlive;
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.#isAlive = true;
    };
    eat(food) {
        return `${this.name} is eating ${food}.`;
    }
    sleep(hours) {
        return `${this.name} is sleeping for ${hours} hours.`;
    }
    makeSound() {
        return `${this.name} makes a sound.`;
    }
    getInfo() {
        return `Name: ${this.name}, Species: ${this.species}, Alive: ${this.alive}`;
    };
};

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'German Shepherd'); // super calls parent class constructor and assignes values
        this.breed = breed;
        this.#loyalityLevel = 10;
    }
    #loyalityLevel;  // private 

    makeSound() {  // overiding the method
        return `${this.name} barks. Woof Woof!`;
    }
    WagTail() {
        return `${this.name} is wagging its tail happily.`;
    }
    getInfo() {
        return ` ${super.getInfo()} Loyalty Level: ${this.#loyalityLevel}`;
        // ${super.getInfo()}  -> it will get result from getInfo from parent

        // getInfo() in Dog class will add result from parents getInfo and add Loyalty Level: ${this.#loyalityLevel} and retun 
        //Name: ${this.name}, Species: ${this.species}, Alive: ${this.alive} Loyalty Level: ${this.#loyalityLevel}
    };
}
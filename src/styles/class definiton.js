class Animal{
    count = 0;
    constructor(name,legs,nutrition){
        this.name = name;
        this.legs = legs;
        this.nutrition = nutrition;
        Animal.count++;
    }
    die(){
        Animal.count--;
    }
    static get number(){
        return Animal.count;
    }
}
Animal.count = 0;
let a;
// we first define 10 animals
for (let i = 0; i < 10;++i){
    a = new Animal('Jsas',4,"carnivore");
}

// and then whe we get the number
console.log(Animal.number);

a.die(); //one of our animals dies
console.log(Animal.number); // and we are left with 9 animals



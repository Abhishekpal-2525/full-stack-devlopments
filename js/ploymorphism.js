//we have one method available in multiply classes that call poly

//poly is basically you have method / property multiple Object.

class Vehicle{
    run(){
        console.log("vechicle is running");
        
    }
}

class car1{
    run(){
        console.log("car1 is running");
        
    }
}

class Truck{
    run(){
        console.log("Truck is running");
        
    }
}

let v1=new Vehicle();
let v2=new car1();
let v3=new Truck();

v1.run();

// This is a different example of poly
class Animal{
    speaks(){
        console.log("Animal speaks");
        
    }
}

class Dog extends Animal{
    speaks(){
        console.log("Dog barks");
        
    }
}

class cat extends Animal{
    speaks(){
        console.log("cat meows");
        
    }
}

function makesound(Animal){
    Animal.speaks();
}

let Dog =new Dog();
let cat = new cat();

makesound(Dog)
makesound(cat)


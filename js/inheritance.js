// class Car{
//     constructor(n,b){
//         this.name = n;
//         this.brand = b;
//     }
//     showDetails(){
//         console.log(`${this.name} ${this.brand}`);
//         return `${this.name} ${this.brand} ${this.buyer}`
        
//     }
// }

// class SUV extends Car{
//     constructor(x,y,z){
//         super(x,y);
//         this.buyer = z;
//     }
// }
// // let c1 = new SUV("defender", "landrover","abhishek");
// // console.log(c1);


// class miniSUV extends SUV{
//     constructor(x,y,z,m){
//         super(x,y,z)
//         this.look=m
//     }
// }

//  let c1 = new miniSUV("defender","lanrover","abhishek","sporty");
// console.log(c1);


// class Car2{
//     #owner;
//     constructor(x,y,z){
//         this.name=x;
//         this.barnd=y;
//         this.#owner=z;
//     }
//     showPrivateVariable(){
//         return `this is private variable ${this.#owner}`
//     }
// }
// let c2= new Car2("defender","landrover","abhishek")
// console.log(c2.showPrivateVariable());


class bike{
    constructor(l,p){
      this.look= l;
      this.price=p;
    }
    showtable(){
    console.log(`${this.look} ${this.price}`)
    return `${this.look} ${this.price} ${this.customer}`
}
    
    
}

class suv extends bike{
    #customer
    constructor(x,y,z){
        super(x,y)
        this.#customer= z;

    }

}
class minisuv extends suv{
    constructor(x,y,z,a){
        super(x,y,z)
        this.structure =a

    }
}
let r =new minisuv('super',40000,'abhishek','awsome')
console.log(r);


 
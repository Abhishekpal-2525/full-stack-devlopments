//  function Car(name,model,year){
//     this.name = name,
//     this.model = model,
//     this.year = year
//  }

//  const car1= new Car('toyata','toyata','2009')
//  console.log(car1);
 
//this called function method because inside of object we write function
// const person = {
//     name: 'reena',
//     myFunc: function(){
//         console.log(this.name);  
//     }
// }

// person.myFunc();

// function myName(){
//     console.log();
    
// }

let person2 = {
    name: 'rahul',
};
let person3 = {
    name: 'monjo',
};

function myFunctions(age, city){
    this.age = age;
    this.city = city;
}

myFunctions.call(person2, 24, 'pune');    // myFunction.apply(person2,[24,'pune']);
console.log(person2);

// call = normal (,)
// apply = array

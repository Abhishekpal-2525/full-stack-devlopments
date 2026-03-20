// let myPromise = new Promise((reslove,reject)=>{
       
//     let success=true;

//     if(success){
//       reslove ("hello world")
//     } else{
//       reject("nothing")
//     }

//  })

//  myPromise
//  .then(result=> console.log(result))
//  .catch(error=> console.log(error))
// async function getData(){

//   let promise = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Data Loaded"),2000);
//   });

//   let result = await promise;

//   console.log(result);
// }

// getData();
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(users=>{
    users.map(users=>console.log(users.title))
  })






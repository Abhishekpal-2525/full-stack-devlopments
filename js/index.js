// const arr=[1,2,3,4,5,]

// const intervalvalue=0;

// const newarr=arr.reduce((accumulator,currentvalue)=> accumulator + currentvalue , intervalvalue )

// console.log(newarr);


// function formal(roll){
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             console.log('roll:'+roll);
//             resolve("sucess")
//           },3000);
//      });
// }

 let key =prompt('Enter key you want to set')
 let value =prompt('Enter key you want to set')
   
 localStorage.setItem(key,value)
  

localStorage.getItem(key)
console.log('this is the value ${key} ${localStorage.setItem(key,value)}');

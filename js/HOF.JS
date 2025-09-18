// let arr =[1,7,7,3,2,7,8,4,7,0];

// let newArr=[];
// arr.map((Elements,index, self)=>{
//     if(element!=7){
//         newArr.push(elements);
//         return elements
//     };
// })
// console.log('newArr:', newArr);

// let filterData=arr.filter((elements)==>)   
    
// let arr=[,2,3,4,5,6,7,8,9,10]

// let val = arr.reduce((acc,cur)=>{
//      return acc+=cur

// },0);
// console.log(val);

// const items =[
//     {name: 'book', price:300}
//     {name: 'pen', price:50}
//     {name: ''}
// ]

// const fruits= ['Apple','orange','Apple','banana','orange','Apple'];
 
// const val=fruits.reduce((acc,fruits)=>{
//     acc[fruits] = (acc[fruits]||0) +1;
//         return acc;
// },{}); 

// console.log(val)

let str="amsaaii"

let funcStr= str.split('');
 console.log('-> funcStr:',funcStr);

 const countString = funcStr.reduce((acc, string)=>{
    acc[string]=(acc[string] ||0)+1;
    return acc;
 },{});
 console.log(countSt)
 

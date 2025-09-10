let arr=[,2,3,4,5]

arr.push(6,7,8);
arr  
Array.prototype.pushpa=function(value){
    let index=this.length;
    this[index]=value;
}

arr.pushpa(9,10,11);
arr 

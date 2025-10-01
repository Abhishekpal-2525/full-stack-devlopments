const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function(button){
 button.addEventListener('cilck',function(e){
    console.log(e);  
    console.log(e.target);
    if(e.target.id === 'grey'){
        body.style.backgroundColor=e.target.id;
    }
    
    

 })
});

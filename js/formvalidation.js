  let fname = document.getElementById('fname');
  let passw = document.getElementById('passw');
 
 function formvalidate(){
   
      if(fname.value == ""){
        document.getElementById('namepass').innerHTML ='user name is empty';
      }  
      else if(fname.value.length < 4){
        document.getElementById('namepass').innerHTML='you must 4 character';
      }

      
      if (passw.value == ""){
        document.getElementById('password').innerHTML ='password name is empty';
      }

    return false;
 }
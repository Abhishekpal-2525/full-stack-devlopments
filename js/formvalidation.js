
 function validateForm(){
  document.getElementById('userError').innerHTML=""; 
  document.getElementById('userError').innerHTML="";
  
  let username = document.getElementById('username');
  let password = document.getElementById('password');
 
   
      if(username.value == ""){
        document.getElementById('userError').innerHTML ='user name is empty';
        return false;
      }  
      // else if(username.value.length < 4){
      //   document.getElementById('userError').innerHTML='you must 4 character';
      //   return false;
      // }

      if(password.value == ""){
        document.getElementById('passError').innerHTML ='password name is empty';
        return false;
      }

    return true;
 }
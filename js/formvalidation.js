
 function validateForm(){
  document.getElementById('userError').innerHTML=""; 
  document.getElementById('emailError').innerHTML="";
  document.getElementById('userError').innerHTML="";
  
  let username = document.getElementById('username');
  let password = document.getElementById('Password');
  let email = document.getElementById('email')
 
   
      if(username.value == ""){
        document.getElementById('userError').innerHTML ='user name is empty';
        return false;
      }  
      else if(username.value.length < 4){
        document.getElementById('userError').innerHTML='you must 4 character';
        return false;
      }
      if (!email.includes("@")) {
        document.getElementById('emailError').innerHTML ='please enter a valid email'
        return false;
      }

      if(password.value == ""){
        document.getElementById('passError').innerHTML ='password name is empty';
        return false;
      }

    return true;
 }
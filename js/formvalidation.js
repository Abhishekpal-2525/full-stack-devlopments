function myRadiofunc(e){
    e.PreventDefault();
    let radioData = document.myRadio.contant;
    console.log(radioData);
    for (let i=0; i<=radioData.length; i++){
        if(radioData[i].checked === true){
            document.getElementById('message').innerHTML=""
            return true;
        }
    }
    document.getElementById('message').innerHTML= "please Select anyone";
    return false;
}

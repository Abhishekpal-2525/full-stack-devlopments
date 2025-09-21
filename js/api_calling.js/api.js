// sync formate
 const BASE_URL = "https://jsonplaceholder.typicode.com/comments";

// const APLCALLING = ()=>{
//     fetch(BASE_URL).then((res)=>res.json()).then((res)=>console.log(res)).catch((error)=>console.log(error));

// }

// APLCALLING();

const APICALLING = async()=>{
      try {
        let date = await fetch(BASE_URL);
        let res = await date.json();
        console.log('res:',res); 
        alert(
            `id ${res.id}
            type ${res.type}
            setup ${res.setup}
            punchline ${res.punchline}
            `
        )
      }
      catch (error){
        console.log('error:',error); 
      }
}
APICALLING()
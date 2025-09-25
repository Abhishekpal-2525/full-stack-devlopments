const API_BASE_URL ='https://fakestoreapi.com/products'

const product_fetch =()=>{
    fetch(API_BASE_URL) 
    .then((res)=>res.json)
    .then((res)=>Render_ui(res))
    .catch((err)=>console.log(err))
}
const Render_ui = (value)=>{
 let maindiv = document.getElementById('maincontainer')
  value.map((element,index)=>{
   let cardiv = document.createElement('div');

   let img = document.createElement('img')
   let id = document.createElement('h5')
   let title= document.createElement('h3')
   let price= document.createElement('h4')
   let description= document.createElement('p')
   let category= document.createElement('p')

   img.src =element.image;
   id.innerText= element.id;
   title.innertext= element.title;
   price.innertext= element.price;
   description.innertext= element.description;
   category.innertext= element.category; 
   
   cardiv.className = "card-div";
   cardiv.append(img,id,title,price,description,category);
   maindiv.append(cardiv);
  });
}

const API_BASE_URL ='https://fakestoreapi.com/products'

const product_fetch =()=>{
    fetch(API_BASE_URL) 
    .then((res)=>res.json)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
const Render_ui

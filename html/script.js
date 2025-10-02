const AI_BASE_URL= 'https://fakestoreapi.com/products'

const product_fetch = ()=>{fetch(AI_BASE_URL)
    .then((res)=>res.json())
    .then((res)=> ender_ui(res))
    .catch((err)=>console.log(err)
    )
}

const ender_ui =(value)=>{
    let main = document.getElementById('main')
    value.map((element,index)=>{
        let catdiv = document.createElement('div');
        let img = document.createElement('img')
        let price = document.createElement('h3')
        let title = document.createElement('h3')
        
        img.src = element.image;
        price.innerText = element.price;
        title.innerText = element.title;

        catdiv.className ="cat-div";
        catdiv.append(img,price,title);
        main.append(catdiv);

    });
}
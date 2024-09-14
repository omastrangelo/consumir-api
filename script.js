"use strict"

let url = "https://fakestoreapi.com/products";

async function mostrarData(){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);

    data.forEach(data => {
        document.getElementById("contenedor").innerHTML +=
        `
 
        <div class="card" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.category}.</p>
        <p class="card-text">$ ${data.price}.</p>
        <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        </div>
        
        `
        
    });
    
}

mostrarData()
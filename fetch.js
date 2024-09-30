let contenedor = document.getElementById("contenedor");


fetch("https://fakestoreapi.com/products")
    //    .then(resp => console.log(resp))
    .then(resp => resp.json()) //convierte en json

    .then(data => {
        data.forEach(prod => {
            contenedor.innerHTML += `<h2> Nombre:  ${prod.title} </h2>
                                     <h4> Precio:  ${prod.price} </h4>`
        })                           
        })
            // .then(data => console.log(data)) //muestra la data
            .catch(error => console.log(error)) //muestra el error

fetch("https://hp-api.onrender.com/api/characters")
    .then(resp => resp.json())
    .then(data => {
        const firstTenCharacters = data.slice(0, 10); // Limita a los primeros 10 personajes
        firstTenCharacters.forEach(prod => {
            // Crear un nuevo div para cada personaje
            const card = document.createElement("div");
            card.classList.add("card");

            // Añadir contenido a la tarjeta
            card.innerHTML = `<h2> Nombre: ${prod.name}</h2>
                              <h4> Casa: ${prod.house}</h4>`;

            // Añadir la tarjeta al contenedor
            contenedor.appendChild(card);
        });
    })

//promesas()
// .then(resp => console.log(resp)) //SI ES EXITOSA
// .catch(err => console.log(err)) //SI HAY ERROR LO CAPTURAMOS
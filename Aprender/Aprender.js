let listaPokemon = [];

fetch("Aprender.json")
    .then(res => res.json())
    .then(data => listaPokemon = data)
    .catch(error => console.error("Error cargando el JSON:", error));

function mostrarPokemon(indice) {
    if (listaPokemon.length > 0) {
        const p = listaPokemon[indice];
        document.getElementById("info").innerHTML += 
            `<strong>${p.nombre}</strong> está en nivel ${p.nivel} y es de tipo ${p.tipo} <br>
             <img src="${p.imagen}" alt="${p.nombre}"><br><br>`;
    } else {
        console.log("El JSON todavía no cargó");
    }
}

function mostrarPokemonAleatorio() {
    if (listaPokemon.length > 0) {
        const indice = Math.floor(Math.random() * listaPokemon.length);
        mostrarPokemon(indice);
    }
}

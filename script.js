//Carga del dom y de la api
document.addEventListener("DOMContentLoaded", () => {
    fetchApi()
})


//Template tapa - Boton de busqueda principal
const buscarPokemons = document.getElementById("buscarPokemons")
const contenedor = document.getElementById("contenedor")
const template = document.querySelector("#tapa-pokedex")

buscarPokemons.addEventListener("click", () => {
    contenedor.appendChild(template.content)

    const btnBuscar = document.querySelector("#busqueda")
    btnBuscar.addEventListener("click", findPokemon)    
})

//Funcion asincrona de la api
const fetchApi = async () => {
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const datosRespuesta = await respuesta.json()
        console.log(datosRespuesta);
        arrayName = datosRespuesta.results.map(n => n.name)
        console.log(arrayName);
    } catch (error) {
        console.log(error);
    }
}
let arrayName = []

const findPokemon = async () => {
    let input = document.querySelector(".barraBuscar").value
    if (arrayName.includes(`${input}`)) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        const datos = await resp.json()
        console.log(datos);

        let linkImg = datos.sprites.front_default
        let img = document.getElementById("pantalla")
        img.setAttribute("src", linkImg)

        let name = datos.name
        let id = datos.id
        // let type = type.types
        let baseExp = datos.base_experience

        const lista = document.getElementById("lista")
        lista.innerHTML = 
        `<h2>Nombre: ${name}</h2> 
        <h2>N° Id: ${id}</h2> 
        <h2>Experiencia base: ${baseExp}</h2>`

    } else {
        alert('El valor de entrada no coincide con la información guardada. Intente nuevamente.')
    }
}



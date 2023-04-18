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
    const lista = document.getElementById("lista")
    if (arrayName.includes(`${input}`)) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        const datos = await resp.json()
        console.log(datos);

        let linkImg = datos.sprites.front_default
        let img = document.getElementById("pantalla")
        img.setAttribute("src", linkImg)

        let name = datos.name
        let id = datos.id
        let type = datos.types.map((pokemon) => {

            return pokemon.type.name
        })
        let baseExp = datos.base_experience

        console.log(type);



        lista.innerHTML =
            `<h2>Nombre: ${name}</h2> 
        <h2>N° Id: ${id}</h2> 
        <h2>Experiencia base: ${baseExp}</h2>
        <h2>Tipo: ${type}</h2>`

    } else {
        let img = document.getElementById("pantalla")
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/1200px-Nuvola_apps_error.svg.png")
        lista.innerHTML = "<h1>No se encontro pokemon, intente nuevamente</h1>"
    }
}



const template = document.querySelector("#tapa-pokedex")
// const contenedor = document.querySelector("#contenedor")

document.addEventListener("DOMContentLoaded", () => {
    fetchApi()
})

buscarPokemons.addEventListener("click", () => {
    contenedor.appendChild(template.content.cloneNode(true))
    const btnBuscar = document.querySelector("#busqueda")
    btnBuscar.addEventListener("click", findPokemon)
    
})


const fetchApi = async () => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const datos = await resp.json()
        arrayName = datos.results.map(n => n.name)
        console.log(datos);
        console.log(arrayName);
    } catch (error) {
        console.log(error);
    }
}

let encontroPokemon = false
// let arrayName = []

const findPokemon = async () => {
    let input = document.querySelector(".barraBuscar").value
    if (arrayName.includes(`${input}`)) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        const datos = await resp.json()
        console.log(datos);
        let linkImg = datos.sprites.front_default
        let img = document.getElementById("pantalla")
        img.setAttribute("src", linkImg)
        encontroPokemon = true
        let id = datos.id
        let nombre = datos.name
        let type = datos.types
        console.log(id, nombre, type);
    } else {
        alert('El valor de entrada no coincide con la información guardada. Intente nuevamente.')
    }
    
    return input
}

const infoPoke = async()=>{
    const lista = document.getElementById("lista")
lista.innerHTML = `<h2>${input}</h2> <h2>holas</h2> <h2>holas</h2> <h2>holas</h2>`

}














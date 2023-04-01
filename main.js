const template = document.querySelector("#tapa-pokedex")
const fragmento = document.createDocumentFragment()
const screen = document.querySelector(".screen")
const contenedor = document.querySelector("#contenedor")
let buscarPokemons = document.querySelector("#buscarPokemons")
console.log(buscarPokemons);


// document.addEventListener("DOMContentLoaded", () => {
// 	fetchApi()
// })

buscarPokemons.addEventListener("click", () => {
	contenedor.appendChild(template.content)
	const btnBuscar = document.querySelector("#busqueda")
	btnBuscar.addEventListener("click", findPokemon)
})



const findPokemon = async ()=> {
	let input = document.querySelector(".barraBuscar").value
	if (arrayName.includes(`${input}`)) {
		alert('¡El valor de entrada coincide con la información guardada!');
		const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
		const datos = await resp.json()
		console.log(datos);
		console.log(datos.sprites.front_default);
	} else {
		alert('El valor de entrada no coincide con la información guardada. Intente nuevamente.')
	}
	console.log(`${input}`);
}


let arrayName = []
const fetchApi = async () => {
	try {
		const resp = await fetch("https://pokeapi.co/api/v2/pokemon/")
		const datos = await resp.json()
		arrayName = datos.results.map(n => n.name)
		console.log(datos);
		console.log(arrayName);
	} catch (error) {
		console.log("error");
	}}
	
	fetchApi()








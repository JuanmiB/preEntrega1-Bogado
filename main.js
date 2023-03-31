const template = document.querySelector("#tapa-pokedex")
const fragmento = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () => {
	fetchApi()
})

const fetchApi = async () => {
	try {
		const resp = await fetch("https://pokeapi.co/api/v2/pokemon/")
		const datos = await resp.json()
		arrayName = datos.results.map(n => n.name)
		console.log(datos);
		console.log(arrayName);
	} catch (error) {
		console.log("error");
	}
}

const contenedor = document.querySelector("#contenedor")
let buscarPokemons = document.querySelector("#buscarPokemons")
console.log(buscarPokemons);


buscarPokemons.addEventListener("click", () => {
	contenedor.appendChild(template.content)
})

const btnBuscar = document.querySelector("#busqueda")

let savedData = ['dato1', 'dato2', 'dato3'];


btnBuscar.addEventListener("click", () => {
	console.log("hola")
	let input = document.querySelector(".barraBuscar").value
	if (savedData.includes(`${input}`)) {
		alert('¡El valor de entrada coincide con la información guardada!');
	} else {
		alert('El valor de entrada no coincide con la información guardada. Intente nuevamente.');
	}
})





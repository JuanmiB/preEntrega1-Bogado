const template = document.querySelector("#tapa-pokedex")
const fragmento = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
	fetchApi()
} )

const fetchApi = async() => {
	try {
		const resp =  await fetch("https://pokeapi.co/api/v2/pokemon/")
		const datos = await resp.json()
		arrayName = datos.results.map(n => n.name)
		console.log(datos);
		console.log(arrayName);
		
	} catch (error) {
		console.log("error");
	}
}

const botonBuscar = document.querySelector("#buscar")
console.log(botonBuscar);

const contenedor = document.querySelector("#contenedor")





botonBuscar.addEventListener("click", () =>{
	contenedor.appendChild(template.content) 
} )
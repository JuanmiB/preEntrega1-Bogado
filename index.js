const pokemon = [
    {
        nombre: "bulbasaur",
        tipo: ["planta", " veneno"],
        debilidad: ["fuego", " psiquico", " volador", " hielo"],
        id: "0001",
    },
    {
        nombre: "ivysaur",
        tipo: ["planta", "veneno"],
        debilidad: ["fuego", " psiquico", " volador", " hielo"],
        id: "0002",
    },
    {
        nombre: "venusaur",
        tipo: ["planta", " veneno"],
        debilidad: ["fuego", " psiquico", " volador", " hielo"],
        id: "0003",
    },
    {
        nombre: "charmander",
        tipo: ["fuego"],
        debilidad: ["agua", " tierra", " roca"],
        id: "0004",
    },
    {
        nombre: "charmeleon",
        tipo: ["fuego"],
        debilidad: ["agua", " tierra", " roca"],
        id: "0005",
    },
    {
        nombre: "charizard",
        tipo: ["fuego", "volador"],
        debilidad: ["agua", " electrico", " roca"],
        id: "0006",
    },
    {
        nombre: "squirtle",
        tipo: ["agua"],
        debilidad: ["planta", " electrico"],
        id: "0007",
    },
    {
        nombre: "wartortle",
        tipo: ["agua"],
        debilidad: ["planta", " electrico"],
        id: "0008",
    },
    {
        nombre: "blastoise",
        tipo: ["agua"],
        debilidad: ["planta", " electrico"],
        id: "0009",
    },
    {
        nombre: "pikachu",
        tipo: ["electrico"],
        debilidad: ["tierra"],
        id: "0025",
        descrip: "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas."
    }
];


alert("Bienvenido a tu PokeDex");
let requerimientoUsuario = parseInt(prompt("Digite el numero de lo que requieres (1. Informacion de un pokemon | 2. Agregar un pokemon)"))

let eligioOpcion = false;
let eleccion;

while (eligioOpcion === false) {
    if (requerimientoUsuario === 1) {
        eligioOpcion = true
        eleccion = "Informacion de un pokemon"
        let eligioPokemon = false
        while (eligioPokemon === false) {
            if (eleccion === "Informacion de un pokemon") {
                eligioPokemon = true
                let pokemonSolicitado = prompt("ingrese el nombre de pokemon que desea buscar")
                const buscarPokemon = pokemon.find(p => p.nombre === pokemonSolicitado)

                if (buscarPokemon) {
                    alert(`Nombre: ${buscarPokemon.nombre} \nDebilidad: ${buscarPokemon.debilidad} \nTipo: ${buscarPokemon.tipo} \nDescripcion: ${buscarPokemon.descrip}`)
                } else {
                    alert("No has encontrado a ese pokemon todavia, ingresa otro")
                    eligioPokemon = false
                }
            }
        }
    } else if (requerimientoUsuario === 2) {
        eligioOpcion = true
        eleccion = "Agregar un pokemon"

        let agregaPokemon = false
        while (agregaPokemon === false) {
            agregaPokemon = true
            let pokemonAgregado = prompt("ingrese los datos del pokemon que quiere agregar")
            alert(`en desarrollo para agregar a ${pokemonAgregado}`)
        }
    } 
}
















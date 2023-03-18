let pokemon = [
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

console.log(pokemon);

alert("Bienvenido a tu PokeDex");
let requerimientoUsuario = parseInt(prompt("Digite el numero de lo que requieres (1. Informacion de un pokemon | 2. Agregar un pokemon | 3. Salir del simulador)"))


/*---------------------------------------------------------------FUNCION PARA BUSCAR POKEMON--------------------------------------------- */
function pokemonInformation() {
    let eligioPokemon = false
    while (!eligioPokemon) {
        eligioPokemon = true
        let pokemonSolicitado = prompt("ingrese el nombre de pokemon que desea buscar").toLocaleLowerCase()
        const buscarPokemon = pokemon.find(p => p.nombre === pokemonSolicitado)
        if (buscarPokemon) {
            alert(`Nombre: ${buscarPokemon.nombre} \nDebilidad: ${buscarPokemon.debilidad} \nTipo: ${buscarPokemon.tipo} \nDescripcion: ${buscarPokemon.descrip}`)
            requerimientoUsuario = 3
        } else {
            requerimientoUsuario = prompt("No has encontrado a ese pokemon todavia, ingresa otro").toLocaleLowerCase()
            eligioPokemon = false
        }
    }
}
/*---------------------------------------------------------------FUNCION PARA AGREGAR POKEMON--------------------------------------------- */
function pokemonAdd() {
    let pokemonName= prompt ("Ingrese el nombre del pokemon que quieres agregar")
    let pokemonType= prompt ("Ingrese el tipo del pokemon que quieres agregar")
    let pokemonWeakness = prompt ("Ingrese la debilidad del pokemon que quieres agregar")
    let pokemonDesc = prompt ("Ingrese la descripcion del pokemon que quieres agregar")
    
    let pokemonObj = {
        nombre: pokemonName,
        tipo: [pokemonType],
        debilidad:[pokemonWeakness],
        descrip: pokemonDesc
    }
    pokemon.push(pokemonObj)  
    requerimientoUsuario = parseInt(prompt("Digite el numero de lo que requieres (1. Informacion de un pokemon | 2. Agregar un pokemon | 3. Salir del simuladors)"))
}

function endPokedex() {
    requerimientoUsuario = 3    
}

while(requerimientoUsuario != 3){
    switch (requerimientoUsuario) {
        case 1:
            pokemonInformation()
            break;
            case 2:
                pokemonAdd()
                break;
                case 3:
                    endPokedex()
                    break;
                default:
                    requerimientoUsuario = parseInt(prompt("(1. Informacion de un pokemon | 2. Agregar un pokemon | 3. Salir del simulador)"))
                    break;
                }
            }

            console.log(pokemon);
            console.log(requerimientoUsuario);
            



















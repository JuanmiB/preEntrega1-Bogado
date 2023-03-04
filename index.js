// Se crear las variables
let nombreUsuario;
let producto;
let cuotas;
let precio;
let precioFinal;


//Primera funcion para saludar al usuario y obtener su nombre por consola
function saludoPredeterminado (){
    nombreUsuario = prompt("Hola, cual es tu nombre?").toLowerCase()
    alert (`Bienvenido/a a DeTodoGamer ${nombreUsuario}`)
    //Se concatena utilizando template literals
    console.log(nombreUsuario)
}
//Funcion de los productos a elegir
function productoElegido (){
    producto = prompt ("Seleccione el producto que quiere adquirir (ps4 , ps5, pc gamer)").toLowerCase()
switch (producto) {
    case "ps4":
        precio = 30000
        break;
        case "ps5":
            precio = 100000
            break;
            case "pcgamer":
                precio = 300000
                break;

    default:
        alert("no hay eso")
        break;
}
}

//Funcion de las cuotas elejidas
function cuotasElegidas(){
    cuotas = parseInt(prompt("En cuantas cuotas desea pagarlo? (3, 6, 12)"))
    switch (cuotas) {
        case 3:
        precioFinal = precio * 1.2
            break;

        case 6:
            precioFinal = precio * 1.35
            break;

        case 12:
        precioFinal = precio * 1.5
        break;
        default:
            alert("seleccione una cuota disponible")
            break;
    }
}
//Funcion que mustra al usuario el precio final del producto
function valorFinal(){
    alert(`El precio final es ${precioFinal }`)
console.log(precioFinal)
}

//Se ejecutan las funciones
saludoPredeterminado()
productoElegido ()
cuotasElegidas()
valorFinal()

























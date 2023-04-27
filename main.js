function nombre(producto) {
    alert(`el precio es de ${producto}`);
    return producto;
}

let torno = 10000;
let centro = 20000;
let brazo = 30000;
let valor = 0;
let final = 0;
let val = 0;


let producto = prompt("Ingrese producto a consultar, coloque salir para terminar");

while (producto != "salir") {

    switch (producto) {

        case "torno":

            valor = nombre(torno);
            break;

        case "centro":

            valor = nombre(centro);
            break;

        case "brazo":

            valor = nombre(brazo);
            break;
    }

    let descuento = prompt("de tener ingrese codigo de descuento");
    if (descuento == "bajo") {

        val = valor * 0.8;
        alert(`se aplica descuento del 20% quedando ${val}`);

    }
    else {

        val = valor;

    }
    
    producto = prompt("Ingrese producto a consultar, coloque salir para terminar");

    final = final + val;

}

let condicion = prompt("desea saber el total de los productos consultados?");
if (condicion == "si") {

    alert(`precio total de maquina consultadas es de ${final}`);

}
alert(`Gracias por su visita`);













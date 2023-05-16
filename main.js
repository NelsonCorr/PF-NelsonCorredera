function nombre(producto) {
    alert(`el precio es de ${producto}`);
    return producto;
}

const maquinas = [
    { id: 1, tipo: "BR-6743", nombre: "brazo con rotacion", precio: 10000 },
    { id: 2, tipo: "FA-9873", nombre: "centro de mecanizado", precio: 20000 },
    { id: 3, tipo: "KS-2124", nombre: "torno", precio: 30000 },
    { id: 4, tipo: "BR-1213", nombre: "brazo con movimiento lineal", precio: 40000 },
    { id: 5, tipo: "LU-5562", nombre: "centro de mecanizado con opcional", precio: 50000 },
    { id: 6, tipo: "TA-4353", nombre: "torno con opcional", precio: 60000 },
];


let final = 0;
let val = 0;

let producto = prompt("Ingrese producto a consultar, coloque salir para terminar");

while (producto != "salir") {

    const busqueda = maquinas.find((maquina) => maquina.tipo.toLowerCase() === producto.toLowerCase());
    alert(`la maquina seleccionada es ${busqueda.nombre}, el precio es de ${busqueda.precio}`)
    let descuento = prompt("de tener ingrese codigo de descuento");
    if (descuento.toLowerCase() == "bajo") {

        val = busqueda.precio * 0.8;
        alert(`se aplica descuento del 20% quedando ${val}`);

    }
    else {

        val = busqueda.precio;

    }
    
    
    producto = prompt("Ingrese producto a consultar, coloque salir para terminar");

    final = final + val;

}

let condicion = prompt("desea saber el total de los productos consultados?");
if (condicion.toLowerCase() == "si") {

    alert(`precio total de maquina consultadas es de ${final}`);

}

alert(`Gracias por su visita`);













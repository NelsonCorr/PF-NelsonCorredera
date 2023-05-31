
const localStorageItem = localStorage.getItem('productos')

const carrito = localStorageItem !== null ? JSON.parse(localStorageItem) : []

let total = 0;

carrito.forEach((item) => {
    total = total + item?.precio
})

const totalDom = document.getElementById('totalDOM');

const mostrarTotal = () => {
    totalDom.innerHTML = `
    <div class="row">
    <div class="column"> 
<p>total seleccionado $${total}</p>
<button id="resetearCarrito"> RESETEAR </button>
`
}

const resetearCarrito = () => {
    total = 0;
    localStorage.clear();
    location.reload();
}


mostrarTotal()
const resetCarrito = () => {
    document.getElementById('resetearCarrito').addEventListener('click', () => resetearCarrito())
}
resetCarrito();
const eliminarTotalDom = () => {
    totalDom.innerHTML = ``
}



const maquinas = [
    { id: 1, tipo: "BR-6743", nombre: "brazo con rotacion", precio: 10000, imagen: "https://http2.mlstatic.com/D_NQ_NP_951426-MLM28094775570_092018-V.jpg" },
    { id: 2, tipo: "FA-9873", nombre: "centro de mecanizado", precio: 20000, imagen: "https://www.cenasrl.com.ar/assets/archivos/recortadas/a_7155223ce6.jpg" },
    { id: 3, tipo: "KS-2124", nombre: "torno", precio: 30000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYbdcChtwLqiJRE_qcHOlro178WE7d_Y2tsqJxxkf5r3V1eotl_5W7mIxdX5UCA0zSD8&usqp=CAU" },
    { id: 4, tipo: "BR-1213", nombre: "brazo con movimiento lineal", precio: 40000, imagen: "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/5eb2b919-6c3e-425e-ab69-fa4de94e50da?rule=hw396_70" },
    { id: 5, tipo: "LU-5562", nombre: "centro de mecanizado con opcional", precio: 50000, imagen: "https://www.cenasrl.com.ar/assets/archivos/recortadas/a_7155223ce6.jpg" },
    { id: 6, tipo: "TA-4353", nombre: "torno con opcional", precio: 60000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYbdcChtwLqiJRE_qcHOlro178WE7d_Y2tsqJxxkf5r3V1eotl_5W7mIxdX5UCA0zSD8&usqp=CAU" },
];


let final = 0;
let val = 0;







let productosPagina = document.getElementById("productos");



maquinas.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="row">
                <div class="column"> 
    <p>Nombre: ${item.nombre}</p>
    <img src=${item.imagen} > </img>
    <b>$${item.precio}</b>
   <button id="boton${item.id}">Agregar</button>
   <hr />`
    productosPagina.append(div);
});


maquinas.forEach((maq) => {
    const maquinaButton = document.getElementById(`boton${maq.id}`);
    maquinaButton.addEventListener("click", () => {
        carrito.push(maq);
        localStorage.setItem("productos", JSON.stringify(carrito));
        total = total + maq.precio;
        eliminarTotalDom();
        mostrarTotal();
        resetCarrito();
        console.log(carrito);
    })
})

























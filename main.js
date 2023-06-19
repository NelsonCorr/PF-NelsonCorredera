
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
    
    document.getElementById('resetearCarrito').addEventListener('click', () => {resetearCarrito()
       
        
    })
}
resetCarrito();

const eliminarTotalDom = () => {
    totalDom.innerHTML = ``
}



let productosPagina = document.getElementById("productos");

fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <div class="row">
            <div class="column"> 
            <p>Nombre: ${item.nombre}</p>
            <img src=${item.imagen} > </img>
            <b>$${item.precio}</b>
            <button id="boton${item.id}">Agregar</button>
            <button id="botonE${item.id}">Eliminar</button>
            <hr />`;
            productosPagina.append(div);
        });
    });



fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((maq) => {
            const maquinaButton = document.getElementById(`boton${maq.id}`);
            maquinaButton.addEventListener("click", () => {
                carrito.push(maq);
                localStorage.setItem("productos", JSON.stringify(carrito));
                
                total = total + maq.precio;
                eliminarTotalDom();
                mostrarTotal();
                resetCarrito();
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado al carrito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            })
            const maquinaButton2 = document.getElementById(`botonE${maq.id}`);
          
            localStorage.setItem("productos", JSON.stringify(carrito));
           
            maquinaButton2.addEventListener("click", () => {
                let resultado = carrito.some((em)=>em.id === maq.id);
                const eliminar1 = carrito.findIndex((elem)=>elem.id === maq.id);
                if (resultado){
                carrito.splice(eliminar1, 1);
                localStorage.setItem("productos", JSON.stringify(carrito));
                total = total - maq.precio;
                 
                eliminarTotalDom();
                mostrarTotal();
                resetCarrito();
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Producto eliminado del carrito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
                }
            })
        })
    })
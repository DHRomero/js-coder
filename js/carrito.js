function detalleCarrito () {
    const carrito = sumarCarrito();
    let contenidoHtml;

    if (totalProductos() > 0){
        contenidoHtml= `<table class="table justify-content-center">
        <tbody>
        <tr>
        <td class= "text-end" colspan="5"><button class= "btn btn-danger" onclick= "vaciarCarrito ();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
        </tr>`
        
    
        for (const producto of carrito) {
            contenidoHtml += `<tr class= "text-center align-middle" >
                    <td><img src= "imagenes/${producto.imagen}" alt= "${producto.nombre}" width= "90"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.cepa}</td>
                    <td><span class= "text-danger">$${producto.Precio} ARS</span></td>
                    <td class= "text-end"><button type= "button" id= "btnEliminar" class= "btn btn-danger" onclick= "eliminarProducto(${producto.id});">Eliminar Producto</button></td>
                    </tr>`
        }
            contenidoHtml += `</tbody>
            </table>`
    }else{
        contenidoHtml= `<div class="alert alert-danger" role="alert">
        <h3 class= "text-center">Tu carrito esta vacio 😢</h3>
        </div>`
    }    
    
    document.getElementById("contenido").innerHTML= contenidoHtml
    document.getElementById("btnEliminar").addEventListener("click", eliminarCarrito);
}

const contenedorTotal = document.getElementById("precioTotal");


function eliminarCarrito(){
    Toastify({
        text: "El producto se elimino correctamente",
        className: "info",
        style: {
            color: "white",
          background: "linear-gradient(to right, blue, yellow)",
        }
      }).showToast();
    }


contenedorTotal.innerHTML=`<div class="">
            <div class="border p-2 ">
              <p class= "row justify-content-end">Total a pagar: </p>
            </div>`;

detalleCarrito();
botonCarrito();
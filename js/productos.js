function renderProducto() {
    const producto= cargarProducto();
    let imagenProducto = `<img src="imagenes/${producto.imagen}" class= "img-fluid" alt=${producto.nombre} />`;
    let htmlProducto= `<h2 class="fs-1">${producto.nombre}</h2>
    <p class="fw-medium fs-4">${producto.cepa}</p>
    <p class="fw-medium fs-4">${producto.Bodega}</p>
    <p class="fw-medium text-danger">$${producto.Precio} ARS</p>
    <p class="card-text"><button type= "button" id="btnAgregar" class="btn btn-primary rounded-pill" onclick="agregarProducto(${producto.id});">Agregar al Carrito</button></p>
    <a href= "index.html" class= "card-text btn btn-primary rounded-pill">Elegir otro Producto</a>`
    
    
    document.getElementById("imgProducto").innerHTML= imagenProducto;
    document.getElementById("detalleProducto").innerHTML= htmlProducto

        console.log(producto);
        document.getElementById("btnAgregar").addEventListener("click", toastAdded);
    }
    
    function toastAdded(){
        Toastify({
            text: "El producto se agrego correctamente",
            className: "info",
            gravity: "bottom", 
            position: "right",
            style: {
                color: "white",
              background: "linear-gradient(to right, blue, yellow)",
            }
          }).showToast();
        }




renderProducto();
botonCarrito();
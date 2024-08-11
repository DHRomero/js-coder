const productos= [
    {id:1, nombre: "Claroscuro", cepa: "Cabernet Franc", Bodega: "Bodega Claroscuro", Precio: 12500, imagen: "clarocfranc.png"},
    {id:2, nombre: "Claroscuro", cepa: "Gran Malbec 2018", Bodega: "Bodega Claroscuro", Precio: 25000, imagen: "clarogm2018.png"},
    {id:3, nombre: "Claroscuro", cepa: "Malbec", Bodega: "Bodega Claroscuro", Precio: 11000, imagen: "claromalbec.png"},
    {id:4, nombre: "Desquiciado", cepa: "Blend de Blancas", Bodega: "Desquiciado Wine", Precio: 13000, imagen: "desquibblanco.png"},
    {id:5, nombre: "Desquiciado", cepa: "Chardonnay", Bodega: "Desquiciado Wine", Precio: 10500, imagen: "desquichardo.png"},
    {id:6, nombre: "Salvaje", cepa: "Malbec", Bodega: "Desquiciado Wine", Precio: 25000, imagen: "dsquisalvajemalbec.png"},
    {id:7, nombre: "Tinto de Guarda", cepa: "Cabernet Franc", Bodega: "Solo contigo Wine", Precio: 15000, imagen: "scguardacf.png"},
    {id:8, nombre: "Uno", cepa: "Rosé", Bodega: "Antigal Wine", Precio: 9500, imagen: "unorose.png"},
    {id:9, nombre: "Uno", cepa: "Sauvignon Blanc", Bodega: "Antigal Wine", Precio: 9500, imagen: "unosb.png"},
]

console.log(productos);


function agregarProducto(id) {
    const producto = productos.find(item => item.id ==id);
    const carrito = sumarCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    botonCarrito();
    console.log("El producto se ha agregado correctamente");
}

function eliminarProducto(id){
    const carrito = sumarCarrito();
    const nuevoCarrito= carrito.filter(item => item.id != id);
    guardarCarrito(nuevoCarrito);
    detalleCarrito();
    botonCarrito();
}



function botonCarrito(){
    let total= totalProductos();
    document.getElementById("totalCarrito").innerHTML= total
}


function totalProductos() {
    const carrito = sumarCarrito();
     return carrito.length;

}



function sumarCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito(){
    localStorage.clear("carrito");
    detalleCarrito();
    botonCarrito();
}

function cargarProducto(){
    let id= JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find (item => item.id ==id);
    return producto;
}

function guardarProducto(id){
    localStorage.setItem("producto", JSON.stringify(id));
}
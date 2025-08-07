async function cargarProductos() {
    const respuesta = await fetch('Inicial2.json');
    const productos = await respuesta.json();
  
  
    var lista = document.getElementById("lista-productos");
  
    for (var i = 0; i < productos.length; i++) {
      var item = document.createElement("li");
      item.textContent = productos[i].nombre + " - $" + productos[i].precio;
      lista.appendChild(item);
    }
  }
  
  cargarProductos();
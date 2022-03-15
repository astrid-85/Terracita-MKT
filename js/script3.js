
let madera = document.querySelector('.categoria1')
let plastico = document.querySelector('.categoria2')

//AGREGADO POST CLASE --> modifique el nombre de la funcion "renderMadera" por "renderProductos" y le agrego el parametro
//"categoria" para no repetir la misma funcion solo por esa diferencia. Fijense que debajo esta la forma de pasar una 
//funcion/event handler con un parametro(porque recuerden que no debe ejecutarse la funcion en el event listener, sino solo 
// pasar una referencia)

madera.addEventListener('click', function(){renderProductos("Madera")})
plastico.addEventListener('click', function(){renderProductos("Plastico")})

function renderProductos(categoria){
    /* if(flagMadera === 0){
        const listaSegunCategoria = listaProductos.filter(x => x.categoria == 'Madera')

        let catalogo = document.querySelector('.catalogo')


        for (const producto of listaSegunCategoria) {
            let contenedor = document.createElement("div");
            
            contenedor.innerHTML = `<div class="card">
                                    <p> Producto: ${producto.nombre}</p>
                                    <b> $ ${producto.precio}</b>
                                    <img src=${producto.img} class="imagen"/>
                                    <button>Comprame!</button></div>`


            catalogo.appendChild(contenedor);
        }
        flagMadera++
    }*/

}
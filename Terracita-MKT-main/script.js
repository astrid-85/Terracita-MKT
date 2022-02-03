let nombreProductoA = 'Mesa';
let stockProductoA = '10';
let precioProductoA = '10000';

let nombreProductoB = 'Sila';
let stockProductoB = '20';
let precioProductoB = '20000';

let cantidadComprada;
let nombreCompra = prompt ( "Ingrese el nombre del prodcuto que quiere comprar")

if (nombreCompra == nombreProductoA){
    cantidadComprada = parseInt (prompt("Ingrese el nombre del prodcuto que quiere comprar"))
 stockProductoA = stockProductoA - cantidadComprada;
 let precioTotalVenta = cantidadComprada + precioProductoA;
 alert ( "Su compra es de " + cantidadComprada + '' + nombreProductoA + 's' + ' .El precio de su compra es: $' + precioTotalVenta ); 
}

else if (nombreCompra == nombreProductoB){
    cantidadComprada = parseInt (prompt("Ingrese el nombre del prodcuto que quiere comprar"))
 stockProductoA = stockProductoB - cantidadComprada;
 let precioTotalVenta = cantidadComprada + precioProductoB;
 alert ( "Su compra es de " + cantidadComprada + '' + nombreProductoB + 's' + ' .El precio de su compra es: $' + precioTotalVenta ); 
}

else{
    alert ( 'No tenemos ese producto')
}
/*•Desarrolle un algoritmo que diga el precio de
una compra*/
let precioProducto: number = prompt("precio");
let precioProducto: number = precioProducto;

let Cantidad: number = prompt("cantidades");
let Cantidad: number = Cantidad;
let montoConDescuento: number = 0;
let descuento: number = 0;

let valorDeCompra: number = Number(precioProducto * Cantidad);
console.log(valorDeCompra);

/*• La compra se compone del precio del producto
y la cantidad*/
/*•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/
if (valorDeCompra >= 1000) {
  descuento = (valorDeCompra * 10) / 100;
  montoConDescuento = valorDeCompra - descuento;
  console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
  console.log("El monto a pagar es: " + montoConDescuento);
} else {
  console.log("No tiene descuento. El monto a pagar es: " + valorDeCompra);
}

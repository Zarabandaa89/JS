//Es pura porque no modifica valores externos.
 function aumentarValor(valor1, valor2){
    return valor1 + valor2;
 }
console.log(aumentarValor(15, 15));

//Es pura, ya que solo usa los parámetros y devuelve un valor sin modificar nada externo
function descuento(precio, descuento){
    return precio - (precio * descuento / 100)
}
console.log(descuento(100, 20))
console.log(descuento(250, 10))


//Es impura porque usa console.log(), aunque no modifica variables externas.
function saludar(nombre){
    console.log(`Hola mi nombre es ${nombre}`);
}
saludar('Maria');

//Es impura, porque cambia la variable global saldo
let saldo = 200
function agregarSaldo(monto){
     saldo += monto;
    console.log(`Nuevo saldo: ${saldo}`)
}
agregarSaldo(300);

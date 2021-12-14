const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 0,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 0,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 0,
    premium: true
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 0,
    premium: false
    }
   ];
   escribirnombres();
   escribirid();
   escribirprecio();
   escribirpreciototal();
   esprime();

   document.getElementById("idCantidad1").addEventListener("change",()=>cambiar())
   document.getElementById("idCantidad2").addEventListener("change",()=>cambiar())
   document.getElementById("idCantidad3").addEventListener("change",()=>cambiar())
   document.getElementById("idCantidad4").addEventListener("change",()=>cambiar())
   document.getElementById("idPrime1").addEventListener("change",()=>esprime())
   document.getElementById("idPrime2").addEventListener("change",()=>esprime())
   document.getElementById("idPrime3").addEventListener("change",()=>esprime())
   document.getElementById("idPrime4").addEventListener("change",()=>esprime())
   
var cambiar = () =>{
    for(unidades in carrito){
        var strr = concatstring("idCantidad",parseFloat(unidades)+1);
       carrito[unidades].count = document.getElementById(strr).value;
     }
     escribirpreciototal();
}
function escribirnombres () {
    for(unidades in carrito){
       var strr = concatstring("idNombre",parseFloat(unidades)+1);
       document.getElementById(strr).innerHTML = carrito[unidades].name;
    }
}
function escribirprecio () {
    for(unidades in carrito){
       var strr = concatstring("idPrecio",parseFloat(unidades)+1);
       document.getElementById(strr).innerHTML = carrito[unidades].price + "€/u";
    }
}
function escribirid () {
    for(unidades in carrito){
       var strr = concatstring("id",parseFloat(unidades)+1);
       document.getElementById(strr).innerHTML = "Id: " + carrito[unidades].id;
    }
}
function escribirpreciototal () {
    var suma = 0;
    for(unidades in carrito){
       var strr = concatstring("idPreciot",parseFloat(unidades)+1);
       document.getElementById(strr).innerHTML ="Precio total del producto es de " + (carrito[unidades].price * carrito[unidades].count).toFixed(2) +" €";
       suma = suma + carrito[unidades].price * carrito[unidades].count;
       }
    if(suma>100){
    document.getElementById("idPreciototal").innerHTML = "El precio total de la compra es de " +(carrito[unidades].price * carrito[unidades].count).toFixed(2) +" €, pero al ser su compra de un importe superior a 100€ le descontaremos el 5%. Por lo que el precio final es de "+ (suma * 0.95).toFixed(2) + " €" ;
    }else{
        document.getElementById("idPreciototal").innerHTML = "El precio total de la compra es de " +suma.toFixed(2) +" €" ;
    } 
}
function esprime () {
    for(unidades in carrito){
       var strr = concatstring("idPrime",parseFloat(unidades)+1);
       document.getElementById(strr).checked = carrito[unidades].premium;
    }
}
function concatstring (str,i){
return str + i;
}

























//////Listado del carrito
   var flag = 0;
   for(product in carrito){
       if(carrito[product].premium == false){
           flag=1;
       }
       if(product==carrito.length-1 && flag==1){
        console.log("Este pedido tiene gastos de envío");
       }else if(product==carrito.length-1){
        console.log("Pedido sin gastos de envío");
       }

   }
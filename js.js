const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: true
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];
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
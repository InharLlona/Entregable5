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
    premium: false
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
   for(product in carrito){
       console.log(product,"+",carrito[product], "color=blue");
   }
//////Elimino el elemento con el id 54657
    for(cosas in carrito){
       //console.log(cosas,carrito[cosas].id);
       if(carrito[cosas].id == "54657"){
        console.log( "apache" + cosas);
           var jcarrito = carrito.splice(cosas,1);
       }
      if (cosas == carrito.length-1){
        for(jproduct in carrito){
            console.log(jproduct,"+",carrito[jproduct]);
        }
      }
    }
//////
    var suma = 0;
    for(unidades in carrito){
        var suma;
         suma= suma + carrito[unidades].price * carrito[unidades].count;
         if (unidades == carrito.length-1){
                console.log("Total"+ suma + "€");
          }
    }
//////
    var suma = 0;
        for(unidades in carrito){
            if (carrito[unidades].premium == true){
                console.log(carrito[unidades]);
            }
    }
    
    
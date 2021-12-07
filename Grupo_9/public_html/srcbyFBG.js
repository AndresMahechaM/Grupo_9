/*const calcularDepreciacionNIIF = (precioInicial,
    precioFinal,
    vidaUtil,
    numeroPeriodoAconsultar) => {
        if (vidaUtil<=0){
           precioDepreciado=0;
        }
        else if (vidaUtil<numeroPeriodoAconsultar){
           precioDepreciado=precioFinal;
        }
        else{
            var precioAdepreciar=precioInicial-precioFinal;
            var depreciacionAnual=precioAdepreciar/vidaUtil;
            precioDepreciado=precioInicial-(depreciacionAnual*numeroPeriodoAconsultar);}
        //console.log(precioDepreciado);
        return precioDepreciado;
    }
    
const calcularDepreciacionNIIFEnDolares = (precioInicial,
        precioFinal,
        vidaUtil,
        numeroPeriodoAconsultar) => {
        if(precioInicial<=0){
            throw "Error";
        }
        else{
            calcularDepreciacionNIIF(precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar);            
            precioDepreciadoDolares= precioDepreciado/3778;}
            //console.log(precioDepreciadoDolares);
        return precioDepreciadoDolares;
}
async function mostrarProductos(){
    let response=await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
    let productosAPI=await response.json();
    let productosConDepreciacion=new Array();
    let productoDepreciado=new Array();
    for(i=0;i<productosAPI.length;i++){
        productoDepreciado.push(calcularDepreciacionNIIF(productosAPI[i].precioInicial,
            productosAPI[i].precioFinal,
            productosAPI[i].vidaUtil,
            productosAPI[i].periodo_consultado));
    }
    for(i=0;i<productosAPI.length;i++){
        productosConDepreciacion.push({precioDepreciado:productoDepreciado[i],
            precioInicial:productosAPI[i].precioInicial,precioFinal:productosAPI[i].precioFinal,
            vidaUtil:productosAPI[i].vidaUtil,periodo_consultado:productosAPI[i].periodo_consultado});
    }
    //console.log(productosConDepreciacion);
    return productosConDepreciacion;
}
async function mostrarProductosPrecioDolares(){
    let response=await fetch(
       "https://misiontic2022upb.vercel.app/api/logistics/products");
    let productosAPI=await response.json();
    let productosConDepreciacion=new Array();
    let productoDepreciado=new Array();
    for(i=0;i<productosAPI.length;i++){
        const precD=calcularDepreciacionNIIF(productosAPI[i].precioInicial,productosAPI[i].precioFinal,productosAPI[i].vidaUtil,productosAPI[i].periodo_consultado);
        var precioDolar=await fetch("https://misiontic2022upb.vercel.app/api/logistics/to-dolar-converter/"+precD);
        let respuesta=await precioDolar.json();
        productoDepreciado.push(respuesta);
    }
    for(i=0;i<productosAPI.length;i++){
        productosConDepreciacion.push({precioDepreciadoEnDolares:productoDepreciado[i],
            precioInicial:productosAPI[i].precioInicial,precioFinal:productosAPI[i].precioFinal,
            vidaUtil:productosAPI[i].vidaUtil,periodo_consultado:productosAPI[i].periodo_consultado});
    }
    //console.log(productosConDepreciacion);
    return productosConDepreciacion;
}*/

var products=[
  {
      "id":1,
      "nombre": "Nevera",
      "precioInicial": 2000000,
      "vidaUtil": 5,
      "precioFinal": 1000000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Nevera de 5 litros",
      "imagen": "https://www.ikea.com/es/es/images/products/nevera-de-5-litros-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":2,
      "nombre": "Televisor",
      "precioInicial": 1000000,
      "vidaUtil": 3,
      "precioFinal": 7000000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Televisor de 32 pulgadas",
      "imagen": "https://www.ikea.com/es/es/images/products/televisor-32-pulgadas-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":3,
      "nombre": "Lavadora",
      "precioInicial": 3000000,
      "vidaUtil": 15,
      "precioFinal": 700000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Lavadora de 5 kg",
      "imagen": "https://www.ikea.com/es/es/images/products/lavadora-de-5-kg-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":4,
      "nombre": "Portatil",
      "precioInicial": 2500000,
      "vidaUtil": 7,
      "precioFinal": 1000000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Portatil de 15 pulgadas",
      "imagen": "https://www.ikea.com/es/es/images/products/portatil-de-15-pulgadas-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":5,
      "nombre": "Escritorio en L",
      "precioInicial": 1000000,
      "vidaUtil": 5,
      "precioFinal": 100000,
      "periodo_consultado": 3,
      "tipo": "Muebles de oficina",
      "descripcion": "Escritorio en L",
      "imagen": "https://www.ikea.com/es/es/images/products/escritorio-en-l-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    }];
const express=require("express");
const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.get("/api/logistics/products",(req,res)=>{
  res.json(products);
});

app.post("/api/logistics/products",(req,res)=>{
  console.log(req.body);
  products.push(req.body);
  res.json(products);
});

//module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
//module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;
//module.exports.mostrarProductos = mostrarProductos;
//module.exports.mostrarProductosPrecioDolares = mostrarProductosPrecioDolares;
module.exports=app;


const calcularDepreciacionNIIF = (precioInicial,
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
}
module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;
module.exports.mostrarProductos = mostrarProductos;
module.exports.mostrarProductosPrecioDolares = mostrarProductosPrecioDolares;
//mostrarProductos();
//mostrarProductosPrecioDolares();
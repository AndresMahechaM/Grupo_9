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

async function mostrarProductoMayor(){
    let response=await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
    let productosAPI=await response.json();
    let productosConDepreciacion=new Array();
    let productoDepreciado=new Array();
    let productoMayor = new Array();
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
    var inicio = productosConDepreciacion[0].precioDepreciado
    for (i=0;i<productosConDepreciacion.length;i++){
        var prueba = productosConDepreciacion[i].precioDepreciado
        if (prueba>=inicio){
            var numero = i
            inicio = prueba
        }
    }
    productoMayor.push (productosConDepreciacion[numero].precioDepreciado)
    console.log(productoMayor);
    return productoMayor;
}

module.exports.mostrarProductoMayor = mostrarProductoMayor;
//mostrarProductos();
//mostrarProductosPrecioDolares();
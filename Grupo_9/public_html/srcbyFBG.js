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
        console.log(precioDepreciado);
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
            console.log(precioDepreciadoDolares);
        return precioDepreciadoDolares;
}

module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports. calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;

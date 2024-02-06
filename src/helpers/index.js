const calcularTotalPagar = (cantidad, plazo) => {
    let total;


    // Mientras Mayor es la cantidad, menor es el interes a pagar

    if(cantidad < 5000 ){
        total = cantidad * 1.5;
    }else if(cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;

    }else if(cantidad >= 1000 && cantidad < 15000){
        total = cantidad * 1.3;
    }else {
        total = cantidad * 1.2;
    }

    // Plazo - mas Plazo , mayor interes

    if(plazo === 6 ){
        total *= 1.1;
    }else if(plazo === 12){
        total *= 1.2;
    }else{
        total *= 1.3;
    }
    return total;

}
export {
    calcularTotalPagar
}
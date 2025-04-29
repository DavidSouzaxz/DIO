function identificarBandeira(numeroCartao) {
    const numero = numeroCartao.toString();

    if (numero.startsWith('4')) {
        return 'Visa';
    } else if (
        (parseInt(numero.substring(0, 2)) >= 51 && parseInt(numero.substring(0, 2)) <= 55) ||
        (parseInt(numero.substring(0, 4)) >= 2221 && parseInt(numero.substring(0, 4)) <= 2720)
    ) {
        return 'Mastercard';
    } else if (
        numero.startsWith('4011') ||
        numero.startsWith('4312') ||
        numero.startsWith('4389')
    ) {
        return 'Elo';
    } else if (numero.startsWith('34') || numero.startsWith('37')) {
        return 'American Express';
    } else {
        return 'Bandeira desconhecida';
    }
}


const numeroCartao = '4389123456789012';
console.log(`A bandeira do cartão é: ${identificarBandeira(numeroCartao)}`);





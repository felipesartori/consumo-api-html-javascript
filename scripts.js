
// DATA ATUAL
function DataAtual() {
    // Retorna Data Atual
    momentoAtual = new Date();
    hora = momentoAtual.getHours();
    minuto = momentoAtual.getMinutes();
    segundo = momentoAtual.getSeconds();

    // Se tiver menos que 2 digitos, acrescenta o 0
    // Horas
    if (String(hora).length < 2)
        hora = "0" + String(hora);
    // Minutos
    if (String(minuto).length < 2)
        minuto = "0" + String(minuto);
    // Segundos
    if (String(segundo).length < 2)
        segundo = "0" + String(segundo);

    horaImprimivel = hora + ":" + minuto + ":" + segundo

    document.getElementById("data_geral").innerHTML = 'Data: ' + horaImprimivel;
}

// FORMATAR VALOR
function formatarValor(numero) {
    var valor;
    valor = numero; //string que representa o número
    valor = parseFloat(valor); // converto em número
    valor = valor.toFixed(2).replace(".", ","); //troca . por ,
    valor = adicionarPonto(valor); //adiciona ponto 

    return valor;
}

// ADICIONA PONTO
function adicionarPonto(valor) {
    valor += '';
    x = valor.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }

    return x1 + x2;
}

// POLONIEX
function GetPoloniex() {
    axios.get('https://poloniex.com/public?command=returnTicker')
        .then(function (response) {
            // Valores
            document.getElementById("nome_poloniex").innerHTML = 'POLONIEX';
            document.getElementById("atual_poloniex").innerHTML = 'Atual: ' + response.data.BTC_XRP.last + ' BTC';
            document.getElementById("compra_poloniex").innerHTML = 'Compra: ' + response.data.BTC_XRP.highestBid + ' BTC';
            document.getElementById("venda_poloniex").innerHTML = 'Venda: ' + response.data.BTC_XRP.lowestAsk + ' BTC';
            document.getElementById("volume_poloniex").innerHTML = 'Volume: ' + formatarValor(response.data.BTC_XRP.baseVolume) + ' BTC';
            document.getElementById("maior_poloniex").innerHTML = 'Menor: ' + response.data.BTC_XRP.low24hr + ' BTC';
            document.getElementById("menor_poloniex").innerHTML = 'Maior: ' + response.data.BTC_XRP.high24hr + ' BTC';
        })
        .catch(function (error) {
            console.warn(error);
        });
}

// POLONIEX
function GetPoloniex1() {
    axios.get('https://poloniex.com/public?command=returnTicker')
        .then(function (response) {
            // Valores
            document.getElementById("nome_poloniex1").innerHTML = 'POLONIEX';
            document.getElementById("atual_poloniex1").innerHTML = 'Atual: ' + response.data.BTC_DOGE.last + ' BTC';
            document.getElementById("compra_poloniex1").innerHTML = 'Compra: ' + response.data.BTC_DOGE.highestBid + ' BTC';
            document.getElementById("venda_poloniex1").innerHTML = 'Venda: ' + response.data.BTC_DOGE.lowestAsk + ' BTC';
            document.getElementById("volume_poloniex1").innerHTML = 'Volume: ' + formatarValor(response.data.BTC_DOGE.baseVolume) + ' BTC';
            document.getElementById("maior_poloniex1").innerHTML = 'Menor: ' + response.data.BTC_DOGE.low24hr + ' BTC';
            document.getElementById("menor_poloniex1").innerHTML = 'Maior: ' + response.data.BTC_DOGE.high24hr + ' BTC';
        })
        .catch(function (error) {
            console.warn(error);
        });
}

// POLONIEX
function GetPoloniex2() {
    axios.get('https://poloniex.com/public?command=returnTicker')
        .then(function (response) {
            // Valores
            document.getElementById("nome_poloniex2").innerHTML = 'POLONIEX';
            document.getElementById("atual_poloniex2").innerHTML = 'Atual: ' + response.data.USDT_BTC.last + ' BTC';
            document.getElementById("compra_poloniex2").innerHTML = 'Compra: ' + response.data.USDT_BTC.highestBid + ' BTC';
            document.getElementById("venda_poloniex2").innerHTML = 'Venda: ' + response.data.USDT_BTC.lowestAsk + ' BTC';
            document.getElementById("volume_poloniex2").innerHTML = 'Volume: ' + formatarValor(response.data.USDT_BTC.baseVolume) + ' BTC';
            document.getElementById("maior_poloniex2").innerHTML = 'Menor: ' + response.data.USDT_BTC.low24hr + ' BTC';
            document.getElementById("menor_poloniex2").innerHTML = 'Maior: ' + response.data.USDT_BTC.high24hr + ' BTC';
        })
        .catch(function (error) {
            console.warn(error);
        });
}

setInterval(function () { GetPoloniex(); GetPoloniex1(); GetPoloniex2(); DataAtual(); }, 3000);


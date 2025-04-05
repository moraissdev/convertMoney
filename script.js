//CHAMAR O BOTÃO  
const button = document.querySelector(".convert-button")
const selectCoin = document.querySelector(".convert-to")
const coinToConvert = document.querySelector(".convert-from")

function convertSelectCoin() {
    const nameCoinSelectToConvert = document.querySelector(".coin-title-real")
    const imgCoinSelectToConvert = document.querySelector(".icon-real")

    if(coinToConvert.value == "euroToConvert") {
        nameCoinSelectToConvert.innerHTML = "Euro"
        imgCoinSelectToConvert.src = "assets/euro-icon.png"
    }
    if(coinToConvert.value == "dolarToConvert") {
        nameCoinSelectToConvert.innerHTML = "Dólar Americano"
        imgCoinSelectToConvert.src = "assets/dolar-icon.png"
    }

    if(coinToConvert.value == "bitcoinToConvert") {
        nameCoinSelectToConvert.innerHTML = "Bitcoin"
        imgCoinSelectToConvert.src = "assets/bitcoin-icon.png"
    }
    if(coinToConvert.value == "realToConvert") {
        nameCoinSelectToConvert.innerHTML = "Real"
        imgCoinSelectToConvert.src = "assets/real-icon.png"
    }
    if(coinToConvert.value == "libraToConvert") {
        nameCoinSelectToConvert.innerHTML = "Libra Esterlina"
        imgCoinSelectToConvert.src = "assets/libra-icon.png"
    }
}

//FUNÇÃO QUE SERÁ EXECUTADA QUANDO HOUVER CLICK NO BOTÃO
function convertMoney() {
    //CHAMAR O INPUT PARA PEGAR SOMENTE O VALOR QUE SERÁ DIGITADO (.value)
    const input = document.querySelector(".input-value").value
    //CHAMAR OS ESPAÇOS QUE OS VALORES FICARÃO ALOCADOS APÓS A CONVERSÃO
    const brl = document.querySelector(".coin-value-real")
    const anotherCoins = document.querySelector(".coin-value-dolar")

    //DECLARAR O VALOR DO DÓLAR PARA EFETUAR A DIVISÃO PARA CONVERTER
    const realQuote = 1
    const dollarQuote = 5.8
    const euroQuote = 6.4
    const poundQuote = 7.5
    const btcQuote = 490000

    if(selectCoin.value == "dolar") { //SE O SELECT ESTIVER SELECIONADO EM DÓLAR, EXECUTA O QUE ESTÁ DENTRO
        anotherCoins.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format ((input / dollarQuote).toFixed(2))
    }
    if(selectCoin.value == "euro") { //SE O SELECT ESTIVER SELECIONADO EM EURO, EXECUTA O QUE ESTÁ DENTRO
        anotherCoins.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "eur"  
        }).format ((input / euroQuote).toFixed(2))
    }
    if(selectCoin.value == "libra") { //SE O SELECT ESTIVER SELECIONADO EM LIBRA, EXECUTA O QUE ESTÁ DENTRO
        anotherCoins.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "gbp"
        }).format((input / poundQuote).toFixed(2))
    }
    if(selectCoin.value == "bitcoin") {
        anotherCoins.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "btc"
        }).format((input / btcQuote).toFixed(2))
    }
    if(selectCoin.value == "real") {
        anotherCoins.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format((input / realQuote).toFixed(2))
    }



    //SUBSTITUIR OS VALORES EMBAIXO DAS BANDEIRAS POR: VALOR DIGITADO E VALOR CONVERTIDO
    brl.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(input)

}

function changeSelect() {
    const changeCurrencySelect = document.querySelector(".coin-title-dolar")
    const imgSelectCoin = document.querySelector(".icon-dolar")

    if (selectCoin.value == "euro") {
        changeCurrencySelect.innerHTML = "Euro"
        imgSelectCoin.src = "assets/euro-icon.png"
    }
    if (selectCoin.value == "dolar") {
        changeCurrencySelect.innerHTML = "Dólar Americano"
        imgSelectCoin.src = "assets/dolar-icon.png"
    }
    if (selectCoin.value == "libra") {
        changeCurrencySelect.innerHTML = "Libra Esterlina"
        imgSelectCoin.src = "assets/libra-icon.png"
    }
    if(selectCoin.value == "bitcoin") {
        changeCurrencySelect.innerHTML = "Bitcoin"
        imgSelectCoin.src = "assets/bitcoin-icon.png"
    }
    if(selectCoin.value == "real") {
        changeCurrencySelect.innerHTML = "Real"
        imgSelectCoin.src = "assets/real-icon.png"
    }

    convertMoney()
}

function convertCoin() {
    const coinToConvert = document.querySelector(".convert-from")
    const brl = document.querySelector(".coin-value-real")


    if(coinToConvert.value == "euroToConvert") {
        brl.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "eur"
        }).format((input / libraToConvert).toFixed(2))
    }
    if(coinToConvert.value == "bitcoinToConvert") {
        brl.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "btc"
        }).format((input / libraToConvert).toFixed(2))
    }
    if(coinToConvert.value == "realToConvert") {
        brl.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format((input / libraToConvert).toFixed(2))
        
    }
    if(coinToConvert.value == "libraToConvert") {
        brl.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "gbp"
        }).format((input / libraToConvert).toFixed(2))
    }
    
}

button.addEventListener("click", convertCoin)
button.addEventListener("click", convertMoney)
selectCoin.addEventListener("change", changeSelect)
coinToConvert.addEventListener("change", convertSelectCoin)
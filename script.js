//CHAMAR O BOTÃO  
const buttonToConvert = document.querySelector(".convert-button")
const selectCurrencyToConvert = document.querySelector(".convert-to")

//FUNÇÃO QUE SERÁ EXECUTADA QUANDO HOUVER CLICK NO BOTÃO
function convertMoney() {
    //CHAMAR O INPUT PARA PEGAR SOMENTE O VALOR QUE SERÁ DIGITADO (.value)
    const inputValueEntered = document.querySelector(".input-value").value
    //CHAMAR OS ESPAÇOS QUE OS VALORES FICARÃO ALOCADOS APÓS A CONVERSÃO
    const brl = document.querySelector(".coin-value-real")
    const splitValueOutput = document.querySelector(".coin-value-dolar")

    //DECLARAR O VALOR DO DÓLAR PARA EFETUAR A DIVISÃO PARA CONVERTER
    const realQuote = 1
    const dollarQuote = 5.8
    const euroQuote = 6.4
    const poundQuote = 7.5
    const bitcoinQuote = 490000

    if(selectCurrencyToConvert.value == "dolar") { //SE O SELECT ESTIVER SELECIONADO EM DÓLAR, EXECUTA O QUE ESTÁ DENTRO
        splitValueOutput.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format ((inputValueEntered / dollarQuote).toFixed(2))
    }
    if(selectCurrencyToConvert.value == "euro") { //SE O SELECT ESTIVER SELECIONADO EM EURO, EXECUTA O QUE ESTÁ DENTRO
        splitValueOutput.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "eur"  
        }).format ((inputValueEntered / euroQuote).toFixed(2))
    }
    if(selectCurrencyToConvert.value == "libra") { //SE O SELECT ESTIVER SELECIONADO EM LIBRA, EXECUTA O QUE ESTÁ DENTRO
        splitValueOutput.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "gbp"
        }).format((inputValueEntered / poundQuote).toFixed(2))
    }
    if (selectCurrencyToConvert.value == "bitcoin") {
        splitValueOutput.innerHTML = "₿" + Number(inputValueEntered / bitcoinQuote).toLocaleString("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        })
    }
    if(selectCurrencyToConvert.value == "real") {
        splitValueOutput.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format((inputValueEntered / realQuote).toFixed(2))
    }



    //SUBSTITUIR OS VALORES EMBAIXO DAS BANDEIRAS POR: VALOR DIGITADO E VALOR CONVERTIDO
    brl.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(inputValueEntered)

}

function changeCurrencyConverted() {
    const convertedCurrencyName = document.querySelector(".coin-title-dolar")
    const convertedCurrencImage = document.querySelector(".icon-dolar")

    if (selectCurrencyToConvert.value == "euro") {
        convertedCurrencyName.innerHTML = "Euro"
        convertedCurrencImage.src = "assets/euro-icon.png"
    }
    if (selectCurrencyToConvert.value == "dolar") {
        convertedCurrencyName.innerHTML = "Dólar Americano"
        convertedCurrencImage.src = "assets/dolar-icon.png"
    }
    if (selectCurrencyToConvert.value == "libra") {
        convertedCurrencyName.innerHTML = "Libra Esterlina"
        convertedCurrencImage.src = "assets/libra-icon.png"
    }
    if(selectCurrencyToConvert.value == "bitcoin") {
        convertedCurrencyName.innerHTML = "Bitcoin"
        convertedCurrencImage.src = "assets/bitcoin-icon.png"
    }
    if(selectCurrencyToConvert.value == "real") {
        convertedCurrencyName.innerHTML = "Real"
        convertedCurrencImage.src = "assets/real-icon.png"
    }

    convertMoney()
}

buttonToConvert.addEventListener("click", convertMoney)
selectCurrencyToConvert.addEventListener("change", changeCurrencyConverted)
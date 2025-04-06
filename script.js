//CHAMAR O BOTÃO  
const buttonToConvert = document.querySelector(".convert-button")
const selectCurrencyToConvert = document.querySelector(".convert-to")

//FUNÇÃO QUE SERÁ EXECUTADA QUANDO HOUVER CLICK NO BOTÃO
function convertMoney() {
    //CHAMAR O INPUT PARA PEGAR SOMENTE O VALOR QUE SERÁ DIGITADO (.value)
    const inputValueEntered = document.querySelector(".input-value").value
    //CHAMAR OS ESPAÇOS QUE OS VALORES FICARÃO ALOCADOS APÓS A CONVERSÃO
    const defaultValueInReal = document.querySelector(".coin-value-real")
    const splitValueAfterOperation = document.querySelector(".coin-value-dolar")

    //DECLARAR O VALOR DO DÓLAR PARA EFETUAR A DIVISÃO PARA CONVERTER
    const realQuote = 1
    const dollarQuote = 0.1712
    const euroQuote = 0.1562
    const poundQuote = 0.1327
    const bitcoinQuote = 490000
    const pesoArgentinoQuote = 183.8
    const dolarCanadenseQuote = 0.2436
    const ieneJaponesQuote = 25.16
    const pesoColombianoQuote = 732.9
    const pesoMexicanoQuote = 3.497

    if(selectCurrencyToConvert.value == "dolarAmericano") { //SE O SELECT ESTIVER SELECIONADO EM DÓLAR, EXECUTA O QUE ESTÁ DENTRO
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format ((inputValueEntered * dollarQuote).toFixed(2)) + " USD"
    }
    if(selectCurrencyToConvert.value == "euro") { //SE O SELECT ESTIVER SELECIONADO EM EURO, EXECUTA O QUE ESTÁ DENTRO
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("en-ie", {
            style: "currency",
            currency: "eur"
        }).format ((inputValueEntered * euroQuote).toFixed(2)) + " EUR"
    }
    if(selectCurrencyToConvert.value == "libra") { //SE O SELECT ESTIVER SELECIONADO EM LIBRA, EXECUTA O QUE ESTÁ DENTRO
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "gbp"
        }).format((inputValueEntered * poundQuote).toFixed(2)) + " GBP"
    }
    if (selectCurrencyToConvert.value == "bitcoin") {
        splitValueAfterOperation.innerHTML = "₿" + Number(inputValueEntered / bitcoinQuote).toLocaleString("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        })
    }
    if(selectCurrencyToConvert.value == "real") {
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format((inputValueEntered / realQuote).toFixed(2)) + " BRL"
    }
    if(selectCurrencyToConvert.value == "pesoArgentino") {
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ars"
        }).format((inputValueEntered * pesoArgentinoQuote).toFixed(2)) + " ARS"
    }
    if(selectCurrencyToConvert.value == "dolarCanadense") {
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("en-ca", {
            style: "currency",
            currency: "cad"
        }).format((inputValueEntered * dolarCanadenseQuote).toFixed(2)) + " CAD"
    }
    if(selectCurrencyToConvert.value == "ieneJapones") {
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("ja-jp", {
            style: "currency",
            currency: "jpy"
        }).format((inputValueEntered * ieneJaponesQuote).toFixed(2)) + " JPY"
    }
    if(selectCurrencyToConvert.value == "pesoColombiano") {
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("es-co", {
            style: "currency",
            currency: "cop"
        }).format((inputValueEntered * pesoColombianoQuote).toFixed(2)) + " COP"
    }
    if(selectCurrencyToConvert.value == "pesoMexicano") {
        splitValueAfterOperation.innerHTML = new Intl.NumberFormat("es-mx", {
            style: "currency",
            currency: "mxn"
        }).format((inputValueEntered * pesoMexicanoQuote).toFixed(2)) + " MXN"
    }


    //SUBSTITUIR OS VALORES EMBAIXO DAS BANDEIRAS POR: VALOR DIGITADO E VALOR CONVERTIDO
    defaultValueInReal.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(inputValueEntered) + " BRL"

}

function changeCurrencyConverted() {
    const convertedCurrencyName = document.querySelector(".coin-title-dolar")
    const convertedCurrencImage = document.querySelector(".icon-dolar")

    if (selectCurrencyToConvert.value == "euro") {
        convertedCurrencyName.innerHTML = "Euro"
        convertedCurrencImage.src = "assets/euro-icon.png"
    }
    if (selectCurrencyToConvert.value == "dolarAmericano") {
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
    if(selectCurrencyToConvert.value == "dolarCanadense") {
        convertedCurrencImage.src = "assets/cad-icon.png"
        convertedCurrencyName.innerHTML = "Dólar Canadense"
    }
    if(selectCurrencyToConvert.value == "pesoColombiano") {
        convertedCurrencImage.src = "assets/cop-icon.png"
        convertedCurrencyName.innerHTML = "Peso Colombiano"
    }
    if(selectCurrencyToConvert.value == "pesoArgentino") {
        convertedCurrencImage.src = "assets/ars-icon.png"
        convertedCurrencyName.innerHTML = "Peso Argentino"
    }
    if(selectCurrencyToConvert.value == "pesoMexicano") {
        convertedCurrencImage.src = "assets/mxn-icon.png"
        convertedCurrencyName.innerHTML = "Peso Mexicano"
    }
    if(selectCurrencyToConvert.value == "ieneJapones") {
        convertedCurrencImage.src = "assets/jpy-icon.png"
        convertedCurrencyName.innerHTML = "Iene Japonês"
    }

    convertMoney()
}

buttonToConvert.addEventListener("click", convertMoney)
selectCurrencyToConvert.addEventListener("change", changeCurrencyConverted)
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
    const bitcoinQuote = 0.0000020789
    const pesoArgentinoQuote = 183.8
    const dolarCanadenseQuote = 0.2436
    const ieneJaponesQuote = 25.16
    const pesoColombianoQuote = 732.9
    const pesoMexicanoQuote = 3.497
    const ethereumQuote = 0.000096107

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
        splitValueAfterOperation.innerHTML = "₿" + Number(inputValueEntered * bitcoinQuote).toLocaleString("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }) + " BTC"
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
    if(selectCurrencyToConvert.value == "ethereum") {
        splitValueAfterOperation.innerHTML = "Ξ" + Number(inputValueEntered * ethereumQuote).toLocaleString("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
    }) + " ETH"
    }


    //SUBSTITUIR OS VALORES EMBAIXO DAS BANDEIRAS POR: VALOR DIGITADO E VALOR CONVERTIDO
    defaultValueInReal.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(inputValueEntered) + " BRL"

}

function changeCurrencyConverted() {
    const convertedCurrencyName = document.querySelector(".coin-title-dolar")
    const convertedCurrencyImage = document.querySelector(".icon-dolar")

    if (selectCurrencyToConvert.value == "euro") {
        convertedCurrencyName.innerHTML = "Euro"
        convertedCurrencyImage.src = "assets/euro-icon.png"
    }
    if (selectCurrencyToConvert.value == "dolarAmericano") {
        convertedCurrencyName.innerHTML = "Dólar Americano"
        convertedCurrencyImage.src = "assets/dolar-icon.png"
    }
    if (selectCurrencyToConvert.value == "libra") {
        convertedCurrencyName.innerHTML = "Libra Esterlina"
        convertedCurrencyImage.src = "assets/libra-icon.png"
    }
    if(selectCurrencyToConvert.value == "bitcoin") {
        convertedCurrencyName.innerHTML = "Bitcoin"
        convertedCurrencyImage.src = "assets/bitcoin-icon.png"
    }
    if(selectCurrencyToConvert.value == "real") {
        convertedCurrencyName.innerHTML = "Real"
        convertedCurrencyImage.src = "assets/real-icon.png"
    }
    if(selectCurrencyToConvert.value == "dolarCanadense") {
        convertedCurrencyImage.src = "assets/cad-icon.png"
        convertedCurrencyName.innerHTML = "Dólar Canadense"
    }
    if(selectCurrencyToConvert.value == "pesoColombiano") {
        convertedCurrencyImage.src = "assets/cop-icon.png"
        convertedCurrencyName.innerHTML = "Peso Colombiano"
    }
    if(selectCurrencyToConvert.value == "pesoArgentino") {
        convertedCurrencyImage.src = "assets/ars-icon.png"
        convertedCurrencyName.innerHTML = "Peso Argentino"
    }
    if(selectCurrencyToConvert.value == "pesoMexicano") {
        convertedCurrencyImage.src = "assets/mxn-icon.png"
        convertedCurrencyName.innerHTML = "Peso Mexicano"
    }
    if(selectCurrencyToConvert.value == "ieneJapones") {
        convertedCurrencyImage.src = "assets/jpy-icon.png"
        convertedCurrencyName.innerHTML = "Iene Japonês"
    }
    if(selectCurrencyToConvert.value == "ethereum") {
        convertedCurrencyImage.src = "assets/ethereum-icon.png"
        convertedCurrencyName.innerHTML = "Ethereum"
    }

    convertMoney()
}

function priceLive() {
    const priceBelowButton = document.querySelector(".price-live")

    if(selectCurrencyToConvert.value == "euro"){
        priceBelowButton.textContent = "0.16 EUR"
    }
    if(selectCurrencyToConvert.value =="libra"){
        priceBelowButton.textContent = "0.13 GBP"
    }
    if(selectCurrencyToConvert.value =="pesoArgentino"){
        priceBelowButton.textContent = "183,80 ARS"
    }
    if(selectCurrencyToConvert.value =="pesoColombiano"){
        priceBelowButton.textContent = "732,90 COP"
    }
    if(selectCurrencyToConvert.value =="pesoMexicano"){
        priceBelowButton.textContent = "3.50 MXN"
    }
    if(selectCurrencyToConvert.value =="bitcoin"){
        priceBelowButton.textContent = "0.00000208 BTC"
    }
    if(selectCurrencyToConvert.value =="ethereum"){
        priceBelowButton.textContent = "0.00009611 ETH"
    }
    if(selectCurrencyToConvert.value =="ieneJapones"){
        priceBelowButton.textContent = "25 JPY"
    }
    if(selectCurrencyToConvert.value =="dolarCanadense"){
        priceBelowButton.textContent = "0.24 CAD"
    }
    if(selectCurrencyToConvert.value =="dolarAmericano"){
        priceBelowButton.textContent = "0.17 USD"
    }
}

buttonToConvert.addEventListener("click", convertMoney)
selectCurrencyToConvert.addEventListener("change", changeCurrencyConverted)
selectCurrencyToConvert.addEventListener("change", priceLive)
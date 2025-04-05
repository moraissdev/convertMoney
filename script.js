//CHAMAR O BOTÃO  
const button = document.querySelector(".convert-button")
const selectCoin = document.querySelector(".convert-to")

//FUNÇÃO QUE SERÁ EXECUTADA QUANDO HOUVER CLICK NO BOTÃO
function convertMoney() {
    //CHAMAR O INPUT PARA PEGAR SOMENTE O VALOR QUE SERÁ DIGITADO (.value)
    const input = document.querySelector(".input-value").value
    //CHAMAR OS ESPAÇOS QUE OS VALORES FICARÃO ALOCADOS APÓS A CONVERSÃO
    const brl = document.querySelector(".coin-value-brazil")
    const anotherCoins = document.querySelector(".coin-value-eua")

    //DECLARAR O VALOR DO DÓLAR PARA EFETUAR A DIVISÃO PARA CONVERTER
    const dollarQuote = 5.8
    const euroQuote = 6.4

    if(selectCoin.value == "dolar") { //SE O SELECT ESTIVER SELECIONADO EM DÓLAR, EXECUTA O QUE ESTÁ DENTRO
        anotherCoins.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format ((input / dollarQuote).toFixed(2))
    }
    if(selectCoin.value == "euro") { //SE O SELECT ESTIVER SELECIONADO EM EURO, EXECUTA O QUE ESTÁ DENTRO
        anotherCoins.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"  
        }).format ((input / euroQuote).toFixed(2))
    }



    //SUBSTITUIR OS VALORES EMBAIXO DAS BANDEIRAS POR: VALOR DIGITADO E VALOR CONVERTIDO
    brl.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(input)

}

function changeSelect() {
    const changeCurrencySelect = document.querySelector(".coin-title-eua")
    const anotherCoins = document.querySelector(".coin-value-eua")

    if (selectCoin.value == "euro") {
        changeCurrencySelect.innerHTML = "Euro"
        anotherCoins.innerHTML = "0,00 €"

    }
    if (selectCoin.value == "dolar") {
        changeCurrencySelect.innerHTML = "Dólar"
        anotherCoins.innerHTML = "$0,00"
    }
}

button.addEventListener("click",convertMoney)
selectCoin.addEventListener("change", changeSelect)
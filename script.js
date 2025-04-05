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

    //VALOR QUE FOI DIGITADO PELO USUÁRIO DIVIDIDO PELO VALOR ATRIBUÍDO AO DOLAR
    //const convertValue = input / dollarQuote

    if(selectCoin.value == "dolar") { //PRA MUDAR DEPENDENDO DO SELECT USADO (DOLAR OR EURO)
        anotherCoins.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format ((input / dollarQuote).toFixed(2))
    }
    if(selectCoin.value == "euro") {
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

button.addEventListener("click",convertMoney)
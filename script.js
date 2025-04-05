//CHAMAR O BOTÃO  
const button = document.querySelector(".convert-button")

//FUNÇÃO QUE SERÁ EXECUTADA QUANDO HOUVER CLICK NO BOTÃO
function convertMoney() {
    //CHAMAR O INPUT PARA PEGAR SOMENTE O VALOR QUE SERÁ DIGITADO (.value)
    const input = document.querySelector(".input-value").value
    //CHAMAR OS ESPAÇOS QUE OS VALORES FICARÃO ALOCADOS APÓS A CONVERSÃO
    const brl = document.querySelector(".coin-value-brazil")
    const anotherCoins = document.querySelector(".coin-value-eua")

    //DECLARAR O VALOR DO DÓLAR PARA EFETUAR A DIVISÃO PARA CONVERTER
    const dolar = 5.8

    //VALOR QUE FOI DIGITADO PELO USUÁRIO DIVIDIDO PELO VALOR ATRIBUÍDO AO DOLAR
    const convertValue = input / dolar

    //SUBSTITUIR OS VALORES EMBAIXO DAS BANDEIRAS POR: VALOR DIGITADO E VALOR CONVERTIDO
    brl.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(input)

    anotherCoins.innerHTML = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD"
    }).format (convertValue.toFixed(2))

}

button.addEventListener("click",convertMoney)
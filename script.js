//CHAMAR O BOTÃO  
const button = document.querySelector(".convert-button")

//FUNÇÃO QUE SERÁ EXECUTADA QUANDO HOUVER CLICK NO BOTÃO
function convertMoney() {
    //CHAMAR O INPUT PARA PEGAR SOMENTE O VALOR QUE SERÁ DIGITADO (.value)
    const input = document.querySelector(".input-value").value

    //DECLARAR O VALOR DO DÓLAR PARA EFETUAR A DIVISÃO PARA CONVERTER
    const dolar = 5.8

    //VALOR QUE FOI DIGITADO PELO USUÁRIO DIVIDIDO PELO VALOR ATRIBUÍDO AO DOLAR
    const convertValue = input / dolar

    //MOSTRAR NA TELA/CONSOLE O VALOR FINAL APÓS A DIVISÃO
    console.log(convertValue)
}

//button.addEventListener("click", convertMoney)
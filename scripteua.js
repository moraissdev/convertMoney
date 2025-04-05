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
coinToConvert.addEventListener("change", convertSelectCoin)
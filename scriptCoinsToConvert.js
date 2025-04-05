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

function selectCoinToConvert() {
    const coinToConvert = document.getElementById("selectConvertFrom")
    const currencyValueToSelect = document.getElementById("valueToConvert")
    const valueDigited = document.querySelectorById("valueDigitedByUser").value

    if(coinToConvert.value == "dolarToConvert") {
        currencyValueToSelect.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format(valueDigited)
        
    }
}

coinToConvert.addEventListener("change", convertSelectCoin)

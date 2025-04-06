const coinToSelectToConvert = document.querySelector(".convert-from")

function selectToConvert() {
    const aboveCurrencySelect = document.querySelector(".coin-title-real")
    const aboveImgToSelect = document.querySelector(".icon-real")

    if(coinToSelectToConvert.value == "realConvert") {
        aboveCurrencySelect.innerHTML = "Real"
        aboveImgToSelect.src = "assets/real-icon.png"
    }
    if(coinToSelectToConvert.value == "dolarConvert") {
        aboveCurrencySelect.innerHTML = "Dólar Americano"
        aboveImgToSelect.src = "assets/dolar-icon.png"
    }
    if(coinToSelectToConvert.value == "euroConvert") {
        aboveCurrencySelect.innerHTML = "Euro"
        aboveImgToSelect.src = "assets/euro-icon.png"
    }
    if(coinToSelectToConvert.value == "libraConvert") {
        aboveCurrencySelect.innerHTML = "Libra Esterlina"
        aboveImgToSelect.src = "assets/libra-icon.png"
    }
}

function valueSelectToConvert () {
    const valueChange = document.getElementById("coinRealToAnotherCurrency")
    const valueDigited = document.getElementById("inputToValue").value

    if(coinToSelectToConvert.value == "reaoConvert") {
        valueChange.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format(Number(valueDigited).toFixed(2))
    }
    if(coinToSelectToConvert.value == "dolarConvert") {
        valueChange.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format(Number(valueDigited).toFixed(2))
    }
    if(coinToSelectToConvert.value == "euroConvert") {
        valueChange.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "eur"
        }).format(Number(valueDigited).toFixed(2))
    }
    if(coinToSelectToConvert.value == "libraConvert") {
        valueChange.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "gbp"
        }).format(Number(valueDigited).toFixed(2))
    }
}

coinToSelectToConvert.addEventListener("change", valueSelectToConvert)
coinToSelectToConvert.addEventListener("change", selectToConvert)
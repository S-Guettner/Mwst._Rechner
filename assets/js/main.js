const steuerbetragOutput = document.querySelector("#steuerbetragOutput")
const endpreisArtOutput = document.querySelector("#endpreisArtOutput")
const preisArtOutput = document.querySelector("#preisArtOutput")
const endpreisOutput = document.querySelector("#endpreisOutput")
const nettoToBrutto = document.querySelector("#nettoToBrutto")
const bruttoToNetto = document.querySelector("#BruttoToNetto")
const prozent19 = document.querySelector("#prozent19")
const prozent7 = document.querySelector("#prozent7")

const contentChange = () =>{
    if(nettoToBrutto.checked === true){
        preisArtOutput.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
        endpreisArtOutput.innerHTML = "Bruttobetrag(Endpreis)"
    }else{
        preisArtOutput.innerHTML = "Bruttobetrag(Preis inclusive Mehrwertsteuer) in Euro"
        endpreisArtOutput.innerHTML = "Nettobetrag"
    }
}
const calculate = () =>{
    let priceInput = document.querySelector("#priceInput").value
    if(nettoToBrutto.checked === true && prozent19.checked === true){
        steuerbetragOutput.innerHTML = (priceInput * 0.19).toFixed(2)
        endpreisOutput.innerHTML = (priceInput * 1.19).toFixed(2)
    }else if(nettoToBrutto.checked === true && prozent7.checked === true){
        steuerbetragOutput.innerHTML = (priceInput * 0.07).toFixed(2)
        endpreisOutput.innerHTML = (priceInput * 1.07).toFixed(2)
    }else if(bruttoToNetto.checked === true && prozent19.checked === true){
        steuerbetragOutput.innerHTML = ((priceInput) - (priceInput / 1.19)).toFixed(2)
        endpreisOutput.innerHTML = priceInput - (((priceInput) - (priceInput / 1.19)).toFixed(2))
    }else{
        steuerbetragOutput.innerHTML = ((priceInput) - (priceInput / 1.07)).toFixed(2)
        endpreisOutput.innerHTML = priceInput - (((priceInput) - (priceInput / 1.07)).toFixed(2))
    }
}


const nettoToBrutto = document.querySelector("#nettoToBrutto")
const BruttoToNetto = document.querySelector("#BruttoToNetto")
const priceInput = document.querySelector("#priceInput")

const steuerbetragOutput = document.querySelector("#steuerbetragOutput")
const endpreisArtOutput = document.querySelector("#endpreisArtOutput")
const endpreisOutput = document.querySelector("#endpreisOutput")

const preisArtOutput = document.querySelector("#preisArtOutput")

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


console.log(nettoToBrutto.checked);
console.log(BruttoToNetto.checked);
console.log(prozent19.checked);
console.log(prozent7.checked);


const calculate = () =>{
    if(nettoToBrutto.checked === true && prozent19.checked == true){
        steuerbetragOutput.innerHTML = priceInput.value * 0.19
        endpreisOutput.innerHTML = priceInput.value * 1.19
    }else if(nettoToBrutto.checked === true && prozent7.checked === true){
        steuerbetragOutput.innerHTML = priceInput.value * 0.07
        endpreisOutput.innerHTML = priceInput.value * 1.07
    }else if(BruttoToNetto.checked === true && prozent19.checked === true){
        steuerbetragOutput.innerHTML = priceInput.value * 0.19
        endpreisOutput.innerHTML = priceInput.value -  (priceInput.value * 0.19)
    }else{
        steuerbetragOutput.innerHTML = priceInput.value * 0.19
        endpreisOutput.innerHTML = priceInput.value -  (priceInput.value * 0.07)
    }
}


const nettoToBrutto = document.querySelector("#nettoToBrutto")
const BruttoToNetto = document.querySelector("#BruttoToNetto")

const steuerbetragOutput = document.querySelector("#steuerbetragOutput")
const endpreisOutput = document.querySelector("#endpreisOutput")

const preisArtOutput = document.querySelector("#preisArtOutput")

let contentChange = () =>{
    if(nettoToBrutto.checked === true){
        preisArtOutput.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    }else{
        preisArtOutput.innerHTML = "Bruttobetrag(Preis inclusive Mehrwertsteuer) in Euro"
    }
}


console.log(nettoToBrutto.checked);
console.log(BruttoToNetto.checked);
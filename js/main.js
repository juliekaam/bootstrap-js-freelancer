/*Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit). */

let availableDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
function priceToPay(e){
    e.preventDefault();

    console.log("Prenvent default");
    
    let hours = parseInt(document.getElementById("hours").value);
    let optionTypeOffer = parseInt(document.getElementById("typeofwork").value);
    let discountCode = document.getElementById("discount").value;

    let finalPrice = 0;
//stampo prezzo per categoria
    switch(optionTypeOffer){
        case 1:
            // Frontend 
            finalPrice = 15.3* hours;
            break;
        case 2:
            // Backend 
            finalPrice = 20.5 * hours;
            break;
        case 3:
            //  Analisi
            finalPrice = 33.6 * hours;
    }

   

   
    finalPrice = finalPrice.toFixed(2);

    document.getElementById("price").innerHTML = " Prezzo da pagare: " + finalPrice;
}

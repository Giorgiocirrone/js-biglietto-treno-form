/*
-Raccolgo gli elementi di interesse del Dom
-Faccio reagire al click il bottone di conferma 


|Nel momento in cui clicco 


-Recupero i valori dal form

fase di validazione 

-calcolo del prezzo in base ai km 
-verifico se applicare lo sconto 
-arrotondo a 2 decimali 

svuoto i campi dal form

-preparo i valori corretti nel biglietto 
-mostro il biglietto


*/


// definire le variabili del form e del biglietto 

// elementi interenti al fomr 
const nameField = document.getElementById('name');
const KmsField = document.getElementById('Kms');
const ageField = document.getElementById('age');
const confirmButton = documet.getElementById('confirm-button');


//elementi inerenti al biglietto 


const ticketSection = documet.getElementById('Ticket-section');
const passengersElement = documet.getElementById('passenger-name');
const carElement = documet.getElementById('car');
const pnrElement = documet.getElementById('pnr');
const priceElement = documet.getElementById('price');









//calcolo del prezzo di base 


let price = KmsValue + pricePerKm;

// ci sono sconti ? 


if (ageValue == 'junior') {

    price *= 0.8
    rateName = 'Tariffa per minorenni';
}



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
const rateElement = document.getElementById('rate')



//variabili costanti per calcolo prezzo 


const pricepPerKm = 0.21;

let rateName = 'Tariffa Ordinaria';

//evento bottone
confirmButton.addEventListener('click', function (e) {


    e.preventDefault();

    const nameValue = nameField.ariaValueMax.trim();

    const KmsValue = parseInt(KmsField.value)
    const ageValue = ageField.value;

    console.log('nameValue', nameValue);
    console.log('KmsValue', KmsValue);
    console.log('ageValue', ageValue);



    let finalPrice = KmsValue * pricepPerKm;

    //sconto da applicare 


    if (ageValue == 'junior') {//html

        price *= 0.8;

        rateName = 'Tariffa minorenni';

    } else if (ageValue == 'senior') {
        price *= 0.6;
        rateName = 'Tariffa Senior';
    }


    console.log(price, rateName);


    //Inaserisco i dati nel biglietto usa la funzione inner value 


    passengersElement.innerText = nameValue;

    rateElement.innerText = rateName;
    carElement.innerText = carName;

    pnrElement.innerText = pnrName;

    priceElement.innerText = price;


    //msotrare il biglietto 


    ticketSection.classList.romove('d-none');

})


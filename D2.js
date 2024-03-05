/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = [20, 80];

if (number[0] > number[1]) {
  console.log(number[0], "è maggiore di", number[1]);
} else {
  console.log(
    "algoritmo per trovare il più grande (RISULTATO): ",
    number[1],
    "è maggiore di",
    number[0]
  );
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 5;

let equality = number1 !== 5 ? "equal" : "not equal";
console.log("l'algoritmo mostra: ");
console.log(equality);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number2 = 25;
let number3 = number2 % 5;
let dividedBy5 = number3 === 0 ? "divisibile per 5" : "non divisibile per 5";
console.log('algoritmo che mostra "divisibile per 5": ');
console.log(dividedBy5);
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number4 = 8;
let number5 = 4;

if ((number4 || number5) === 8) {
  console.log("verifica:  ", "uno dei due numeri è 8");
} else if (number4 + number5 === 8 || number4 - number5 === 8) {
  console.log("l'addizione/sottrazione  tra number4 e number5 è uguale a 8");
} else {
  console.log(
    "nessuno dei due numeri è 8, e,  l'addizione/sottrazione  tra number4 e number5 non è uguale a 8"
  );
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
shipping = 10;
if (totalShoppingCart > 50) {
  console.log("il tuo tatale è:  ", totalShoppingCart);
} else {
  console.log("il tuo tatale è:  ", totalShoppingCart + shipping);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = (totalShoppingCart * 20) / 100;
// console.log(blackFriday)   //12
if (totalShoppingCart > 50) {
  console.log(
    "il tuo tatale è stato scontato con il black friday:  ",
    totalShoppingCart - blackFriday
  );
} else {
  console.log(
    "Al tuo tatale è stata aggiunta la spedizione ma il tutto è stato scontato con il black friday:  ",
    totalShoppingCart + shipping - blackFriday
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number6 = 27;
let number7 = 32;
let number8 = 12;

if (number6 > number7 && number7 > number8) {
  console.log("ordine dei numeri: ", number8, number7, number6);
} else if (number7 > number6 && number6 > number8) {
  console.log("ordine dei numeri: ", number8, number6, number7);
} else if (number8 > number7 && number7 > number6) {
  console.log("ordine dei numeri: ", number6, number7, number8);
} else if (number6 > number8 && number8 > number7) {
  //
  console.log("ordine dei numeri: ", number7, number8, number6);
} else if (number8 > number6 && number6 > number7) {
  console.log("ordine dei numeri: ", number7, number6, number8);
}

// else{}
else {
  console.log("(number7 > number8 && number8 > number6) ultima condizione");
  console.log("ordine dei numeri: ", number6, number8, number7);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("questa è una : ", typeof "kassandra");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number9 = 14;

if (number9 % 2 === 0) {
  console.log(number9, "è un numero pari");
} else {
  console.log(number9, "è un numero dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let val =7
// let m10= val < 10
// let m5= val < 5
// if(m5===true){
//   console.log("Minore  di 5")
// }else if(m10===true&&val>5){
//   console.log("Meno di 10");
// }else{
//   console.log("maggiore o uguale a 10 ")
// }

let val = 7;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array1 = [];
array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array1.pop();
array1.push(100);
console.log(array1);

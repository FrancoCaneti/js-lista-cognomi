//cognome utente

var utente = prompt('Inserisci il tuo cognome:');

//lista cognomi
//aggiunta cognome e  ordine alfabetico

var cognomi = [  'bianchi', 'neri', 'rossi', 'verdi', 'gialli'];
cognomi.push(utente); cognomi.sort();
cognomi.lastIndexOf(utente);
console.log(cognomi);



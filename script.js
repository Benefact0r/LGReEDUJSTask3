let personAge = 0;
let ticketPrice;


if ( personAge >= 1 && personAge <= 12) {
    ticketPrice = 5;
    console.log('Ticket price is ', ticketPrice, '$');
} 
else if ( personAge > 12 && personAge <= 17) {
    ticketPrice = 10;
    console.log('Ticket price is ', ticketPrice, '$');
}
else if ( personAge >= 18 && personAge <=64) {
    ticketPrice = 15;
    console.log('Ticket price is ', ticketPrice, '$');
}
else if ( personAge >= 65 && personAge <= 120 ) {
    ticketPrice = 8
    console.log('Ticket price is ', ticketPrice, '$');
}
else if ( personAge < 0 || personAge > 120) {
    console.log('Please try again');
}
else {console.log('Please check your informations');}
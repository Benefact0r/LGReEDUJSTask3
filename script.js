let age = 18;
let ticketprice;

if ( age <= 12) {
    console.log('tkt price is 5$');
    console.log('under 12');
} 
else if ( age > 12 && age <= 17) {
    console.log('tkt price is 10$');
    console.log('age is 12-17');
} 
else if (age >= 18 && age <= 64) {
    console.log('tkt price is 15$');
    console.log('age is 18-64');
} 
else if ( age >= 65 ) {
    console.log('tkt price is 8$');
    console.log('age is 65-120');
}
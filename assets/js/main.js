const km = Number(prompt("Quanti km devi percorrere?"));

const age = Number(prompt("Quanti anni hai?"));

if( age < 18){
    price = (Number(km) * 0.21 * 80 / 100);
}
else if (age > 65) {
    price = (Number(km) * 0.21 * 60 / 100);
} 
else {
    price = (Number(km) * 0.21);
}

alert("Il biglietto costa: \n \n" + price.toFixed(2));
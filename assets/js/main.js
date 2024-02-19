const km = Number(prompt("Quanti km devi percorrere?"));

const age = Number(prompt("Quanti anni hai?"));

if( age < 18){
    price = (Number(km) * 0.21 * (100-20)%);
}
else if (age > 65) {
    price = (Number(km) * 0.21 * (100-40)%);
} 
else {
    price = (Number(km) * 0.21);
}

alert("Il biglietto costa: \n \n" + price.toFixed(2));
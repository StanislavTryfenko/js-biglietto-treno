const km = Number(prompt("Quanti km devi percorrere?"));

const age = Number(prompt("Quanti anni hai?"));

if( age < 18){
    discountJunion = ((100-20)%);
    price = (Number(km) * 0.21 * Number(discountJunion));
}
else if (age > 65) {
    discountSenion = ((100-40)%);
    price = (Number(km) * 0.21 * Number(discountSenion));
} 
else {
    price = (Number(km) * 0.21);
}

alert("Il biglietto costa: \n \n" + price.toFixed(2));
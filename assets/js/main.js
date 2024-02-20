const km = Number(prompt("Quanti km devi percorrere?"));

const age = Number(prompt("Quanti anni hai?"));

const discountJunion = ((100-20) / 100);

const discountSenion = ((100-40) / 100);

if (age < 18){  
    price = (Number(km) * 0.21 * Number(discountJunion));
}
else if (age > 65) {
    price = (Number(km) * 0.21 * Number(discountSenion));
} 
else {
    price = "(Number(km) * 0.21)";
}

alert("Il biglietto costa: \n \n" + price.toFixed(2));
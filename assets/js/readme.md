##Consegna

Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli :adulto_anziano:).

L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca - come quelle fatte in classe :occhiolino:

##tool

-cons/let
-promt
-alert
-if else e tuttecose
-num.tofixed(2)
-poi ci penso

##pseudocode

-prompt km da percorrere
-prompt età

-prezzo

se(age<18) km*0.21*80/100

altrimenti se (age > 65) km*0.21*60/100

Altrimenti km*0.21
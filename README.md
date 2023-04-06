JSnack blocco 5
===

## JSnack 1

Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65

## Svolgimento

1) creo un array di oggetti contenente gli utenti
2) utilizzo .filter per ciclare l'array e ottenere gli under 18 e gli over 60

## JSnack 2

Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti

## JSnack 4

Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120

## Svolgimento

1) creo array contenente studenti
2) creo due array vuoti che andranno a contenere i grades > 70 e grades > 70 + id > 120
2) attraverso un ciclo forEach stampo i nomi in maiuscolo e pusho gli studenti nei rispettivi array vuoti

## JSnack 5 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.
const users = [
  {
    nome: 'Mario',
    cognome: 'Rossi',
    età: 15
  },
  {
    nome: 'Giuseppe',
    cognome: 'Verdi',
    età: 20
  },
  {
    nome: 'Alessio',
    cognome: 'Bianchi',
    età: 16
  },
  {
    nome: 'Marco',
    cognome: 'Neri',
    età: 71
  },
  {
    nome: 'Pinco',
    cognome: 'Pallo',
    età: 69
  },
]


const utentiOver = users.filter((persona) =>{
  if(persona.età >= 60) return true;
  return false;
})
const utentiUnder18 = users.filter((persona) =>{
  if(persona.età <= 18) return true;
  return false;
})

console.log(utentiOver);
console.log(utentiUnder18);











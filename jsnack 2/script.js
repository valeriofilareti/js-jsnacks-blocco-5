const students = [
  {
    nome: 'Mario',
    cognome: 'Rossi',
    matricola: 1768604,
    voti: [18, 28, 19, 30]
  },
  {
    nome: 'Giuseppe',
    cognome: 'Verdi',
    matricola: 1790704,
    voti: [19, 29, 26, 18]
  },
  {
    nome: 'Alessio',
    cognome: 'Bianchi',
    matricola: 1760754,
    voti: [25, 25, 27, 23]
  },
  {
    nome: 'Marco',
    cognome: 'Neri',
    matricola: 1790704,
    voti: [18, 18, 18, 22]
  },
  {
    nome: 'Pinco',
    cognome: 'Pallo',
    matricola: 1760704,
    voti: [30, 30, 29, 28]
  },
]

const newMap = students.map(student => {

  const newStud = {
    name: `${student.nome} ${student.cognome}`,
    matricola: student.matricola,
    media: calcoloMedia(student) 
  }

  console.log(newStud);
});


function calcoloMedia(student) {
  let totale = 0;
  student.voti.forEach(voto => totale += voto)
  return totale / student.voti.length;
}






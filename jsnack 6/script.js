const teams = [
  {
    nome: 'milan',
    punti: getrandomNumber (50, 80),
    falliSubiti: getrandomNumber (10, 30)
  },
  {
    nome: 'inter',
    punti: getrandomNumber (50, 80),
    falliSubiti: getrandomNumber (10, 30)
  },
  {
    nome: 'juve',
    punti: getrandomNumber (50, 80),
    falliSubiti: getrandomNumber (10, 30)
  },
  {
    nome: 'roma',
    punti: getrandomNumber (50, 80),
    falliSubiti: getrandomNumber (10, 30)
  },
]


// let newTeams = [];

// teams.forEach((team) => {
//   console.log(team.nome, team.punti);
//   const {nome, punti, falliSubiti} = team;
// })

// console.log(newTeams);


const classeRemap = teams.map( squadra => {
  const {nome, falliSubiti} = squadra
  const newteam = {
    nom: nome,
    fouls: falliSubiti
  }
  return newteam;
})

console.log(classeRemap);








function getrandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}



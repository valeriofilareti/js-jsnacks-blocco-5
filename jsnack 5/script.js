// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const container = document.querySelector('.container')

const bikes = [
  {
    nome: 'bici1',
    peso: 13
  },
  {
    nome: 'bici2',
    peso: 15
  },
  {
    nome: 'bici3',
    peso: 16
  },
  {
    nome: 'bici4',
    peso: 11
  },
]

const newpesi = bikes.sort((a,b)=>b.peso-a.peso);

bikes.forEach((bici) => {
  const {nome, peso} = bici;
  console.log(`La bici ${nome} pesa ${peso}`);
})



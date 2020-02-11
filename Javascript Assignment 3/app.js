// writes a name to the screen
// function name() {
//   const name = document.querySelector('#name')
//   name.innerHTML = data.name
// }

let randoNum = function(topNum, bottomNum) {
  return Math.floor(Math.random() * topNum + bottomNum)
}


const playerPlanet = () => {
  const planet = `https://swapi.co/api/planets/${randoNum(61, 1)}`
  fetch(planet)
    .then(x => x.json())
    .then(data => {
      console.log(data.name) 
  })
}


const playerStarship = () => {
  const starship = `https://swapi.co/api/starships/${randoNum(15, 2)}`
  fetch(starship)
    .then(x => x.json())
    .then(data => {
      console.log(data.name)  
  })
}

const playerSpecies = () => {
  const species = `https://swapi.co/api/species/${randoNum(15, 2)}`
  fetch(species)
    .then(x => x.json())
    .then(data => {
      console.log(data.name)
  })
}


playerPlanet()
playerStarship()
playerSpecies()
















    







  


// writes a name to the screen
// function name() {
//   const name = document.querySelector('#name')
//   name.innerHTML = data.name
// }

// TEST ITEMS

// const submit = document.querySelector('#submit')
// submit.addEventListener('click', () => {
//   if (name.value !== '') {
//     background.style.color = 'lime'
//   }
// })

// function that takes player name from input and writes it to page

const getPlayerName = () => {
  const myTextInput = document.querySelector('#name')
  playerName.innerHTML = myTextInput.value
}

// //////////////////////////////

// random number function
// I JUST CHANGED THIS TO AN ARROW FUNCTION, IF THERE IS AN ISSUE
let randoNum = (topNum, bottomNum) => {
  return Math.floor(Math.random() * topNum + bottomNum)
}

// random planet function, writes to page
const playerPlanet = () => {
  const planet = `https://swapi.co/api/planets/${randoNum(61, 1)}`
  fetch(planet)
    .then(x => x.json())
    .then(data => {
      const myPlanet = document.querySelector('#planet')
      myPlanet.innerHTML = data.name
      if (data.name === undefined) {
        myPlanet.innerHTML = "Oops. Something went wrong. Please Reload."
      }
  })
}

// random starship function, writes to page
const playerStarship = () => {
  const starship = `https://swapi.co/api/starships/${randoNum(15, 2)}`
  fetch(starship)
    .then(x => x.json())
    .then(data => {
      const myStarShip = document.querySelector('#starShip')
      myStarShip.innerHTML = data.name
      if (data.name === undefined) {
        myStarShip.innerHTML = "Oops. Something went wrong. Please Reload."
      }
  })
}

// random species function, writes to page
const playerSpecies = () => {
  const species = `https://swapi.co/api/species/${randoNum(15, 2)}`
  fetch(species)
    .then(x => x.json())
    .then(data => {
      const mySpecies = document.querySelector('#species')
      mySpecies.innerHTML = data.name
      if (data.name === undefined) {
        mySpecies.innerHTML = "Oops. Something went wrong. Please Reload."
      }
  })
}

getPlayerName()
playerPlanet()
playerStarship()
playerSpecies()


















    







  


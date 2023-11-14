const bgHome = document.body.querySelector("#bgHome");
const bgUniverse = document.body.querySelector("#bgUniverse");
const bgExploration = document.body.querySelector("#bgExplore")

bgHome.addEventListener('click', (event) => {
  event.preventDefault()
  document.body.classList.remove("universe");
  document.body.classList.remove("exploration");
  document.body.classList.add("home");
})

bgUniverse.addEventListener('click', (event) => {
  event.preventDefault()
  document.body.classList.remove("exploration");
  document.body.classList.remove("home");
  document.body.classList.add("universe");
})

bgExploration.addEventListener('click', (event) => {
  event.preventDefault()
  document.body.classList.remove("home");
  document.body.classList.remove("universe");
  document.body.classList.add("exploration");
})


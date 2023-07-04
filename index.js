const toggleButton = document.querySelector('#power-button')
const cardPrice = document.querySelectorAll('.card__price')

toggleButton.addEventListener('click', ()=> {
  for (let element of cardPrice) {
    element.classList.toggle('hidden')
  }
})


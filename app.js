
const ratingForm = document.getElementById('rating-form')
const thankYou = document.querySelector('.thank-you')
const ratingChoice = document.getElementById('rating-choice')
const button = document.getElementById('btn')

button.addEventListener('click', (e) => {
  e.preventDefault()

  const rating = document.querySelector('input[name="rating"]:checked')

  ratingChoice.innerHTML = rating.value
  thankYou.classList.remove('invisible')
  ratingForm.classList.add('invisible')
})
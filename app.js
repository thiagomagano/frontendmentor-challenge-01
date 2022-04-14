
const ratingForm = document.getElementById('rating-form')
const thankYou = document.getElementById('thank-you')
const ratingChoice = document.getElementById('rating-choice')
const button = document.getElementById('btn')

button.addEventListener('click', (e) => {
  e.preventDefault()

  const rating = document.querySelector('input[name="rating"]:checked')

  if (rating) {

    setTimeout(() => {
      ratingChoice.innerHTML = rating.value
      thankYou.classList.remove('invisible')
    }, 100)
    ratingForm.classList.add('invisible')

  }
  else {
    alert("Please choice a rating!")
  }
})

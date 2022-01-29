const inputTxt = document.getElementById('inputTxt')
const btn = document.getElementById('btn')
const outputTxt = document.getElementById('outputTxt')

// API
const URL = 'https://api.funtranslations.com/translate/morse.json'

btn.addEventListener('click', translateText)

function translateText() {
  let newURL = `${URL}?text=${inputTxt.value}`
  fetch(newURL)
    .then((response) => response.json())
    .then((data) => (outputTxt.innerHTML = data.contents.translated))
    .catch(errorHandler)
}

function errorHandler(error) {
  console.log('error occured', error.message)
  alert('Please! Try after 1 hour')
}

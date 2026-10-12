import './style.css'
import getRandomQuote from './http'
import showRandomQuote from './ui'

const getQuoteButton = document.getElementById('randomButton') as HTMLButtonElement
const buttonLabel = document.getElementById('randomButtonLabel')!
const status = document.getElementById('quoteStatus')!
const main = document.querySelector('main')!

getQuoteButton.addEventListener('click', getQuote)
getQuote()

async function getQuote() {
  const quote = await getRandomQuote()
  if (quote) {
    showRandomQuote(quote)
    status.hidden = true
  } else {
    status.hidden = false
    status.textContent = 'Couldn’t load a quote. Try again.'
  }
  buttonLabel.textContent = quote ? 'Another quote' : 'Try again'
  main.setAttribute('aria-busy', 'false')
  getQuoteButton.disabled = false
}

import './style.css'
import getRandomQuote from './http'
import showRandomQuote from './ui'

const getQuoteButton = document.getElementById('randomButton')!
const eminemQuote = document.getElementById('quote')!

getQuoteButton.addEventListener('click', getQuote)

async function getQuote() {
  const quote = await getRandomQuote()
  if (quote) {
    showRandomQuote(quote)
  } else {
    eminemQuote.textContent = 'Impossible de charger une citation. Réessaie.'
  }
}

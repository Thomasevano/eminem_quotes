import './style.css'
import getRandomQuote from './http'
import showRandomQuote from './ui'

const getQuoteButton = document.getElementById('randomButton')!
getQuoteButton.addEventListener('click', getQuote)

async function getQuote() {
  const quote = await getRandomQuote()
  showRandomQuote(quote!)
}

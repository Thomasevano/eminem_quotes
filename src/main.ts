import './style.css'
import getRandomQuote from './http'
import showRandomQuote from './ui'
import { Quote } from '../types/quote';

const getQuoteButton = document.getElementById('randomButton')!
getQuoteButton.addEventListener('click', getQuote)

async function getQuote() {
  const quote = await getRandomQuote() as Quote
  showRandomQuote(quote)
}

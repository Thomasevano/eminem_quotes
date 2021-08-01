import './style.css'
import getQuotes from './http'
import showRandomQuotes from './ui'

const getQuoteButton = document.getElementById('randomButton')!
getQuoteButton.addEventListener('click', getRandomQuote)

async function getRandomQuote() {
  try {
    const quotes = await getQuotes('data/quotes.json')
    let randomQuoteId = getRandomId(0, quotes.length)
    showRandomQuotes(quotes[`${randomQuoteId}`])
  }
  catch(error) {
    console.error(error)
  };
}

function getRandomId(min: number, max: number){
  return Math.floor(Math.random()*(max-min+1)+min)
}

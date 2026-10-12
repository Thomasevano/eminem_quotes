import './style.css'
import getRandomQuote from './http'
import showRandomQuote from './ui'

const getQuoteButton = document.getElementById('randomButton') as HTMLButtonElement
const buttonLabel = document.getElementById('randomButtonLabel')!
const status = document.getElementById('quoteStatus')!
const main = document.querySelector('main')!
let hasQuote = false

getQuoteButton.addEventListener('click', getQuote)
getQuote()

async function getQuote() {
  const restoreFocus = document.activeElement === getQuoteButton
  getQuoteButton.disabled = true
  main.setAttribute('aria-busy', 'true')
  buttonLabel.textContent = 'Finding a quote…'
  status.className = hasQuote ? 'sr-only' : 'passage-state'
  status.textContent = 'Loading a lyric…'

  const quote = await getRandomQuote()
  if (quote) {
    showRandomQuote(quote)
    hasQuote = true
    status.className = 'sr-only'
    status.textContent = 'Showing lyrics from ' + quote.song_title + '.'
  } else {
    status.className = hasQuote ? 'passage-error' : 'passage-state'
    status.textContent = 'Couldn’t load a quote. Try again.'
  }

  buttonLabel.textContent = quote ? 'Another quote' : 'Try again'
  main.setAttribute('aria-busy', 'false')
  getQuoteButton.disabled = false
  if (restoreFocus && document.activeElement === document.body) {
    getQuoteButton.focus()
  }
}

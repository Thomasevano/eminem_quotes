import { Quote } from '../types/quote'

const blockquote = document.getElementById('quote')!
const passage = document.getElementById('quoteText')!
const source = document.getElementById('sourceCopy')!
const song = document.getElementById('songTitle')!
const album = document.getElementById('albumName')!
const cover = document.getElementById('cover')!
const image = document.getElementById('albumCover') as HTMLImageElement
const listen = document.getElementById('listenSong') as HTMLAnchorElement

image.addEventListener('error', () => {
  image.hidden = true
})

function safeHttpUrl(url: string): string | null {
  try {
    const { protocol, href } = new URL(url)
    return protocol === 'https:' || protocol === 'http:' ? href : null
  } catch {
    return null
  }
}

function showRandomQuote(quote: Quote) {
  passage.textContent = quote.quote
  blockquote.classList.toggle('passage-long', quote.quote.length > 350)
  blockquote.hidden = false
  song.textContent = quote.song_title
  album.textContent = quote.album_name
  source.hidden = false

  const artwork = safeHttpUrl(quote.album_cover_url)
  cover.hidden = false
  image.hidden = !artwork
  image.alt = quote.album_name + ' album cover'
  if (artwork) {
    image.src = artwork
  } else {
    image.removeAttribute('src')
  }

  const songUrl = safeHttpUrl(quote.song_listen_url)
  listen.hidden = !songUrl
  if (songUrl) {
    listen.href = songUrl
    listen.setAttribute('aria-label', 'Listen to ' + quote.song_title + ' (opens in a new tab)')
  } else {
    listen.removeAttribute('href')
  }
}

export default showRandomQuote

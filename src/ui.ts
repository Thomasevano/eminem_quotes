import { Quote } from '../types/quote';

const eminemQuote = document.getElementById('quote')!

function safeHttpUrl(url: string): string | null {
  try {
    const { protocol, href } = new URL(url)
    return protocol === 'https:' || protocol === 'http:' ? href : null
  } catch {
    return null
  }
}

function showRandomQuote(quote: Quote) {
  eminemQuote.replaceChildren()

  const card = document.createElement('div')
  card.className = 'card w-96 shadow-xl'

  const cover = safeHttpUrl(quote.album_cover_url)
  if (cover) {
    const figure = document.createElement('figure')
    figure.className = 'px-10 pt-10'
    const img = document.createElement('img')
    img.src = cover
    img.alt = 'album cover'
    img.style.margin = 'auto'
    figure.append(img)
    card.append(figure)
  }

  const body = document.createElement('div')
  body.className = 'card-body items-center text-center mt-4'

  const song = document.createElement('span')
  song.className = 'badge'
  song.textContent = `Morceau: ${quote.song_title}`

  const album = document.createElement('span')
  album.className = 'badge'
  album.textContent = `Album: ${quote.album_name}`

  const blockquote = document.createElement('blockquote')
  const paragraph = document.createElement('p')
  paragraph.textContent = `${quote.quote}.`
  blockquote.append(paragraph)

  body.append(song, album, blockquote)

  const listen = safeHttpUrl(quote.song_listen_url)
  if (listen) {
    const actions = document.createElement('div')
    actions.className = 'card-actions mt-4'
    const link = document.createElement('a')
    link.href = listen
    link.className = 'btn btn-secondary'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.textContent = 'Listen song'
    actions.append(link)
    body.append(actions)
  }

  card.append(body)
  eminemQuote.append(card)
}

export default showRandomQuote

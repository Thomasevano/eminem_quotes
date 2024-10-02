import { Quote } from '../types/quote';

const eminemQuote = document.getElementById('quote')!

function showRandomQuote(quote: Quote) {
  eminemQuote.innerHTML = `
    <div class="card w-96 shadow-xl">
      <figure class="px-10 pt-10">
        <img style="margin: auto" src="${quote.album_cover_url}" alt="album cover">
      </figure>
      <div class="card-body items-center text-center mt-4">
        <span class="badge">Morceau: ${quote.song_title}</span>
        <span class="badge">Album: ${quote.album_name}</span>
        <blockquote>
          <p>${quote.quote}.</p>
        </blockquote>
        <div class="card-actions mt-4">
          <a href="${quote.song_listen_url}" class="btn btn-secondary" target="_blank">Listen song</a>
        </div>
      </div>
    </div>
  `
}

export default showRandomQuote

import { Quote } from '../types/quote';

const eminemQuote = document.getElementById('quote')!

function showRandomQuote(quote: Quote) {
  eminemQuote.innerHTML = `
    <div class="card w-96 shadow-xl">
      <figure class="px-10 pt-10">
        <img style="margin: auto" src="${quote.cover_url}" alt="album cover">
      </figure>
      <div class="card-body items-center text-center mt-4">
        <span class="badge badge-primary">Morceau: ${quote.title}</span>
        <span class="badge badge-primary">Album: ${quote.name}</span>
        <blockquote>
          <p>${quote.quote}.</p>
        </blockquote>
        <div class="card-actions mt-4">
          <a href="${quote.listen_url}" class="btn btn-secondary" target="_blank">Listen song</a>
        </div>
      </div>
    </div>
  `
}

export default showRandomQuote

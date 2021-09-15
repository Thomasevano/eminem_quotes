const eminemQuote = document.getElementById('quote')!
// import { definitions } from '../types/supabase'

function showRandomQuote(quote: any) {
  console.log(quote)

  eminemQuote.innerHTML = `
    <div class="card bordered">
      <figure>
        <img src="${quote.songs.albums.cover_url}" alt="album cover>
      </figure> 
      <div class="card-body">
        <h2 class="card-title">
          <div class="badge mx-2 badge-primary">Morceau: ${quote.songs.title}</div>
          <div class="badge mx-2 badge-secondary">Album: ${quote.songs.albums.name}</div>
        </h2>
        <blockquote>
          <p>${quote.quote}.</p>
        </blockquote>
        <div class="justify-center card-actions">
          <a href="${quote.songs.listen_url}" class="btn btn-secondary" target="_blank">Listen song</a>
        </div>
      </div>
    </div>
  `
}

export default showRandomQuote

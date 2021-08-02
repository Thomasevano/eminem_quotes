const eminemQuote = document.getElementById('quote')!
// import { definitions } from '../types/supabase'

function showRandomQuote(quote: any) {

  eminemQuote.innerHTML = `
    <div>
      <div>
        <div>
          <img src="${quote.songs.albums.cover_url}" alt="Album cover"/>
          <a href="${quote.songs.listen_url}" target="_blank">Ecouter le morceau</a>
        </div>
        <div>
          <span>Morceau: <strong>${quote.songs.title}</strong></span>
          <span>Album: <strong>${quote.songs.albums.name}</strong></span>
          <blockquote>
            <p>${quote.quote}.</p>
          </blockquote>
        </div>
      </div>
    </div>
  `
}

export default showRandomQuote

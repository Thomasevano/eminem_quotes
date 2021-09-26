const eminemQuote = document.getElementById('quote')!

function showRandomQuote(quote: any) {
  eminemQuote.innerHTML = `
    <div class="card bordered">
      <figure>
        <img src="${quote.cover_url}" alt="album cover>
      </figure> 
      <div class="card-body">
        <h2 class="card-title">
          <div class="badge mx-2 badge-primary">Morceau: ${quote.title}</div>
          <div class="badge mx-2 badge-secondary">Album: ${quote.name}</div>
        </h2>
        <blockquote>
          <p>${quote.quote}.</p>
        </blockquote>
        <div class="justify-center card-actions">
          <a href="${quote.listen_url}" class="btn btn-secondary" target="_blank">Listen song</a>
        </div>
      </div>
    </div>
  `
}

export default showRandomQuote

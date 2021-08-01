const eminemQuote = document.getElementById('quote')!

interface Quote{
  cover: string,
  link: string,
  song_name: string,
  album_name: string,
  body: string,
  author: string,
}
let quote: Array<Quote>

function showRandomQuotes(quote: object) {
  eminemQuote.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${quote.cover}" alt="" class="img-fluid mb-2"/>
          <a href="${quote.link}" target="_blank" class="btn btn-primary btn-block mb-4">Ecouter le morceau</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-danger">Morceau: <strong>${quote.song_name}</strong></span>
          <span class="badge badge-success">Album: <strong>${quote.album_name}</strong></span>
          <br><br>
          <blockquote class="blockquote">
          <p class="mb-0">${quote.body}.</p>
          <footer class="blockquote-footer"><cite>${quote.author}</cite></footer>
        </blockquote>
        </div>
      </div>
    </div>
  `
}

export default showRandomQuotes

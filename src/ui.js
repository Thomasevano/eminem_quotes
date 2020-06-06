class UI {
    constructor() {
        this.eminemQuote = document.getElementById('quote');
    }

    showRandomQuotes(quotes) {
        this.eminemQuote.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${quotes.cover}" alt="" class="img-fluid mb-2"/>
                        <a href="${quotes.link}" target="_blank" class="btn btn-primary btn-block mb-4">Ecouter le morceau</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-danger">Morceau: <strong>${quotes.song_name}</strong></span>
                        <span class="badge badge-success">Album: <strong>${quotes.album_name}</strong></span>
                        <br><br>
                        <blockquote class="blockquote">
                        <p class="mb-0">${quotes.body}.</p>
                        <footer class="blockquote-footer"><cite>${quotes.author}</cite></footer>
                    </blockquote>
                    </div>
                </div>
            </div>
        `
    }
}

export const ui = new UI();

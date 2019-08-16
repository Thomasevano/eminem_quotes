import { http } from './http';
import { ui } from './ui';

document.getElementById('random').addEventListener('click', getRandomQuote);

function getRandomQuote() {
  http.get('api/quotes.json')
    // .then(data => console.log(data.quotes[`${randomQuoteId}`].id))
    .then(data => {

      function getRandomId(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
      }

      let randomQuoteId = getRandomId(0, data.quotes.length);
      ui.showRandomQuotes(data.quotes[`${randomQuoteId}`]);
    })
    .catch(err => console.log(err));
}

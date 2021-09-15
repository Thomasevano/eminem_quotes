import { createClient } from '@supabase/supabase-js'
import { definitions } from '../types/supabase'

const supabase = createClient(`${import.meta.env.VITE_SUPABASE_URL}`, `${import.meta.env.VITE_SUPABASE_KEY}`)

async function getRandomQuote() {
  try {
    const { data, count } = await supabase
      // .rpc('getRandomId')
      .from<definitions['quotes']>('quotes')
      .select(`
        quote,
        songs (
          listen_url,
          title,
          albums (
            cover_url,
            name
          )
        )
      `, { count: 'exact'})

    let randomQuoteId = getRandomId(0, count!)
    return data![randomQuoteId]
    return data
  }
  catch(error) {
    console.error(error)
    return error
  };
}

function getRandomId(min: number, max: number){
  return Math.floor(Math.random()*(max-min+1)+min)
}
// function getRandomId() {
//   const get = sql`
//     SELECT quote, listen_url, title, cover_url, name
//     FROM quotes, songs, albums
//     WHERE quotes.song_id = songs.id
//     AND songs.album_id = albums.id
//     ORDER_BY random()
//     LIMIT 1
//   `
//   console.log(get)
// }

export default getRandomQuote

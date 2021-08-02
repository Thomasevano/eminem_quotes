import { createClient } from '@supabase/supabase-js'
import { definitions } from '../types/supabase'

const supabase = createClient(`${import.meta.env.VITE_SUPABASE_URL}`, `${import.meta.env.VITE_SUPABASE_KEY}`)

async function getRandomQuote() {
  try {
    const { data, count } = await supabase
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
  }
  catch(error) {
    console.error(error)
    return error
  };
}

function getRandomId(min: number, max: number){
  return Math.floor(Math.random()*(max-min+1)+min)
}

export default getRandomQuote

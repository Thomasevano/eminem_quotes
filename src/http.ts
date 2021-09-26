import { createClient } from '@supabase/supabase-js'

const supabase = createClient(`${import.meta.env.VITE_SUPABASE_URL}`, `${import.meta.env.VITE_SUPABASE_KEY}`)

async function getRandomQuote() {
  try {
    const { data } = await supabase
      .rpc('get_random_quote')
    return data![0]
  }
  catch(error) {
    console.error(error)
    return error
  };
}

export default getRandomQuote

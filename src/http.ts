import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

async function getRandomQuote() {
  try {
    const data = await pb.collection('get_random_quote').getList(1, 1, {
      fields: 'album_cover_url,song_listen_url,song_title,album_name, quote, listen_url',
      sort: '@random',
    });
    return data.items[0]
  }
  catch (error) {
    console.error(error)
    return error
  };
}

export default getRandomQuote

import PocketBase from 'pocketbase';
import { Quote } from '../types/quote';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
const collection = import.meta.env.VITE_POCKETBASE_COLLECTION;

async function getRandomQuote(): Promise<Quote | null> {
  try {
    const data = await pb.collection(collection).getList(1, 1, {
      fields: 'album_cover_url,song_listen_url,song_title,album_name,quote',
      sort: '@random',
    });
    return (data.items[0] as unknown as Quote) ?? null;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export default getRandomQuote

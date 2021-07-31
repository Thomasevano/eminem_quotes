async function getQuotes(url: string) {
  const response  = await fetch(url)
  return await response.json()
}

export default getQuotes

# Eminem Quotes

A little web app to show a random Eminem quote.

[![Netlify Status](https://api.netlify.com/api/v1/badges/484161e5-cf6d-4431-aba2-11b44a67f7ee/deploy-status)](https://app.netlify.com/sites/eminem-random-quote/deploys)

Built with TypeScript, Tailwind CSS, Vite, and PocketBase.

The Sleeve layout loads a lyric on arrival. “Another quote” fetches a new random
lyric; loading disables the button, and failed requests offer a retry without
discarding an existing quote. Refresh errors appear as a compact inline message;
initial loading and errors keep the full-size placeholder. The quote button
reserves the same width across ready, loading, and retry labels, constrained to
the available space on narrow screens. Album artwork keeps its square placeholder
when the URL is missing, invalid, or cannot load, with an “Album artwork unavailable”
message. Valid song links open in a new tab.

You can find the original version on branch [vanilla-js](https://github.com/Thomasevano/eminem_quotes.github.io/tree/vanilla-js)

## Design decision — The lyric sheet

Sleeve was selected from `/proto/lyric-sheet`. Album artwork and source metadata sit
beside a left-aligned lyric column; on mobile, the source becomes a compact row.
At enlarged text sizes, artwork and metadata wrap onto separate rows when needed
instead of overlapping. Unavailable-artwork text also wraps within its square.
The selected defaults use warm paper, dark ink, a yellow action accent, Barlow
Condensed for the masthead, IBM Plex Sans for reading, and monospace source labels.
Lyric size and margins remain at the prototype’s 100% defaults.
The project name remains Eminem Quotes in the masthead and browser title. The
extra archive subtitle and unofficial-collection tagline were removed. Song
metadata shows the title and album, without repeating Eminem as the artist.
The original emoji favicon is preserved.
The decorative “From the record” and “The lyric sheet” section labels are removed;
accessible section names and the quote mark remain.

Alternatives not selected:
- Original: the previous card-first presentation.
- Poster: larger, typography-first composition, with more scrolling for long lyrics.
- Index: compact archive layout, with less visual emphasis on the lyric.

Listening remains an external song link. In-browser excerpt playback is not part
of this decision.

## Getting started

### Clone the Repo

```
git clone https://github.com/Thomasevano/eminem_quotes.github.io.git
```

### Install

```
npm install
```

## Start

```
npm run dev
```

## Build

```
npm run build
```

## Authors

* **Thomas Evano**

## License

This project is licensed under the MIT License

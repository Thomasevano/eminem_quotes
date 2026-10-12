module.exports = {
  content: ['./index.html', './src/*.ts'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)', ink: 'var(--ink)', quiet: 'var(--quiet)',
        rule: 'var(--rule)', accent: 'var(--accent)',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', '"Arial Narrow"', 'sans-serif'],
        reading: ['"IBM Plex Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        source: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

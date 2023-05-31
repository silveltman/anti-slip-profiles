interface GoogleFonts {
  [family: string]: {
    wght: number[]
    ital?: number[]
  }
}

interface Site {
  name: string
  url: string
  image: string
  logo: string
  lang: string
  googleFonts: GoogleFonts
}

const site: Site = {
  name: 'Company Name',
  url: 'https://localhost:3000',
  image: '/logo.svg',
  logo: '/logo.svg',
  lang: 'nl',
  googleFonts: {
    'Open Sans': {
      wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
}

export default site

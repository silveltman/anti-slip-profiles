type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type SymbolWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700
type Grade = -25 | 0 | 200

interface GoogleFonts {
  [family: string]: {
    wght: FontWeight[]
    ital: FontWeight[]
  }
}

interface materialSymbols {
  variant: 'Outlined' | 'Rounded' | 'Sharp'
  weight: SymbolWeight
  grade: Grade
  sizes: boolean
}

interface Site {
  name: string
  url: string
  image: string
  logo: string
  lang: string
  googleFonts: GoogleFonts
  materialSymbols: materialSymbols
}

const site: Site = {
  name: 'Anti-slip Profiles',
  url: 'https://antislipprofiles.com',
  image: '/product.jpg',
  logo: '/logo.svg',
  lang: 'nl',
  googleFonts: {
    'Open Sans': {
      wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      ital: [],
    },
  },
  materialSymbols: {
    variant: 'Rounded',
    weight: 400,
    grade: 0,
    sizes: false,
  },
}

export default site

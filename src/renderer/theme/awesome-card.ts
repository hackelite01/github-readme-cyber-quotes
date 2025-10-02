export interface Theme {
  quote: string;
  author: string;
  background: string;
  symbol: string;
}

export const themes: Record<string, Theme> = {
  default: {
    quote: '333',
    author: '2f80ed',
    background: 'fffefe',
    symbol: '4c71f2'
  },
  defaultDarkModeSupport: {
    quote: '9f9f9f',
    author: 'fff',
    background: '151515',
    symbol: '79ff97'
  },
  'chartreuse-dark': {
    quote: 'fff',
    author: '7fff00',
    background: '000',
    symbol: '00AEFF'
  },
  radical: {
    quote: 'a9fef7',
    author: 'fe428e',
    background: '141321',
    symbol: 'f8d847'
  },
  merko: {
    quote: '68b587',
    author: 'abd200',
    background: '0a0f0b',
    symbol: 'b7d364'
  },
  gruvbox: {
    quote: '8ec07c',
    author: 'fabd2f',
    background: '282828',
    symbol: 'fe8019'
  },
  tokyonight: {
    quote: '38bdae',
    author: '70a5fd',
    background: '1a1b27',
    symbol: 'bf91f3'
  },
  catppuccin: {
    quote: '96CDFB',
    author: 'D9E0EE',
    background: '161320',
    symbol: 'DDB6F2'
  },
  catppuccin_latte: {
    quote: '179299',
    author: '4c4f69',
    background: 'eff1f5',
    symbol: '8839ef'
  },
  catppuccin_frappe: {
    quote: '81c8be',
    author: 'c6d0f5',
    background: '303446',
    symbol: 'ca9ee6'
  },
  catppuccin_macchiato: {
    quote: '8bd5ca',
    author: 'cad3f5',
    background: '24273a',
    symbol: 'c6a0f6'
  },
  catppuccin_mocha: {
    quote: '94e2d5',
    author: 'cdd6f4',
    background: '1e1e2e',
    symbol: 'cba6f7'
  },
  algolia: {
    quote: '00ADFE',
    author: 'FEFEFE',
    background: '050F2C',
    symbol: '26BB85'
  },
  monokai: {
    quote: 'EA1F6A',
    author: 'CFCFC9',
    background: '272822',
    symbol: 'E18905'
  },
  dracula: {
    quote: 'F8F8F2',
    author: '6272A4',
    background: '282A36',
    symbol: 'FF79c6'
  },
  nord: {
    quote: 'D8DEE9',
    author: '4C566A',
    background: '2E3440',
    symbol: '88C0D0'
  },
  github: {
    quote: 'FFFFFF',
    author: '4C566A',
    background: '0D1117',
    symbol: '43C293'
  },
  graywhite: {
    quote: '24292E',
    author: '24292E"',
    background: 'FFFFFF',
    symbol: '24292E'
  },
  moonlight: {
    quote: 'F8F8F8',
    author: 'FF757F',
    background: '222436',
    symbol: '599DFF'
  },
  hackerman: {
    quote: '00B3D6',
    author: '00B3D6',
    background: '000000',
    symbol: '00B3D6'
  },
  // 🎃 New Hacktoberfest 2025 Themes
  halloween: {
    quote: 'FF6B35',
    author: 'FFD23F',
    background: '1A0B2E',
    symbol: 'FF6B35'
  },
  cyberpunk: {
    quote: '00FFFF',
    author: 'FF0080',
    background: '0D0221',
    symbol: '00FF41'
  },
  matrix: {
    quote: '00FF41',
    author: '65C965',
    background: '000000',
    symbol: '00FF41'
  },
  ocean: {
    quote: '64B5F6',
    author: '42A5F5',
    background: '0D47A1',
    symbol: '81C784'
  },
  sunset: {
    quote: 'FFB74D',
    author: 'FF8A65',
    background: '3E2723',
    symbol: 'FFAB91'
  },
  neon: {
    quote: 'E91E63',
    author: '00E676',
    background: '121212',
    symbol: '03DAC6'
  },
  vintage: {
    quote: '8D6E63',
    author: 'A1887F',
    background: 'FFF8E1',
    symbol: 'FF8F00'
  },
  arctic: {
    quote: '37474F',
    author: '455A64',
    background: 'ECEFF1',
    symbol: '00BCD4'
  },
  synthwave: {
    quote: 'FF6EC7',
    author: '72DEFF',
    background: '2D1B69',
    symbol: 'FFD700'
  },
  forest: {
    quote: '2E7D32',
    author: '388E3C',
    background: 'E8F5E8',
    symbol: '66BB6A'
  },
  minimal: {
    quote: '212121',
    author: '424242',
    background: 'FFFFFF',
    symbol: '757575'
  },
  corporate: {
    quote: '1565C0',
    author: '1976D2',
    background: 'F5F5F5',
    symbol: '42A5F5'
  }
};

export const renderTheme = (theme: keyof typeof themes) => {
  // Check if theme exists in the themes object and is neither default light nor dark mode theme
  if (themes[theme] && theme !== 'light' && theme !== 'dark') {
    return themes[theme];
  }

  // Else, return the default (light) theme with dark mode support
  return themes.default;
};

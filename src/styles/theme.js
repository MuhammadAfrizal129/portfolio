import { hex2rgba } from '@utils';

// const ACCENT = '#f92c85';
// const DARK_BG = '#fdf5df';
// const BG = '#fdf5df';

// const theme = {
//   colors: {
//     darkNavy: DARK_BG,
//     navy: BG,
//     lightNavy: '#5ebec4',
//     lightestNavy: '#5ebec4',
//     slate: '#5ebec4',
//     lightSlate: '#ffffff',
//     lightestSlate: '#5ebec4',
//     white: '#e6f1ff',
//     green: ACCENT,
//     dark: '#2e4057',
//     transGreen: hex2rgba(ACCENT, 0.7),
//     shadowNavy: hex2rgba(DARK_BG, 0.07),
//   },

const ACCENT = '#bfe2ff';
const DARK_BG = '#0064b5';
const BG = '#0064b5';

const theme = {
  colors: {
    darkNavy: DARK_BG,
    navy: BG,
    lightNavy: '#8fbce6',
    lightestNavy: '#8fbce6',
    slate: '#8fbce6',
    lightSlate: '#ffffff',
    lightestSlate: '#8fbce6',
    white: '#e6f1ff',
    green: ACCENT,
    dark: '#ffffff',
    transGreen: hex2rgba(ACCENT, 0.7),
    shadowNavy: hex2rgba(DARK_BG, 0.07),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;

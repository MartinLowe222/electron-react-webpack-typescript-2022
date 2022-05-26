import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import globalStylesOverrides from "./globalStylesOverides"

const fonts = {
  ...chakraTheme.fonts,
  body: `'Open Sans', sans-serif`,
  heading: `'Open Sans', sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '62em',
  xl: '64em',
});

const overrides = {
  ...chakraTheme,
  styles: {
    ...globalStylesOverrides,
  },
  components: {
    Button,
  },
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    regular: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  colors: {
    ...chakraTheme.colors,
    green: {
      '50': '#F2F9EC',
      '100': '#DAEEC9',
      '200': '#C2E2A6',
      '300': '#A9D784',
      '400': '#7cc242',
      '500': '#79C13E',
      '600': '#67a137',
      '700': '#497425',
      '800': '#314D19',
      '900': '#18270C',
    },
    blue: {
      '50': '#F7FAFC',
      '100': '#C0E7F7',
      '200': '#97D8F2',
      '300': '#6EC9ED',
      '400': '#21ace3',
      '500': '#1DAAE2',
      '600': '#1b8ab7',
      '700': '#116688',
      '800': '#0B445B',
      '900': '#06222D',
    },
    gray: {
      '50': '#ebeff2',
      '100': '#D2D7E5',
      '200': '#B5BDD4',
      '300': '#98A3C3',
      '400': '#7A89B2',
      '500': '#4B5981',
      '600': '#384361',
      '700': '#252D41',
      '800': '#1A1F2D',
      '900': '#131620',
    },
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;

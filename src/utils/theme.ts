const commonColor = {
  colors: {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    background: '#F5F5F5',
    primary: 'lightblue',
    secondary: 'green',
  },
};

const light = {
  colors: {
    ...commonColor.colors,
    themeColor: '#F5F5F5',
    text: '#000000',
    white: '#000000',
    sky: '#DE5E69',
    card: '#FFFFFF',
    gray: 'gray',
    primary: 'blue',
  },
};

const dark = {
  colors: {
    ...commonColor.colors,
    themeColor: '#121212',
    text: '#FFFFFF',
    white: '#FFFFFF',
    sky: '#831a23',
    card: '#1F1B24',
    gray: 'white',
    primary: 'lightblue',
  },
};

export default {light, dark};

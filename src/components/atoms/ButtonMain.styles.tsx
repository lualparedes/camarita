import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  buttonMain: {
    borderRadius: 24,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  'buttonMain--light': {
    backgroundColor: constants.themeLight.COLOR_ACCENT_2,
  },
  'buttonMain--dark': {
    backgroundColor: constants.themeDark.COLOR_ACCENT_2,
  },
  buttonMain__text: {
    color: '#ffffff',
    fontFamily: 'Muli-Black',
    letterSpacing: 4,
  },
});

export default styles;

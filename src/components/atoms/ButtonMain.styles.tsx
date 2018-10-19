import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  buttonMain: {
    backgroundColor: constants.COLOR_ACCENT_2,
    borderRadius: 24,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  buttonMain__text: {
    color: '#ffffff',
    fontFamily: 'Muli-Black',
    letterSpacing: 4,
  },
});

export default styles;

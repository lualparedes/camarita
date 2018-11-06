import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    paddingTop: 12,
  },
  'container--light': {
    backgroundColor: '#fff',
  },
  'container--dark': {
    backgroundColor: '#fff',
  },
  message: {
    fontFamily: 'Muli',
    color: constants.themeLight.COLOR_TEXT,
    textAlign: 'center',
    paddingHorizontal: 48,
    paddingTop: 36,
    paddingBottom: 48,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;

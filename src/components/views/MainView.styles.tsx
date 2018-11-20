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
    backgroundColor: constants.themeLight.COLOR_BG,
  },
  'container--dark': {
    backgroundColor: constants.themeDark.COLOR_BG,
  },
  iconMenu: {
    position: 'absolute',
    top: 38,
    right: 16,
  },
  iconMenu__img: {
    height: 32,
    width: 32,
  },
  message: {
    fontFamily: 'Muli',
    textAlign: 'center',
    paddingHorizontal: 48,
    paddingTop: 36,
    paddingBottom: 48,
    fontSize: 16,
    lineHeight: 24,
  },
  'message--light': {
    color: constants.themeLight.COLOR_TEXT,
  },
  'message--dark': {
    color: constants.themeDark.COLOR_TEXT,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  'container--light': {
    backgroundColor: constants.themeLight.COLOR_BG,
  },
  'container--dark': {
    backgroundColor: constants.themeDark.COLOR_BG,
  },
  option: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignSelf: 'stretch',
  },
  option__title: {
    fontFamily: 'Muli',
    fontSize: 20,
  },
  'option__title--light': {
    color: constants.themeLight.COLOR_TEXT,
  },
  'option__title--dark': {
    color: constants.themeDark.COLOR_TEXT,
  },
  toggle: {

  },
  'toggle--light': {

  },
  'toggle--dark': {

  },
  toggle__handle: {

  },
  'toggle__handle--light': {

  },
  'toggle__handle--dark': {

  },
});

export default styles;

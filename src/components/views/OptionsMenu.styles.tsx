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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  option__title: {
    fontFamily: 'Muli',
    fontSize: 20,
    flexGrow: 1,
  },
  'option__title--light': {
    color: constants.themeLight.COLOR_TEXT,
  },
  'option__title--dark': {
    color: constants.themeDark.COLOR_TEXT,
  },
});

export default styles;

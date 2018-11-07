import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 48,
  },
  'container--light': {
    backgroundColor: constants.themeLight.COLOR_BG,
  },
  'container--dark': {
    backgroundColor: constants.themeDark.COLOR_BG,
  },
  trigger: {
    width: 64,
    height: 64,
  },
});

export default styles;

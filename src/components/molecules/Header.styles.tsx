import { StyleSheet } from 'react-native';
import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  header: {
    height: 84,
    padding: 16,
    paddingTop: 38,
    flexDirection: 'row',
  },
  'header--elevated': {
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  'header--light': {
    backgroundColor: constants.themeLight.COLOR_ACCENT_2,
  },
  'header--dark': {
    backgroundColor: constants.themeDark.COLOR_ACCENT_2,
  },
  header__icon: {
    height: 32,
    width: 32,
  },
  header__iconPlaceholder: {
    height: 32,
    width: 32,
  },
  header__title: {
    color: '#ffffff',
    fontFamily: 'Muli-Black',
    letterSpacing: 4,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 4,
    paddingRight: 32,
    paddingLeft: 16,
    flexGrow: 1,
  },
});

export default styles;

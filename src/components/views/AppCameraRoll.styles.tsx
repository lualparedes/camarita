import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
	scrollView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
	},
  picture: {
  	width: 412,
  	height: 412,
  	marginBottom: 48,
  	justifyContent: 'center',
  	alignItems: 'flex-start',
  },
  picture__content: {
  	width: 412,
  },
  deleteIcon: {
  	position: 'absolute',
  	right: 24,
  	top: 24,
  	height: 36,
  	width: 36,
  	zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  deleteIcon__img: {
  	height: 36,
  	width: 36,
  },
  modalConfirmation: {
    padding: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalConfirmation__icon: {
    margin: 'auto',
    height: 24,
    width: 24,
  },
  modalConfirmation__text: {
    fontFamily: 'Muli',
    color: constants.themeLight.COLOR_TEXT,
    textAlign: 'center',
    paddingHorizontal: 48,
    paddingTop: 36,
    paddingBottom: 48,
    fontSize: 16,
    lineHeight: 24,
  },
  'buttonOption--main': {
    backgroundColor: constants.themeLight.COLOR_ACCENT_2,
    borderRadius: 24,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  'buttonOption--main__text': {
    color: '#ffffff',
    fontFamily: 'Muli-Black',
    letterSpacing: 4,
    textAlign: 'center',
  },
  'buttonOption--secondary': {
    borderColor: constants.themeLight.COLOR_ACCENT_2,
    borderWidth: 2,
    borderRadius: 24,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  'buttonOption--secondary__text': {
    color: constants.themeLight.COLOR_ACCENT_2,
    fontFamily: 'Muli-Black',
    letterSpacing: 4,
    textAlign: 'center',
  },
});

export default styles;

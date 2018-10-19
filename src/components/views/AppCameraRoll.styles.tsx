import { StyleSheet } from 'react-native';

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
});

export default styles;

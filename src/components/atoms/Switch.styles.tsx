import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switch: {
    width: 18 + 40 + 2,
    height: 20,
    padding: 2,
    paddingLeft: 18,
    alignSelf: 'flex-end',
  },
  switch__slide: {
    width: 40,
    height: 16,
    borderRadius: 8,
  },
  switch__knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 18 + -2,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default styles;

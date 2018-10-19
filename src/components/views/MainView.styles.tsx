import { StyleSheet } from 'react-native';

import constants from '../../assets/styles/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    paddingTop: 12,
  },
  message: {
    fontFamily: 'Muli',
    color: constants.COLOR_TEXT,
    textAlign: 'center',
    paddingHorizontal: 48,
    paddingTop: 36,
    paddingBottom: 48,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;

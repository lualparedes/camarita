/// <reference path="./ButtonMain.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

import styles from './ButtonMain.styles';

export default class ButtonMain extends React.Component<ButtonMainProps, ButtonMainState> {
  render() {
    return (
      <Link 
        to={ this.props.to }
        style={ styles.buttonMain }
      >
        <Text style={ styles['buttonMain__text'] }>
          { this.props.label.toUpperCase() }
        </Text>
      </Link>
    );
  }
}

/// <reference path="./ButtonMain.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { LinearGradient } from 'expo';

import constants from '../../assets/styles/config';
import styles from './ButtonMain.styles';
import { Consumer } from '../../Context';

export default class ButtonMain extends React.Component<ButtonMainProps, ButtonMainState> {
  render() {
    const gradient = this.props.theme === 'light' ?
      constants.themeLight.GRADIENT_MAIN :
      constants.themeDark.GRADIENT_MAIN;

    return (
      <Consumer>
        {
          ({ theme, toggleTheme }) =>
          <Link to={ this.props.to }>
            <View>
              <LinearGradient
                colors={ gradient }
                start={ [0, 0.5] }
                end={ [1, 0.5] }
                style={ styles.buttonMain }
              >
                <Text style={ styles.buttonMain__text }>
                  { this.props.label.toUpperCase() }
                </Text>
              </LinearGradient>
            </View>
          </Link>
        }
      </Consumer>
    );
  }
}

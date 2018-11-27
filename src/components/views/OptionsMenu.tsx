/// <reference path="./OptionsMenu.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import styles from './OptionsMenu.styles';
import { Consumer } from '../../Context';
import Header from '../molecules/Header';
import Switch from '../atoms/Switch';

export default class OptionsMenu extends React.Component<OptionsMenuProps, OptionsMenuState> {
  render() {
    return (
      <Consumer>
        {
          ({ theme, toggleTheme }) =>
          <View style={ [styles.container, styles[`container--${theme}`]] }>
            <Header
              theme={ theme }
              title="Options"
              rightTo="/"
            />
            <View style={ styles.listOfOptions }>
              <View style={ styles.option }>
                <Text 
                  style={[
                    styles.option__title,
                    styles[`option__title--${theme}`]
                  ]}
                >
                  Dark mode
                </Text>
                <Switch
                  theme={ this.props.theme }
                  isOn={ this.props.theme === 'light' ? false : true }
                  onToggle={toggleTheme}
                />
              </View>
            </View>
          </View>
        }
      </Consumer>
    );
  }
}

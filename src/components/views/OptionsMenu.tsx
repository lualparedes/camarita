/// <reference path="./OptionsMenu.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import styles from './OptionsMenu.styles';
import { Consumer } from '../../Context';
import Header from '../molecules/Header';

export default class OptionsMenu extends React.Component<OptionsMenuProps, OptionsMenuState> {
  render() {
    return (
      <Consumer>
        {
          (theme) =>
          <View style={ [styles.container, styles[`container--${theme}`]] }>
            <Header
              theme={ this.props.theme }
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
                <TouchableOpacity
                  style={[
                    styles.toggle,
                    styles[`toggle--${theme}`]
                  ]}
                >
                  <View
                    style={[
                      styles.toggle__handle,
                      styles[`toggle__handle--${theme}`]
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      </Consumer>
    );
  }
}

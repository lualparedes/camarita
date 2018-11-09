/// <reference path="./MainView.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './MainView.styles';
import { Consumer } from '../../Context';
import FeatureImage from '../atoms/FeatureImage';
import ButtonMain from '../atoms/ButtonMain';

export default class MainView extends React.Component<MainViewProps, MainViewState> {
  render() {
    return (
      <Consumer>
        {
          (theme) =>
          <View style={ [styles.container, styles[`container--${theme}`]] }>
            <FeatureImage/>
            <Text style={ [styles.message, styles[`message--${theme}`]] }>
              Hey there!{'\n'}
              I'm Doug the photogenic dog and I'm here to wish you a happy picture
            </Text>
            <ButtonMain
              label='Take picture'
              to='/camera'
            />
          </View>
        }
      </Consumer>
    );
  }
}

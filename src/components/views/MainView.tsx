/// <reference path="./MainView.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './MainView.styles';
import FeatureImage from '../atoms/FeatureImage';
import ButtonMain from '../atoms/ButtonMain';

export default class MainView extends React.Component<MainViewProps, MainViewState> {
  render() {
    return (
      <View style={styles.container}>
        <FeatureImage/>
        <Text style={styles.message}>
          Hey there!{'\n'}
          I'm Doug the photogenic dog and I'm here to wish you a happy picture
        </Text> 
        <ButtonMain
          label='Take picture'
          to='/camera'
        />
      </View>
    );
  }
}

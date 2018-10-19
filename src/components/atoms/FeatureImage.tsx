/// <reference path="./FeatureImage.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import styles from './FeatureImage.styles';

export default class FeatureImage extends React.Component<FeatureImageProps, FeatureImageState> {
  render() {
    return (
      <View style={ styles.featureImage } >
        <Image source={ require('../../assets/img/dog.png') } />
      </View>
    );
  }
}

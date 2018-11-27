/// <reference path="./Switch.interfaces.d.ts" />
import * as React from 'react';
import { TouchableHighlight, Animated, View } from 'react-native';
import { Link } from 'react-router-native';
import { LinearGradient } from 'expo';

import constants from '../../assets/styles/config';
import styles from './Switch.styles';

export default class Switch extends React.Component<SwitchProps, SwitchState> {

  constructor(props) {
    super(props);
    this.state = {
      isOn: this.props.isOn,
    };
  }

  handlePress() {
    this.setState(
      { isOn: !this.state.isOn },
      () => this.props.onToggle()
    )
  }

  componentDidUpdate(prevProps, prevState) {
     if (prevProps.isOn !== this.props.isOn) {
       this.setState(
         { isOn: this.props.isOn }
       );
     }
   }

   /**
    * @note {1} The extra views are a hacky solution that allows me to overcome
    *           the overflow problem on Android.
    */
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.handlePress()}
      >
        <View style={ styles.switch }> 
          <TouchableHighlight
            style={[
              styles.switch__slide,
              { backgroundColor: this.state.isOn ? '#535560' : '#cccccc', }
            ]}
            onPress={ () => this.handlePress() }
          >
          <View/>
          </TouchableHighlight>
          <Animated.View
            style={[
              styles.switch__knob,
              {
                transform: [{
                  translateX: this.state.isOn ? 22 : 0
                }]
              }
            ]}
            onPress={ () => this.handlePress() }
          >
            <LinearGradient
              colors={
                this.state.isOn ?
                constants.themeDark.GRADIENT_MAIN :
                ['#808080', '#808080']
              }
              start={ [0, 0.5] }
              end={ [1, 0.5] }
              style={ styles.switch__knobBackground }
            />
          </Animated.View>
        </View>
      </TouchableHighlight>
    );
  }
}

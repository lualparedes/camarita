/// <reference path="./MainView.interfaces.d.ts" />
import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';

import styles from './MainView.styles';
import { Consumer } from '../../Context';
import ButtonMain from '../atoms/ButtonMain';

export default class MainView extends React.Component<MainViewProps, MainViewState> {
  render() {
    const iconMenuSrc = this.props.theme === 'light' ?
      require('../../assets/img/icon_menu--light.png') :
      require('../../assets/img/icon_menu--dark.png');
    const dogSrc = this.props.theme === 'light' ?
      require('../../assets/img/dog--light.png') :
      require('../../assets/img/dog--dark.png');

    return (
      <Consumer>
        {
          (theme) =>
          <View style={ [styles.container, styles[`container--${theme}`]] }>
            <Link
              to="/options-menu"
              style={ styles.iconMenu }
            >
              <Image
                source={ iconMenuSrc }
                style={ styles.iconMenu__img }
              />
            </Link>
            <Image source={ dogSrc } />
            <Text style={ [styles.message, styles[`message--${theme}`]] }>
              Hey there!{'\n'}
              I'm Doug the photogenic dog and I'm here to wish you a happy picture
            </Text>
            <ButtonMain
              label='Take picture'
              to='/camera'
              theme={ this.props.theme }
            />
          </View>
        }
      </Consumer>
    );
  }
}

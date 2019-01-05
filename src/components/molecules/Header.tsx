/// <reference path="./Header.interfaces.d.ts" />
import * as React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import styles from './Header.styles';
import { Consumer } from '../../Context';

export default class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props) {
    super(props);
    this.state = {
      elevated: false,
      showIconLeft: false,
      showIconRight: false,
      leftIconSrc: null,
      rightIconSrc: null,
      headerStyles: [],
    };
  }

  componentWillMount() {

    if (this.props.title.toLowerCase() === 'options') {
      this.setState({
        showIconRight: true,
        rightIconSrc: require("../../assets/img/icon_close.png")
      });
    }

    else if (this.props.title.toLowerCase() === 'pictures taken') {
      this.setState({
        elevated: true,
        showIconLeft: true,
        showIconRight: true,
        leftIconSrc: require("../../assets/img/icon_back.png"),
        rightIconSrc: require("../../assets/img/icon_menu.png"),
      });
    }
  }

  render() {
    const headerStyles = this.state.elevated ?
      [
        styles.header,
        styles[`header--${this.props.theme}`],
        styles[`header--elevated`]
      ] :
      [
        styles.header,
        styles[`header--${this.props.theme}`]
      ];

    return (
      <Consumer>
        {
          ({ theme, toggleTheme }) =>
          <View style={ headerStyles }>
            {
              this.state.showIconLeft ? 
                <Link to={ this.props.leftTo }>
                  <Image
                    source={ this.state.leftIconSrc }
                    style={ styles.header__icon }
                  />
                </Link>
              : <View style={ styles.header__iconPlaceholder }/>
            }            
            <Text style={ styles.header__title }>
              { this.props.title.toUpperCase() }
            </Text>
            {
              this.state.showIconRight ?
                <Link to={ this.props.rightTo }>
                  <Image
                    source={ this.state.rightIconSrc }
                    style={ styles.header__icon }
                  />
                </Link>
              : <View style={ styles.header__iconPlaceholder }/>
            } 
          </View>
        }
      </Consumer>
    );
  }
}

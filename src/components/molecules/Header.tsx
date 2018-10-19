/// <reference path="./Header.interfaces.d.ts" />
import * as React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import styles from './Header.styles';

export default class CameraView extends React.Component<HeaderProps, HeaderState> {

	render() {
		return (
		  <View style={ styles.header }>
		  	<Link to="/camera">
		  	<Image 
		  		source={ require('../../assets/img/icon_back.png') }
		  		style={ styles.header__icon }
		  	/>
		  	</Link>
		    <Text style={ styles.header__title }>{ this.props.title.toUpperCase() }</Text>
		  </View>
		);
	}
}
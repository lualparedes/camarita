/// <reference path="./AppCameraRoll.interfaces.d.ts" />
import * as React from 'react';
import { View, ScrollView, Image, TouchableHighlight, Text } from 'react-native';
import { withRouter } from 'react-router-native';

import Header from '../molecules/Header';
import styles from './AppCameraRoll.styles';

export default class AppCameraRoll extends React.Component<AppCameraRollProps, AppCameraRollState> {

	render() {
		const images = [
			this.props.history.location.state.newPhoto,
		];

		return (
		  <View style={{ flex: 1 }}>
		  	<Header title='Pictures taken'></Header>
		  	<ScrollView contentContainerStyle={ styles.scrollView }>
		  		{
		  			images.map((img) => (
		  				<View style={ styles.picture }>
		  					<TouchableHighlight style={ styles.deleteIcon }>
		  						<Image
		  							source={ require('../../assets/img/icon_delete.png') }
		  							style={ styles.deleteIcon__img }
		  						/>
		  					</TouchableHighlight>
		  					<Image
		  						source={{ uri: img }}
		  						style={ styles.picture__content }
		  						resizeMode="contain"
		  					/>
		  				</View>
		  			))
		  		}
		  	</ScrollView>
		  </View>
		);
	}
}

const AppCameraRollWithRouter = withRouter(AppCameraRoll);

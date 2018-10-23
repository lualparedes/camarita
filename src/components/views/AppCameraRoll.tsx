/// <reference path="./AppCameraRoll.interfaces.d.ts" />
import * as React from 'react';
import { View, ScrollView, Image, TouchableHighlight, Text } from 'react-native';
import { withRouter } from 'react-router-native';
import { FileSystem } from 'expo';

import Header from '../molecules/Header';
import styles from './AppCameraRoll.styles';

export default class AppCameraRoll extends React.Component<AppCameraRollProps, AppCameraRollState> {


  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  deletePicture(picture: string) {
    FileSystem.deleteAsync(`${FileSystem.documentDirectory}photos/${picture}`)
      .then(() => {
        this.setState((prevState) => ({
          pictures: prevState.pictures.filter((storedPic) => storedPic !== picture),
        }));
      })
      .catch((err) => { console.log(err); });
  }

  componentDidMount() {
    FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}photos/`)
      .then((filelist) => {
        this.setState({
          pictures: filelist,
        });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Pictures taken'></Header>
        <ScrollView contentContainerStyle={ styles.scrollView }>
          {
            this.state.pictures.map((pic, i) => (
              <View
                style={ styles.picture }
                key={ `picture-${i}` }
              >
                <TouchableHighlight 
                  style={ styles.deleteIcon }
                  onPress={ () => this.deletePicture(pic) }
                >
                  <Image
                    source={ require('../../assets/img/icon_delete.png') }
                    style={ styles.deleteIcon__img }
                  />
                </TouchableHighlight>
                <Image
                  source={{ uri: pic }}
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

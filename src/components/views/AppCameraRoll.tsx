/// <reference path="./AppCameraRoll.interfaces.d.ts" />
import * as React from 'react';
import { View, ScrollView, Image, TouchableHighlight, Modal, Text } from 'react-native';
import { withRouter } from 'react-router-native';
import { FileSystem } from 'expo';

import styles from './AppCameraRoll.styles';
import { Consumer } from '../../Context';
import Header from '../molecules/Header';

export default class AppCameraRoll extends React.Component<AppCameraRollProps, AppCameraRollState> {

  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      modalVisible: false,
      pictureToDelete: '',
    };
  }

  deletePicture(picture: string) {
    FileSystem.deleteAsync(`${FileSystem.documentDirectory}photos/${picture}`)
      .then(() => {
        this.setState((prevState) => ({
          pictures: prevState.pictures.filter((storedPic) => storedPic !== picture),
        }));
      })
      .catch((err) => { console.log(`There was an error while deleting: ${err}`); });
  }

  askForConfirmationToDelete(picture: string) {
    this.setState({
      modalVisible: true,
      pictureToDelete: picture,
    });
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
    const iconDeleteSrc = this.props.theme === 'light' ?
      require('../../assets/img/icon_delete--light.png') :
      require('../../assets/img/icon_delete--dark.png');
    return (
      <Consumer>
        {
          (theme) => {
            return (
              <View style={{ flex: 1 }}>
                <Header
                  theme={ this.props.theme }
                  title='Pictures taken'
                  leftTo="/camera"
                  rightTo="/options-menu"
                />
                <ScrollView
                  contentContainerStyle={[
                    styles.scrollView,
                    styles[`scrollView--${theme}`]
                  ]}
                >
                  {
                    this.state.pictures.map((pic, i) => (
                      <View
                        style={ styles.picture }
                        key={ `picture-${i}` }
                      >
                        <TouchableHighlight
                          style={ styles.deleteIcon }
                          onPress={ () => this.askForConfirmationToDelete(pic) }
                        >
                          <Image
                            source={ iconDeleteSrc }
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

                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}
                >
                  <View
                    style={[
                      styles.modalConfirmation,
                      styles[`modalConfirmation--${theme}`]
                    ]}
                  >
                    <Image
                      style={ styles.modalConfirmation__icon }
                      source={ require('../../assets/img/emoji_thinking_face.png') }
                    />
                    <Text
                      style={[
                        styles.modalConfirmation__text,
                        styles[`modalConfirmation__text--${theme}`]
                      ]}
                    >
                      Do you really want to delete the picture?
                    </Text>
                    <TouchableHighlight
                      style={[
                        styles['buttonOption--secondary'],
                        styles[`buttonOption--secondary${theme}`]
                      ]}
                      onPress={() => {
                        this.setState({
                          modalVisible: false,
                          pictureToDelete: '',
                        })
                      }}
                    >
                      <Text
                        style={[
                          styles['buttonOption--secondary__text'],
                          styles[`buttonOption--secondary${theme}__text`]
                        ]}
                      >
                        CANCEL
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={[
                        styles['buttonOption--main'],
                        styles[`buttonOption--main${theme}`]
                      ]}
                      onPress={() => {
                        this.setState({ modalVisible: false });
                        this.deletePicture(this.state.pictureToDelete);
                      }}
                    >
                      <Text style={ styles['buttonOption--main__text'] }>DELETE</Text>
                    </TouchableHighlight>
                  </View>
                </Modal>
              </View>
            );
          }
        }
      </Consumer>
    );
  }
}

const AppCameraRollWithRouter = withRouter(AppCameraRoll);

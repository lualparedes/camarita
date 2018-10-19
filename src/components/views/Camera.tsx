/// <reference path="./Camera.interfaces.d.ts" />
import * as React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { Camera, Permissions, FileSystem } from 'expo';

import styles from './Camera.styles';

export default class CameraView extends React.Component<CameraProps, CameraState> {

  state = {
    hasCameraPermission: null,
  };

  savePicture = (photo) => {    
    FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
    })
    .then((data) => {
      console.log(
        `The photo was saved successfully to ${FileSystem.documentDirectory}photos/`
      );
    })
    .catch((err) => {
      console.log('There was an error while saving:\n', err);
    });
  }

  takePicture = () => {
    if (this.camera) {
      this.camera
        .takePictureAsync()
        .then((photo) => {
          this.savePicture(photo);
          this.props.history.push('/camera-roll', { newPhoto: photo.uri });
        })
        .catch((err) => { console.log('photo wasn\'t taken'); console.log(err); });
    }
  }

  componentWillMount() {
    Permissions.askAsync(Permissions.CAMERA)
      .then((permissions) => {
        const { status } = permissions;
        this.setState({ hasCameraPermission: status === 'granted' });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View/>;
    }
    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ (ref) => { this.camera = ref; } }
            style={ styles.container } 
            type={ this.state.type }
          >
            <TouchableOpacity onPress={ this.takePicture }>
              <Image
                style={ styles.trigger }
                source={ require('../../assets/img/icon_cam_trigger.png') }
              />
            </TouchableOpacity>
          </Camera>
        </View>
      );
    }
  }
}

const CameraViewWithRouter = withRouter(CameraView);

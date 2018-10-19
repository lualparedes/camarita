/// <reference path="./App.interfaces.d.ts" />
import * as React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { Router, Route, Link } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';

import styles from './App.styles';
import MainView from './components/views/MainView';
import CameraView from './components/views/Camera';
import AppCameraRoll from './components/views/AppCameraRoll';

const history = createHistory();

export default class App extends React.Component<AppProps, AppState> {
  
  constructor() {
    this.state = { loadedAssets: false };
  }

  componentDidMount() {
    Font.loadAsync({
      'Muli-Black': require('./assets/fonts/Muli/Muli-Black.ttf'),
      'Muli': require('./assets/fonts/Muli/Muli-Regular.ttf'),
    })
    .then(() => {
      this.setState({ loadedAssets: true });
    })
    .catch((err) => {
      console.log(`Fonts couldn't be imported.\nMore details:\n${err}`);
    });

  }

  render() {
    return this.state.loadedAssets && (
      <Router history={ history }>
        <View style={ styles.app }>
          <Route exact path="/" component={ MainView }/>
          <Route path="/camera" component={ CameraView }/>
          <Route path="/camera-roll" component={ AppCameraRoll }/>
        </View>
      </Router>
    );
  }
}

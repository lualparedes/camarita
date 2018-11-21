/// <reference path="./App.interfaces.d.ts" />
import * as React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { Router, Route, Link } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';

import styles from './App.styles';
import { Provider, Consumer } from './Context';
import MainView from './components/views/MainView';
import CameraView from './components/views/Camera';
import AppCameraRoll from './components/views/AppCameraRoll';
import OptionsMenu from './components/views/OptionsMenu';

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
        <Provider value={'dark'}>
          <View style={ styles.app }>
            <Consumer>
              {
                (theme) =>
                <Route
                  exact
                  path="/"
                  render={ (props) => <MainView {...props} context={ theme }/> }
                />
              }
            </Consumer>
            <Consumer>
              {
                (theme) =>
                <Route
                  exact
                  path="/camera"
                  render={ (props) => <CameraView {...props} context={ theme }/> }
                />
              }
            </Consumer>
            <Consumer>
              {
                (theme) =>
                <Route
                  exact
                  path="/camera-roll"
                  render={ (props) => <AppCameraRoll {...props} context={ theme }/> }
                />
              }
            </Consumer>
            <Consumer>
              {
                (theme) =>
                <Route
                  exact
                  path="/options-menu"
                  render={ (props) => <OptionsMenu {...props} context={ theme }/> }
                />
              }
            </Consumer>
          </View>
        </Provider>
      </Router>
    );
  }
}

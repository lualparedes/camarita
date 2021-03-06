/// <reference path="./src/App.interfaces.d.ts" />
import * as React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { Router, Route, Link } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';

import styles from './src/App.styles';
import { Provider, Consumer } from './src/Context';
import MainView from './src/components/views/MainView';
import CameraView from './src/components/views/Camera';
import AppCameraRoll from './src/components/views/AppCameraRoll';
import OptionsMenu from './src/components/views/OptionsMenu';

const history = createHistory();

export default class App extends React.Component<AppProps, AppState> {

  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(
        (prevState) => {
          return { theme: prevState.theme === 'light' ? 'dark' : 'light' };
        }
      );
    };

    this.state = {
      loadedAssets: false,
      theme: 'light',
      toggleTheme: this.toggleTheme,
    };
  }

  componentDidMount() {
    Font.loadAsync({
      'Muli-Black': require('./src/assets/fonts/Muli/Muli-Black.ttf'),
      'Muli': require('./src/assets/fonts/Muli/Muli-Regular.ttf'),
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
        <Provider value={ this.state }>
          <View style={ styles.app }>
            <Consumer>
              {
                ({ theme, toggleTheme }) =>
                <Route
                  exact
                  path="/"
                  render={ (props) => <MainView {...props} theme={ theme }/> }
                />
              }
            </Consumer>
            <Consumer>
              {
                ({ theme, toggleTheme }) =>
                <Route
                  exact
                  path="/camera"
                  render={ (props) => <CameraView {...props} theme={ theme }/> }
                />
              }
            </Consumer>
            <Consumer>
              {
                ({ theme, toggleTheme }) =>
                <Route
                  exact
                  path="/camera-roll"
                  render={ (props) => <AppCameraRoll {...props} theme={ theme }/> }
                />
              }
            </Consumer>
            <Consumer>
              {
                ({ theme, toggleTheme }) =>
                <Route
                  exact
                  path="/options-menu"
                  render={ (props) => <OptionsMenu {...props} theme={ theme }/> }
                />
              }
            </Consumer>
          </View>
        </Provider>
      </Router>
    );
  }
}

import * as React from 'react';
import ButtonMain from '../../../components/atoms/ButtonMain';
import { Provider } from '../../../Context';
import * as renderer from 'react-test-renderer';

class MockContainer extends React.Component {

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

  render() {
    return null;
  }
}


it('renders without crashing', () => {
  const rendered = renderer.create(
    <Provider value={ MockContainer.state }>
      <ButtonMain
        to="test-route"
        label="Test"
        theme="light"
      />
    </Provider>
    ).toJSON();
  expect(rendered).toBeTruthy();
});

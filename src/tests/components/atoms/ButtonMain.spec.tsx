import * as React from 'react';
import ButtonMain from '../../../components/atoms/ButtonMain';
import { Provider } from '../../../Context';
import { StaticRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <Provider
      value={{
        theme: 'light',
        toggleTheme: jest.mock()
      }}
    >
      <StaticRouter context={{}}>
        <ButtonMain
          to="test-route"
          label="Test"
          theme="light"
        />
      </StaticRouter>
    </Provider>
    ).toJSON();
  expect(rendered).toBeTruthy();
});

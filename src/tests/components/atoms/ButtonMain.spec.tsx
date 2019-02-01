import * as React from 'react';
import ButtonMain from '../../../components/atoms/ButtonMain';
import { Provider } from '../../../Context';
import { StaticRouter } from 'react-router-native';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';

describe('ButtonMain component', () => {

  it('renders without crashing', () => {
    const rendered = TestRenderer.create(
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

  it('has one Text descendant', () => {
    const testRenderer = TestRenderer.create(
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
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(Text).length).toBe(1);
  });
});

import * as React from 'react';
import ButtonMain from '../../../components/atoms/ButtonMain';
import { Provider } from '../../../Context';
import { StaticRouter } from 'react-router-native';
import TestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import { LinearGradient } from 'expo';

describe('ButtonMain component', () => {

  let testRenderer;
  let testInstance;

  beforeEach(() => {

    testRenderer = TestRenderer.create(
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

    testInstance = testRenderer.root;
  });

  it('renders without crashing', () => {
    expect(testRenderer.toJSON()).toBeTruthy();
  });

  it('has the right gradient according to theme', () => {
    expect(testInstance.findByType(LinearGradient).props.colors)
      .toEqual(['#f6515a', '#faaa54']);
  });
});

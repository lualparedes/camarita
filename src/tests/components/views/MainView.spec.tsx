import * as React from 'react';
import MainView from '../../../components/views/MainView';
import { StaticRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <StaticRouter context={{}}>
      <MainView />
    </StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});

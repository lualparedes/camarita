import * as React from 'react';
import AppCameraRoll from '../../../components/views/AppCameraRoll';
import { StaticRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <StaticRouter context={{}}>
      <AppCameraRoll />
    </StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});

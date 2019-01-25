import * as React from 'react';
import OptionsMenu from '../../../components/views/OptionsMenu';
import { StaticRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <StaticRouter context={{}}>
      <OptionsMenu />
    </StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});

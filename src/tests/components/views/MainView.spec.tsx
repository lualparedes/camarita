import * as React from 'react';
import MainView from '../../../components/views/MainView';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<MainView />).toJSON();
  expect(rendered).toBeTruthy();
});

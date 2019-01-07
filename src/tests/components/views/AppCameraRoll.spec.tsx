import * as React from 'react';
import AppCameraRoll from '../../../components/views/AppCameraRoll';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AppCameraRoll />).toJSON();
  expect(rendered).toBeTruthy();
});

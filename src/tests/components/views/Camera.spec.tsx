import * as React from 'react';
import CameraView from '../../../components/views/Camera';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<CameraView />).toJSON();
  expect(rendered).toBeTruthy();
});

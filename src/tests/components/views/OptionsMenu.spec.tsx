import * as React from 'react';
import OptionsMenu from '../../../components/views/OptionsMenu';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<OptionsMenu />).toJSON();
  expect(rendered).toBeTruthy();
});

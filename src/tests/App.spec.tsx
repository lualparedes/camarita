import * as React from 'react';
import App from '../App';

import * as renderer from 'react-test-renderer';

it('renders without crashing', async () => {
  const rendered = await renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

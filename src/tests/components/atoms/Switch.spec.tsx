import * as React from 'react';
import Switch from '../../../components/atoms/Switch';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
      <Switch
        inOn={ false }
        onToggle={ () => {} }
      />
    ).toJSON();
  expect(rendered).toBeTruthy();
});
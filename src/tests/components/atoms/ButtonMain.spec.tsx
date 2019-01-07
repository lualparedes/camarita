import * as React from 'react';
import ButtonMain from '../../../components/atoms/ButtonMain';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
      <ButtonMain
        to="test-route"
        label="Test"
      />
    ).toJSON();
  expect(rendered).toBeTruthy();
});

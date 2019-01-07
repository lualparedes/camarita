import * as React from 'react';
import Header from '../../../components/molecules/Header';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
      <Header
        title="Test"
        leftTo="left-link"
        rightTo="right-link"
      />
    ).toJSON();
  expect(rendered).toBeTruthy();
});

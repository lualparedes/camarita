import * as React from 'react';
import { shallow } from 'enzyme';
import Switch from '../../../components/atoms/Switch';
import { TouchableHighlight } from 'react-native';

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

it('another test', () => {
  const rendered = renderer.create(
      <Switch
        inOn={ false }
        onToggle={ () => {} }
      />
    ).root.find(TouchableHighlight);
  console.log(rendered);
});
/**
 * Module component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Module from '../../../../../src/webui/components/PackageSidebar/Module/index';

console.error = jest.fn();

describe('<PackageSidebar /> : <Module />', () => {
  test('should error for required props', () => {
    shallow(<Module />);
    expect(console.error).toHaveBeenCalled();
  });
  test('should load module component', () => {
    const wrapper = shallow(
      <Module className={'module-component'} description={'Test description'} title={'Test title'} >
        <p>{'test children'}</p>
      </Module>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});

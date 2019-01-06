/**
 * ModuleContentPlaceholder component
 */

import React from 'react';
import { shallow } from 'enzyme';
import ModuleContentPlaceholder from '../../../../../src/webui/components/PackageSidebar/ModuleContentPlaceholder/index';

console.error = jest.fn();

describe('<PackageSidebar /> : <ModuleContentPlaceholder />', () => {
  test('should error for required props', () => {
    shallow(<ModuleContentPlaceholder />);
    expect(console.error).toHaveBeenCalled();
  });
  test('should load module component', () => {
    const wrapper = shallow(<ModuleContentPlaceholder text={'Test text'} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

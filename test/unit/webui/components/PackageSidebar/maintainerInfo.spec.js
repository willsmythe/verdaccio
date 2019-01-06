/**
 * MaintainerInfo component
 */

import React from 'react';
import { shallow } from 'enzyme';
import MaintainerInfo from '../../../../../src/webui/components/PackageSidebar/modules/Maintainers/MaintainerInfo/index';

console.error = jest.fn();

describe('<PackageSidebar /> : <Maintainers /> <MaintainerInfo />', () => {
  test('should throw error for required props', () => {
    shallow(<MaintainerInfo />);
    expect(console.error).toHaveBeenCalled();
  });

  test('should load the component and match with snapshot', () => {
    const wrapper = shallow(<MaintainerInfo avatar={'http://xyz.com/profile.jpg'} name={'test'} title={'test-title'} />);
    expect(wrapper.find('.maintainer').prop('title')).toEqual('test');
    expect(wrapper.find('img').prop('src')).toEqual(
      'http://xyz.com/profile.jpg'
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});

/**
 * PackageDetail component
 */
import React from 'react';
import { shallow } from 'enzyme';
import PackageDetail from '../../../../src/webui/components/PackageDetail/index';
import Readme from '../../../../src/webui/components/Readme/index';
import {WEB_TITLE} from '../../../../src/lib/constants';

console.error = jest.fn();

describe('<PackageDetail /> component', () => {
  test('should give error for required props', () => {
    shallow(<PackageDetail />);
    expect(console.error).toHaveBeenCalled();
  });

  test('should load the component', () => {
    const wrapper = shallow(<PackageDetail packageName={WEB_TITLE} readMe={'Test readme'} />);
    expect(wrapper.find('h1').text()).toEqual(WEB_TITLE);
    expect(
      wrapper
        .find(Readme)
        .dive()
        .html()
    ).toEqual('<div class="markdown-body">Test readme</div>');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

/**
 * Infos component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Infos from '../../../../../src/webui/components/PackageSidebar/modules/Infos/index';

describe('<PackageSidebar /> : <Infos />', () => {
  test('should load the component without props', () => {
    const wrapper = shallow(<Infos />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should load the Info component with props', () => {
    const wrapper = shallow(<Infos homepage={'https://www.verdaccio.org'} license={'MIT'} repository={'https://github.com/verdaccio/verdaccio'} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should load the Info component with homepage only', () => {
    const wrapper = shallow(<Infos homepage={'https://www.verdaccio.org'} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should load the Info component with license only', () => {
    const wrapper = shallow(<Infos license={'MIT'} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should load the Info component with repository only', () => {
    const wrapper = shallow(<Infos repository={'https://github.com/verdaccio/verdaccio'} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

/**
 * @prettier
 * @flow
 */

import React from 'react';
import { mount } from 'enzyme';

import LoginModal from '../../../../src/webui/components/Login';

const eventUsername = {
  target: {
    value: 'xyz',
  },
};

const eventPassword = {
  target: {
    value: '1234',
  },
};

const event = {
  preventDefault: jest.fn(),
};

describe('<LoginModal />', () => {
  test('should load the component in default state', () => {
    const wrapper = mount(<LoginModal />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should load the component with props', () => {
    const wrapper = mount(
      <LoginModal
        error={{
          type: 'error',
          title: 'Error Title',
          description: 'Error Description',
        }}
        onCancel={jest.fn()}
        visibility={true}
      />
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('onCancel: should close the login modal', () => {
    const onCancel = jest.fn();
    const wrapper = mount(
      <LoginModal
        error={{
          type: 'error',
          title: 'Error Title',
          description: 'Error Description',
        }}
        onCancel={onCancel}
        visibility={true}
      />
    );
    wrapper.find('button[id="login--form-cancel"]').simulate('click');
    expect(onCancel).toHaveBeenCalled();
  });

  test('setCredentials - should set username and password in state', () => {
    const wrapper = mount(<LoginModal visibility={true} />);
    const { setCredentials } = wrapper.instance();

    expect(setCredentials('username', eventUsername)).toBeUndefined();
    expect(wrapper.state('form').username.value).toEqual('xyz');

    expect(setCredentials('password', eventPassword)).toBeUndefined();
    expect(wrapper.state('form').password.value).toEqual('1234');
  });

  test('validateCredentials: should validate credentials', async () => {
    const wrapper = mount(<LoginModal onSubmit={jest.fn()} visibility={true} />);
    const instance = wrapper.instance();

    instance.submitCredentials = jest.fn();
    const { validateCredentials, setCredentials, submitCredentials } = instance;

    expect(setCredentials('username', eventUsername)).toBeUndefined();
    expect(wrapper.state('form').username.value).toEqual('xyz');

    expect(setCredentials('password', eventPassword)).toBeUndefined();
    expect(wrapper.state('form').password.value).toEqual('1234');

    validateCredentials(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(wrapper.state('form').username.pristine).toEqual(false);
    expect(wrapper.state('form').password.pristine).toEqual(false);

    expect(submitCredentials).toHaveBeenCalledTimes(1);
  });

  test('submitCredentials: should submit credentials', async () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<LoginModal onSubmit={onSubmit} />);
    const { setCredentials, submitCredentials } = wrapper.instance();
    expect(setCredentials('username', eventUsername)).toBeUndefined();
    expect(wrapper.state('form').username.value).toEqual('xyz');

    expect(setCredentials('password', eventPassword)).toBeUndefined();
    expect(wrapper.state('form').password.value).toEqual('1234');

    await submitCredentials();
    expect(onSubmit).toHaveBeenCalledWith('xyz', '1234');
    expect(wrapper.state('form').username.value).toEqual('');
    expect(wrapper.state('form').username.pristine).toEqual(true);
    expect(wrapper.state('form').password.value).toEqual('');
    expect(wrapper.state('form').password.pristine).toEqual(true);
  });
});

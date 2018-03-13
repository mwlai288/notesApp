import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import PrivateHeader from './PrivateHeader';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('Login', function() {
    it('should show error messages', function() {
      const error = 'This is not working';
      const wrapper = shallow(<Login loginWithPassword={() => {}} />).dive();

      wrapper.setState({ error });
      expect(wrapper.find('p').text()).toBe(error);

      wrapper.setState({ error: '' });
      expect(wrapper.find('p').length).toBe(0);
    });

    it('should call loginWithPassword with the form data', function() {
      const email = 'will@test.com';
      const password = 'password123';
      const spy = expect.createSpy;
      // spy(email, password)
      const wrapper = mount(<Login />);
      wrapper.ref('email').node.value = email;
      wrapper.ref('password').node.value = password;
      wrapper.find('form').simulate('submit');

      expect(spy.calls[0].arguments[0]).toEqual({ email });
    });

    it('should set loginWithPassword callback error', function() {});
  });
}

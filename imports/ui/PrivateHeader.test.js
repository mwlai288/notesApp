import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import PrivateHeader from './PrivateHeader';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('PrivateHeader', function() {
    it('should set button text to logout', function() {
      const wrapper = mount(<PrivateHeader title="Test title" />);
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('should use title prop as h1 text', function() {
      const title = 'Test title here';
      const wrapper = mount(<PrivateHeader title={title} />);
      const actualTitle = wrapper.find('h1').text();

      expect(actualTitle).toBe(title);
    });

    it('should call handleLogout on click', function() {
      const spy = expect.createSpy();
      const wrapper = mount(<PrivateHeader />);
      spy(this.logOut);
      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
}

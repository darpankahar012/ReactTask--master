import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import React from 'react';
import Login from './login';

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe('Login Component', () => {
  it('should render properly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an email input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });

  it('should render an firstname input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="firstname"]').exists()).toBe(true);
  });

  it('should render an lastname input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="lastname"]').exists()).toBe(true);
  });

  it('should render a password input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
  });

  it('should render a submit button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[name="submit"]').exists()).toBe(true);
  });

  it('the default value for both fields should be empty', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').prop('value')).toBe('');
    expect(wrapper.find('input[name="firstname"]').prop('value')).toBe('');
    expect(wrapper.find('input[name="lastname"]').prop('value')).toBe('');
    expect(wrapper.find('input[name="password"]').prop('value')).toBe('');
  });

  it('on change of value in the field, the state of that field in the component should be updated', () => {
    const wrapper = shallow(<Login />);

    // if the simulated event value and the field value is same then state is updating on event trigger

    wrapper.find('input[name="email"]').simulate('change', {
      target: {
        value: 'email@id.com',
      },
    });
    expect(wrapper.find('input[name="email"]').prop('value')).toBe(
      'email@id.com'
    );



    wrapper.find('input[name="firstname"]').simulate('change', {
      target: {
        value: 'email@id.com',
      },
    });
    expect(wrapper.find('input[name="firstname"]').prop('value')).toBe(
      'email@id.com'
    );



    wrapper.find('input[name="lastname"]').simulate('change', {
      target: {
        value: 'email@id.com',
      },
    });
    expect(wrapper.find('input[name="lastname"]').prop('value')).toBe(
      'email@id.com'
    );



    wrapper.find('input[name="password"]').simulate('change', {
      target: {
        value: 'sometext',
      },
    });
    expect(wrapper.find('input[name="password"]').prop('value')).toBe(
      'sometext'
    );
  });

  // it('on submitting, a submit handler function should be triggered on click event', () => {
  //   const fn = jest.fn();
  //   const wrapper = mount(<Login onSubmit={fn} />);
  //   wrapper.find('button[name="submit"]').simulate('click');
  //   expect(fn).toHaveBeenCalled();
  // });
});

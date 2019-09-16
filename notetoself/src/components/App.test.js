import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, shallow } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  let app = mount(<App />);

  it('render the App title', () => {
    // console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self');
  });

  it('renders the clear button', () => {
    // access index element 1 within array
    expect(
      app
        .find('button')
        .at(1)
        .text()
    ).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    it('creates the Form component', () => {
      // finds Form control component to be exist
      expect(app.find('Form').exists()).toBe(true);
    });

    it('renders a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('renders a submit button', () => {
      expect(
        app
          .find('button')
          .at(0)
          .text()
      ).toEqual('Submit');
    });
  });
});

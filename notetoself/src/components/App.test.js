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

  describe('when creating a new note', () => {
    let textNote = 'test note';
    //beforeEach will fire before, simulate onChange(), pass in target value of updated state value
    beforeEach(async () => {
      app.find('FormControl').simulate('change', {
        target: { value: textNote }
      });
    });
    it('update the text in state', () => {
      expect(app.state().text).toEqual(textNote);
    });

    //simulate onClick submit button
    describe('and submitting the new note', () => {
      beforeEach(() => {
        app
          .find('button')
          .at(0)
          .simulate('click');
      });

      afterEach(() => {
        app
          .find('button')
          .at(1)
          .simulate('click');
      });

      it('adds the new note to state', () => {
        // console.log(app.state())
        // { text: 'test note', notes: [ { text: 'test note' } ] }
        expect(app.state().notes[0].text).toEqual(textNote);
      });

      //check componentDidMount
      describe('and remounting the component', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />);
        });

        it('reads the stored note cookies', () => {
          // console.log(app2.state());
          expect(app2.state().notes).toEqual([{ text: textNote }]);
        });
      });

      describe('and clicking the clear button', () => {
        beforeEach(() => {
          app
            .find('button')
            .at(1)
            .simulate('click');
        });

        it('clears all notes in state', () => {
          expect(app.state().notes).toEqual([]);
        });
      });
    });
  });
});

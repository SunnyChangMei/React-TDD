import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, shallow } from 'enzyme';
import Note from './Note';

// declared global variable to test all cases
const props = { note: { text: 'test note' } };

configure({ adapter: new Adapter() });
describe('Note', () => {
  // user spread operator for props
  let note = mount(<Note {...props} />);
  it('reader the note text', () => {
    console.log(note.debug());
    // always want to test props.note.text
    expect(note.find('p').text()).toEqual(props.note.text);
  });
});

import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      notes: []
    };
  }

  submit() {
    const { notes, text } = this.state;
    notes.push({ text });
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <h2>Note to Self</h2>
        <Form inline>
          <FormControl
            onChange={e => this.setState({ text: e.target.value })}
          />
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {this.state.notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
    );
  }
}

export default App;

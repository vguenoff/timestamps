import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class AddNoteForm extends Component {
  constructor() {
    super();
    this.createNote = this.createNote.bind(this);
  }
  createNote(event) {
    // preventing the refresh
    event.preventDefault();
    // taking values from the input and creating the note
    const note = {
      timestamp: Date(),
      title: this.title.value,
      content: this.content.value
    };
    // sending to the App state
    this.props.addNote(note);
    this.noteForm.reset();
  }
  render() {
    return (
      <form ref={input => this.noteForm = input} className="AddNoteForm" onSubmit={this.createNote}>
        <input ref={input => this.title = input} type="text" placeholder="Title" required />
        <Textarea ref={input => this.content = input} type="text" placeholder="Take a note..." required />
        <button>Add +</button>
      </form>
    );
  }
}

export default AddNoteForm;

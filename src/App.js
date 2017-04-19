import React, { Component } from 'react';

import Header from './components/Header';
import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    // bind this to methods
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    // state
    this.state = {
      notes: {}
    };
  }
  // method passed as props on AddNoteForm
  addNote(note) {
    // update the state
    // taking a copy of the state with the ...spread operator
    const notes = { ...this.state.notes };
    // stamp is unique number
    const stamp = Date.now();
    notes[`note-${stamp}`] = note;
    // set the state
    this.setState({ notes });
  }
  updateNote(key, updatedNote) {
    const notes = { ...this.state.notes };
    notes[key] = updatedNote;
    this.setState({ notes });
  }
  removeNote(note) {
    const notes = { ...this.state.notes };
    delete notes[note];
    this.setState({ notes });
  }
  render() {
    return (
      <div className="App">
        <Header title="Timestamps" />
        <AddNoteForm addNote={this.addNote} />
        <NoteList
          notes={this.state.notes}
          updateNote={this.updateNote}
          removeNote={this.removeNote}
        />
      </div>
    );
  }
}
export default App;

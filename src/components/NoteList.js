import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Textarea from 'react-textarea-autosize';

class NoteList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }
  handleChange(e, key) {
    const note = this.props.notes[key];
    // take a copy of that note and update it with the new data
    const updatedNote = {
      ...note,
      [e.target.name]: e.target.value
    };
    this.props.updateNote(key, updatedNote);
  }
  renderNotes(key) {
    const note = this.props.notes[key];
    return (
      <form className="NoteList" key={key}>
        <button
          onClick={e => this.props.removeNote(e, key)}
        >X</button>
        <p>{note.timestamp}</p>
        <Textarea
          className="title"
          name="title"
          value={note.title}
          onChange={e => this.handleChange(e, key)}
        />
        <Textarea
          name="content"
          value={note.content}
          onChange={e => this.handleChange(e, key)}
        />
      </form>
    );
  }
  render() {
    return (
      <div className="NoteList">
        {Object.keys(this.props.notes).map(this.renderNotes).reverse()}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.object,
  removeNote: PropTypes.func,
  updateNote: PropTypes.func,
};

export default NoteList;

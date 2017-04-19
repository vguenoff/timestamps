import React, { Component } from 'react';

class Note extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, key) {
    const note = this.props.notes[key];
    console.log(e.target.value);
    // take a copy of that note and update it with the new data
    const updatedNote = {
      ...note,
      [e.target.name]: e.target.defaultValue
    };
    this.props.updateNote(key, updatedNote);
  }
  render(key) {
    const { details, index } = this.props;
    return (
      <div className="Note" key={key}>
        <p>{details.timestamp}</p>
        <input
          value={details.title}
          onChange={e => this.handleChange(e, key)}
        />
        <textarea
          value={details.content}
          onChange={e => this.handleChange(e, key)}
        />
        <button
          onClick={() => this.props.removeNote(index)}
        >Del</button>
      </div>
    );
  }
}

export default Note;

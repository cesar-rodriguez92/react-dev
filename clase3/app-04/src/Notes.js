import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './reducers/notes';

const renderNoteItem = (item, index) => (
  <li key={index}> {item.text}</li>
);

const Notes = (props) => (
  <div>
    <button onClick={() => props.dispatch('-->' + addNote(Date.now()))}>Agregar2</button>
    <ul>
      {props.notes.map(renderNoteItem)}
    </ul>
  </div>
);

const mapStateToProps = state => (
  {
    notes: state.notes
  }
);

export default connect(mapStateToProps)(Notes);

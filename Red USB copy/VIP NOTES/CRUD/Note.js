import React from "react";
import Form1 from "./Form1";
import { addNote } from "../actions/noteActions";
import { connect } from "react-redux";
import NoteList from "./NoteList";
import { withRouter } from "react-router-dom";

const Note = props => {
  return (
    <div>
      <Form
        onSubmit={note => {
          props.addNote(note);
          props.history.push("/");
        }}
        placeholder="Add Note"
        btnType="Add Note"
      />
      <NoteList />
    </div>
  );
};
const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(
  mapStateToProps,
  { addNote }
)(withRouter(Note));

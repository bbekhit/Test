import React from "react";
import { editNote } from "../actions/noteActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Form from "./Form";

const EditNote = props => {
  return (
    <div>
      <Form
        note={props.note}
        btnType="Edit Note"
        onSubmit={note => {
          props.editNote(note, props.note.id);
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  note: state.notes.notes.find(note => note.id === props.match.params.id)
});
export default connect(
  mapStateToProps,
  { editNote }
)(withRouter(EditNote));

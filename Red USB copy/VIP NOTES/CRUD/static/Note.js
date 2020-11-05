import React, { Component } from "react";
import * as actions from "../actions/noteActions";
import { connect } from "react-redux";
import NoteList from "./NoteList";
import uuid from "uuid";

class Note extends Component {
  state = {
    note: "",
    color: 0
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { note, color } = this.state;
    const newNote = {
      note,
      id: uuid(),
      color
    };
    this.props.addNote(newNote);
    //15 is the length of colors array
    this.setState({ note: "", color: Math.floor(Math.random() * 15) });
  };

  render() {
    return (
      <div className="main-wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <input
              name="note"
              placeholder="Add Note"
              value={this.state.note}
              onChange={this.onChange}
            />
            <button className="btn">Add Note</button>
          </div>
        </form>
        {this.props.notes.notes.length > 0 ? (
          <div className="notes-wrapper">
            <NoteList />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(
  mapStateToProps,
  actions
)(Note);

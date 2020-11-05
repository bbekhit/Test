import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/noteActions";

class NoteList extends Component {
  onDeleteClick = id => {
    this.props.deleteNote(id);
  };
  componentDidMount() {
    this.props.getNotes();
  }
  renderNotes() {
    return (
      <div>
        {this.props.notes.notes.map((item, i) => (
          <div
            style={{
              background: `${item.color}`
            }}
            key={i}
            className="list-item-wrapper"
          >
            <div>{item.title}</div>
            <div style={{ cursor: "pointer" }}>
              <Link style={{ color: "white" }} to={`/edit/${item.id}`}>
                <i className="fa fa-edit" style={{ marginRight: "10px" }} />
              </Link>
              <i
                className="fa fa-trash"
                onClick={this.onDeleteClick.bind(this, item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(
  mapStateToProps,
  actions
)(NoteList);

import React, { Component } from "react";
import * as actions from "../actions/noteActions";
import { connect } from "react-redux";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      lastNote: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getNote(id);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // const { note } = nextProps.notes;
    // const color = nextProps.notes.note.color;
    if (prevState.lastNote !== nextProps.notes.note) {
      return {
        note: nextProps.notes.note,
        lastNote: nextProps.notes.note
      };
    }
    return {};
  }
  onChange = e => {
    // const obj = {};
    // obj[e.target.getAttribute("name")] = e.target.value;
    const note = this.state.note;
    note[e.target.name] = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      note: {
        // ...prevState.note,
        ...note
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { note, color } = this.state.note;
    const { id } = this.props.match.params;
    const newData = {
      id,
      note,
      color
    };
    console.log(newData);
    this.props.editNote(newData);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="main-wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <input
              name="note"
              type="text"
              placeholder="Add Note"
              value={this.state.note.note || ""}
              onChange={this.onChange}
            />
            <button className="btn">Update Note</button>
          </div>
        </form>
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
)(EditNote);

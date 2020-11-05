// import React, { Component } from "react";
// import uuid from "uuid";
// import { withRouter } from "react-router-dom";

// const colors = [
//   "green",
//   "blue",
//   "pink",
//   "yellow",
//   "lightgreen",
//   "skyblue",
//   "red",
//   "grey",
//   "lightblue",
//   "lightgrey",
//   "lightgreen",
//   "aqua",
//   "aquamarine",
//   "lightpink",
//   "lightsalmon"
// ];

// class Form1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: this.props.title || "",
//       color: ""
//     };
//   }

//   onChange = e => {
//     this.setState({
//       title: e.target.value
//     });
//   };
//   onSubmit = e => {
//     e.preventDefault();
//     const { title } = this.state;
//     const newNote = {
//       title,
//       id: this.props.id ? this.props.id : uuid(),
//       color: this.props.color
//         ? this.props.color
//         : colors[Math.floor(Math.random() * colors.length)]
//     };
//     this.props.myAction(newNote);
//     this.setState({
//       title: ""
//     });
//     this.props.history.push("/");
//   };
//   render() {
//     const { placeholder, btnType } = this.props;
//     return (
//       <div className="main-wrapper">
//         <form onSubmit={this.onSubmit}>
//           <div className="input-wrapper">
//             <input
//               placeholder={placeholder}
//               value={this.state.title}
//               onChange={this.onChange}
//             />
//             <button className="btn">{btnType}</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default withRouter(Form1);

import React, { Component } from "react";
import uuid from "uuid";
const colors = [
  "green",
  "blue",
  "pink",
  "yellow",
  "lightgreen",
  "skyblue",
  "red",
  "grey",
  "lightblue",
  "lightgrey",
  "lightgreen",
  "aqua",
  "aquamarine",
  "lightpink",
  "lightsalmon"
];
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.note ? props.note.title : "",
      id: props.note ? props.note.id : undefined,
      color: props.note ? props.note.color : ""
    };
  }
  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  onSubmit = e => {
    const { title, id, color } = this.state;
    e.preventDefault();
    this.props.onSubmit({
      title,
      color: this.state.color
        ? this.state.color
        : colors[Math.floor(Math.random() * colors.length)],
      id: this.state.id ? this.state.id : uuid()
    });
    this.setState({ title: "" });
  };
  render() {
    return (
      <div className="main-wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Add Note"
              autoFocus
              value={this.state.title}
              onChange={this.onChange}
            />
            <button className="btn">{this.props.btnType}</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form1;

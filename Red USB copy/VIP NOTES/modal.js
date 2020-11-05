import React, { Component } from "react";
import Lightbox from "./Lightbox";
import phone from "../images/phone.jpg";

export default class Image extends Component {
  state = {
    isLightboxOpen: false
  };
  onClick = () => {
    this.setState({ isLightboxOpen: true });
  };
  onClose = () => {
    this.setState({ isLightboxOpen: false });
  };
  render() {
    return (
      <div>
        <div onClick={this.onClick}>
          <img src={phone} />
        </div>
        <div>
          <Lightbox
            isLightboxOpen={this.state.isLightboxOpen}
            onClose={() => this.onClose()}
          >
            <img src={phone} />
          </Lightbox>
        </div>
      </div>
    );
  }
}
// ************************************************************************************
import React from "react";

const Lightbox = props => {
  if (props.isLightboxOpen === false) return null;
  return (
    <div>
      <div className="lightbox">{props.children}</div>
      <div className="backdrop" onClick={props.onClose} />
    </div>
  );
};

export default Lightbox;

// ***************************************************************************************

// .lightbox {
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 9999;
//   position: absolute;
// }

// .backdrop {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   z-index: 9998;
// }

// img {
//   display: block;
//   height: 400px;
//   width: 400px;
//   margin: 150px auto;
// }

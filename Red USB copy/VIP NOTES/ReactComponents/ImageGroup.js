import React from "react";
import img1 from "../assets/images/mobil-phone-7.jpg";
import img2 from "../assets/images/mobil-phone-6.jpg";
import img3 from "../assets/images/mobil-phone-5.jpg";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";

class ImageGroup extends React.Component {
  state = {
    slides: [img1, img2, img3]
  };
  render() {
    return (
      <div>
        <div className="imageWrapper">
          <img
            src={img1}
            className="imgOne"
            onClick={() =>
              this.props.openModal("SlideModal", {
                slides: this.state.slides,
                open: true
              })
            }
          />
          <img src={img2} className="imgTwo" />
          <img src={img3} className="imgThree" />
        </div>
        <div style={{ height: "2000px", background: "lightgrey" }}>Hello</div>
      </div>
    );
  }
}

export default connect(
  null,
  { openModal }
)(ImageGroup);

// .imageWrapper {
//   height: 350px;
//   width: 250px;
//   margin: 50px auto;
//   border: 3px solid black;
//   position: relative;
//   overflow: hidden;
//   .imgOne {
//     width: 100%;
//     height: 50%;
//   }
//   .imgTwo {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 50%;
//     height: 50%;
//   }
//   .imgThree {
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     width: 50%;
//     height: 50%;
//   }
// }

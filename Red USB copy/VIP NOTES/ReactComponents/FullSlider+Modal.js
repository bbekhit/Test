// ********* begin of the slider ***********

import React, { Component } from "react";
import img1 from "../assets/images/mobile-phone-1.jpg";
import img2 from "../assets/images/mobil-phone-2.jpg";
import img3 from "../assets/images/mobil-phone-3.jpg";
import img4 from "../assets/images/mobil-phone-4.jpg";
import img5 from "../assets/images/mobil-phone-6.jpg";
import img6 from "../assets/images/mobil-phone-7.jpg";

class FullSlider extends Component {
  state = {
    // slides: [img1, img2, img3, img4, img5, img6],
    slideIndex: 0
  };

  prevSlide = () => {
    // const { slides, slideIndex } = this.state;
    const { slideIndex } = this.state;
    const { slides } = this.props;
    if (slideIndex === 0) {
      return;
    }
    this.setState({ slideIndex: slideIndex - 1 });
  };
  nextSlide = () => {
    // const { slides, slideIndex } = this.state;
    const { slideIndex } = this.state;
    const { slides } = this.props;
    if (slideIndex === slides.length - 1) {
      return this.setState({
        slideIndex: 0
      });
    }
    return this.setState({ slideIndex: slideIndex + 1 });
  };
  renderDot = () =>
    // this.state.slides
    this.props.slides.map((item, i) => (
      <div>
        <span
          key={i}
          className={`dot ${i === this.state.slideIndex ? "active" : ""}`}
          onClick={this.setIndex.bind(this, i)}
        />
      </div>
    ));
  setIndex = index => {
    this.setState({ slideIndex: index });
  };
  render() {
    // const { slides, slideIndex } = this.state;
    const { slideIndex } = this.state;
    const { slides } = this.props;
    return (
      <div className="slide-wrapper ">
        <img src={slides[slideIndex]} className="fadein" />
        <div className="counter">{`${slideIndex + 1} / ${slides.length}`}</div>
        <div className="arrow left-arrow" onClick={this.prevSlide}>
          &#10094;
        </div>
        <div className="arrow right-arrow" onClick={this.nextSlide}>
          &#10095;
        </div>
        <div className="dotWrapper">{this.renderDot()}</div>
      </div>
    );
  }
}

export default FullSlider;

// .slide-wrapper {
//   // width: 100%;
//   // height: 85vh;
//   // margin: 100px auto; when using the slider on it's own
//   position: relative;

//   img {
//     max-width: 100%;
//     min-width: 100%;
//     max-height: 100%;
//     z-index: 1;
//     animation: fade 1.5s ease;
//   }

//   .counter {
//     position: absolute;
//     left: 15px;
//     top: 15px;
//     background: black;
//     color: white;
//     font-size: 15px;
//     padding: 7px;
//     border-radius: 3px;
//   }
//   .arrow {
//     position: absolute;
//     top: 50%;
//     color: white;
//     z-index: 2;
//     cursor: pointer;
//     width: auto;
//     margin-top: -22px;
//     padding: 16px;
//     color: white;
//     font-weight: bold;
//     font-size: 18px;
//     transition: 0.6s ease;
//     border-radius: 0 3px 3px 0;
//     &:hover {
//       background-color: rgba(0, 0, 0, 0.8);
//     }
//   }
//   & .right-arrow {
//     right: 0;
//     border-radius: 3px 0 0 3px;
//   }
//   & .left-arrow & {
//     left: 0;
//   }
//   .dotWrapper {
//     display: flex;
//     position: absolute;
//     bottom: 15px;
//     left: 50%;
//     transform: translateX(-50%);
//     .dot {
//       cursor: pointer;
//       height: 15px;
//       width: 15px;
//       margin: 0 2px;
//       background-color: #bbb;
//       border-radius: 50%;
//       display: inline-block;
//       transition: background-color 0.6s ease;
//       &:hover {
//         background-color: #717171;
//       }
//     }
//     .active {
//       background-color: #717171;
//       &:hover {
//         background-color: #717171;
//       }
//     }
//   }
// }

// @-webkit-keyframes fade {
//   from {
//     opacity: 0.2;
//   }
//   to {
//     opacity: 1;
//   }
// }

// @keyframes fade {
//   from {
//     opacity: 0.2;
//   }
//   to {
//     opacity: 1;
//   }
// }

// @media only screen and (max-width: 300px) {
//   .arrow {
//     font-size: 11px;
//   }
// }
// ********************End of the slider***************************

// ***********************Begin of the modal*****************************
import React from "react";
import Slider from "../layout/Slider/Slider";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import FullSlider from "../../playground/FullSlider";
import img1 from "../../assets/images/mobile-phone-1.jpg";
import img2 from "../../assets/images/mobil-phone-2.jpg";
import img3 from "../../assets/images/mobil-phone-3.jpg";
import img4 from "../../assets/images/mobil-phone-4.jpg";
import img5 from "../../assets/images/mobil-phone-6.jpg";
import img6 from "../../assets/images/mobil-phone-7.jpg";

class SlideModal extends React.Component {
  componentDidMount() {
    if (this.props.open) {
      document.body.style.overflow = "hidden";
    }
  }
  componentDidMount() {
    document.body.classList.add = "hidden";
  }
  componentWillUnmount() {
    if (this.props.open) {
      document.body.style.overflow = "auto";
    }
  }
  modalClick = e => {
    e.stopPropagation();
  };
  render() {
    const { slides, closeModal } = this.props;
    return (
      // className="modalWrapper"
      <div className="modalWrapper" onClick={() => closeModal()}>
        <div className="close" onClick={() => closeModal()}>
          &times;
        </div>
        <div className="slider-container" onClick={e => this.modalClick(e)}>
          {/* <Slider slides={slides} className="slider" /> */}
          <FullSlider slides={slides} className="slider" />
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { closeModal }
)(SlideModal);

// .modalWrapper {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.7);
//   z-index: 1;
//   .close {
//     position: absolute;
//     top: 35px;
//     right: 35px;
//     color: #f1f1f1;
//     font-size: 40px;
//     font-weight: bold;
//     transition: 0.3s;
//     cursor: pointer;
//     z-index: 2;
//   }

//   @media only screen and(max-width:690px) {
//     .slider-container {
//       max-width: 90vw;
//     }
//   }
// }
// ***********************End of the modal*****************************


// ***********************Begin of the ImageGroup*****************************
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
//   margin: 100px auto;
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
// ***********************End of the ImageGroup*****************************
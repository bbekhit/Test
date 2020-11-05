import React, { Component } from "react";
import img1 from "../assets/images/mobile-phone-1.jpg";
import img2 from "../assets/images/mobil-phone-2.jpg";
import img3 from "../assets/images/mobil-phone-3.jpg";
import img4 from "../assets/images/mobil-phone-4.jpg";
import img5 from "../assets/images/mobil-phone-6.jpg";
import img6 from "../assets/images/mobil-phone-7.jpg";

class FullSlider extends Component {
  state = {
    slides: [img1, img2, img3, img4, img5, img6],
    slideIndex: 0
  };

  prevSlide = () => {
    if (this.state.slideIndex === 0) {
      return;
    }
    this.setState({ slideIndex: this.state.slideIndex - 1 });
  };
  nextSlide = () => {
    if (this.state.slideIndex === this.state.slides.length - 1) {
      return this.setState({
        slideIndex: 0
      });
    }
    return this.setState({ slideIndex: this.state.slideIndex + 1 });
  };
  renderDot = () =>
    this.state.slides.map((item, i) => (
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
    const { slides, slideIndex } = this.state;
    return (
      <div className="slide-wrapper ">
        <img src={slides[slideIndex]} className="fadein" />
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
//   width: 100%;
//   height: 85vh;
//   position: relative;
//   margin: 100px auto;
//   img {
//     max-width: 100%;
//     min-width: 100%;
//     max-height: 100%;
//     z-index: 1;
//     animation: fade 1.5s ease;
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

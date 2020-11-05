import React, { Component } from "react";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import img1 from "../../../assets/images/mobil-phone-4.jpg";
import img2 from "../../../assets/images/mobil-phone-5.jpg";
import img3 from "../../../assets/images/mobil-phone-6.jpg";

class Slider extends Component {
  state = {
    slides: [img1, img2, img3],
    slideCount: 0
  };
  renderDot = () =>
    this.state.slides.map((item, i) => (
      <div>
        <span
          key={i}
          className={`dot ${i === this.state.slideCount ? "active" : ""}`}
          onClick={this.setIndex.bind(this, i)}
        />
      </div>
    ));
  setIndex = index => {
    this.setState({ slideCount: index });
  };

  nextImage = () => {
    this.setState({ slideCount: this.state.slideCount + 1 });
  };

  previousImage = () => {
    this.setState({ slideCount: this.state.slideCount - 1 });
  };
  render() {
    return (
      <div className="wrapper">
        {/* <div className="imageWrapper"> */}
        {this.state.slides.map((item, i) => {
          if (this.state.slides.indexOf(item) === this.state.slideCount) {
            return (
              <div
                key={i}
                className="bgImage"
                style={{ backgroundImage: `url(${item})` }}
              >
                <div className="prev">
                  {this.state.slideCount !== 0 ? (
                    <PrevArrow previousImage={this.previousImage} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="next">
                  {this.state.slideCount !== this.state.slides.length - 1 ? (
                    <NextArrow nextImage={this.nextImage} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="numberText">{`${i + 1}/${
                  this.state.slides.length
                }`}</div>
              </div>
            );
          }
          return null;
        })}
        <div className="dotWrapper">{this.renderDot()}</div>
        {/* </div> */}
      </div>
    );
  }
}

export default Slider;

import React from "react";

export default function NextArrow(props) {
  return (
    <div>
      <div
        onClick={props.nextImage}
        style={{ fontSize: "2em", marginLeft: "12px" }}
      >
        <i className="fa fa-angle-right fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
}

import React from "react";

export default function PrevArrow(props) {
  return (
    <div>
      <div
        onClick={props.previousImage}
        style={{ fontSize: "2em", marginRight: "12px" }}
      >
        <i className="fa fa-angle-left fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
}

// .wrapper {
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   .bgImage {
//     width: 500px;
//     height: 500px;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     position: relative;
//     .prev,
//     .next {
//       cursor: pointer;
//       position: absolute;
//       top: 50%;
//       width: auto;
//       padding: 16px;
//       margin-top: -22px;
//       color: green;
//       font-weight: bold;
//       font-size: 18px;
//       transition: 0.6s ease;
//       border-radius: 0 3px 3px 0;
//       user-select: none;
//       &:hover {
//         color: white;
//       }
//     }
//     .next {
//       right: 0;
//       border-radius: 3px 0 0 3px;
//     }
//     .numberText {
//       color: #f2f2f2;
//       background: black;
//       font-size: 12px;
//       padding: 8px 12px;
//       position: absolute;
//       margin: 7px;
//       top: 10;
//       left: 10;
//     }
//   }
// }

// .dotWrapper {
//   display: flex;
//   margin: 5px auto;
//   .dot {
//     cursor: pointer;
//     height: 15px;
//     width: 15px;
//     margin: 0 2px;
//     background-color: #bbb;
//     border-radius: 50%;
//     display: inline-block;
//     transition: background-color 0.6s ease;
//     &:hover {
//       background-color: #717171;
//     }
//   }
//   .active {
//     background-color: #717171;
//     &:hover {
//       background-color: #717171;
//     }
//   }
// }

// @media only screen and (max-width: 690px) {
//   .wrapper {
//     width: 100%;
//     height: 60vh;
//     margin: 15px 0;
//     .bgImage {
//       margin: 10px auto;
//       width: 300px;
//       height: 200px;
//       position: relative;
//       .prev,
//       .next {
//         position: absolute;
//         top: 50%;
//         width: auto;
//         padding: 12px;
//         font-size: 12px;
//         &:hover {
//           background-color: #717171;
//           cursor: pointer;
//         }
//       }
//     }
//   }
// }

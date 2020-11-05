import React, { Component } from "react";
import img1 from "../assets/images/mobil-phone-4.jpg";
import img2 from "../assets/images/mobil-phone-5.jpg";
import img3 from "../assets/images/mobil-phone-6.jpg";
import Card from "./Card";
import PrevArrow from "../components/layout/Slider/PrevArrow";
import NextArrow from "../components/layout/Slider/NextArrow";

class SliderCard extends Component {
  state = {
    slides: [
      {
        image: img1,
        name: "Boutros",
        title: "Engineer",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img2,
        name: "Michael",
        title: "Awesome Guy",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img3,
        name: "Tony",
        title: "Awesome Guy",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Samah",
        title: "Teacher",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img1,
        name: "Boutros",
        title: "Engineer",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img2,
        name: "Michael",
        title: "Awesome Guy",
        text: "This is a text field and should be filled by your input"
      },
      {
        image: img3,
        name: "Tony",
        title: "Awesome Guy",
        text: "This is a text field and should be filled by your input"
      }
    ],
    slideCount: 0
  };

  nextImage = () => {
    if (this.state.slideCount === this.state.slides.length - 1) {
      return this.setState({
        slideCount: 0
      });
    }
    return this.setState({ slideCount: this.state.slideCount + 1 });
  };

  previousImage = () => {
    if (this.state.slideCount === 0) {
      return;
    }
    this.setState({ slideCount: this.state.slideCount - 1 });
  };
  render() {
    const { slideCount, slides } = this.state;
    return (
      <div>
        <div className="btnsWrapper">
          <PrevArrow className="prev" previousImage={this.previousImage} />
          <NextArrow className="next" nextImage={this.nextImage} />
        </div>
        <div className={`cards-slider active-slide-${slideCount}`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${slideCount * (100 / slides.length)}%)`
            }}
          >
            {slides.map((item, i) => (
              <Card item={item} index={i} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SliderCard;

import React from "react";

export default function Card({ item, index }) {
  return (
    <div>
      <div id={`card-${index}`} className="card">
        <img src={item.image} style={{ width: "100%" }} />
        <h1>{item.name}</h1>
        <p className="price">{item.title}</p>
        <p>{item.text}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

// .card {
//   // border: 3px #f3f3f3 solid;
//   // box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
//   // transition: all 0.3s linear;
//   // cursor: pointer;
//   // background-color: #f3f3f3;
//   // padding: 10px;
//   // max-width: 220px;
//   // text-align: left;
//   // margin: 10px;
//   border: 3px #f3f3f3 solid;
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
//   transition: all 0.3s linear;
//   cursor: pointer;
//   background-color: #f3f3f3;
//   padding: 10px;
//   max-width: 220px;
//   text-align: left;
//   margin: 0 auto;
//   &:hover {
//     background-color: #f3f3f3;
//     border-color: #f3f3f3;
//   }
//   img {
//     max-width: calc(100%);
//     margin: 0 auto;
//     display: block;
//   }

//   .price {
//     margin: 0;
//     padding: 10px 0;
//     font-weight: bold;
//   }
//   button {
//     border: none;
//     outline: 0;
//     padding: 12px;
//     color: white;
//     background-color: #000;
//     text-align: center;
//     cursor: pointer;
//     width: 100%;
//     font-size: 18px;
//     margin-right: 10px;
//     &:hover {
//       opacity: 0.7;
//     }
//   }
// }
// .btnsWrapper {
//   display: flex;
//   width: 100px;
//   justify-content: space-between;
//   margin: 10px auto;
// }

// .cards-slider {
//   position: relative;
//   max-width: 226px;
//   margin: 0 auto;
//   &:after {
//     content: "";
//     display: block;
//     width: 100%;
//     height: 409px;
//     outline: 5px solid #61dafb;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
//   .cards-slider-wrapper {
//     display: flex;
//     position: absolute;
//     transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
//     .card {
//       min-width: 226px;
//       flex: 1;
//       opacity: 0.3;
//       transform: scale(0.8);
//       box-shadow: none;
//       background-color: white;
//       border-color: white;
//       transition: opacity 300ms linear, border-color 300ms linear,
//         background-color 300ms linear,
//         transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
//     }
//   }
// }
// $i: 0;
// @for $i from 0 through 15 {
//   .cards-slider.active-slide-#{$i} #card-#{$i} {
//     opacity: 1;
//     transform: scale(1);
//     background-color: #f3f3f3;
//     border-color: #f3f3f3;
//     .details {
//       opacity: 1;
//     }
//   }
// }

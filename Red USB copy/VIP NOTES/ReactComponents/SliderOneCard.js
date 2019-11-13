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
      }
    ],
    slideCount: 0
  };
  showCards = () => <Card item={this.state.slides[this.state.slideCount]} />;

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
    return (
      <div>
        {this.showCards()}
        <div className="btnsWrapper">
          <PrevArrow className="prev" previousImage={this.previousImage} />
          <NextArrow className="next" nextImage={this.nextImage} />
        </div>
      </div>
    );
  }
}

export default SliderCard;

// .card {
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   max-width: 300px;
//   margin: auto;
//   text-align: center;
//   font-family: arial;
// }

// .price {
//   color: grey;
//   font-size: 22px;
// }

// .card button {
//   border: none;
//   outline: 0;
//   padding: 12px;
//   color: white;
//   background-color: #000;
//   text-align: center;
//   cursor: pointer;
//   width: 100%;
//   font-size: 18px;
//   margin-right: 10px;
// }

// .card button:hover {
//   opacity: 0.7;
// }

// .btnsWrapper {
//   display: flex;
//   width: 100px;
//   justify-content: space-between;
//   margin: 10px auto;
// }
import React from "react";

export default function Card({ item }) {
  return (
    <div>
      <div className="card">
        <img src={item.image} alt="Denim Jeans" style={{ width: "100%" }} />
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

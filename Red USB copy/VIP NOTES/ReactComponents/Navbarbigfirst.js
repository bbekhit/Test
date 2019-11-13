import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  handleClick() {
    const mainNav = document.querySelector(".main-nav");
    return mainNav.classList.toggle("show");
  }

  render() {
    return (
      <div className="navbarWrapper">
        <div className="menuBtn" onClick={this.handleClick}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <div className="logo">Shopy</div>
        <ul className="main-nav">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;


// .navbarWrapper {
//   background-image: linear-gradient(-260deg, $blue-color 0%, #c16ecf 100%);
//   display: flex;
//   height: 75px;
//   padding: 0 15px;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   .logo {
//     color: $dark-color;
//     font-size: 35px;
//   }
//   .menuBtn {
//     display: none;
//   }
//   .main-nav {
//     display: flex;
//     list-style-type: none;
//   }
//   li {
//     font-size: 20px;
//     padding: 12px 15px;
//     &:last-child {
//       padding-right: 0;
//     }
//     .link {
//       text-decoration: none;
//       color: $dark-color;
//     }
//   }
// }

// @media screen and (max-width: 768px) {
//   .navbarWrapper {
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     height: auto;
//     min-height: 70px;
//     .logo {
//       padding-top: 15px;
//     }
//     .menuBtn {
//       display: block;
//       position: absolute;
//       top: 17px;
//       right: 20px;
//       cursor: pointer;
//       .bar1,
//       .bar2,
//       .bar3 {
//         height: 5px;
//         width: 35px;
//         margin: 5px 0;
//         background: $dark-color;
//       }
//     }
//     .main-nav {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       overflow: hidden;
//       max-height: 0;
//       transition: 2.5s ease-in-out;
//       &.show {
//         overflow: hidden;
//         max-height: 500px; /* approximate max height */
//         transition: 2.5s ease-in-out;
//       }
//     }
//   }
// }

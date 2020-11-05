import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isBtnVisible: false
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({ isBtnVisible: !this.state.isBtnVisible });
  };
  render() {
    return (
      <div>
        <div className="navWrapper">
          <div className="brand">Shopy</div>
          <nav>
            <div className="menuBtn" onClick={this.handleClick}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
            <ul
              className={`collapsed ${this.state.isBtnVisible ? "show" : ""}`}
            >
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/">
                About
              </Link>
              <Link className="link" to="/">
                Login
              </Link>
              <Link className="link" to="/">
                Sign up
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;

// .navWrapper {
//   display: flex;
//   height: 75px;
//   padding: 20px;
//   justify-content: space-between;
//   align-items: center;
//   background: transparent;
//   .brand {
//     font-size: 30px;
//     color: black;
//   }
//   nav {
//     display: flex;
//     ul {
//       margin-top: 15px;
//     }
//     .link {
//       margin-right: 15px;
//       &:last-child {
//         margin-right: 0;
//       }
//     }
//     .menuBtn {
//       display: none;
//       .bar1,
//       .bar2,
//       .bar3 {
//         height: 5px;
//         width: 35px;
//         margin: 5px 0;
//         background: black;
//       }
//     }
//   }
// }

// @media only screen and (max-width: 690px) {
//   .navWrapper {
//     height: auto;
//     min-height: 50px;
//     display: block;
//     position: relative;
//     background: rgba(0, 0, 0, 0.7);
//     .brand {
//       position: absolute;
//       top: 11px;
//       left: 50px;
//     }
//     nav {
//       ul.collapsed {
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         overflow: hidden;
//         max-height: 0;
//         transition: 2s;
//         &.show {
//           overflow: hidden;
//           max-height: 500px; /* approximate max height */
//           transition: 2s;
//           margin-top: 10px;
//         }
//       }
//       ul .link {
//         padding: 7px 31px;
//         margin: 0;
//         margin-top: 10px;
//         color: black;
//         &:hover {
//           text-decoration: none;
//         }
//         &:nth-of-type(1) {
//           margin-top: 45px;
//         }
//       }
//       .menuBtn {
//         display: inline-block;
//         position: absolute;
//         top: 17px;
//         right: 50px;
//         cursor: pointer;
//       }
//     }
//   }
// }

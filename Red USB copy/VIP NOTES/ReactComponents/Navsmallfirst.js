import React from "react";

const Navbar1 = () => {
  return (
    <div className="main-nav">
      <div className="logo">Shopy</div>
      <div className="menu-button">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      <div className="nav-links-wrapper show">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
        <ul className="secondary-nav-links">
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;

// .main-nav {
//   padding: 15px;
//   background: $blue-color;
//   .logo {
//     font-size: 35px;
//   }
//   .menu-button {
//     position: absolute;
//     top: 17px;
//     right: 15px;
//     .bar1,
//     .bar2,
//     .bar3 {
//       height: 5px;
//       width: 35px;
//       margin: 5px 0;
//       background: $dark-color;
//     }
//   }
//   .nav-links-wrapper {
//     max-height: 0;
//     overflow: hidden;
//     &.show {
//       max-height: 500px;
//     }
//     ul.nav-links {
//       list-style-type: none;

//       li {
//         font-size: 20px;
//         padding: 12px 15px;
//       }
//     }
//     ul.secondary-nav-links {
//       list-style-type: none;

//       li {
//         font-size: 20px;
//         padding: 12px 15px;
//       }
//     }
//   }
// }

// @media (min-width: 690px) {
//   .main-nav {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     .menu-button {
//       display: none;
//     }

//     ul.nav-links {
//       display: flex;
//     }
//   }
// }

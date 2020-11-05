import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

export default function Landing() {
  return (
    <div>
      <div className="land">
        <Navbar />
        <div className="btns">
          <button className="landingBtn">Sign up</button>
          <button className="landingBtn">Sign In</button>
        </div>
      </div>
      <Slider />
    </div>
  );
}
// .land {
//   background: url("../assets/images/mobil-phone-5.jpg") no-repeat center center
//     fixed;
//   background-size: cover;
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   .btns {
//     display: flex;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     .landingBtn {
//       padding: 10px 16px;
//       margin-right: 10px;
//       background: $yellow-color;
//       color: white;
//       font-size: 25px;
//       border-radius: 8px;
//       outline-color: $yellow-color;
//       white-space: nowrap;
//     }
//   }
// }
// ********************************************************************************

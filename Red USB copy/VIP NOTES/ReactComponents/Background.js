import React from "react";
import img1 from "../assets/images/mobile-phone-1.jpg";

const BackgroundImage = () => {
  return (
    <div>
      <div className="image-container">
        <img src={img1} />
        <div className="buttonWrapper">
          <button>Login</button>
          <button>Sign-up</button>
        </div>
        <div className="overlay">
          <p>This is an overlay</p>
        </div>
      </div>
      <div className="image-container2" style={{ background: `url(${img1})` }}>
        <div className="buttonWrapper">
          <button>Login</button>
          <button>Sign-up</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;

// .image-container {
//   width: 80%;
//   position: relative;
//   margin: 100px auto;
//   border: 2px solid red;
//   img {
//     max-width: 100%;
//     max-height: 100%;
//   }
//   .buttonWrapper {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     z-index: 1;
//     transform: translate(-50%, -50%);
//     display: flex;
//     justify-content: center;
//     flex-wrap: nowrap;
//     button {
//       margin-right: 10px;
//       cursor: pointer;
//       outline: none;
//       font-size: 1.5rem;
//       border: 2px solid #1172c4;
//       border-radius: 22px;
//       padding: 10px 40px;
//       text-transform: uppercase;
//       font-weight: 700;
//       color: #00aeef;
//       border-color: white;
//       background: white;
//       transition: all 0.2s linear;
//       white-space: nowrap;

//       &:hover {
//         color: white;
//         background: #00aeef;
//         border-color: white;
//       }
//     }
//   }
//   .overlay {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     height: 50px;
//     color: white;
//     font-size: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     p {
//       margin-bottom: 0;
//     }
//   }
// }

// @media (max-width: 690px) {
//   .image-container {
//     width: 100%;
//     border: none;
//     .buttonWrapper {
//       max-width: 75%;
//       button {
//         font-size: 0.75rem;
//         padding: 8px 25px;
//         max-width: 45%;
//       }
//     }
//   }
// }

// .image-container2 {
//   width: 100%;
//   position: relative;
//   margin: 130px auto;
//   border: 2px solid red;
//   height: 550px;
//   background-size: cover;
//   background-position: left 50px bottom 150px;
//   background-repeat: no-repeat;
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: center;
//   align-items: center;
//   button {
//     margin-right: 10px;
//     cursor: pointer;
//     outline: none;
//     font-size: 1.5rem;
//     border: 2px solid #1172c4;
//     border-radius: 22px;
//     padding: 10px 40px;
//     text-transform: uppercase;
//     font-weight: 700;
//     color: #00aeef;
//     border-color: white;
//     background: white;
//     transition: all 0.2s linear;
//     white-space: nowrap;

//     &:hover {
//       color: white;
//       background: #00aeef;
//       border-color: white;
//     }
//     .buttonWrapper {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       z-index: 1;
//       transform: translate(-50%, -50%);
//       display: flex;
//       justify-content: center;
//       flex-wrap: nowrap;
//       button {
//         margin-right: 10px;
//         cursor: pointer;
//         outline: none;
//         font-size: 1.5rem;
//         border: 2px solid #1172c4;
//         border-radius: 22px;
//         padding: 10px 40px;
//         text-transform: uppercase;
//         font-weight: 700;
//         color: #00aeef;
//         border-color: white;
//         background: white;
//         transition: all 0.2s linear;
//         white-space: nowrap;

//         &:hover {
//           color: white;
//           background: #00aeef;
//           border-color: white;
//         }
//       }
//     }
//   }
// }
// @media (max-width: 690px) {
//   .image-container2 {
//     border: none;
//     .buttonWrapper {
//       max-width: 75%;
//       button {
//         font-size: 0.75rem;
//         padding: 8px 25px;
//         max-width: 45%;
//       }
//     }
//   }
// }

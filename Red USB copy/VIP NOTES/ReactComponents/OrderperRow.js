import React from "react";

const TestOrder = () => {
  return (
    <div className="wrapper">
      <div className="square one">One text</div>
      <div className="square two">Two image</div>
      <div className="square three">Three text</div>
      <div className="square four">Four image</div>
    </div>
  );
};

export default TestOrder;


// .wrapper {
//   border: 1px solid black;
//   margin-top: 100px;
//   .square {
//     width: 200px;
//     height: 200px;
//     margin: 25px auto;
//     border: 2px solid red;
//   }
// }

// @media (min-width: 690px) {
//   .wrapper {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;

//     .square {
//       flex: 0 1 calc(50% - 1rem);

//       &.three {
//         order: 4;
//       }
//     }
//   }
// }

// @media (min-width: 1000px) {
//   .wrapper {
//     .square {
//       flex: 0 1 calc(25% - 1rem);

//       &.four {
//         order: 4;
//       }
//     }
//   }
// }

export default function Background() {
  return (
    <div className="fill">
      <img src={img} />
      <div className="btns">
        <button className="landingBtn">Hello</button>
        <button className="landingBtn">World</button>
      </div>
      <div className="overlay-text">
        <p>This is an overlay text</p>
      </div>
    </div>
  );
}

// // Background styling
// .fill {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   position: relative;
//   height: 100vh;
//   .btns {
//     display: flex;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);

//     .landingBtn {
//       padding: 16px 25px;
//       margin-right: 10px;
//       background: yellow;
//       font-size: 35px;
//       border-radius: 8px;
//       outline-color: yellow;
//       white-space: nowrap;
//       color: black;
//       outline: none;
//       border: none;
//     }
//   }
//   .fill img {
//     flex-shrink: 0;
//     min-width: 100%;
//     min-height: 100%;
//     z-index: -1;
//   }
//   .overlay-text {
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     color: white;
//     text-align: center;
//     height: 70px;
//     background: rgba(0, 0, 0, 0.5);
//     padding: 15px;
//     opacity: 0;
//     &:hover {
//       opacity: 1;
//     }
//   }
// }
// *****************************************************************************

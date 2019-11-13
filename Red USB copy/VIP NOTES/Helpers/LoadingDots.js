import React from "react";

export default function LoadingDots() {
  return (
    <div className={loadingDots}>
      <div className={first} />
      <div className={second} />
      <div />
    </div>
  );
}

// .loadingDots{
//   font-size:10px;
//   & > div {
//     display:inline-block;
//     width:6px;
//     heigth:6px;
//     border-radius:100%;
//     margin-right: 3px;
//     background:blue;
//     animation:bouncedelay 1.4s infinite ease-in-out both;
//   }
//   .first {animation-delay: -0.32s}
//   .second {animation-delay:-0.16s}
// }

// @keyframes bouncedelay {
//   0%, 80%, 100% {transform: scale(0)}
//   40% {transform:scale(1)}
// }

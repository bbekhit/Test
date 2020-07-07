///
// first way using property btn.onclick in JS
{/* <script> */}
let btn = document.querySelector("#btn")
function clickecBtn(e){
  console.log(e)
  console.log("Clicked")
}
btn.onclick = clickecBtn // i am setting event using = and i only mention function name not clickedBtn()
// </script>

// disadvantages :
// 1- overwrites old events
// 2- to delete btn.onclick = null;

///
// second way using attribute of html element(<button>)
// <button onclick="clickedBtn(event)"></button>

///
// third using eventListener
let fn = function(){
  console.log("Clicked")
  btn.removeEventListener('click', fn)
}
btn.addEventListener('click', fn)


// mouseenter on parent element only, mouseover on both parent and child

// When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

// this (=event.currentTarget) is the <form> element, because the handler runs on it.
// event.target is the actual element inside the form that was clicked.